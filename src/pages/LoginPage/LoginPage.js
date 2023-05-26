import React from 'react';
import './LoginPage.scss';
// import './RequestPage.scss';

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <div className="LogoImageWrapper">
        <img src="assets/images/logo.png" alt="logo" />
      </div>
      <div className="loginText">솔로인 대학생들을 위한 과팅 & 소개팅 어플</div>
      <div className="socailLoginWrapper">
        <div className="socailLoginBtnWrapper">
          <button className="socailLoginBtn">
            <img src="assets/images/user.png" alt="kakao" />
            <p>카카오로 로그인 하기</p>
          </button>
          <button className="socailLoginBtn">
            <img src="assets/images/user.png" alt="naver" />
            <p>네이버로 로그인 하기</p>
          </button>
          <button className="socailLoginBtn">
            <img src="assets/images/user.png" alt="google" />
            <p>구글로 로그인 하기</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
