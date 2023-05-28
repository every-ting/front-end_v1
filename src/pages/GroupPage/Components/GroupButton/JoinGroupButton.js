import React from 'react';
import './JoinGroupButton.scss';
import { Link } from 'react-router-dom';

const JoinGroupButton = () => {
  return (
    <div className="joinGroupButtonWrapper">
      <Link to="/joinGroup">
        <button className="joinGroupButton">팀 참가하기</button>
      </Link>
    </div>
  );
};

export default JoinGroupButton;
