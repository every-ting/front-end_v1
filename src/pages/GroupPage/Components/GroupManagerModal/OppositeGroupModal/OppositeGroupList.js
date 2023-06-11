import React, { useEffect, useState } from 'react';
import './OppositeGroupList.scss';
// import { getBlindUsers } from '../OppositeGroupPageController';
import { AiOutlineStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../../constants/variants';
import {
  postGroupToGroupLikes,
  deleteGroupToGroupLikes,
} from '../../../GroupPageController';

const OppositeGroupList = ({
  isGroupManagerModal,
  oppositeGroupsData,
  setIsModify,
  groupId,
}) => {
  const onClickFavoriteButton = toGroupId => {
    postGroupToGroupLikes(groupId, toGroupId)
      .then(res => {
        setIsModify(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onDeleteFavoriteButton = toGroupId => {
    deleteGroupToGroupLikes(groupId, toGroupId)
      .then(res => {
        setIsModify(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="oppositeGroupListContainer">
        <div className="section">
          <motion.div
            className="oppositeGroupList"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <div className="oppositeGroupHeader">
              <div className="oppositeGroupHeader__text">내가 속한 팀</div>
            </div> */}
            {oppositeGroupsData?.content?.map(data => (
              <motion.div
                className="oppositeGroupItem"
                key={data?.id}
                variants={itemVariants}
              >
                <div className="oppositeGroupItem__image__box">
                  <img
                    className="oppositeGroupItem__image"
                    src={data.group.idealPhoto}
                    alt="user"
                  />
                </div>

                <div className="oppositeGroupItem__text__wrapper">
                  <div className="oppositeGroupItem__header">
                    <div className="oppositeGroupItem__header__name">
                      {data.group.groupName}
                    </div>
                  </div>
                  <div className="oppositeGroupItem__mid__box">
                    <div className="oppositeGroupItem__text__box">
                      <div className="oppositeGroupItem__text">
                        <div className="oppositeGroupItem__label">
                          <p className="oppositeGroupItem__label__text">
                            {data?.group?.school}
                          </p>{' '}
                        </div>
                        <div className="oppositeGroupItem__label">
                          <p className="oppositeGroupItem__label__text">
                            나이 : {data?.group?.averageAgeOfMembers}
                          </p>
                        </div>
                      </div>
                      <div className="oppositeGroupItem__text">
                        <div className="oppositeGroupItem__label">
                          <p className="oppositeGroupItem__label__text">
                            {data?.group?.majorsOfMembers[0]}{' '}
                          </p>
                        </div>
                        <div className="oppositeGroupItem__label">
                          <p className="oppositeGroupItem__label__text">
                            {data?.group?.majorsOfMembers[1]}{' '}
                          </p>
                        </div>
                        <div className="oppositeGroupItem__label">
                          <p className="oppositeGroupItem__label__text">
                            {data?.group?.majorsOfMembers[2]}{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    <div className="oppositeGroupItem__button__wrapper">
                      {data?.likeStatus === 'LIKED' ? (
                        <button
                          className="oppositeGroupItem__button__text"
                          onClick={() => {
                            onDeleteFavoriteButton(data?.group?.id);
                          }}
                        >
                          찜 취소
                        </button>
                      ) : (
                        <button
                          className="oppositeGroupItem__button__text"
                          onClick={() => {
                            onClickFavoriteButton(data?.group?.id);
                          }}
                        >
                          찜하기
                        </button>
                      )}
                    </div>
                  </div>

                  {/* <div className="oppositeGroupItem__major">
                    <p className="oppositeGroupItem__major__text">
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

export default OppositeGroupList;
