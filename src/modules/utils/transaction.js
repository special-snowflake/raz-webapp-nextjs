import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL + "/transaction";

// transaction?page=1&limit=5
export const getUserTransaction = (token, query) => {
  return axios.get(url.concat(`?limit=10&${query}`), {
    headers: {
      "x-access-token": token,
    },
  });
};

// transaction/seller?limit=&page=&status
export const getAllTransaction = (token, query) => {
  return axios.get(url.concat(`/seller?limit=10&${query}`), {
    headers: {
      "x-access-token": token,
    },
  });
};

// transaction/seller?limit=&page=&status
export const getDetailTransaction = (token, id) => {
  return axios.get(url.concat(`/${id}`), {
    headers: {
      "x-access-token": token,
    },
  });
};

// transaction
export const addTransaction = (token, body) => {
  return axios.post(url, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

// transaction/:id
export const updateTransaction = (token, id, body) => {
  return axios.patch(url.concat(`/${id}`), body, {
    headers: {
      "x-access-token": token,
    },
  });
};
