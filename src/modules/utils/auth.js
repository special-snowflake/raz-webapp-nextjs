import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL + "/auth/login";
export const loginAuth = (body) => {
  const URL2 = "http://localhost:8000/auth/login";
  return axios.post(URL, body);
};

const URLregister = process.env.NEXT_PUBLIC_API_URL + "/auth/register";
export const registerAuth = (body) => {
  return axios.post(URLregister, body);
};

export const logoutApi = (config) => {
  const url = `http://localhost:8000/auth/logout`;
  return axios.post(url, config);
};
