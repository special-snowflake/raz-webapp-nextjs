import axios from 'axios';
const url = process.env.NEXT_PUBLIC_API_URL + '/user';

export const getDetailByID = (id, token) => {
  const urlGetDetail = url + '/' + id;
  return axios.get(urlGetDetail, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const updateProfile = (body, token) => {
  const urlUpdate = url + '/edit/data';
  return axios.patch(urlUpdate, body, {
    headers: {
      'x-access-token': token,
    },
  });
};
export const updateImage = (body, token) => {
  const urlUpdate = url + '/edit/image';
  return axios.patch(urlUpdate, body, {
    headers: {
      'x-access-token': token,
    },
  });
};
