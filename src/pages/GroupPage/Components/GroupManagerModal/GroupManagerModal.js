import React, { useState } from 'react';
import GroupManagerLeaderModal from './GroupManagerLeaderModal/GroupManagerLeaderModal';
import GroupManagerNav from './GroupManagerNav/GroupManagerNav';
import RequestJoinGroupModal from './RequestJoinGroupModal/RequestJoinGroupModal';
import GroupChatModal from './GroupChatModal/GroupChatModal';

const GroupManagerModal = ({
  groupMembersData,
  isGroupManagerModal,
  setIsGroupManagerModal,
  groupName,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      {index === 0 && (
        <GroupManagerLeaderModal
          groupMembersData={groupMembersData}
          isGroupManagerModal={isGroupManagerModal}
          setIsGroupManagerModal={setIsGroupManagerModal}
          groupName={groupName}
        />
      )}
      {index === 2 && (
        <RequestJoinGroupModal
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
