import React, { useEffect, useState } from 'react';
import GroupManagerLeaderModal from './GroupManagerLeaderModal/GroupManagerLeaderModal';
import GroupManagerNav from './GroupManagerNav/GroupManagerNav';
import RequestJoinGroupModal from './RequestJoinGroupModal/RequestJoinGroupModal';
import GroupChatModal from './GroupChatModal/GroupChatModal';
import OppositeGroupModal from './OppositeGroupModal/OppositeGroupModal';
import GroupReqFavModal from './GroupReqFavModal/GroupReqFavModal';
import { getGroupMembers, getGroupsDetail } from '../../GroupPageController';

const GroupManagerModal = ({
  groupMembersData,
  isGroupManagerModal,
  setIsGroupManagerModal,
  groupName,
  groupId,
  groupDetailData,
  isModify,
  setIsModify,
  setGroupMembersData,
  setGroupDetailData,
}) => {
  const [index, setIndex] = useState(0);
  const [isJoinRequest, setIsJoinRequest] = useState(false);

  useEffect(() => {
    getGroupMembers(groupId).then(result => {
      setGroupMembersData(result[1].data);
    });
    getGroupsDetail(groupId).then(result => {
      setGroupDetailData(result[1].data);
    });
    setIsModify(false);
  }, [isModify]);

  return (
    <div>
      {isJoinRequest && (
        <RequestJoinGroupModal
          isGroupManagerModal={isGroupManagerModal}
          setIsGroupManagerModal={setIsGroupManagerModal}
          setIndex={setIndex}
          setIsJoinRequest={setIsJoinRequest}
          isModify={isModify}
          setIsModify={setIsModify}
        />
      )}
      {index === 0 && (
        <GroupManagerLeaderModal
          groupMembersData={groupMembersData}
          isGroupManagerModal={isGroupManagerModal}
          setIsGroupManagerModal={setIsGroupManagerModal}
          groupName={groupName}
          setIsJoinRequest={setIsJoinRequest}
          setIndex={setIndex}
          groupId={groupId}
          groupDetailData={groupDetailData}
          isModify={isModify}
          setIsModify={setIsModify}
        />
      )}
      {index === 1 && (
        <OppositeGroupModal
          isGroupManagerModal={isGroupManagerModal}
          setIsGroupManagerModal={setIsGroupManagerModal}
        />
      )}
      {index === 2 && (
        <GroupReqFavModal
          isGroupManagerModal={isGroupManagerModal}
          setIsGroupManagerModal={setIsGroupManagerModal}
        />
      )}
      {index === 3 && (
        <GroupChatModal setIsGroupManagerModal={setIsGroupManagerModal} />
      )}

      <GroupManagerNav index={index} setIndex={setIndex} />
    </div>
  );
};

export default GroupManagerModal;
