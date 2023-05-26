import React, { useEffect, useState } from 'react';
import './UserVerifyPage.scss';
import BackButton from '../../components/backButton/commonBackButton/BackButton';

const UserVerifyPage = () => {
  const [code, setCode] = useState(''); // ['0', '0', '0', '0'
  const handleKeypad = input => {
    return () => {
      if (input === 'del') {
        if (code.length > 0) {
          setCode(code.slice(0, code.length - 1));
          document.getElementById(code.length + 'Code').innerText = '0';
        }
      } else {
        if (code.length < 4) {
          setCode(code + input);
          document.getElementById(code.length + 1 + 'Code').innerText = input;
        }
      }
    };
  };

  useEffect(() => {
    if (code.length === 4) {
      setTimeout(() => {
        alert('인증되었습니다.');
      }, 1000);
    }
  }, [code]);

  return (
    <div className="userVerifyContainer">
      <BackButton />
      <div className="userVerifyTextContainer">
        <p className="userVerifyTextTitle">이메일 인증</p>
        <p className="userVerifyTextSub">
          회원님의 학교 이메일로 인증 코드를 전송했습니다.
        </p>{' '}
        <p className="userVerifyTextEmail">HongilDong@test.com</p>
      </div>
      <div className="userVerifyCodeContainer">
        <div className="userVerifyCodeItem">
          <div className="userVerifyCodeBox">
            <p className="userVerifyCodeText" id="1Code" />
          </div>
        </div>
        <div className="userVerifyCodeItem">
          <div className="userVerifyCodeBox">
            <p className="userVerifyCodeText" id="2Code" />
          </div>
        </div>{' '}
        <div className="userVerifyCodeItem">
          <div className="userVerifyCodeBox">
            <p className="userVerifyCodeText" id="3Code" />
          </div>
        </div>{' '}
        <div className="userVerifyCodeItem">
          <div className="userVerifyCodeBox">
            <p className="userVerifyCodeText" id="4Code" />
          </div>
        </div>
      </div>
      <div className="userVerifyCodeResendContainer">
        <p className="userVerifyCodeResendText">인증 코드 재전송</p>
      </div>
      <div className="userVerifyInputKeyPadContainer">
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('1')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">1</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('2')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">2</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('3')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">3</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('4')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">4</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('5')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">5</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('6')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">6</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('7')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">7</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('8')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">8</p>
          </div>
        </div>{' '}
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('9')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">9</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('*')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">*</p>
          </div>
        </div>
        <div className="userVerifyInputKeyPadItem" onClick={handleKeypad('0')}>
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">0</p>
          </div>
        </div>
        <div
          className="userVerifyInputKeyPadItem"
          onClick={handleKeypad('del')}
        >
          <div className="userVerifyInputKeyPadBox">
            <p className="userVerifyInputKeyPadText">cancel</p>
          </div>
        </div>
      </div>
      <div className="userVerifyButtonWrapper">
        <button className="userVerifyButton" id="Button">
          인증하기
        </button>
      </div>
    </div>
  );
};

export default UserVerifyPage;
