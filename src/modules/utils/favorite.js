import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL + '/favorite';

export const addToFavorite = (token, body) => {
  return axios.post(url, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const getUserFavorite = (token, page) => {
  return axios.get(url.concat(`?limit=10&page=${page}`), {
    headers: {
      'x-access-token': token,
    },
  });
};

export const deleteFromFavorite = (token, idProduct) => {
  return axios.delete(url.concat(`/${idProduct}`), {
    headers: {
      'x-access-token': token,
    },
  });
};

// export const logoutAuth = (token) => {
//   return axios.delete(url.concat('/logout'), {
//     headers: {
//       'x-access-token': token,
//     },
//   });
// };

// export const changePassword = (body, token) => {
//   console.log(body, token);
//   return axios.patch(url.concat('/change-password'), body, {
//     headers: {
//       'x-access-token': token,
//     },
//   });
// };
