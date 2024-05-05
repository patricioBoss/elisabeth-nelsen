import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
// layouts
import Layout from "../../../layouts";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import PendingCards from "../../../components/PendingCards";
import plans from "../../../helpers/plans";
import pageAuth from "../../../middleware/pageAuthAccess";
import PropTypes from "prop-types";
import serializeFields from "../../../helpers/serialize";
import Investment from "../../../models/investment.model";
import { useState } from "react";
import { getCoinPrices, getQuotes } from "../../../helpers/fetchers";

// ----------------------------------------------------------------------

async function handler({ req }) {
  const user = serializeFields(req.user);
  const pendingInvestments = serializeFields(
    await Investment.find({
      userId: user._id,
      status: "pending",
      transactionId: { $exists: false },
    }).lean()
  );
  const uniqueStockString =
    [
      ...new Set(
        pendingInvestments.map((x) =>
          x.stock === "usdt" || x.stock === "btc"
            ? `${x.stock.toUpperCase()}-USD`
            : x.stock.toUpperCase()
        )
      ),
    ].join(",") ?? "NONE";
  const stocksResponse = await getQuotes(uniqueStockString);
  console.log({ stocksResponse });
  const stocksDataMap = stocksResponse.reduce((acc, stock) => {
    acc[stock.symbol] = stock;
    return acc;
  }, {});
  const allPendings = pendingInvestments.map((x) => ({
    ...x,
    stock:
      stocksDataMap[
        x.stock === "usdt" || x.stock === "btc"
          ? `${x.stock.toUpperCase()}-USD`
          : x.stock.toUpperCase()
      ],
    plan: plans[x.planId],
  }));

  let cyptoDetails = await getCoinPrices();
  console.log({ cyptoDetails });
  return {
    props: {
      user,
      coinList: cyptoDetails,
      pendingInvestments: serializeFields(allPendings),
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
    },
  };

  // return {
  //   props: { user },
  // };
}
export const getServerSideProps = pageAuth(handler);
Pending.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
Pending.propTypes = {
  user: PropTypes.object,
  pendingInvestments: PropTypes.array,
  coinList: PropTypes.object,
};
export default function Pending({ user, pendingInvestments, coinList }) {
  const [investments] = useState(pendingInvestments);
  const { themeStretch } = useSettings();
  console.log({ investments });
  return (
    <Page title="Pending investment">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h3">Pending Investment</Typography>
        {investments ? (
          <>
            <Grid container mt={3} spacing={3}>
              {!!investments.length &&
                investments.map((x) => (
                  <Grid key={x._id} item xs={12} sm={6} md={4}>
                    <PendingCards
                      investment={x}
                      user={user}
                      coin={coinList[x.currency.toUpperCase()]}
                    />
                  </Grid>
                ))}
            </Grid>
            {!investments.length && (
              <Typography
                textAlign={"center"}
                mt={4}
                color={"primary"}
                variant="h3"
              >
                No Pending investments
              </Typography>
            )}
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 2,
              py: 2,
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Container>
    </Page>
  );
}
