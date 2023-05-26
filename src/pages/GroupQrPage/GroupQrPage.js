import React from 'react';
import BackButton from './Components/backButton/BackButton';
import './GroupQrPage.scss';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { CiSaveDown1 } from 'react-icons/ci';
const GroupQrPage = () => {
  return (
    <>
      <div className="groupQrContainer">
        <div className="groupQrBackButtonContainer">
          <BackButton header="Scan QR Code" />
        </div>
        <div className="groupQrTextContainer">
          <p className="groupQrTextTitle">
            QR 코드를 이용하여 팀원들을 초대할 수 있습니다.
          </p>
        </div>
        <div className="groupQrCodeContainer">
          <div className="groupQrCodeBox">
            <div className="groupQrCodeInnerBox">
              <img
                className="groupQrCodeImg"
                src="assets/images/QR/QR.png"
                alt="QR Code"
              />
            </div>
          </div>
        </div>
        <div className="groupQrButtonContainer">
          <CiSaveDown1 />
          <AiOutlineShareAlt />
        </div>
      </div>
    </>
  );
};

export default GroupQrPage;
