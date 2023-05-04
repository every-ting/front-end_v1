import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import RoutesPath from './RoutesPath';

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
          <RoutesPath />
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default Router;
