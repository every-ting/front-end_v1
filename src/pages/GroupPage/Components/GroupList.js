import React, { useEffect, useState } from 'react';
import './GroupList.scss';
import { getGroupsMy } from '../GroupPageController';
import { useNavigate } from 'react-router-dom';
import GroupManagerModal from './GroupManagerModal/GroupManagerModal';
import { getGroupMembers } from '../GroupPageController';
import { motion } from 'framer-motion';

const GroupList = () => {
  const [joinedGroupData, setJoinedGroupData] = useState();
  const [isGroupManagerModal, setIsGroupManagerModal] = useState(0);
  const [groupName, setGroupName] = useState('');
  const [groupMembersData, setGroupMembersData] = useState();

  const navigate = useNavigate();

  const groupList = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        ease: 'easeInOut',
        duration: 1,
      },
    },
  };

  const groupItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  // const joinedGroupData = [
  //   { id: 1, name: 'Hurin Seary', age: 24 },
  //   { id: 2, name: 'John Doe', age: 32 },
  //   { id: 3, name: 'Jane Smith', age: 27 },
  // ];
  useEffect(() => {
    getGroupsMy().then(result => {
      setJoinedGroupData(result[1].data);
    });
  }, []);

  const handleGroupItemClick = (name, id) => {
    setGroupName(name);
    getGroupMembers(id).then(result => {
      setGroupMembersData(result[1].data);
      console.log(result[1].data);
      setIsGroupManagerModal(id);
    });
  };
  return (
    <>
      <div className="groupListContainer">
        <div className="section">
          <motion.div className="joinedGroupList" variants={groupList}>
            {/* <div className="joinedGroupHeader">
              <div className="joinedGroupHeader__text">내가 속한 팀</div>
            </div> */}
            {joinedGroupData?.map(request => (
              <motion.div
                className="joinedGroupItem"
                key={request.id}
                onClick={() => {
                  handleGroupItemClick(request.groupName, request.id);
                }}
                variants={groupItem}
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
                      {request.groupName}
                    </div>
                    <div className="joinedGroupItem__header__num">
                      총 인원 : {request.numOfMember}
                    </div>
                  </div>
                  <div className="joinedGroupItem__text">
                    <div className="joinedGroupItem__label">
                      <p className="joinedGroupItem__label__text">
                        {request.gender}
                      </p>
                    </div>
                  </div>
                  <div className="joinedGroupItem__text">
                    <div className="joinedGroupItem__label">
                      <p className="joinedGroupItem__label__text">
                        {request.school}{' '}
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
        />
      )}
    </>
  );
};

export default GroupList;
