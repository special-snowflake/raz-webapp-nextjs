import axios from 'axios';
const url = process.env.NEXT_PUBLIC_API_URL + '/products';

export const getSellerProduct = (query, token) => {
    const urlProduct = url + '/seller' + query;
    return axios.post(urlProduct, {
      headers: {
        'x-access-token': token,
      },
    });
  };
  