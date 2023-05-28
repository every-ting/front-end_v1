import React from 'react';
import './CreateGroupButton.scss';
import { Link } from 'react-router-dom';

const CreateGroupButton = () => {
  return (
    <div className="createGroupButtonWrapper">
      <Link to="/createGroup">
        <button className="createGroupButton">팀 만들기</button>
      </Link>
    </div>
  );
};

export default CreateGroupButton;
