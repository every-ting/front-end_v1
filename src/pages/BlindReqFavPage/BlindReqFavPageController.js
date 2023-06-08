// getBlindRequests: '/blind/requests',
// getBlindLikes: '/blind/likes',

import API from '../../api';
import { basicApi } from '../../libs/config';

export const putBlindRequestsAccept = async userId => {
  try {
    const response = await basicApi.put(
      `${API.putBlindRequestsAccept}/${userId}`
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

export const putBlindRequestsReject = async userId => {
  try {
    const response = await basicApi.put(
      `${API.putBlindRequestsReject}/${userId}`
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
