import axios from 'axios';
const url = process.env.NEXT_PUBLIC_API_URL + '/products/seller';

export const addProduct = (body, token) => {
    const urlAdd = url + '/';
    return axios.post(urlAdd, body, {
      headers: {
        'x-access-token': token,
      },
    });
  };
  