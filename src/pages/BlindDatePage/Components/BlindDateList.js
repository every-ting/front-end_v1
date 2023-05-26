import React, { useEffect, useState } from 'react';
import './BlindDateList.scss';
import { getBlindUsers } from '../BlindDatePageController';
import { AiOutlineStar } from 'react-icons/ai';

const BlindDateList = () => {
  const [blindUsersData, setBlindUsersData] = useState();

  useEffect(() => {
    getBlindUsers().then(result => {
      setBlindUsersData(result[1].data.content);
    });
  }, []);

  return (
    <>
      <div className="blindDateListContainer">
        <div className="section">
          <div className="blindDateList">
            {/* <div className="blindDateHeader">
              <div className="blindDateHeader__text">내가 속한 팀</div>
            </div> */}
            {blindUsersData?.map(request => (
              <div className="blindDateItem" key={request.id}>
                <div className="blindDateItem__image__box">
                  <img
                    className="blindDateItem__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>
                <div className="blindDateItem__text__wrapper">
                  <div className="blindDateItem__text">
                    <div className="blindDateItem__label">
                      <p className="blindDateItem__label__text">
                        {request.blindDateResponse.mbti}
                      </p>
                    </div>
                    <div className="blindDateItem__label">
                      <p className="blindDateItem__label__text">
                        {request.blindDateResponse.weight}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="blindDateItem__text">
                    <div className="blindDateItem__label">
                      <p className="blindDateItem__label__text">
                        {request.blindDateResponse.height}{' '}
                      </p>
                    </div>
                  </div>

                  <div className="blindDateItem__major">
                    <p className="blindDateItem__major__text">
                      {request.blindDateResponse.major}
                    </p>
                  </div>
                </div>
                <div className="blindDateItem__button__wrapper">
                  <button className="blindDateItem__button__fav">
                    <AiOutlineStar />
                  </button>
                  <button className="blindDateItem__button__text">요청</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlindDateList;
