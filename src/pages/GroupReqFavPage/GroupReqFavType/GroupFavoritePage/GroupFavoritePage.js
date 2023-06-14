import React, { useEffect } from 'react';
import './GroupFavoritePage.scss';
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

const GroupFavoritePage = ({ groupLikesData, setIsModify }) => {
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
    <div className="groupFavoriteContainer">
      <div className="section">
        <div className="groupFavoriteHeader">
          <div className="groupFavoriteHeader__text">찜 목록</div>
        </div>
        <motion.div
          className="groupFavoriteList"
          transition={{ duration: 0.5 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {groupLikesData.content.map(favorite => (
            <motion.div
              className="groupFavoriteItem"
              key={favorite.group.id}
              variants={itemVariants}
            >
              <div className="groupItem__image__box">
                <img
                  className="groupItem__image"
                  src={favorite.group.idealPhoto}
                  alt="user"
                />
              </div>
              <div className="groupItem__text__wrapper">
                <div className="groupItem__header">
                  <div className="groupItem__header__name">
                    {favorite.group.groupName}
                  </div>
                  <div className="groupItem__header__num">
                    {favorite.group.memberCount}/
                    {favorite.group.memberSizeLimit}
                  </div>
                </div>

                <div className="groupItem__major">
                  <p className="groupItem__major__text">
                    {favorite.group.school}
                  </p>
                </div>
              </div>
              <div className="groupItem__button__wrapper">
                {favorite.likeStatus === 'NOT_LIKED' ? (
                  <button
                    className="groupItem__button__fav"
                    onClick={() => {
                      handleOnClickFavoriteButton(favorite.group.id);
                    }}
                  >
                    <AiOutlineStar />
                  </button>
                ) : (
                  <button
                    className="groupItem__button__fav"
                    onClick={() => {
                      handleOnClickFavoriteCancleButton(favorite.group.id);
                    }}
                  >
                    <AiFillStar />
                  </button>
                )}
                {favorite.requestStatus === 'EMPTY' ? (
                  <button
                    className="groupItem__button__text"
                    onClick={() => {
                      handleOnClickRequestButton(favorite.group.id);
                    }}
                  >
                    요청
                  </button>
                ) : (
                  <button
                    className="groupItem__button__text"
                    onClick={() => {
                      handleOnClickRequestCancleButton(favorite.group.id);
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
        {/* <div className="recommendHeader">
          <div className="recommendHeader__text">추천 목록</div>
        </div>
        <div className="recommendList">
          {Recomends.map(recomend => (
            <div className="recommendItem" key={recomend.id}>
              <div className="recommendItem__image">
                <img src="assets/images/user.png" alt="user" />
              </div>
              <div className="recommendItem__text">
                <div className="recommendItem__name">{recomend.name}</div>
                <div className="recommendItem__age">{recomend.age}</div>
              </div>
              <div className="recommendItem__button">
                <button className="acceptBtn">요청</button>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default GroupFavoritePage;
