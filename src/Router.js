import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import RoutesPath from './RoutesPath';
import { isMobile } from 'react-device-detect';

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
          {/* {!isMobile && (
            <>
              <div
                style={{
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#ebebeb',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '20vw',
                    height: '80vh',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    border: '1px solid #ebebeb',
                    overflow: 'scroll',
                  }}
                >
                  <RoutesPath />
                </div>
              </div>
            </>
          )} */}
          <RoutesPath />
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default Router;
