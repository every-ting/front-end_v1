import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import './BackButton.scss';

const BackButton = ({ header }) => {
  const navigate = useNavigate();
  return (
    <div className="backButtonContainerQR">
      <button className="backButtonQR" onClick={() => navigate(-1)}>
        <MdOutlineArrowBackIosNew />
      </button>
      {header && <h1 className="backButtonHeaderQR">{header}</h1>}
    </div>
  );
};

export default BackButton;
