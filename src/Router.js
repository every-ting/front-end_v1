import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import Nav from './components/nav/Nav';
import ViewContainer from './ViewContainer';

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
          </Routes>
          <Nav />
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default Router;
