import React from 'react';
import './BlindRequestPage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';

const RequestPage = ({ receivedBlindRequestsData, sendBlindRequestsData }) => {
  const receiveRequests = [
    { id: 1, name: 'Hurin Seary', age: 24 },
    { id: 2, name: 'John Doe', age: 32 },
    { id: 3, name: 'Jane Smith', age: 27 },
  ];

  const spendRequests = [
    { id: 1, name: 'Hurin Seary', age: 24 },
    { id: 2, name: 'John Doe', age: 32 },
    { id: 3, name: 'Jane Smith', age: 27 },
  ];

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
              key={request.blindDateResponse.id}
              variants={itemVariants}
            >
              <div className="reciveRequestItem__image">
                <img src={request.blindDateResponse.idealPhoto} alt="user" />
              </div>
              <div className="reciveRequestItem__text">
                <div className="reciveRequestItem__name">
                  {request.blindDateResponse.username}
                </div>
                {/* <div className="reciveRequestItem__age">{request.blindDateResponse.age}</div> */}
              </div>
              <div className="reciveRequestItem__button">
                <button className="acceptBtn">수락</button>
                <button className="denyBtn">거절</button>
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
          <div classname="spendRequestHeader">
            <div className="spendRequestHeader__text">보낸 요청</div>
          </div>
          {sendBlindRequestsData.map(request => (
            <motion.div
              className="spendRequestItem"
              key={request.blindDateResponse.id}
              variants={itemVariants}
            >
              <div className="spendRequestItem__image">
                <img src={request.blindDateResponse.idealPhoto} alt="user" />
              </div>
              <div className="spendRequestItem__text">
                <div className="spendRequestItem__name">
                  {request.blindDateResponse.username}
                </div>
                {/* <div className="spendRequestItem__age">{request.blindDateResponse.age}</div> */}
              </div>
              <div className="spendRequestItem__button">
                <button className="cancelBtn">취소</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RequestPage;
