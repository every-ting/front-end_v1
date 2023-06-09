import React from 'react';
import './GroupRequestPage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';
import {
  putBlindRequestsReject,
  putBlindRequestsAccept,
  deleteBlindRequests,
} from '../../GroupReqFavPageController';

const GroupRequestPage = ({
  receivedBlindRequestsData,
  sendBlindRequestsData,
  setIsModify,
}) => {
  const handleOnClickAcceptButton = id => {
    console.log(id);
    putBlindRequestsAccept(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickRejectButton = id => {
    console.log(id);
    putBlindRequestsReject(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickDeleteRequestButton = id => {
    console.log(id);
    deleteBlindRequests(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  return (
    <div className="requestContainer">
      <div className="section">
        <motion.div
          className="reciveRequestList"
          transition={{ duration: 0.5 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="reciveRequestHeader">
            <div className="reciveRequestHeader__text">받은 요청</div>
          </div>
          {receivedBlindRequestsData?.map(request => (
            <motion.div
              className="reciveRequestItem"
              key={request.blindRequestResponse.id}
              variants={itemVariants}
            >
              <div className="reciveRequestItem__image">
                <img src={request.blindRequestResponse.idealPhoto} alt="user" />
              </div>
              <div className="reciveRequestItem__text">
                <div className="reciveRequestItem__name">
                  {request.blindRequestResponse.username}
                </div>
                {/* <div className="reciveRequestItem__age">{request.blindRequestResponse.age}</div> */}
              </div>
              <div className="reciveRequestItem__button">
                <button
                  className="acceptBtn"
                  onClick={() => {
                    handleOnClickAcceptButton(request.blindRequestResponse.id);
                  }}
                >
                  수락
                </button>
                <button
                  className="denyBtn"
                  onClick={() => {
                    handleOnClickRejectButton(request.blindRequestResponse.id);
                  }}
                >
                  거절
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="spendRequestList"
          transition={{ duration: 0.5 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="spendRequestHeader">
            <div className="spendRequestHeader__text">보낸 요청</div>
          </div>
          {sendBlindRequestsData.map(request => (
            <motion.div
              className="spendRequestItem"
              key={request.blindRequestResponse.id}
              variants={itemVariants}
            >
              <div className="spendRequestItem__image">
                <img src={request.blindRequestResponse.idealPhoto} alt="user" />
              </div>
              <div className="spendRequestItem__text">
                <div className="spendRequestItem__name">
                  {request.blindRequestResponse.username}
                </div>
                {/* <div className="spendRequestItem__age">{request.blindRequestResponse.age}</div> */}
              </div>
              <div
                className="spendRequestItem__button"
                onClick={() => {
                  handleOnClickDeleteRequestButton(
                    request.blindRequestResponse.userId
                  );
                }}
              >
                <button className="cancelBtn">취소</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GroupRequestPage;
