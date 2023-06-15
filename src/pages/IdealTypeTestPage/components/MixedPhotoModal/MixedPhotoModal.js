import React from 'react';
import './MixedPhotoModal.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { putUserIdealPhoto } from '../../IdealTypeTestController';
import { useNavigate } from 'react-router-dom';

const MixedPhotoModal = ({ isModal, setIsModal, photoURL, photoID }) => {
  const navigate = useNavigate();

  const onClickSubmit = () => {
    putUserIdealPhoto(photoURL).then(res => {
      console.log(res);
      // setIsModal(false);
      alert('저장되었습니다.');
      navigate('/');
    });
  };
  return (
    <>
      {isModal && (
        <div className="mixedPhotoModalContainer">
          <div className="mixedPhotoModal">
            <div className="mixedPhotoModal__header">
              <div className="mixedPhotoModal__header__text">
                <p>이상형 사진이 생성되었습니다.</p>
              </div>
            </div>
            <div className="mixedPhotoModal__content">
              <img
                className="mixedPhotoModal__content__image"
                src={photoURL}
                alt="complete_photo"
              />
            </div>
            <div className="mixedPhotoModal__button__wrapper">
              <button
                className="mixedPhotoModal__button close"
                onClick={() => setIsModal(false)}
              >
                다시 생성하기
              </button>
              <button
                className="mixedPhotoModal__button complete"
                onClick={() => {
                  onClickSubmit();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MixedPhotoModal;
