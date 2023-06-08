import React, { useEffect, useState } from 'react';
import './GroupReqList.scss';
// import { getBlindUsers } from '../GroupReqPageController';
import { AiOutlineStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {
  itemVariants,
  containerVariants,
} from '../../../../../constants/variants';

const GroupReqList = ({ isGroupManagerModal, groupReqsData }) => {
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
                <div className="groupReqItem__image__box">
                  <img
                    className="groupReqItem__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>

                <div className="groupReqItem__text__wrapper">
                  <div className="groupReqItem__header">
                    <div className="groupReqItem__header__name">
                      {data.group.groupName}
                    </div>
                    <div className="groupReqItem__header__num">
                      {data.group.memberCount}/{data.group.memberSizeLimit}
                    </div>
                  </div>

                  <div className="groupReqItem__text">
                    <div className="groupReqItem__label">
                      <p className="groupReqItem__label__text">
                        {data?.group?.averageAgeOfMembers}
                      </p>
                    </div>
                    <div className="groupReqItem__label">
                      <p className="groupReqItem__label__text">
                        {data?.group?.majorsOfMembers[0]}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="groupReqItem__text">
                    <div className="groupReqItem__label">
                      <p className="groupReqItem__label__text">
                        {data?.group?.majorsOfMembers[1]}{' '}
                      </p>
                    </div>
                    <div className="groupReqItem__label">
                      <p className="groupReqItem__label__text">
                        {data?.group?.majorsOfMembers[2]}{' '}
                      </p>
                    </div>
                  </div>

                  <div className="groupReqItem__major">
                    <p className="groupReqItem__major__text">
                      {data?.group?.school}
                    </p>
                  </div>
                </div>
                <div className="groupReqItem__button__wrapper">
                  <button className="groupReqItem__button__req">
                    <AiOutlineStar />
                  </button>
                  <button className="groupReqItem__button__text">요청</button>
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
