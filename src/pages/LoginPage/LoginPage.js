import React, { useEffect } from 'react';
import './LoginPage.scss';
import { tingLogin } from './LoginPageController';
import { useNavigate } from 'react-router-dom';
// import './RequestPage.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const Rest_api_key = '5aa83782d08252a734f65e2b72a6efbb'; //REST API KEY
  const redirect_uri =
    'https://web-front-end-ting-dev-1t0824l6nsoimz.gksl1.cloudtype.app/login'; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  useEffect(() => {
    //url 에서 인가코드 받아오기
    const url = window.location.href;
    const code = url.split('=')[1];
    if (code === undefined) return;
    else {
      //인가코드로 토큰 받아오기
      tingLogin(code).then(result => {
        console.log(result);
        if (result[1]?.data.registered === false) {
          sessionStorage.setItem('socialEmail', result[1]?.data.socialEmail);
          navigate('/userInfo');
        }
      });
    }
  }, []);

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
