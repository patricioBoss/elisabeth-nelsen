import { Container, Typography, Grid } from "@mui/material";
import { useState } from "react";
// layouts
import Layout from "../../../../layouts";
// hooks
import useSettings from "../../../../hooks/useSettings";
// components
import Page from "../../../../components/Page";
import serializeFields from "../../../../helpers/serialize";
import { getUserById } from "../../../../helpers/fetchers";
import useSWR from "swr";
import PropTypes from "prop-types";
import pageAuth from "../../../../middleware/pageAuthAccess";
import axios from "axios";
import StocksCard from "../../../../components/stocksCard";
import stocks from "../../../../helpers/stocks";
import PlanCards from "../../../../components/PlanCards";
import plans from "../../../../helpers/plans";
import StockPlanCards from "../../../../components/StockPlanCards";
import PaymentChoice from "../../../../components/PaymentChoice";
import fs from "fs/promises";
import path from "path";
// ----------------------------------------------------------------------
async function handler(context) {
  const user = serializeFields(context.req.user);
  const stockSymbol = context.params.stock;
  if (!(stockSymbol && stocks[stockSymbol])) {
    return {
      redirect: {
        destination: "/dashboard/portfolio",
        permanent: false,
      },
    };
  }
  const stockResponse = await axios(
    {
      baseURL: process.env.NEXT_PUBLIC_IMAGE_SERVER,
      method: "GET",
      url: "/yahooapi/quotes",
      params: {
        symbols: stockSymbol,
      },
    }
    // `https://query1.finance.yahoo.com/v6/finance/quote?symbols=${stocksListString}`
  );
  // const quoteResponse = await axios.get(
  //   `https://query1.finance.yahoo.com/v8/finance/chart/${stockSymbol}?metrics=high&interval=30m&range=5d`
  // );
  const filePath = path.join(process.cwd(), "public", "dashboardData.json");

  const jsonFile = await fs.readFile(filePath, "utf-8");
  const parsedData = JSON.parse(jsonFile);
  let stockParsedData = parsedData.list.find(
    (item) => item.data.result[0].meta.symbol === stockSymbol
  );
  // const stockData = await stockResponse.data.quoteResponse.result[0];
  const stockData = await stockResponse.data.data[0];
  const quoteData = {
    timestamp: stockParsedData.data.result[0].timestamp,
    quotes: stockParsedData.data.result[0].indicators.quote[0],
  };

  // console.log(stocksDataList.length, stockQuoteList.length, stockDataQuote);
  return {
    props: {
      user,
      stockData,
      quoteData,
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
    },
  };
  // return {
  //   props: { user },
  // };
}
Plans.propTypes = {
  user: PropTypes.object,
  stockData: PropTypes.object,
  quoteData: PropTypes.object,
};
export const getServerSideProps = pageAuth(handler);
Plans.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Plans({ user, stockData, quoteData }) {
  const [open, setOpen] = useState(false);
  const url = `/api/user/${user._id}`;
  const [payDetails, setPayDetails] = useState({
    capital: "",
    currency: "",
    stock: "",
    planId: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  // console.log({ stockData, quoteData });
  const { data } = useSWR(url, getUserById);
  const { themeStretch } = useSettings();

  return (
    <Page title="All Plans">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4">
          Invest in{" "}
          <span
            style={{ background: stocks[stockData.symbol].bg }}
            className=" text-white p-2 rounded-md"
          >
            {stockData.longName}
          </span>
        </Typography>
        <Grid mt={1} container spacing={3}>
          {plans.map((plan, index) => (
            <Grid key={plan.id} item xs={12} sm={6} md={4}>
              <StockPlanCards
                setDetails={setPayDetails}
                plan={{ ...plan, id: index }}
                handleOpen={handleOpen}
                stockData={stockData}
                user={data ? data : user}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <PaymentChoice
        open={open}
        setOpen={setOpen}
        details={payDetails}
        user={data ? data : user}
      />
    </Page>
  );
}
