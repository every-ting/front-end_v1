import React, { useEffect, useState } from 'react';
import './BlindDateList.scss';
import { getBlindUsers } from '../BlindDatePageController';
import { HiOutlineStar, HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../../constants/variants';
import {
  postBlindRequests,
  deleteBlindRequests,
  postBlindLikes,
  deleteBlindLikes,
} from '../BlindDatePageController';
import ErrorModal from '../../../components/modal/errorModal/ErrorModal';

const BlindDateList = () => {
  const [blindUsersData, setBlindUsersData] = useState();
  const [renderBlindList, setRenderBlindList] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);

  useEffect(() => {
    getBlindUsers().then(result => {
      setBlindUsersData(result[1].data.content);
      setRenderBlindList(true);
      setIsModify(false);
    });
  }, [isModify]);

  const handleOnClickRequestButton = id => {
    console.log(id);
    postBlindRequests(id).then(result => {
      console.log(result);
      setIsModify(true);
      if (result[1].result.message.includes('The maximum number')) {
        setIsErrorModal('요청은 최대 5명까지 가능합니다.');
        setTimeout(() => {
          setIsErrorModal();
        }, 2000);
      }
    });
  };

  const handleOnClickRequestCancleButton = id => {
    console.log(id);
    deleteBlindRequests(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickFavoriteButton = id => {
    console.log(id);
    postBlindLikes(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickFavoriteCancleButton = id => {
    console.log(id);
    deleteBlindLikes(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  return (
    <>
      {renderBlindList && (
        <div className="blindDateListContainer">
          {isErrorModal && <ErrorModal errorModalMessage={isErrorModal} />}
          <div className="section">
            <motion.div
              className="blindDateList"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* <div className="blindDateHeader">
            <div className="blindDateHeader__text">내가 속한 팀</div>
          </div> */}
              {blindUsersData?.map(request => (
                <motion.div
                  className="blindDateItem"
                  key={request.blindDateResponse.id}
                  variants={itemVariants}
                >
                  <div className="blindDateItem__image__box">
                    <img
                      className="blindDateItem__image"
                      src={request.blindDateResponse.idealPhoto}
                      alt="user"
                    />
                  </div>
                  <div className="blindDateItem__text__wrapper">
                    <div className="blindDateItem__text__header">
                      {request.blindDateResponse.username}
                    </div>
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
                    {request.likeStatus === 'NOT_LIKED' ? (
                      <button
                        className="blindDateItem__button__fav"
                        onClick={() => {
                          handleOnClickFavoriteButton(
                            request.blindDateResponse.id
                          );
                        }}
                      >
                        <HiOutlineStar />
                      </button>
                    ) : (
                      <button
                        className="blindDateItem__button__fav"
                        onClick={() => {
                          handleOnClickFavoriteCancleButton(
                            request.blindDateResponse.id
                          );
                        }}
                      >
                        <HiStar />
                      </button>
                    )}
                    {request.requestStatus === 'EMPTY' ? (
                      <button
                        className="blindDateItem__button__text"
                        onClick={() => {
                          handleOnClickRequestButton(
                            request.blindDateResponse.id
                          );
                        }}
                      >
                        요청
                      </button>
                    ) : (
                      <button
                        className="blindDateItem__button__text"
                        onClick={() => {
                          handleOnClickRequestCancleButton(
                            request.blindDateResponse.id
                          );
                        }}
                        style={{ backgroundColor: '#FF0000' }}
                      >
                        취소
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlindDateList;
