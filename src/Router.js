import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import Nav from './components/nav/Nav';
import DatePage from './pages/DatePage/DatePage';
import RequestPage from './pages/RequestPage/RequestPage';
import GroupPage from './pages/GroupPage/GroupPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ChatRoomPage from './pages/ChatRoomPage/ChatRoomPage';

const Router = () => {
  const queryClient = new QueryClient();

  // const isMobile = () => {
  //   return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   );
  // };

  // if (isMobile()) {
  //   document.addEventListener('click', () => {
  //     if (document.fullscreenElement) return;
  //     document.documentElement.requestFullscreen();
  //   });
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/date" element={<DatePage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="/group" element={<GroupPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/chat/:index" element={<ChatRoomPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
          <Nav />
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default Router;
