import {
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// layouts
import Layout from "../../layouts";
// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import PlanCards from "../../components/PlanCards";
import plans from "../../helpers/plans";
import { useState } from "react";
import serializeFields from "../../helpers/serialize";
import { getCoinPrices, getUserById } from "../../helpers/fetchers";
import useSWR from "swr";
import PropTypes from "prop-types";
import pageAuth from "../../middleware/pageAuthAccess";
// ----------------------------------------------------------------------
async function handler({ req }) {
  const user = serializeFields(req.user);
  let cyptoDetails = await getCoinPrices();
  console.log("this is user", user);
  return {
    props: {
      user,
      coinList: cyptoDetails,
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
  coinList: PropTypes.object,
};
export const getServerSideProps = pageAuth(handler);
Plans.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Plans({ user, coinList }) {
  const url = `/api/user/${user._id}`;
  const { data } = useSWR(url, getUserById);
  const { themeStretch } = useSettings();
  const [coin, setCoin] = useState("btc");
  const handleChange = (e) => {
    const { value } = e.target;
    setCoin(value);
  };
  return (
    <Page title="All Plans">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography id="select-coin" ml={1} variant="body1" color="primary">
          Select coin to Invest
        </Typography>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={coin}
            defaultValue="btc"
            sx={{ maxWidth: 400 }}
            pl
            size="medium"
            onChange={handleChange}
            variant="outlined"
          >
            <MenuItem value={"btc"}>BITCOIN (BTC)</MenuItem>
            <MenuItem value={"usdt"}>TETHER (USDT)</MenuItem>
            <MenuItem value={"eth"}>{"Ethereum".toUpperCase()} (ETH)</MenuItem>
          </Select>
        </FormControl>
        <Grid mt={1} container spacing={3}>
          {plans.map((plan, index) => (
            <Grid key={plan.id} item xs={12} sm={6} md={4}>
              <PlanCards
                plan={{ ...plan, id: index }}
                currency={coinList[coin.toLocaleUpperCase()]}
                user={data ? data : user}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
