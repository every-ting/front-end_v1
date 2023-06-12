import React, { useState, useEffect } from 'react';
import './ReqFavSectionToggle.scss';

const ReqFavSectionToggle = ({
  title,
  setSection,
  setActiveIndex,
  activeIndex,
}) => {
  const handleToggleClick = index => {
    setActiveIndex(index);
  };
  return (
    <div className="reqFavSectionToggleContainer">
      <div className="reqFavSectionToggle">
        <div
          className={`reqFavSectionToggleItem ${
            activeIndex === 0 ? 'active' : ''
          }`}
          onClick={() => handleToggleClick(0)}
        >
          <span>
            {title === 'groupDating'
              ? '과팅'
              : title === 'reqFav'
              ? '요청'
              : title === 'favReq'
              ? '찜'
              : null}
          </span>
        </div>
        <div
          className={`reqFavSectionToggleItem ${
            activeIndex === 1 ? 'active' : ''
          }`}
          onClick={() => handleToggleClick(1)}
        >
          <span>
            {title === 'groupDating'
              ? '소개팅'
              : title === 'reqFav'
              ? '찜'
              : title === 'favReq'
              ? '받은 요청'
              : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReqFavSectionToggle;
