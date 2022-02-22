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

export const addProduct = (body, token) => {
  const urlAdd = url + "/add";
  return axios.post(urlAdd, body, {
    headers: {
      "x-access-token": token
    }
  });
};

export const getRelatedProduct = (id) => {
  const urlRelated = `${url}/related/${id}`;
  return axios.get(urlRelated);
};
