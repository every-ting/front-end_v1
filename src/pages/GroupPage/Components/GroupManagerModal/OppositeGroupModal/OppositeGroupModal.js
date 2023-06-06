import React from 'react';
import './OppositeGroupModal.scss';
import AppHeader from '../../../../../components/appHeader/AppHeader';
import { motion } from 'framer-motion';
import OppositeGroupList from './OppositeGroupList';
import ModalBackButton from '../../../../../components/backButton/modalBackButton/ModalBackButton';
const OppositeGroupModal = ({
  setIsGroupManagerModal,
  isGroupManagerModal,
}) => {
  return (
    <motion.div className="requestJoinGroupContainer">
      <div className="groupManagerHeader">
        <ModalBackButton
          header="상대 팀 조회"
          setIsGroupManagerModal={setIsGroupManagerModal}
        />
      </div>
      <div className="requestJoinGroupContent">
        <div className="requestJoinGroupContent__body">
          {/* <div className="requestJoinGroupContent__body__title">내가 속한 팀</div> */}
          <OppositeGroupList isGroupManagerModal={isGroupManagerModal} />
        </div>
      </div>
    </motion.div>
  );
};

export default OppositeGroupModal;
