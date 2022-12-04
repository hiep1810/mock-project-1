import axios from 'axios';
import { API_URL } from '../constants/URL';
import authHeader from './auth-header';

const getTODOList = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.user.id);
  return axios.get(API_URL + `todos?userid=${user.user.id}`, {
    headers: authHeader(),
  });
};

const addTODO = (data) => {
  return axios.post(API_URL + `todos`, data, {
    headers: authHeader(),
  });
};
const updateTODO = (data) => {
  return axios.put(
    API_URL + `todos/${data.id}`,
    { text: data.text, userid: data.userId },
    {
      headers: authHeader(),
    }
  );
};
const removeTODO = (data) => {
  return axios.delete(API_URL + `todos/${data.id}`, {
    headers: authHeader(),
  });
};

export default {
  getTODOList,
  addTODO,
  removeTODO,
  updateTODO,
};
