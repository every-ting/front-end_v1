import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import './BackButton.scss';
import SectionToggle from '../../sectionToggle/SectionToggle';

const BackButton = ({ header }) => {
  const navigate = useNavigate();
  return (
    <div className="backButtonContainer">
      <button className="backButton" onClick={() => navigate(-1)}>
        <MdOutlineArrowBackIosNew />
      </button>
      {header && <h1 className="backButtonHeader">{header}</h1>}
    </div>
  );
};

export default BackButton;
