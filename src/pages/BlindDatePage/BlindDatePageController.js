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

export const postBlindRequests = async userId => {
  try {
    const response = await basicApi.post(`${API.postBlindRequests}/${userId}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const deleteBlindRequests = async userId => {
  try {
    const response = await basicApi.delete(
      `${API.deleteBlindRequests}/${userId}`
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const postBlindLikes = async userId => {
  try {
    const response = await basicApi.post(`${API.postBlindLikes}/${userId}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const deleteBlindLikes = async userId => {
  try {
    const response = await basicApi.delete(`${API.deleteBlindLikes}/${userId}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroupsMy = async () => {
  console.log('asdf');
  try {
    const response = await basicApi.get(`${API.getGroupsMy}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getBlindUsers = async () => {
  console.log('asasddf');
  try {
    const response = await basicApi.get(`${API.getBlindUsers}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
