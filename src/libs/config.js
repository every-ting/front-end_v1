import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_SERVER_URL;
export const ML_URL = process.env.REACT_APP_ML_SERVER_URL;

export const basicApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: 'Bearer ' + localStorage.getItem('key'),
  },
});

export const mlApi = axios.create({
  baseURL: `${ML_URL}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});
