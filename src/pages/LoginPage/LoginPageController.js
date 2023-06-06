import API from '../../api';
import { basicApi } from '../../libs/config';

export const tingLogin = async code => {
  console.log('asasddf');
  try {
    const response = await basicApi.get(`${API.tingLogin}?code=${code}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const tingSignUp = async data => {
  console.log('asasddf');
  try {
    const response = await basicApi.post(`${API.tingSignUp}`, data);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
