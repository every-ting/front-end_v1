import { mlApi, basicApi } from '../../libs/config';
import API from '../../api';

export const getRandomIdealPhoto = async gender => {
  try {
    const response = await mlApi.get(`/getRandomImages/${gender}/20`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getMixThreeImages = async imageIds => {
  try {
    const response = await mlApi.get(
      `/mixThreeImages/${imageIds[0]}/${imageIds[1]}/${imageIds[2]}`
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

export const putUserIdealPhoto = async imageURL => {
  // console.log('api', API.putUserIdealPhoto`/${imageURL}`);
  try {
    const response = await basicApi.put(
      `${API.putUserIdealPhoto}/?idealPhoto=${imageURL}`
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
