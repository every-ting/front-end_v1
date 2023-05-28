import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import './ModalBackButton.scss';

const ModalBackButton = ({ header, setIsGroupManagerModal }) => {
  return (
    <div className="modalBackButtonContainer">
      <button
        className="modalBackButton"
        onClick={() => setIsGroupManagerModal(0)}
      >
        <MdOutlineArrowBackIosNew />
      </button>
      {header && <h1 className="modalBackButtonHeader">{header}</h1>}
    </div>
  );
};

export default ModalBackButton;
