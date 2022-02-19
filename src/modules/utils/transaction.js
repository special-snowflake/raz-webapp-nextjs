import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL + '/transaction';

// transaction?page=1&limit=5
export const getUserTransaction = (query, token) => {
  return axios.get(url.concat(query), {
    headers: {
        'x-access-token': token,
    },
  });
};
