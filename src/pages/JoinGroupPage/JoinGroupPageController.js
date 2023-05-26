import API from '../../api';
import { basicApi } from '../../libs/config';

export const getGroups = async () => {
  console.log('asasddf');
  try {
    const response = await basicApi.get(`${API.getGroups}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
