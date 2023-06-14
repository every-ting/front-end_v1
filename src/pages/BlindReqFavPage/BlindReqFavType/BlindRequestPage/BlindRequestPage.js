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
              {/* <div className="reciveRequestItem__image">
                <img src={request.blindRequestResponse.idealPhoto} alt="user" />
              </div>

              <div className="reciveRequestItem__text__wrapper">
                <div className="reciveRequestItem__text__header">
                  {request.blindRequestResponse.username}
                </div>
                <div className="reciveRequestItem__text">
                  <div className="reciveRequestItem__label">
                    <p className="reciveRequestItem__label__text">
                      {request.blindRequestResponse.mbti}
                    </p>
                  </div>
                  <div className="reciveRequestItem__label">
                    <p className="reciveRequestItem__label__text">
                      {request.blindRequestResponse.weight}{' '}
                    </p>
                  </div>
                </div>
                <div className="reciveRequestItem__text">
                  <div className="reciveRequestItem__label">
                    <p className="reciveRequestItem__label__text">
                      {request.blindRequestResponse.height}{' '}
                    </p>
                  </div>
                </div>

                <div className="reciveRequestItem__major">
                  <p className="reciveRequestItem__major__text">
                    {request.blindRequestResponse.major}
                  </p>
                </div>
              </div> */}
              <div className="reciveRequestItem__image__box">
                <img
                  className="reciveRequestItem__image"
                  src={request.blindRequestResponse.idealPhoto}
                  alt="user"
                />
              </div>
              <div className="reciveRequestItem__text__wrapper">
                <div className="reciveRequestItem__text__header">
                  {request.blindRequestResponse.username}
                </div>
                <div className="reciveRequestItem__text">
                  <div className="reciveRequestItem__label">
                    <p className="reciveRequestItem__label__text">
                      {request.blindRequestResponse.mbti}
                    </p>
                  </div>
                  <div className="reciveRequestItem__label">
                    <p className="reciveRequestItem__label__text">
                      {request.blindRequestResponse.weight}{' '}
                    </p>
                  </div>
                </div>
                <div className="reciveRequestItem__text">
                  <div className="reciveRequestItem__label">
                    <p className="reciveRequestItem__label__text">
                      {request.blindRequestResponse.height}{' '}
                    </p>
                  </div>
                </div>

                <div className="reciveRequestItem__major">
                  <p className="reciveRequestItem__major__text">
                    {request.blindRequestResponse.major}
                  </p>
                </div>
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
              <div className="spendRequestItem__image__box">
                <img
                  className="spendRequestItem__image"
                  src={request.blindRequestResponse.idealPhoto}
                  alt="user"
                />
              </div>
              <div className="spendRequestItem__text__wrapper">
                <div className="spendRequestItem__text__header">
                  {request.blindRequestResponse.username}
                </div>
                <div className="spendRequestItem__text">
                  <div className="spendRequestItem__label">
                    <p className="spendRequestItem__label__text">
                      {request.blindRequestResponse.mbti}
                    </p>
                  </div>
                  <div className="spendRequestItem__label">
                    <p className="spendRequestItem__label__text">
                      {request.blindRequestResponse.weight}{' '}
                    </p>
                  </div>
                </div>
                <div className="spendRequestItem__text">
                  <div className="spendRequestItem__label">
                    <p className="spendRequestItem__label__text">
                      {request.blindRequestResponse.height}{' '}
                    </p>
                  </div>
                </div>

                <div className="spendRequestItem__major">
                  <p className="spendRequestItem__major__text">
                    {request.blindRequestResponse.major}
                  </p>
                </div>
              </div>
              <div className="spendRequestItem__button__wrapper">
                {request.likeStatus === 'LIKED' ? (
                  <button
                    className="spendRequestItem__button__fav"
                    onClick={() => {
                      handleOnClickDeleteFavoriteButton(
                        request.blindRequestResponse.userId
                      );
                    }}
                  >
                    <AiFillStar />
                  </button>
                ) : (
                  <button
                    className="spendRequestItem__button__fav"
                    onClick={() => {
                      handleOnClickFavoriteButton(
                        request.blindRequestResponse.userId
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
                  <button className="spendRequestItem__button__cancle">
                    취소
                  </button>
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
