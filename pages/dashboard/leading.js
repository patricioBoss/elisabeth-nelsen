import { Container, Typography } from "@mui/material";
// layouts
import Layout from "../../layouts";
// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import serializeFields from "../../helpers/serialize";
import PropTypes from "prop-types";
import pageAuth from "../../middleware/pageAuthAccess";
import LeadersTable from "../../components/LeadersTable.jsx";
import Dummy from "../../models/dummy.model";
import { useState } from "react";
import axios from "axios";
// ----------------------------------------------------------------------
async function handler({ req }) {
  const { data } = await axios({
    baseURL: "https://api.coingecko.com",
    method: "GET",
    url: "/api/v3/coins/markets",
    params: {
      vs_currency: "usd",
      ids: "bitcoin,tether,ethereum",
    },
  });
  const user = serializeFields(req.user);
  const investments = serializeFields(
    await Dummy.aggregate([
      { $match: { type: "investment" } },
      { $sort: { approvedAt: -1 } },
      { $limit: 30 },
    ]).exec()
  );
  const withdrawals = serializeFields(
    await Dummy.aggregate([
      { $match: { type: "withdrawal" } },
      { $sort: { approvedAt: -1 } },
      { $limit: 30 },
    ]).exec()
  );

  return {
    props: {
      user,
      investments,
      withdrawals,
      marketData: data,
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
      revalidate: 5 * 60,
    },
  };
  // return {
  //   props: { user },
  // };
}
LeadersBoard.propTypes = {
  user: PropTypes.object,
  investments: PropTypes.array,
  withdrawals: PropTypes.array,
  marketData: PropTypes.array,
};
export const getServerSideProps = pageAuth(handler);
LeadersBoard.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function LeadersBoard({
  user,
  investments,
  withdrawals,
  marketData,
}) {
  const { themeStretch } = useSettings();
  let [coinMap, setCoinMap] = useState(
    marketData.reduce((acc, x) => {
      acc[x.symbol] = x;
      return acc;
    }, {})
  );
  const [order, setOrder] = useState("deposit");

  return (
    <Page title="Leaders Board">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography align="center" variant="h4">
          Top Deposits and Payouts.
        </Typography>
        <Typography className="text-lg mt-4 mb-8 text-center max-w-768 mx-auto">
          Discover seamless financial transactions with Us, checkout our Top
          Deposits and Withdrawals. Take control of your investments and
          earnings effortlessly.
        </Typography>
        <div className=" border-2 max-w-768 border-black rounded-full p-1 flex justify-between mx-auto mb-6">
          <button
            className={`px-6 py-4 ${
              order === "deposit"
                ? "bg-blue-500 text-white"
                : "!text-black !bg-none"
            }   text-base font-medium rounded-full`}
            onClick={() => setOrder("deposit")}
          >
            Deposit
          </button>
          <button
            className={`px-6 py-4 ${
              order === "withdrawal"
                ? "bg-blue-500 text-white"
                : "!text-black !bg-none"
            }   text-base font-medium rounded-full`}
            onClick={() => setOrder("withdrawal")}
          >
            Payouts
          </button>
        </div>

        <LeadersTable
          row={order === "deposit" ? investments : withdrawals}
          order={order}
          coinMap={coinMap}
          key={order}
        />
      </Container>
    </Page>
  );
}
