import API from '../../api';
import { basicApi } from '../../libs/config';

export const postGroups = async data => {
  try {
    const response = await basicApi.post(`${API.postGroups}`, data);
    console.log('response', response);
    if (response.data.result.resultCode === 200) {
      console.log(1);
      return [false, response.data];
    } else {
      console.log(2);
      return [true, response.data.result.message];
    }
  } catch (e) {
    console.log(3);
    return [true, e.message];
  }
};

// export const postDoorController = async data => {
//   try {
//     const response = await basicApi.post(`${API.postDoorControl}`, data);
//     console.log(data);
//     if (response.status === 200) {
//       return [false, response.data];
//     } else {
//       return [response.data.error, response.data.message];
//     }
//   } catch (e) {
//     return [true, e.message];
//   }
// };
