import React, { useState } from 'react';
import GroupManagerLeaderModal from './GroupManagerLeaderModal/GroupManagerLeaderModal';
import GroupManagerNav from './GroupManagerNav/GroupManagerNav';
import RequestJoinGroupModal from './RequestJoinGroupModal/RequestJoinGroupModal';
import GroupChatModal from './GroupChatModal/GroupChatModal';
import OppositeGroupModal from './OppositeGroupModal/OppositeGroupModal';
import GroupReqFavModal from './GroupReqFavModal/GroupReqFavModal';

const GroupManagerModal = ({
  groupMembersData,
  isGroupManagerModal,
  setIsGroupManagerModal,
  groupName,
}) => {
  const [index, setIndex] = useState(0);
  const [isJoinRequest, setIsJoinRequest] = useState(false);

  return (
    <div>
      {isJoinRequest && (
        <RequestJoinGroupModal
          isGroupManagerModal={isGroupManagerModal}
          setIsGroupManagerModal={setIsGroupManagerModal}
          setIndex={setIndex}
          setIsJoinRequest={setIsJoinRequest}
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
