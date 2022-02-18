import axios from 'axios';

const host = process.env.NEXT_PUBLIC_API_URL + '/category';

export const getCategory = () => {
  return axios.get(host);
};

export const getCategoryQty = (filter) => {
  const url = host + '/quantity' + filter;
  return axios.get(url);
};
