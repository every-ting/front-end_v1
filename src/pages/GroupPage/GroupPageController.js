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

export const getGroupMembers = async groupId => {
  try {
    const response = await basicApi.get(
      `${API.getGroupMembers}/${groupId}/members`
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

export const getGroupMembersRequest = async groupId => {
  try {
    const response = await basicApi.get(
      `${API.getGroupMembersRequest}/${groupId}/members/requests`
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
