import React, { useEffect, useState } from 'react';
import './GroupReqList.scss';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {
  itemVariants,
  containerVariants,
} from '../../../../../constants/variants';
import {
  postGroupLeaderReqsAccept,
  deleteGroupLeaderReqReject,
} from '../../../GroupPageController';

const GroupReqList = ({
  isGroupManagerModal,
  groupReqsData,
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

  const onClickAcceptReq = groupDateRequestId => {
    console.log('groupDateRequestId', groupDateRequestId);
    postGroupLeaderReqsAccept(groupDateRequestId)
      .then(res => {
        setIsModify(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onClickRejectReq = groupDateRequestId => {
    console.log('groupDateRequestId', groupDateRequestId);

    deleteGroupLeaderReqReject(groupDateRequestId)
      .then(res => {
        setIsModify(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="groupReqListContainer">
        <div className="section">
          <motion.div
            className="groupReqList"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <div className="groupReqHeader">
              <div className="groupReqHeader__text">내가 속한 팀</div>
            </div> */}
            {groupReqsData?.content?.map(data => (
              <motion.div
                className="groupReqItem"
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
                          onClickAcceptReq(data?.groupDateRequestId);
                        }}
                      >
                        수락
                      </button>
                      <button
                        className="groupFavLikeItem__button__text"
                        onClick={() => {
                          onClickRejectReq(data?.groupDateRequestId);
                        }}
                      >
                        거절
                      </button>
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

export default GroupReqList;
