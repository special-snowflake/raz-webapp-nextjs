import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL + "/auth";

export const loginAuth = (body) => {
  return axios.post(url.concat("/login"), body);
};

// const URLregister = process.env.NEXT_PUBLIC_API_URL + "/auth/register";
export const registerAuth = (body) => {
  return axios.post(url.concat("/register"), body);
};

export const logoutAuth = (token) => {
  return axios.delete(url.concat("/logout"), {
    headers: {
      "x-access-token": token,
    },
  });
};
