import React, { useEffect, useState } from 'react';
import './BlindFavoritePage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';
import {
  deleteBlindLikes,
  postBlindRequests,
  deleteBlindRequests,
} from '../../BlindReqFavPageController';
import { AiFillStar } from 'react-icons/ai';
import ErrorModal from '../../../../components/modal/errorModal/ErrorModal';

const FavoritePage = ({ blindLikesData, setIsModify }) => {
  const [isErrorModal, setIsErrorModal] = useState();

  const handleOnClickRequestButton = id => {
    console.log(id);
    postBlindRequests(id).then(result => {
      console.log(result);
      setIsModify(true);
      if (result[1].result.message.includes('The maximum number')) {
        setIsErrorModal('요청은 최대 5명까지 가능합니다.');
        setTimeout(() => {
          setIsErrorModal();
        }, 2000);
      }
    });
  };

  const handleOnClickRequestCancleButton = id => {
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

  return (
    <div className="favoriteContainer">
      {isErrorModal && <ErrorModal errorModalMessage={isErrorModal} />}
      <div className="section">
        <div className="favoriteHeader">
          <div className="favoriteHeader__text">찜 목록</div>
        </div>
        <motion.div
          className="favoriteList"
          transition={{ duration: 0.5 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blindLikesData.map(favorite => (
            <motion.div
              className="favoriteItem"
              key={favorite.id}
              variants={itemVariants}
            >
              {/* <div className="favoriteItem__image">
                <img
                  src={favorite.blindDateResponse.idealPhoto}
                  alt="user_img"
                />
              </div>

              <div className="favoriteItem__text__wrapper">
                <div className="favoriteItem__text__header">
                  {favorite.blindDateResponse.username}
                </div>
                <div className="favoriteItem__text">
                  <div className="favoriteItem__label">
                    <p className="favoriteItem__label__text">
                      {favorite.blindDateResponse.mbti}
                    </p>
                  </div>
                  <div className="favoriteItem__label">
                    <p className="favoriteItem__label__text">
                      {favorite.blindDateResponse.weight}{' '}
                    </p>
                  </div>
                </div>
                <div className="favoriteItem__text">
                  <div className="favoriteItem__label">
                    <p className="favoriteItem__label__text">
                      {favorite.blindDateResponse.height}{' '}
                    </p>
                  </div>
                </div>

                <div className="favoriteItem__major">
                  <p className="favoriteItem__major__text">
                    {favorite.blindDateResponse.major}
                  </p>
                </div>
              </div> */}
              <div className="favoriteItem__image__box">
                <img
                  className="favoriteItem__image"
                  src={favorite.blindDateResponse.idealPhoto}
                  alt="user"
                />
              </div>
              <div className="favoriteItem__text__wrapper">
                <div className="favoriteItem__text__header">
                  {favorite.blindDateResponse.username}
                </div>
                <div className="favoriteItem__text">
                  <div className="favoriteItem__label">
                    <p className="favoriteItem__label__text">
                      {favorite.blindDateResponse.mbti}
                    </p>
                  </div>
                  <div className="favoriteItem__label">
                    <p className="favoriteItem__label__text">
                      {favorite.blindDateResponse.weight}{' '}
                    </p>
                  </div>
                </div>
                <div className="favoriteItem__text">
                  <div className="favoriteItem__label">
                    <p className="favoriteItem__label__text">
                      {favorite.blindDateResponse.height}{' '}
                    </p>
                  </div>
                </div>

                <div className="favoriteItem__major">
                  <p className="favoriteItem__major__text">
                    {favorite.blindDateResponse.major}
                  </p>
                </div>
              </div>
              <div className="favoriteItem__button__wrapper">
                <button
                  className="favoriteItem__button__fav"
                  onClick={() => {
                    handleOnClickDeleteFavoriteButton(
                      favorite.blindDateResponse.id
                    );
                  }}
                >
                  <AiFillStar />
                </button>
                {favorite.requestStatus === 'DISABLED' ? (
                  <button
                    className="favoriteItem__button__text"
                    style={{ backgroundColor: '#ebebeb' }}
                  >
                    매칭됨
                  </button>
                ) : favorite.requestStatus === 'EMPTY' ? (
                  <button
                    className="favoriteItem__button__text"
                    onClick={() => {
                      handleOnClickRequestButton(favorite.blindDateResponse.id);
                    }}
                  >
                    요청
                  </button>
                ) : (
                  <button
                    className="favoriteItem__button__text"
                    onClick={() => {
                      handleOnClickRequestCancleButton(
                        favorite.blindDateResponse.id
                      );
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

export default FavoritePage;
