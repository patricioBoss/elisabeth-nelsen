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
        "X-CoinAPI-Key": "fb855ee6-b1a6-4c3f-8658-99a8841e4dc1",
      },
    }
  );
  return data.reduce((acc, coindata) => {
    acc[coindata.asset_id] = coindata;
    return acc;
  }, {});
};
