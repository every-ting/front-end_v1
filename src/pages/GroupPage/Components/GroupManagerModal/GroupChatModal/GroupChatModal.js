import React from 'react';
import GroupChat from '../../../../ChatPage/ChatType/GroupChat';
import ModalBackButton from '../../../../../components/backButton/modalBackButton/ModalBackButton';
import './GroupChatModal.scss';

const GroupChatModal = ({ setIsGroupManagerModal }) => {
  return (
    <>
      <div className="groupChatModalContainer">
        <ModalBackButton
          header="채팅방"
          setIsGroupManagerModal={setIsGroupManagerModal}
        />
        <div className="groupChatModalContent">
          <div className="groupChatModalContent__body">
            <GroupChat />
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupChatModal;
