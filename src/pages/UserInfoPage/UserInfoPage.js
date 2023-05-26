import React from 'react';
import './UserInfoPage.scss';

const UserInfoPage = () => {
  return (
    <div className="userInfoContainer">
      <div className="userInfoTextContainer">
        <p className="userInfoTextTitle">개인 정보를 입력하세요</p>
        <p className="userInfoTextSub">
          입력된 정보는 매칭 추천에 사용될 예정입니다.
        </p>
      </div>
      <div className="userInfoInputContainer">
        <div className="userInfoInputItem">
          <input
            className="userInfoInputBox"
            type="text"
            placeholder="이름을 입력하세요"
          />
        </div>
        <div className="userInfoInputItem">
          <input
            className="userInfoInputBox"
            type="text"
            placeholder="성별을 입력하세요"
          />
        </div>
        <div className="userInfoInputItem">
          <input
            className="userInfoInputBox"
            type="text"
            placeholder="학교를 입력하세요"
          />
        </div>
        <div className="userInfoInputItem">
          <input
            className="userInfoInputBox"
            type="text"
            placeholder="학과를 입력하세요"
          />
        </div>
        <div className="userInfoInputItem">
          <input
            className="userInfoInputBox"
            type="text"
            placeholder="학교 이메일을 입력하세요"
          />
        </div>
        <div className="userInfoInputItem">
          <input
            className="userInfoInputBox"
            type="text"
            placeholder="생년월일을 입력하세요"
          />
        </div>
        <div className="userInfoInputItem">
          <input
            className="userInfoInputBox"
            type="text"
            placeholder="취미를 입력하세요"
          />
        </div>
        <div className="userInfoSubmitBtnWrapper">
          <button className="userInfoSubmitBtn">개인 정보 등록</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
