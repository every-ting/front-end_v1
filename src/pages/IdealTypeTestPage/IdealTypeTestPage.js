import React, { useEffect, useState } from 'react';
import './IdealTypeTestPage.scss';
import {
  getRandomIdealPhoto,
  getMixThreeImages,
} from './IdealTypeTestController';
import BackButton from '../../components/backButton/commonBackButton/BackButton';
import MixedPhotoModal from './components/MixedPhotoModal/MixedPhotoModal';

const IdealTypeTestPage = () => {
  const [idealPhotoData, setIdealPhotoData] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [mixedPhotoData, setMixedPhotoData] = useState();
  const [isModal, setIsModal] = useState(false);

  let genderParameter = '';
  if (localStorage.getItem('gender') === 'MEN') {
    genderParameter = 'f';
  } else if (localStorage.getItem('gender') === 'WOMEN') {
    genderParameter = 'm';
  }
  useEffect(() => {
    getRandomIdealPhoto(genderParameter).then(result => {
      console.log(result);
      setIdealPhotoData(result[1]);
    });
  }, []);

  const onClickSubmit = () => {
    getMixThreeImages(selectedPhoto).then(result => {
      console.log(result);
      setMixedPhotoData(result[1]);
      setIsModal(true);
    });
  };

  return (
    <div className="idealTypeTestPageContainer">
      <BackButton />
      <div className="idealTypeTestPageContent">
        <div className="idealTypeTestPageHeader">
          <div className="idealTypeTestPageHeader__text">
            <p>이상형과 가까운 이미지를</p>
            <p>선택해주세요</p>
          </div>
        </div>
        <div className="idealTypeTestPageBody">
          {idealPhotoData?.map(data => (
            <div
              className="idealTypeTestPageBody__img"
              key={data?.imageID}
              onClick={() => {
                selectedPhoto.includes(data?.imageID)
                  ? setSelectedPhoto(
                      selectedPhoto.filter(item => item !== data?.imageID)
                    )
                  : selectedPhoto.length < 3
                  ? setSelectedPhoto([...selectedPhoto, data?.imageID])
                  : alert('이상형은 3명까지 선택 가능합니다.');
              }}
            >
              <img
                className="idealTypeTestPageBody__img__image"
                src={data?.imageURL}
                alt="idealType"
                style={
                  selectedPhoto.includes(data?.imageID)
                    ? { border: '3px solid #487BB1', scale: '104%' }
                    : { border: 'none', scale: '100%' }
                }
              />
            </div>
          ))}
        </div>
        <div className="idealTypeTestPageFooter">
          <div
            className="idealTypeTestPageFooter__button"
            onClick={onClickSubmit}
          >
            <button className="idealTypeTestPageFooter__button__text">
              완료
            </button>
          </div>
        </div>
      </div>
      {mixedPhotoData && isModal && (
        <>
          <MixedPhotoModal
            isModal={isModal}
            setIsModal={setIsModal}
            photoURL={mixedPhotoData?.imageURL}
            photoID={mixedPhotoData?.imageID}
          />
          {/* <div className="idealTypeTestPageResult">
            <div className="idealTypeTestPageResult__header">
              <div className="idealTypeTestPageResult__header__text">
                <p>이상형 테스트 결과</p>
              </div>
            </div>
            <div className="idealTypeTestPageResult__body">
              <div className="idealTypeTestPageResult__body__img">
                <img
                  className="idealTypeTestPageResult__body__img__image"
                  src={mixedPhotoData?.imageURL}
                  alt="idealType"
                />
              </div>
              <div className="idealTypeTestPageResult__body__text">
                <p>당신의 이상형은</p>
              </div>
            </div>
            <div className="idealTypeTestPageResult__footer">
              <div className="idealTypeTestPageResult__footer__button">
                <button
                  className="idealTypeTestPageResult__footer__button__text"
                  onClick={() => {
                    putUserIdealPhoto(mixedPhotoData?.imageID);
                    window.location.reload();
                  }}
                >
                  저장
                </button>
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default IdealTypeTestPage;
