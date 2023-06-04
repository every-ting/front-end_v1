import React from 'react';
import './GroupManagerNav.scss';

const GroupManagerNav = ({ index, setIndex }) => {
  console.log(index);

  const onClickHandler = index => {
    setIndex(index);
  };

  return (
    <>
      <div className="groupManagerNavWrapper">
        <div className="groupManagerNavContainer">
          <div className="groupManagerNavProgressBar" />
          <div
            className="groupManagerNavActiveProgressBar"
            style={{
              transition: 'all 0.5s ease-in-out',
              marginLeft: `${index * 25}vw`,
            }}
          />
          <div className="groupManagerNavMenu">
            <div
              className="groupManagerNavItem"
              onClick={() => {
                onClickHandler(0);
              }}
            >
              <p className="groupManagerNavItemText">팀</p>
            </div>
            <div
              className="groupManagerNavItem"
              onClick={() => {
                onClickHandler(1);
              }}
            >
              {' '}
              <p className="groupManagerNavItemText">상대팀 확인</p>
            </div>
            <div
              className="groupManagerNavItem"
              onClick={() => {
                onClickHandler(2);
              }}
            >
              {' '}
              <p className="groupManagerNavItemText">찜한 목록</p>
            </div>
            <div
              className="groupManagerNavItem"
              onClick={() => {
                onClickHandler(3);
              }}
            >
              {' '}
              <p className="groupManagerNavItemText">채팅방</p>
            </div>
          </div>
        </div>
        <div className="groupManagerNavBottomGap" />
      </div>
    </>
  );
};

export default GroupManagerNav;
