import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import Nav from './components/nav/Nav';
import BlindDatePage from './pages/BlindDatePage/BlindDatePage';
import GroupPage from './pages/GroupPage/GroupPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ChatRoomPage from './pages/ChatRoomPage/ChatRoomPage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import UserVerifyPage from './pages/UserVerifyPage/UserVerifyPage';
import AlertPage from './pages/AlertPage/AlertPage';
import SettingPage from './pages/SettingPage/SettingPage';
import CreateGroupPage from './pages/CreateGroupPage/CreateGroupPage';
import JoinGroupPage from './pages/JoinGroupPage/JoinGroupPage';
import GroupQrPage from './pages/GroupQrPage/GroupQrPage';
import BlindReqFavPage from './pages/BlindReqFavPage/BlindReqFavPage';
import MyPage from './pages/SettingPage/MyPage/MyPage';
import MobileOnlyPage from './pages/MobileOnlyPage/MobileOnlyPage';

const RoutesPath = () => {
  const location = useLocation();
  const [visibleNav, setVisibleNav] = useState(true);
  useEffect(() => {
    const shouldShowNav = ['/', '/group', '/chat', '/blindDate'].includes(
      location.pathname
    );
    setVisibleNav(shouldShowNav);
  }, [location]);
  return (
    <>
      {!isMobile && (
        <>
          <MobileOnlyPage />
          {/* 
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              zIndex: '9999',
              backgroundColor: 'white',
              borderInline: '30vw solid #ebebeb',
            }}
          >
            <p
              style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                fontSize: '20px',
              }}
            >
              TING 은 모바일 환경만 지원합니다.
            </p>
            <p
              style={{
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                fontSize: '18px',
              }}
            >
              모바일에서 접속 해주세요{' '}
            </p>
            <p
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                fontSize: '18px',
              }}
            >
              앱 다운로드
            </p>
            <p
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                fontSize: '16px',
              }}
            >
              안드로이드
            </p>
            <img
              src="assets/images/QR/QR.png "
              alt="android"
              style={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '11%',
              }}
            />
            <p
              style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                fontSize: '16px',
              }}
            >
              IOS
            </p>
            <img
              src="assets/images/QR/QR.png "
              alt="ios"
              style={{
                position: 'absolute',
                top: '65%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '11%',
              }}
            />
          </div> */}
        </>
      )}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blindDate" element={<BlindDatePage />} />
        <Route path="/blind/request" element={<BlindReqFavPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/joinGroup" element={<JoinGroupPage />} />
        <Route path="/createGroup" element={<CreateGroupPage />} />
        <Route path="/groupQR" element={<GroupQrPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chatRoom/:index" element={<ChatRoomPage />} />
        <Route path="/userInfo" element={<UserInfoPage />} />
        <Route path="/userVerify" element={<UserVerifyPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="myPage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {visibleNav && <Nav />}
    </>
  );
};

export default RoutesPath;
