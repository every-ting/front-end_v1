import React, { useEffect, useState } from 'react';
import './JoinGroupList.scss';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../../constants/variants';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
// postJoinRequestsGroup: '/groups/requests',
// deleteJoinRequestsGroup: '/groups/requests',
// postJoinLikesGroup: '/groups/likes',
// deleteJoinLikesGroup: '/groups/likes',

import {
  postJoinRequestsGroup,
  deleteJoinRequestsGroup,
  postJoinLikesGroup,
  deleteJoinLikesGroup,
} from '../JoinGroupPageController';

const JoinGroupList = ({ groupData, setIsModify }) => {
  const handleOnClickRequestButton = id => {
    console.log(id);
    postJoinRequestsGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
      if (result[1].result.message.includes('The maximum number')) {
        // setIsErrorModal('요청은 최대 5명까지 가능합니다.');
        // setTimeout(() => {
        //   setIsErrorModal();
        // }, 2000);
      }
    });
  };

  const handleOnClickRequestCancleButton = id => {
    console.log(id);
    deleteJoinRequestsGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickFavoriteButton = id => {
    console.log(id);
    postJoinLikesGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickFavoriteCancleButton = id => {
    console.log(id);
    deleteJoinLikesGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  return (
    <>
      <div className="groupListContainer">
        <div className="section">
          <motion.div
            className="groupList"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {groupData?.map(request => (
              <motion.div
                className="groupItem"
                key={request.group.id}
                variants={itemVariants}
              >
                <div className="groupItem__image__box">
                  <img
                    className="groupItem__image"
                    src={request.group.idealPhoto}
                    alt="user"
                  />
                </div>
                <div className="groupItem__text__wrapper">
                  <div className="groupItem__header">
                    <div className="groupItem__header__name">
                      {request.group.groupName}
                    </div>
                    <div className="groupItem__header__num">
                      {request.group.memberCount}/
                      {request.group.memberSizeLimit}
                    </div>
                  </div>

                  <div className="groupItem__major">
                    <p className="groupItem__major__text">
                      {request.group.school}
                    </p>
                  </div>
                </div>
                <div className="groupItem__button__wrapper">
                  {request.likeStatus === 'NOT_LIKED' ? (
                    <button
                      className="groupItem__button__fav"
                      onClick={() => {
                        handleOnClickFavoriteButton(request.group.id);
                      }}
                    >
                      <HiOutlineStar />
                    </button>
                  ) : (
                    <button
                      className="groupItem__button__fav"
                      onClick={() => {
                        handleOnClickFavoriteCancleButton(request.group.id);
                      }}
                    >
                      <HiStar />
                    </button>
                  )}
                  {request.requestStatus === 'EMPTY' ? (
                    <button
                      className="groupItem__button__text"
                      onClick={() => {
                        handleOnClickRequestButton(request.group.id);
                      }}
                    >
                      요청
                    </button>
                  ) : (
                    <button
                      className="groupItem__button__text"
                      onClick={() => {
                        handleOnClickRequestCancleButton(request.group.id);
                      }}
                      style={{ backgroundColor: '#FF0000' }}
                    >
                      취소
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default JoinGroupList;
