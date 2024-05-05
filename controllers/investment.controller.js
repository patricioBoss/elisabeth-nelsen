import response from "../apiUtil/reponses";
import Investment from "../models/investment.model";
import Transaction from "../models/transaction.model";
import User from "../models/user.model";
import add from "date-fns/add";
import plans from "../helpers/plans";
import uuidv4 from "../utils/uuidv4";
import getNextPlanId from "../utils/getNextPlanId";
import config from "../config/config";
import sampleMailTemplate from "../helpers/sampleMailTemplate";
import { fCurrency } from "../utils/formatNumber";
import sendMail from "../helpers/sendVerificationMail";

export const getInvestments = async (req, res) => {
  const { _id } = req.profile;
  try {
    const allInvestments = await Investment.find({ userId: _id }).exec();

    return response(res, 200, "success", allInvestments);
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};
export const getAllInvestments = async (req, res) => {
  try {
    const allInvestments = await Investment.find({}).exec();

    return response(res, 200, "success", allInvestments);
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};

export const getPaidInvestments = async (req, res) => {
  const { _id } = req.profile;
  try {
    const allInvestments = await Investment.find({
      userId: _id,
      transactionId: { $exists: true },
    }).lean();

    return response(res, 200, "success", allInvestments);
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};

export const invest = async (req, res) => {
  let invest = new Investment({
    userId: req.profile._id,
    status: "pending",
    ...req.body,
  });
  try {
    const result = await invest.save();
    if (result) {
      response(res, 200, "success", result);
    }
  } catch (err) {
    return response(res, 500, "failure", null);
  }
};
export const updateInvt = async (req, res) => {
  try {
    const invtId = req.query.investmentId;
    const profile = req.profile;
    let loginLink = `https://${config.domain}/login`;

    console.log(req.investment);
    let invest = await Investment.findByIdAndUpdate(invtId, req.body, {
      new: true,
    });
    const message = `${profile.firstName}, your ${
      plans[invest.planId].name
    } investment plan of ${fCurrency(
      invest.capital
    )} is pending and awaiting approval. <br/> All pending investment will be approved within the next 24 hours`;
    let msg = sampleMailTemplate(profile.firstName, loginLink, message);
    const sent = await sendMail(msg, "Investment Update", profile.email);
    return response(res, 200, "success", invest);
  } catch (err) {
    return response(res, 500, "failure", err);
  }
};

export const pauseInvestment = async (req, res) => {
  try {
    const { _id, daysCount } = req.investment;
    // const profile = req.profile;
    let query = req.body;
    console.log(req.investment);
    if (req.body.status === "active") {
      query = {
        ...req.body,
        withDrawalDate: add(new Date(), { days: 5 - daysCount }).toISOString(),
      };
    }
    let invest = await Investment.findByIdAndUpdate(_id, query, {
      new: true,
    });
    return response(res, 200, "success", invest);
  } catch (err) {
    return response(res, 500, "failure", err);
  }
};

export const deleteInvt = async (req, res) => {
  try {
    const invtId = req.investment._id;
    console.log(req.investment);
    switch (req.investment.status) {
      case "active":
        return response(res, 400, "cannot delete active investment", null);
      case "ended":
        return response(res, 400, "this investment has already ended", null);
      default: {
        let invest = await Investment.findByIdAndDelete(invtId);
        return response(res, 200, "deleted successfully", invest);
      }
    }
  } catch (err) {
    return response(res, 500, "failure", null);
  }
};

export const getInvestmentDetail = async (req, res) => {
  const { investmentId } = req.params;
  try {
    const investment = await Investment.findById(investmentId).exec();
    if (investment) {
      return response(res, 200, "success", investment);
    } else {
      return response(res, 404, "not found", null);
    }
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};

export const attachInvestment = async (req, res, next) => {
  const { investmentId } = req.query;
  const { query, params } = req;
  console.log({ query, params });
  try {
    const investment = await Investment.findById(investmentId).lean();
    console.log({ investment, investmentId });
    if (investment) {
      req.investment = investment;
      next();
    } else {
      return response(res, 404, "not found", null);
    }
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};
//admin route, admin middleware will be involved
export const approveInvestment = async (req, res) => {
  const investmentId = req.investment._id;
  const invest = req.investment;
  console.log("this is from approveInvestment", investmentId);
  const profile = req.profile;
  let loginLink = `https://${config.domain}/login`;
  try {
    const session = await req.db.startSession();
    await session.withTransaction(async () => {
      const investment = await Investment.findByIdAndUpdate(
        investmentId,
        {
          approvedDate: Date.now(),
          status: "active",
          withDrawalDate: add(new Date(), { days: 5 }).toISOString(),
        },
        { session, new: true }
      ).exec();

      const message = `${profile.firstName}, your ${
        plans[invest.planId].name
      } investment plan of ${fCurrency(
        invest.capital
      )} has been approved, enjoy daily rio on investment`;
      let msg = sampleMailTemplate(profile.firstName, loginLink, message);

      await sendMail(msg, "Investment Update", profile.email);
      let referUser = await User.findByIdAndUpdate(
        req.profile.referer,
        {
          $inc: {
            accountBalance: Number((10 / 100) * investment.capital),
          },
        },
        {
          session,
          new: true,
          runValidators: true,
        }
      );
      const normalizeLevel =
        req.profile.level === 0 ? 0 : req.profile.level - 1;

      // console.log({ normalizeLevel, invt: invest.planId });
      if (invest.planId >= normalizeLevel) {
        await User.findByIdAndUpdate(
          req.profile._id,
          {
            level: invest.planId,
          },
          {
            session,
            new: true,
            runValidators: true,
          }
        );
      }

      await Transaction.create(
        [
          {
            amount: investment.capital,
            investmentId,
            currentBalance: req.profile.accountBalance,
            type: "investment",
            userId: req.profile._id,
          },
          ...(req.profile.referer
            ? [
                {
                  amount: investment.capital,
                  investmentId,
                  currentBalance: referUser.accountBalance,
                  type: "referral",
                  userId: req.profile.referer,
                },
              ]
            : []),
        ],
        { session }
      );
    });

    await session.commitTransaction();
    session.endSession();
    return response(res, 200, "investment approved.");
  } catch (err) {
    console.log(err);
    return response(res, 500, "failure", null);
  }
};

export const topupInvestment = async (req, res) => {
  const investmentId = req.investment._id;
  // const planId = req.investment.planId;
  const invtId = req.query.investmentId;
  const profile = req.profile;
  let loginLink = `https://${config.domain}/login`;
  const accountBalance = req.profile.accountBalance;
  const userId = req.profile._id;
  const amount = req.investment.capital;
  const newCapital = Number(accountBalance) + Number(amount);

  console.log("this is new capital ", newCapital);
  try {
    const session = await req.db.startSession();
    await session.withTransaction(async () => {
      const investment = await Investment.findByIdAndUpdate(
        investmentId,
        {
          planId: getNextPlanId(newCapital).id - 1,
          transactionId: "TOP-" + uuidv4(),
          capital: newCapital,
          approvedDate: Date.now(),
          status: "active",
          withDrawalDate: add(new Date(), { days: 5 }).toISOString(),
        },
        { session, new: true }
      ).exec();
      console.log(investment);
      await Transaction.findOneAndDelete(
        { investmentId, amount },
        { session }
      ).exec();

      await User.findByIdAndUpdate(
        userId,
        { accountBalance: 0 },
        {
          session,
          new: true,
          runValidators: true,
        }
      );

      const normalizeLevel =
        req.profile.level === 0 ? 0 : req.profile.level - 1;
      if (investment.planId >= normalizeLevel) {
        await User.findByIdAndUpdate(
          req.profile._id,
          {
            level: investment.planId + 1,
          },
          {
            session,
            new: true,
            runValidators: true,
          }
        );
      }

      await Transaction.create(
        [
          {
            amount: investment.capital,
            investmentId,
            currentBalance: 0,
            type: "investment",
            userId: req.profile._id,
          },
        ],
        { session }
      );
    });

    await session.commitTransaction();
    session.endSession();
    const message = `${
      profile.firstName
    }, you have topped up your investment your ${
      plans[req.investment.planId].name
    } investment plan of ${fCurrency(amount)} to ${fCurrency(newCapital)}`;
    let msg = sampleMailTemplate(profile.firstName, loginLink, message);
    const sent = await sendMail(msg, "Investment Update", profile.email);
    return response(res, 200, "top up successful");
  } catch (err) {
    console.log(err);
    return response(res, 500, "failure", null);
  }
};

export const reinvest = async (req, res) => {
  const userId = req.profile._id;
  // const planId = req.investment.planId;
  console.log({ nextPlan: getNextPlanId(req.body.capital) });
  try {
    const session = await req.db.startSession();
    await session.withTransaction(async () => {
      const investment = await Investment.create(
        [
          {
            ...req.body,
            userId: userId,
            planId: getNextPlanId(req.body.capital).id - 1,
            stock: "BTC-USD",
            currency: "btc",
            transactionId: "REI-" + uuidv4(),
            approvedDate: Date.now(),
            status: "active",
            withDrawalDate: add(new Date(), { days: 5 }).toISOString(),
          },
        ],
        { session, new: true }
      );
      console.log(investment);

      await User.findByIdAndUpdate(
        userId,
        { accountBalance: 0 },
        {
          session,
          new: true,
          runValidators: true,
        }
      );

      await Transaction.create(
        [
          {
            amount: req.body.capital,
            investmentId: investment[0]._id,
            currentBalance: 0,
            type: "investment",
            userId: req.profile._id,
          },
        ],
        { session }
      );
    });

    await session.commitTransaction();
    session.endSession();
    return response(res, 200, "top up successful");
  } catch (err) {
    console.log({ err });
    return response(res, 500, "failure", null);
  }
};

export const dailyRio = async (req, res) => {
  const userId = req.profile._id;
  const investmentId = req.investment._id;
  const daily = req.body.daily;
  const currentBalance = req.profile.accountBalance;

  try {
    //save user
    const session = await req.db.startSession();
    await session.withTransaction(async () => {
      await Transaction.create(
        [
          {
            userId,
            investmentId,
            amount: Number(daily),
            type: "daily",
            currentBalance: Number(currentBalance) + Number(daily),
          },
        ],
        { session, new: true }
      );
      await Investment.findByIdAndUpdate(
        investmentId,
        { $inc: { daysCount: 1 } },
        { session }
      );
      await User.findByIdAndUpdate(
        userId,
        { $inc: { accountBalance: Number(daily) } },
        {
          session,
          new: true,
          runValidators: true,
        }
      );
    });
    await session.commitTransaction();
    session.endSession();

    return response(res, 200, "daily rio is added", null);
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};

export const dailyAllInvestRioCheck = async (req, res) => {
  try {
    //save user
    const session = await req.db.startSession();
    let continousInvts = await Investment.find({
      daysCount: { $lt: 14 },
      status: "active",
    }).populate({
      path: "userId",
      select: "accountBalance _id",
    });

    let endingInvts = await Investment.find({
      daysCount: 14,
      status: "active",
    }).populate({
      path: "userId",
      select: "accountBalance _id",
    });
    //make the last investment
    let endingTxns = endingInvts?.map(({ _id, userId, planId, capital }) => ({
      userId: userId._id,
      investmentId: _id,
      amount: Number((plans[planId].interest / 100) * capital),
      type: "daily",
      currentBalance:
        Number(userId.accountBalance) +
        Number((plans[planId].interest / 100) * capital),
    }));
    //balance investment equation
    let endingInvtsTxns = endingInvts?.map(
      ({ _id, userId, planId, capital }) => ({
        userId: userId._id,
        investmentId: _id,
        amount: -Number(capital),
        type: "investment",
        currentBalance:
          Number(userId.accountBalance) +
          Number((plans[planId].interest / 100) * capital) +
          Number(capital),
      })
    );
    //create update many for ending users
    let endingUser = endingInvts?.map(({ userId, planId, capital }) => ({
      updateOne: {
        filter: { _id: userId._id },
        update: {
          $inc: {
            accountBalance:
              Number((plans[planId].interest / 100) * capital) +
              Number(capital),
          },
        },
      },
    }));

    //create transactions for continious users on the platform
    let continousTxns = continousInvts.map(
      ({ _id, userId, planId, capital }) => ({
        userId: userId._id,
        investmentId: _id,
        amount: Number((plans[planId].interest / 100) * capital),
        type: "daily",
        currentBalance:
          Number(userId.accountBalance) +
          Number((plans[planId].interest / 100) * capital),
      })
    );
    //update continous users balance with int percentage
    let continousUser = continousTxns.map(({ userId, amount }) => ({
      updateOne: {
        filter: { _id: userId },
        update: { $inc: { accountBalance: Number(amount) } },
      },
    }));

    //console.log({ continousInvts, endingInvts, continousTxns, endingTxns, endingUser, continousUser, endingInvtsTxns });
    //transaction session
    await session.withTransaction(async () => {
      await Transaction.create(
        [
          ...continousTxns,
          ...(endingTxns ? endingTxns : []),
          ...(endingInvtsTxns ? endingInvtsTxns : []),
        ],
        { session, new: true }
      );
      await Investment.updateMany(
        { daysCount: 14, status: "active" },
        { $inc: { daysCount: 1 }, status: "ended" },
        { session }
      );
      await Investment.updateMany(
        { daysCount: { $lt: 14 }, status: "active" },
        { $inc: { daysCount: 1 } },
        { session }
      );

      //db.listing.updateMany({ "_id": { "$in": ids }}, { "$set": { "Supplier": "S" }});
      await User.bulkWrite(
        [...continousUser, ...(endingUser ? endingUser : [])],
        {
          session,
        }
      );
    });
    await session.commitTransaction();
    session.endSession();

    // return response(res, 200, 'daily investment update successful', {
    //   continousInvts,
    //   endingInvts,
    //   continousTxns,
    //   endingTxns,
    //   endingUser,
    //   continousUser,
    //   endingInvtsTxns,
    // });
    return response(res, 200, "daily investment update successful", null);
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};
