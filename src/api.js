const API = {
  tingLogin: '/ting/logIn',
  tingSignUp: '/ting/signUp',

  getGroups: '/groups',
  postGroups: '/groups',
  getGroupsMy: '/groups/my',
  getGroupsDetail: '/groups',
  getGroupMembers: '/groups',
  getGroupMembersRequest: '/groups',

  getGroupsRequest: '/groups/requests',
  getGroupsLikes: '/groups/likes',

  getOppositeGroups: '/groups',
  getGroupLikes: '/groups',
  getGroupReqs: '/groups',
  getGroupJoinReqs: '/groups',

  putGroupNewLeader: '/groups',
  postGroupToGroupLikes: '/groups',
  deleteGroupToGroupLikes: '/groups',
  postGroupToGroupReqs: '/groups',
  deleteGroupToGroupReqs: '/groups',

  postGroupLeaderReqsAccept: '/groups',
  deleteGroupLeaderReqReject: '/groups',

  postJoinRequestsGroup: '/groups/requests',
  deleteJoinRequestsGroup: '/groups/requests',
  postJoinLikesGroup: '/groups/likes',
  deleteJoinLikesGroup: '/groups/likes',

  postAcceptJoinRequestsGroup: '/groups/members/requests/',
  deleteRejectJoinRequestsGroup: '/groups/members/requests/',

  getBlindUsers: '/blind',
  getBlindRequests: '/blind/requests',
  getBlindLikes: '/blind/likes',

  postBlindRequests: '/blind/request',
  deleteBlindRequests: '/blind/request',

  postBlindLikes: '/blind/like',
  deleteBlindLikes: '/blind/like',

  putBlindRequestsReject: '/blind/request/reject',
  putBlindRequestsAccept: '/blind/request/accept',
  putUserIdealPhoto: '/user/idealPhoto',
};
export default API;
