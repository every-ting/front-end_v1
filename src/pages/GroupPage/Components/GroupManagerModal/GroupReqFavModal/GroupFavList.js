import React, { useEffect, useState } from 'react';
import './GroupFavList.scss';
// import { getBlindUsers } from '../GroupFavLikePageController';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {
  itemVariants,
  containerVariants,
} from '../../../../../constants/variants';
import {
  deleteGroupToGroupLikes,
  deleteGroupToGroupReqs,
  postGroupToGroupReqs,
} from '../../../GroupPageController';

const GroupFavList = ({
  isGroupManagerModal,
  groupFavLikesData,
  setIsModify,
  groupId,
}) => {
  const outLineStarCount = count => {
    let array = [];
    for (let i = 0; i < count; i++) {
      array.push(<HiOutlineStar />);
    }
    return array;
  };

  const solidStarCount = count => {
    let array = [];
    for (let i = 0; i < count; i++) {
      array.push(<HiStar />);
    }
    return array;
  };

  const onClickDeleteLikes = toGroupId => {
    deleteGroupToGroupLikes(groupId, toGroupId)
      .then(res => {
        setIsModify(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onCLickPostReq = toGroupId => {
    postGroupToGroupReqs(groupId, toGroupId)
      .then(res => {
        setIsModify(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onClickDeleteReq = toGroupId => {
    deleteGroupToGroupReqs(groupId, toGroupId)
      .then(res => {
        setIsModify(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="groupFavLikeListContainer">
        <div className="section">
          <motion.div
            className="groupFavLikeList"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <div className="groupFavLikeHeader">
              <div className="groupFavLikeHeader__text">내가 속한 팀</div>
            </div> */}
            {groupFavLikesData?.content?.map(data => (
              <motion.div
                className="groupFavLikeItem"
                key={data?.id}
                variants={itemVariants}
              >
                <div className="groupFavLikeItem__image__box">
                  <img
                    className="groupFavLikeItem__image"
                    src={data.group.idealPhoto}
                    alt="user"
                  />
                </div>

                <div className="groupFavLikeItem__text__wrapper">
                  <div className="groupFavLikeItem__header">
                    <div className="groupFavLikeItem__header__name">
                      {data.group.groupName}
                    </div>
                    <div className="groupFavLikeItem__header__star">
                      {solidStarCount(data.likeCount)}
                      {outLineStarCount(
                        data.group.memberSizeLimit - data.likeCount
                      )}
                    </div>
                  </div>
                  <div className="groupFavLikeItem__mid__box">
                    <div className="groupFavLikeItem__text__box">
                      <div className="groupFavLikeItem__text">
                        <div className="groupFavLikeItem__label">
                          <p className="groupFavLikeItem__label__text">
                            {data?.group?.school}
                          </p>{' '}
                        </div>
                        <div className="groupFavLikeItem__label">
                          <p className="groupFavLikeItem__label__text">
                            나이 : {data?.group?.averageAgeOfMembers}
                          </p>
                        </div>
                      </div>
                      <div className="groupFavLikeItem__text">
                        <div className="groupFavLikeItem__label">
                          <p className="groupFavLikeItem__label__text">
                            {data?.group?.majorsOfMembers[0]}{' '}
                          </p>
                        </div>
                        <div className="groupFavLikeItem__label">
                          <p className="groupFavLikeItem__label__text">
                            {data?.group?.majorsOfMembers[1]}{' '}
                          </p>
                        </div>
                        <div className="groupFavLikeItem__label">
                          <p className="groupFavLikeItem__label__text">
                            {data?.group?.majorsOfMembers[2]}{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    <div className="groupFavLikeItem__button__wrapper">
                      <button
                        className="groupFavLikeItem__button__fav"
                        onClick={() => {
                          onClickDeleteLikes(data?.group?.id);
                        }}
                      >
                        찜 취소
                      </button>
                      {data?.requestStatus === 'DISABLED' ? (
                        <button
                          className="groupFavLikeItem__button__text"
                          style={{
                            backgroundColor: '#e9ecef',
                          }}
                        >
                          요청 하기
                        </button>
                      ) : data?.requestStatus === 'EMPTY' ? (
                        <button
                          className="groupFavLikeItem__button__text"
                          onClick={() => {
                            onCLickPostReq(data?.group?.id);
                          }}
                        >
                          요청 하기
                        </button>
                      ) : (
                        <button
                          className="groupFavLikeItem__button__text"
                          onClick={() => {
                            onClickDeleteReq(data?.group?.id);
                          }}
                        >
                          요청 취소
                        </button>
                      )}
                    </div>
                  </div>

                  {/* <div className="groupFavLikeItem__major">
                    <p className="groupFavLikeItem__major__text">
                      {data?.group?.school}
                    </p>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GroupFavList;
