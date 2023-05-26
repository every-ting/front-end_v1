import React from 'react';
import './FavoritePage.scss';
const FavoritePage = () => {
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
        {' '}
        <div classname="favoriteHeader">
          <div className="favoriteHeader__text">찜 목록</div>
        </div>
        <div className="favoriteList">
          {Favorites.map(favorite => (
            <div className="favoriteItem" key={favorite.id}>
              <div className="favoriteItem__image">
                <img src="assets/images/user.png" alt="user" />
              </div>
              <div className="favoriteItem__text">
                <div className="favoriteItem__name">{favorite.name}</div>
                <div className="favoriteItem__age">{favorite.age}</div>
              </div>
              <div className="favoriteItem__button">
                <button className="denyBtn">취소</button>
              </div>
            </div>
          ))}
        </div>
        <div className="recommendHeader">
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
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
