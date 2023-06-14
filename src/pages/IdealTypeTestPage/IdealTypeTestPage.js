import React, { useEffect, useState } from 'react';
import './IdealTypeTestPage.scss';
import { getRandomIdealPhoto } from './IdealTypeTestController';

const IdealTypeTestPage = () => {
  const [idealPhotoData, setIdealPhotoData] = useState();
  useEffect(() => {
    getRandomIdealPhoto().then(result => {
      console.log(result);
      setIdealPhotoData(result[1]);
    });
  }, []);

  return (
    <div className="idealTypeTestPageContainer">
      <div className="idealTypeTestPageContent">
        <div className="idealTypeTestPageHeader">
          <div className="idealTypeTestPageHeader__text">
            <p>이상형과 가까운 이미지를 선택해주세요</p>
          </div>
        </div>
        <div className="idealTypeTestPageBody">
          {idealPhotoData?.map(data => (
            <div className="idealTypeTestPageBody__img" key={data.id}>
              <img
                className="idealTypeTestPageBody__img__image"
                src={data.imageURL}
                alt="idealType"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdealTypeTestPage;
