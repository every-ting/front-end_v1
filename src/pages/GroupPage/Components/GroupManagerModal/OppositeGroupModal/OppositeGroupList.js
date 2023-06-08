import React, { useEffect, useState } from 'react';
import './OppositeGroupList.scss';
// import { getBlindUsers } from '../OppositeGroupPageController';
import { AiOutlineStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../../constants/variants';

const OppositeGroupList = ({ isGroupManagerModal, oppositeGroupsData }) => {
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
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>

                <div className="oppositeGroupItem__text__wrapper">
                  <div className="oppositeGroupItem__header">
                    <div className="oppositeGroupItem__header__name">
                      {data.group.groupName}
                    </div>
                    <div className="oppositeGroupItem__header__num">
                      {data.group.memberCount}/{data.group.memberSizeLimit}
                    </div>
                  </div>

                  <div className="oppositeGroupItem__text">
                    <div className="oppositeGroupItem__label">
                      <p className="oppositeGroupItem__label__text">
                        {data?.group?.averageAgeOfMembers}
                      </p>
                    </div>
                    <div className="oppositeGroupItem__label">
                      <p className="oppositeGroupItem__label__text">
                        {data?.group?.majorsOfMembers[0]}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="oppositeGroupItem__text">
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

                  <div className="oppositeGroupItem__major">
                    <p className="oppositeGroupItem__major__text">
                      {data?.group?.school}
                    </p>
                  </div>
                </div>
                <div className="oppositeGroupItem__button__wrapper">
                  <button className="oppositeGroupItem__button__fav">
                    <AiOutlineStar />
                  </button>
                  <button className="oppositeGroupItem__button__text">
                    요청
                  </button>
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
