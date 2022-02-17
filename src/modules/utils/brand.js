import axios from 'axios';

const host = process.env.NEXT_PUBLIC_API_URL + '/brand';

export const getBrands = () => {
  return axios.get(host);
};
