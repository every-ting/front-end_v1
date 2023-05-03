import React from 'react';
import './Nav.scss';
import { HiOutlineUserGroup } from 'react-icons/hi';
import {
  BsFillChatSquareHeartFill,
  BsFillChatDotsFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navWrapper">
      <div className="navContainer">
        <div className="navMenu">
          <Link to="/group" className="navMenuList">
            <HiOutlineUserGroup />
            <p className="navMenuText">과팅</p>
          </Link>
          <Link to="/date" className="navMenuList">
            <BsFillPersonFill />
            <p className="navMenuText">소개팅</p>
          </Link>
          <Link to="/" className="navLogo">
            Ting
          </Link>
          <Link to="/request" className="navMenuList">
            <BsFillChatSquareHeartFill />
            <p className="navMenuText">요청</p>
          </Link>
          <Link to="/chat" className="navMenuList">
            <BsFillChatDotsFill />
            <p className="navMenuText">채팅</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
