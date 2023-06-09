import React, { useEffect, useState } from 'react';
import './GroupList.scss';
import GroupManagerModal from './GroupManagerModal/GroupManagerModal';
import { getGroupMembers } from '../GroupPageController';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../../constants/variants';

const GroupList = ({ joinedGroupData }) => {
  const [isGroupManagerModal, setIsGroupManagerModal] = useState(0);
  const [groupName, setGroupName] = useState('');
  const [groupId, setGroupId] = useState();
  const [groupMembersData, setGroupMembersData] = useState();

  const handleGroupItemClick = (name, id) => {
    setGroupName(name);
    setGroupId(id);
    getGroupMembers(id).then(result => {
      setGroupMembersData(result[1].data);
      console.log(result[1].data);
      setIsGroupManagerModal(id);
    });
  };
  return (
    <>
      <div className="joinedGroupListContainer">
        <div className="section">
          <motion.div
            className="joinedGroupList"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {joinedGroupData?.map(request => (
              <motion.div
                className="joinedGroupItem"
                key={request.group.id}
                onClick={() => {
                  handleGroupItemClick(
                    request.group.groupName,
                    request.group.id
                  );
                }}
                variants={itemVariants}
              >
                <div className="joinedGroupItem__image__box">
                  <img
                    className="joinedGroupItem__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>
                <div className="joinedGroupItem__text__wrapper">
                  <div className="joinedGroupItem__header">
                    <div className="joinedGroupItem__header__name">
                      {request.group.groupName}
                    </div>
                    <div className="joinedGroupItem__header__num">
                      {request.group.memberCount}/
                      {request.group.memberSizeLimit}
                    </div>
                  </div>
                  <div className="joinedGroupItem__text">
                    <div className="joinedGroupItem__label">
                      <p className="joinedGroupItem__label__text">
                        {request.group.gender}
                      </p>
                    </div>
                  </div>
                  <div className="joinedGroupItem__text">
                    <div className="joinedGroupItem__label">
                      <p className="joinedGroupItem__label__text">
                        {request.group.school}{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {isGroupManagerModal !== 0 && (
        <GroupManagerModal
          groupMembersData={groupMembersData}
          isGroupManagerModal={isGroupManagerModal}
          setIsGroupManagerModal={setIsGroupManagerModal}
          groupName={groupName}
          groupId={groupId}
        />
      )}
    </>
  );
};

export default GroupList;
