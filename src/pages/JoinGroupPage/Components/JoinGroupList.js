import React, { useEffect, useState } from 'react';
import './JoinGroupList.scss';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../../constants/variants';

const JoinGroupList = ({ groupData }) => {
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
                    src="assets/images/user.png"
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
                  <div className="groupItem__text">
                    <div className="groupItem__label">
                      <p className="groupItem__label__text">
                        {request.group.gender}
                      </p>
                    </div>
                  </div>
                  <div className="groupItem__text">
                    <div className="groupItem__label">
                      <p className="groupItem__label__text">
                        {request.group.school}{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="groupItem__button">
                  <button className="acceptBtn">request</button>
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
