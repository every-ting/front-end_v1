import React from 'react';
import './BlindFavoritePage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';

const FavoritePage = ({ blindLikesData }) => {
  const Favorites = [
    { id: 1, name: 'Hurin Seary', age: 24 },
    { id: 2, name: 'John Doe', age: 32 },
    { id: 3, name: 'Jane Smith', age: 27 },
  ];

  const Recomends = [
    { id: 1, name: 'Hurin Seary', age: 24 },
    { id: 2, name: 'John Doe', age: 32 },
    { id: 3, name: 'Jane Smith', age: 27 },
  ];
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
          {blindLikesData.map(favorite => (
            <motion.div
              className="favoriteItem"
              key={favorite.id}
              variants={itemVariants}
            >
              <div className="favoriteItem__image">
                <img
                  src={favorite.blindDateResponse.idealPhoto}
                  alt="user_img"
                />
              </div>
              <div className="favoriteItem__text">
                <div className="favoriteItem__name">
                  {favorite.blindDateResponse.username}
                </div>
                <div className="favoriteItem__age">{favorite.age}</div>
              </div>
              <div className="favoriteItem__button">
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

export default FavoritePage;
