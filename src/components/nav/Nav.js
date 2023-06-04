import React from 'react';
import './Nav.scss';
import { BsChatDots } from 'react-icons/bs';
import { isMobile } from 'react-device-detect';
import { IoPersonOutline, IoPeopleOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div
        className="navWrapper"
        style={{
          maxWidth: isMobile ? 'none' : '430px',
          position: isMobile ? 'fixed' : 'unset',
        }}
      >
        <div className="navContainer">
          <div className="navMenu">
            <Link to="/group" className="navMenuList">
              <IoPeopleOutline />
              <p className="navMenuText">과팅</p>
            </Link>
            <Link to="/blindDate" className="navMenuList">
              <IoPersonOutline />
              <p className="navMenuText">소개팅</p>
            </Link>
            <Link to="/" className="navLogo">
              <img src="assets/images/TING.png" alt="logo" />
            </Link>

            <Link to="/chat" className="navMenuList">
              <BsChatDots />
              <p className="navMenuText">채팅</p>
            </Link>
            <Link to="/setting" className="navMenuList">
              <AiOutlineSetting />
              <p className="navMenuText">설정</p>
            </Link>
          </div>
        </div>
        <div className="navBottomGap" />
      </div>
    </>
  );
};

export default Nav;
