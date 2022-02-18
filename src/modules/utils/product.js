import axios from "axios";

const host = process.env.NEXT_PUBLIC_API_URL;

export const getBrandApi = (token) => {
  const url = `${host}/brand`;
  return axios.get(url);
};
