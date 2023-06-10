import React, { useEffect } from 'react';
import './GroupFavoritePage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';
import { deleteBlindLikes } from '../../GroupReqFavPageController';

const GroupFavoritePage = ({ groupLikesData, setIsModify }) => {
  console.log(groupLikesData);
  const handleOnClickDeleteFavoriteButton = () => {
    deleteBlindLikes().then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  return (
    <div className="favoriteContainer">
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
          {groupLikesData.content.map(favorite => (
            <motion.div
              className="favoriteItem"
              key={favorite.group.id}
              variants={itemVariants}
            >
              <div className="spendFavoriteItem__text">
                <div className="spendFavoriteItem__text__wrapper">
                  <div className="spendFavoriteItem__header">
                    <div className="spendFavoriteItem__header__name">
                      {favorite.group.groupName}
                    </div>
                    <div className="spendFavoriteItem__header__num">
                      {favorite.group.memberCount}/
                      {favorite.group.memberSizeLimit}
                    </div>
                  </div>
                  <div className="spendFavoriteItem__text">
                    <div className="spendFavoriteItem__label">
                      <p className="spendFavoriteItem__label__text">
                        {favorite.group.gender}
                      </p>
                    </div>
                  </div>
                  <div className="spendFavoriteItem__text">
                    <div className="spendFavoriteItem__label">
                      <p className="spendFavoriteItem__label__text">
                        {favorite.group.school}{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="favoriteItem__button"
                onClick={() => {
                  handleOnClickDeleteFavoriteButton();
                }}
              >
                <button className="denyBtn">취소</button>
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
