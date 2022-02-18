import axios from "axios";
const url = process.env.NEXT_PUBLIC_API_URL + "/products";

export const searchProducts = (filter) => {
  const urlSearch = url + "/search" + filter;
  return axios.get(urlSearch);
};

export const geProductId = (id) => {
  const urlDetail = url + "/detail/" + id;
  return axios.get(urlDetail);
};
