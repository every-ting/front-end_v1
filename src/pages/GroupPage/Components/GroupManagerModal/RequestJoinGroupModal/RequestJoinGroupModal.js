import React, { useState, useEffect } from 'react';
import './RequestJoinGroupModal.scss';
import { motion } from 'framer-motion';
import RequestJoinGroupList from './RequestJoinGroupList';
import ModalBackButton from '../../../../../components/backButton/modalBackButton/ModalBackButton';
import { getGroupMembersRequest } from '../../../GroupPageController';

const AcceptMemberModal = ({
  setIsGroupManagerModal,
  isGroupManagerModal,
  setIsJoinRequest,
  setIndex,
  isModify,
  setIsModify,
}) => {
  const [usersData, setUsersData] = useState();
  const [renderData, setRenderData] = useState(false);

  useEffect(() => {
    getGroupMembersRequest(isGroupManagerModal).then(result => {
      setUsersData(result[1].data);
      setRenderData(true);
    });
  }, [isModify]);

  return (
    <motion.div className="requestJoinGroupContainer">
      <div className="groupManagerHeader">
        <ModalBackButton
          header="팀원 신청 목록"
          setIsGroupManagerModal={setIsGroupManagerModal}
          setIsJoinRequest={setIsJoinRequest}
          setIndex={setIndex}
        />
      </div>
      <div className="requestJoinGroupContent">
        <div className="requestJoinGroupContent__body">
          {/* <div className="requestJoinGroupContent__body__title">내가 속한 팀</div> */}
          {renderData && (
            <RequestJoinGroupList
              isGroupManagerModal={isGroupManagerModal}
              usersData={usersData}
              setIsModify={setIsModify}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AcceptMemberModal;
