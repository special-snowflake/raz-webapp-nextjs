import axios from 'axios';
const url = process.env.NEXT_PUBLIC_API_URL + '/products';

export const getSellerProduct = (query, token) => {
    const urlProduct = url + '/seller' + query;
    return axios.get(urlProduct, {
      headers: {
        'x-access-token': token,
      },
    });
  };
  

export const deleteProduct = (id, token) => {
  const urlDelete = url + '/' + id;
  return axios.delete(urlDelete, {
    headers: {
      'x-access-token': token,
    }
  })
}