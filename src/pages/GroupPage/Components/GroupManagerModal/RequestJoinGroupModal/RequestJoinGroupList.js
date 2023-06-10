import React from 'react';
import './RequestJoinGroupList.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../../constants/variants';

import {
  postAcceptJoinRequestsGroup,
  deleteRejectJoinRequestsGroup,
} from '../../../GroupPageController';

const RequestJoinGroupList = ({
  isGroupManagerModal,
  usersData,
  setIsModify,
}) => {
  const handleOnClickAcceptButton = id => {
    console.log(id);
    postAcceptJoinRequestsGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickRejectButton = id => {
    console.log(id);
    deleteRejectJoinRequestsGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  return (
    <>
      <div className="requestJoinGroupListContainer">
        <div className="section">
          <motion.div
            className="requestJoinGroupList"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <div className="requestJoinGroupHeader">
              <div className="requestJoinGroupHeader__text">내가 속한 팀</div>
            </div> */}
            {usersData?.map(request => (
              <motion.div
                className="requestJoinGroupItem"
                key={request.id}
                variants={itemVariants}
              >
                <div className="requestJoinGroupItem__image__box">
                  <img
                    className="requestJoinGroupItem__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>
                <div className="requestJoinGroupItem__text__wrapper">
                  <div className="requestJoinGroupItem__text">
                    <div className="requestJoinGroupItem__label">
                      <p className="requestJoinGroupItem__label__text">
                        {request.user.mbti}
                      </p>
                    </div>
                    <div className="requestJoinGroupItem__label">
                      <p className="requestJoinGroupItem__label__text">
                        {request.user.weight}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="requestJoinGroupItem__text">
                    <div className="requestJoinGroupItem__label">
                      <p className="requestJoinGroupItem__label__text">
                        {request.user.height}{' '}
                      </p>
                    </div>
                  </div>

                  <div className="requestJoinGroupItem__major">
                    <p className="requestJoinGroupItem__major__text">
                      {request.user.major}
                    </p>
                  </div>
                </div>
                <div className="requestJoinGroupItem__button__wrapper">
                  <button className="requestJoinGroupItem__button__fav">
                    <AiOutlineStar />
                  </button>
                  <div className="requestJoinGroupItem__button">
                    <button
                      className="acceptBtn"
                      onClick={() => {
                        handleOnClickAcceptButton(request.id);
                      }}
                    >
                      수락
                    </button>
                    <button
                      className="denyBtn"
                      onClick={() => {
                        handleOnClickRejectButton(request.id);
                      }}
                    >
                      거절
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RequestJoinGroupList;
