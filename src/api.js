const API = {
  tingLogin: '/ting/logIn',
  tingSignUp: '/ting/signUp',

  getGroups: '/groups',
  postGroups: '/groups',
  getGroupsMy: '/groups/my',
  getGroupMembers: '/groups',
  getGroupMembersRequest: '/groups',

  getOppositeGroups: '/groups',
  getGroupLikes: '/groups',
  getGroupReqs: '/groups',
  getGroupJoinReqs: '/groups',

  putGroupNewLeader: '/groups',
  postGroupLikes: '/groups',
  deleteGroupLikes: '/groups',
  postGroupLeaderReqs: '/groups',
  deleteGroupLeaderReqs: '/groups',

  postJoinRequestsGroup: '/groups/requests',
  deleteJoinRequestsGroup: '/groups/requests',
  postJoinLikesGroup: '/groups/likes',
  deleteJoinLikesGroup: '/groups/likes',

  postAcceptJoinRequestsGroup: '/groups/requests/',
  postRejectJoinRequestsGroup: '/groups/requests/',

  getBlindUsers: '/blind',
  getBlindRequests: '/blind/requests',
  getBlindLikes: '/blind/likes',

  postBlindRequests: '/blind/request',
  deleteBlindRequests: '/blind/request',

  postBlindLikes: '/blind/like',
  deleteBlindLikes: '/blind/like',

  putBlindRequestsReject: '/blind/request/reject',
  putBlindRequestsAccept: '/blind/request/accept',
};
export default API;
