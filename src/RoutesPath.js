import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import ReqFavPage from './pages/ReqFavPage/ReqFavPage';
import MyPage from './pages/SettingPage/MyPage/MyPage';

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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blindDate" element={<BlindDatePage />} />
        <Route path="/request" element={<ReqFavPage />} />
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
