import React from 'react';
import './LoginPage.scss';
// import './RequestPage.scss';

const LoginPage = () => {
  const Rest_api_key = '5aa83782d08252a734f65e2b72a6efbb'; //REST API KEY
  const redirect_uri = 'http://localhost:3000'; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className="loginContainer">
      <div className="LogoImageWrapper">
        <img src="assets/images/TING.png" alt="logo" />
      </div>
      <div className="loginText">솔로인 대학생들을 위한 과팅 & 소개팅 어플</div>
      <div className="socailLoginWrapper">
        <div className="socailLoginBtnWrapper">
          <button className="socailLoginBtn" onClick={handleLogin}>
            <img src="assets/images/user.png" alt="kakao" />
            <p>카카오로 로그인 하기</p>
          </button>
          {/* <button className="socailLoginBtn">
            <img src="assets/images/user.png" alt="naver" />
            <p>네이버로 로그인 하기</p>
          </button>
          <button className="socailLoginBtn">
            <img src="assets/images/user.png" alt="google" />
            <p>구글로 로그인 하기</p>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
