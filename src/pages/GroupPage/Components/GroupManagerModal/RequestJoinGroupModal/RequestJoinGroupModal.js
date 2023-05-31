import React from 'react';
import './RequestJoinGroupModal.scss';
import AppHeader from '../../../../../components/appHeader/AppHeader';
import { motion } from 'framer-motion';
import RequestJoinGroupList from './RequestJoinGroupList';
import ModalBackButton from '../../../../../components/backButton/modalBackButton/ModalBackButton';
const AcceptMemberModal = ({ setIsGroupManagerModal, isGroupManagerModal }) => {
  return (
    <motion.div className="requestJoinGroupContainer">
      <div className="groupManagerHeader">
        <ModalBackButton
          header="팀 가입 요청"
          setIsGroupManagerModal={setIsGroupManagerModal}
        />
      </div>
      <div className="requestJoinGroupContent">
        <div className="requestJoinGroupContent__body">
          {/* <div className="requestJoinGroupContent__body__title">내가 속한 팀</div> */}
          <RequestJoinGroupList isGroupManagerModal={isGroupManagerModal} />
        </div>
      </div>
    </motion.div>
  );
};

export default AcceptMemberModal;
