import React from 'react';
import './MobileOnlyPage.scss';
import { Link } from 'react-router-dom';

const MobileOnlyPage = () => {
  return (
    <div className="mobileOnlyPageContainer">
      <div className="mobileOnlyPageContent">
        <h1>앗!</h1>
        <h2>TING 은 모바일 환경만 지원합니다..</h2>
        <p>TING을 이용하려면 아래 링크에서 모바일 앱을 다운로드 해주세요.</p>
      </div>
    </div>
  );
};

export default MobileOnlyPage;
