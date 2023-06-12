import React, { useEffect } from 'react';
import './LoginPage.scss';
import { tingLogin } from './LoginPageController';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './RequestPage.scss';
import { basicApi } from '../../libs/config';
import { SiKakaotalk } from 'react-icons/si';

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
        setTimeout(() => {
          if (result[1]?.data?.registered === false) {
            sessionStorage.setItem('socialEmail', result[1]?.data?.socialEmail);
            navigate('/userInfo');
          } else {
            localStorage.setItem('key', result[1]?.data?.token);
            localStorage.setItem('isLogedIn', 'true');
            sessionStorage.setItem('tokenRefresh', 'true');
            navigate('/');
            window.location.reload();
          }
        }, 800);
      });
    }
  }, []);

  const handleDemoLogin = async () => {
    try {
      const response = await basicApi.get(`/ting/1`);
      console.log(response);
      alert('로그인 되었습니다.');
      if (response.status === 200) {
        localStorage.setItem('key', response?.data?.data?.token);
        localStorage.setItem('isLogedIn', 'true');
        sessionStorage.setItem('tokenRefresh', 'true');
        navigate('/');
        return [false, response.data];
      } else {
        return [response.data.error, response.data.message];
      }
    } catch (e) {
      return [true, e.message];
    }
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
            <SiKakaotalk />
            <p>카카오로 로그인 하기</p>
          </button>
          <button className="socailLoginBtn" onClick={handleDemoLogin}>
            <img src="assets/images/user.png" alt="naver" />
            <p>TEST USER ID 1 로 로그인 하기</p>
          </button>
          {/* <button className="socailLoginBtn">
            <img src="assets/images/user.png" alt="google" />
            <p>구글로 로그인 하기</p>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
