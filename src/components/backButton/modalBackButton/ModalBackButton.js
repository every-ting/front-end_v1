import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import './ModalBackButton.scss';

const ModalBackButton = ({
  header,
  setIsGroupManagerModal,
  setIsJoinRequest,
  setIndex,
}) => {
  return (
    <div className="modalBackButtonContainer">
      {header !== '팀원 신청 목록' && (
        <button
          className="modalBackButton"
          onClick={() => setIsGroupManagerModal(0)}
        >
          <MdOutlineArrowBackIosNew />
        </button>
      )}
      {header === '팀원 신청 목록' && (
        <button
          className="modalBackButton"
          onClick={() => {
            setIsJoinRequest(false);
            setIndex(0);
          }}
        >
          <MdOutlineArrowBackIosNew />
        </button>
      )}
      {header && <h1 className="modalBackButtonHeader">{header}</h1>}
    </div>
  );
};

export default ModalBackButton;
