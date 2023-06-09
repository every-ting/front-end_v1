import React from 'react';
import './CommonModal.scss';

const CommonModal = ({ children, setIsModal, setIsAcceptModal }) => {
  const handleOnClickAccept = () => {
    console.log('확인');
    setIsAcceptModal(true);
  };
  const handleOnClickCancle = () => {
    console.log('취소');
    setIsModal(false);
  };

  return (
    <div className="commonModal">
      <div className="commonModalContainer">
        <div className="commonModalHeader">
          <div className="commonModalHeaderTitle">팀장 넘기기</div>
        </div>
        <div className="commonModalBody">
          <div className="commonModalBodyContent">{children}</div>
          <div className="commonModalBodyBtnWrapper">
            <button
              className="commonModalBodyBtn accept"
              onClick={handleOnClickAccept}
            >
              확인
            </button>
            <button
              className="commonModalBodyBtn cancle"
              onClick={handleOnClickCancle}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
