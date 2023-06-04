// getBlindRequests: '/blind/requests',
// getBlindLikes: '/blind/likes',

import API from '../../api';
import { basicApi } from '../../libs/config';

// export const postDriveType = async data => {
//   try {
//     const response = await basicApi.post(`${API.postDriveType}`, data);
//     if (response.status === 200) {
//       return [false, response.data];
//     } else {
//       return [response.data.error, response.data.message];
//     }
//   } catch (e) {
//     return [true, e.message];
//   }
// };

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

export const getBlindRequests = async () => {
  try {
    const response = await basicApi.get(`${API.getBlindRequests}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getBlindLikes = async () => {
  try {
    const response = await basicApi.get(`${API.getBlindLikes}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
