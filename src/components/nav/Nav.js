import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="navWrapper">
      <div className="navContainer">
        <div className="navMenu">
          <div className="navMenuList">과팅</div>
          <div className="navMenuList">소개팅</div>
          <div className="navLogo">Ting</div>
          <div className="navMenuList">요청</div>
          <div className="navMenuList">채팅</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
