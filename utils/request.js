import axios from "axios";

export const yahooRequest = () => {
  const baseURL = process.env.NEXT_PUBLIC_IMAGE_SERVER;

  const axiosInstance = axios.create({
    baseURL,
  });
  return { request: axiosInstance };
};
