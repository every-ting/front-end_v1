import React from 'react';
import './GroupRequestPage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';
import {
  postJoinRequestsGroup,
  deleteJoinRequestsGroup,
  postJoinLikesGroup,
  deleteJoinLikesGroup,
} from '../../GroupReqFavPageController';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const GroupRequestPage = ({ sendGroupsRequestsData, setIsModify }) => {
  const handleOnClickRequestButton = id => {
    console.log(id);
    postJoinRequestsGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
      // if (result[1].result.message.includes('The maximum number')) {
      //   // setIsErrorModal('요청은 최대 5명까지 가능합니다.');
      //   // setTimeout(() => {
      //   //   setIsErrorModal();
      //   // }, 2000);
      // }
    });
  };

  const handleOnClickRequestCancleButton = id => {
    console.log(id);
    deleteJoinRequestsGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickFavoriteButton = id => {
    console.log(id);
    postJoinLikesGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickFavoriteCancleButton = id => {
    console.log(id);
    deleteJoinLikesGroup(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  return (
    <div className="requestContainer">
      <div className="section">
        {/* <motion.div
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
        </motion.div> */}
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
          {sendGroupsRequestsData.map(request => (
            <motion.div
              className="spendRequestItem"
              key={request.id}
              variants={itemVariants}
            >
              <div className="groupItem__image__box">
                <img
                  className="groupItem__image"
                  src={request.group.idealPhoto}
                  alt="user"
                />
              </div>
              <div className="groupItem__text__wrapper">
                <div className="groupItem__header">
                  <div className="groupItem__header__name">
                    {request.group.groupName}
                  </div>
                  <div className="groupItem__header__num">
                    {request.group.memberCount}/{request.group.memberSizeLimit}
                  </div>
                </div>

                <div className="groupItem__major">
                  <p className="groupItem__major__text">
                    {request.group.school}
                  </p>
                </div>
              </div>
              <div className="groupItem__button__wrapper">
                {request.likeStatus === 'NOT_LIKED' ? (
                  <button
                    className="groupItem__button__fav"
                    onClick={() => {
                      handleOnClickFavoriteButton(request.group.id);
                    }}
                  >
                    <AiOutlineStar />
                  </button>
                ) : (
                  <button
                    className="groupItem__button__fav"
                    onClick={() => {
                      handleOnClickFavoriteCancleButton(request.group.id);
                    }}
                  >
                    <AiFillStar />
                  </button>
                )}
                {request.requestStatus === 'EMPTY' ? (
                  <button
                    className="groupItem__button__text"
                    onClick={() => {
                      handleOnClickRequestButton(request.group.id);
                    }}
                  >
                    요청
                  </button>
                ) : (
                  <button
                    className="groupItem__button__text"
                    onClick={() => {
                      handleOnClickRequestCancleButton(request.group.id);
                    }}
                    style={{ backgroundColor: '#FF0000' }}
                  >
                    취소
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GroupRequestPage;
