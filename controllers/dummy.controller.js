import axios from "axios";
import response from "../apiUtil/reponses";
import Dummy from "../models/dummy.model";
import { add } from "date-fns";
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const createDummy = (type) => async (req, res) => {
  try {
    const lastData = await Dummy.aggregate([
      { $match: { type: type } },
      { $sort: { approvedAt: -1 } },
      { $limit: 1 },
    ]).exec();

    console.log({ lastData });
    const randomRes = await axios({
      baseURL: "https://random-data-api.com/",
      method: "GET",
      url: "/api/v2/users",
    });
    const coinArray = ["btc", "eth", "usdt"];
    const coin = coinArray[Math.floor(Math.random() * coinArray.length)];
    const fakeUser = randomRes.data;
    const amount = randomIntFromInterval(100000, 600000);
    const { first_name, last_name } = fakeUser;
    let newDate;
    if (lastData.length) {
      newDate = add(new Date(lastData[0].approvedAt), {
        days: Math.floor(Math.random() * 4) + 3,
      });
    } else {
      newDate = new Date(2023, 2, 10);
    }
    const data = {
      firstName: first_name,
      lastName: last_name,
      coin,
      amount,
      type,
      approvedAt: newDate,
    };

    let invest = new Dummy(data);

    const result = await invest.save();
    if (result) {
      return response(res, 200, "success", result);
    }
  } catch (err) {
    console.log({ err });
    return response(res, 500, "failure", null);
  }
};
