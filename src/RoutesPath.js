import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import Nav from './components/nav/Nav';
import DatePage from './pages/DatePage/DatePage';
import RequestPage from './pages/RequestPage/RequestPage';
import GroupPage from './pages/GroupPage/GroupPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ChatRoomPage from './pages/ChatRoomPage/ChatRoomPage';

const RoutesPath = () => {
  const location = useLocation();
  const [visibleNav, setVisibleNav] = useState(true);
  useEffect(() => {
    console.log(location.pathname);
    location.pathname.includes('/chatRoom/')
      ? setVisibleNav(false)
      : setVisibleNav(true);
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/date" element={<DatePage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chatRoom/:index" element={<ChatRoomPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      {visibleNav && <Nav />}
    </>
  );
};

export default RoutesPath;
