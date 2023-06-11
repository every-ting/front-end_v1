import React from 'react';
import './BlindRequestPage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';
import {
  putBlindRequestsReject,
  putBlindRequestsAccept,
  deleteBlindRequests,
  deleteBlindLikes,
  postBlindLikes,
} from '../../BlindReqFavPageController';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const RequestPage = ({
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

  const handleOnClickDeleteFavoriteButton = id => {
    console.log(id);
    deleteBlindLikes(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickFavoriteButton = id => {
    console.log(id);
    postBlindLikes(id).then(result => {
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

              <div className="blindDateItem__text__wrapper">
                <div className="blindDateItem__text__header">
                  {request.blindRequestResponse.username}
                </div>
                <div className="blindDateItem__text">
                  <div className="blindDateItem__label">
                    <p className="blindDateItem__label__text">
                      {request.blindRequestResponse.mbti}
                    </p>
                  </div>
                  <div className="blindDateItem__label">
                    <p className="blindDateItem__label__text">
                      {request.blindRequestResponse.weight}{' '}
                    </p>
                  </div>
                </div>
                <div className="blindDateItem__text">
                  <div className="blindDateItem__label">
                    <p className="blindDateItem__label__text">
                      {request.blindRequestResponse.height}{' '}
                    </p>
                  </div>
                </div>

                <div className="blindDateItem__major">
                  <p className="blindDateItem__major__text">
                    {request.blindRequestResponse.major}
                  </p>
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
          className="spendBlindRequestList"
          transition={{ duration: 0.5 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="spendBlindRequestHeader">
            <div className="spendBlindRequestHeader__text">보낸 요청</div>
          </div>
          {sendBlindRequestsData.map(request => (
            <motion.div
              className="spendBlindRequestItem"
              key={request.blindRequestResponse.id}
              variants={itemVariants}
            >
              <div className="spendBlindRequestItem__image">
                <img src={request.blindRequestResponse.idealPhoto} alt="user" />
              </div>

              <div className="blindDateItem__text__wrapper">
                <div className="blindDateItem__text__header">
                  {request.blindRequestResponse.username}
                </div>
                <div className="blindDateItem__text">
                  <div className="blindDateItem__label">
                    <p className="blindDateItem__label__text">
                      {request.blindRequestResponse.mbti}
                    </p>
                  </div>
                  <div className="blindDateItem__label">
                    <p className="blindDateItem__label__text">
                      {request.blindRequestResponse.weight}{' '}
                    </p>
                  </div>
                </div>
                <div className="blindDateItem__text">
                  <div className="blindDateItem__label">
                    <p className="blindDateItem__label__text">
                      {request.blindRequestResponse.height}{' '}
                    </p>
                  </div>
                </div>

                <div className="blindDateItem__major">
                  <p className="blindDateItem__major__text">
                    {request.blindRequestResponse.major}
                  </p>
                </div>
              </div>
              <div className="blindDateItem__button__wrapper">
                {request.likeStatus === 'LIKED' ? (
                  <button
                    className="blindDateItem__button__fav"
                    onClick={() => {
                      handleOnClickDeleteFavoriteButton(
                        request.blindRequestResponse.id
                      );
                    }}
                  >
                    <AiFillStar />
                  </button>
                ) : (
                  <button
                    className="blindDateItem__button__fav"
                    onClick={() => {
                      handleOnClickFavoriteButton(
                        request.blindRequestResponse.id
                      );
                    }}
                  >
                    <AiOutlineStar />
                  </button>
                )}

                <div
                  className="spendBlindRequestItem__button"
                  onClick={() => {
                    handleOnClickDeleteRequestButton(
                      request.blindRequestResponse.userId
                    );
                  }}
                >
                  <button className="cancelBtn">취소</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RequestPage;
