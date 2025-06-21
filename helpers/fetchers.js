import axios from "axios";
import { yahooRequest } from "../utils/request";

export const getUserById = (url) => axios.get(url).then((res) => res.data.data);

export const getQuotes = async (quoteString) => {
  const { request } = yahooRequest();
  // const url = `/finance/quote?symbols=${quoteString}`;
  const url = `/yahooapi/quotes?symbols=${quoteString}`;
  const stocksResponse = await request.get(url);
  // return await stocksResponse.data.quoteResponse.result;
  return await stocksResponse.data.data;
};

export const getCoinPrices = async () => {
  const { data } = await axios.get(
    "https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,USDT,ETH,XRP,DOGE",
    {
      headers: {
        "X-CoinAPI-Key": "821cb012-8665-490a-9478-2f4ba70dc1a5",
      },
    }
  );
  return data.reduce((acc, coindata) => {
    acc[coindata.asset_id] = coindata;
    return acc;
  }, {});
};
