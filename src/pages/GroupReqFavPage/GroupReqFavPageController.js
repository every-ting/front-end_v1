import API from '../../api';
import { basicApi } from '../../libs/config';

export const getGroupJoinReqs = async groupId => {
  try {
    const response = await basicApi.get(`${API.getGroupJoinReqs}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroupsRequest = async () => {
  try {
    const response = await basicApi.get(`${API.getGroupsRequest}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [true, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroupsLikes = async () => {
  try {
    const response = await basicApi.get(`${API.getGroupsLikes}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [true, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
export const postJoinRequestsGroup = async groupId => {
  try {
    const response = await basicApi.post(
      `${API.postJoinRequestsGroup}/${groupId}`
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

export const deleteJoinRequestsGroup = async groupId => {
  try {
    const response = await basicApi.delete(
      `${API.deleteJoinRequestsGroup}/${groupId}`
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

export const postJoinLikesGroup = async toGroupId => {
  try {
    const response = await basicApi.post(
      `${API.postJoinLikesGroup}/${toGroupId}`
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

export const deleteJoinLikesGroup = async toGroupId => {
  try {
    const response = await basicApi.delete(
      `${API.deleteJoinLikesGroup}/${toGroupId}`
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
