import React from 'react';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notFoundPageContainer">
      <div className="notFoundPageContent">
        <h1>404</h1>
        <h2>앗! 페이지를 찾을 수 없습니다.</h2>
        <p>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link to="/">
          <button className="backBtn">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
