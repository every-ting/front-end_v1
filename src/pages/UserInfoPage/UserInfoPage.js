import React, { useEffect } from 'react';
import './UserInfoPage.scss';
import { tingSignUp } from '../LoginPage/LoginPageController';
import { useNavigate } from 'react-router-dom';

const UserInfoPage = ({ socialEmail }) => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const school = document.getElementById('school').value;
    const schoolEmail = document.getElementById('schoolEmail').value;
    const major = document.getElementById('major').value;
    const birth = document.getElementById('birth').value;

    const data = {
      username: name,
      socialEmail: sessionStorage.getItem('socialEmail'),
      email: schoolEmail,
      gender: gender,
      school: school,
      major: major,
      birth: birth,
    };

    if (name.length < 4 || name.length > 10) {
      alert('이름은 4글자 이상 입력해주세요.');
    } else {
      tingSignUp(data).then(res => {
        console.log(res);
        setTimeout(() => {
          if (res[1].result.message === 'success') {
            localStorage.setItem('key', res[1]?.data.token);
            localStorage.setItem('isLogedIn', 'true');
            // alert('회원가입이 완료되었습니다.');
            // navigate('/');
          } else {
            alert('회원가입에 실패하였습니다.');
          }
        }, 800);
      });
    }
  };
  useEffect(() => {
    if (localStorage.getItem('isLogedIn') === 'true') {
      window.location.reload();
      navigate('/');
    }
  }, []);

  return (
    <div className="userInfoContainer">
      <div className="userInfoTextContainer">
        <p className="userInfoTextTitle">개인 정보를 입력하세요</p>
        <p className="userInfoTextSub">
          입력된 정보는 매칭 추천에 사용될 예정입니다.
        </p>
      </div>
      <div className="userInfoInputContainer">
        <form className="userInfoInputForm">
          <div className="userInfoInputItem">
            <input
              className="userInfoInputBox"
              id="name"
              type="text"
              placeholder="이름을 입력하세요"
              maxLength={10}
              minLength={4}
            />
          </div>
          <div className="userInfoInputItem">
            <input
              className="userInfoInputBox"
              id="gender"
              type="text"
              placeholder="성별을 입력하세요"
            />
          </div>
          <div className="userInfoInputItem">
            <input
              className="userInfoInputBox"
              id="school"
              type="text"
              placeholder="학교를 입력하세요"
            />
          </div>

          <div className="userInfoInputItem">
            <input
              className="userInfoInputBox"
              id="schoolEmail"
              type="text"
              placeholder="학교 이메일을 입력하세요"
            />
          </div>

          <div className="userInfoInputItem">
            <input
              className="userInfoInputBox"
              id="major"
              type="text"
              placeholder="학과를 입력하세요"
            />
          </div>
          <div className="userInfoInputItem">
            <input
              className="userInfoInputBox"
              id="birth"
              type="text"
              placeholder="생년월일을 입력하세요"
            />
          </div>

          <div className="userInfoSubmitBtnWrapper">
            <button
              className="userInfoSubmitBtn"
              onClick={() => {
                handleSignUp();
              }}
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfoPage;
