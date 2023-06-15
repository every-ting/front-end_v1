import React, { useEffect, useState } from 'react';
import './IdealTypeTestPage.scss';
import {
  getRandomIdealPhoto,
  getMixThreeImages,
} from './IdealTypeTestController';
import BackButton from '../../components/backButton/commonBackButton/BackButton';
import MixedPhotoModal from './components/MixedPhotoModal/MixedPhotoModal';
import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../constants/variants';

const IdealTypeTestPage = () => {
  const [idealPhotoData, setIdealPhotoData] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [mixedPhotoData, setMixedPhotoData] = useState();
  const [isModal, setIsModal] = useState(false);
  const [fetching, setFetching] = useState(false);

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

  useEffect(() => {
    if (fetching) {
      setTimeout(() => {
        getRandomIdealPhoto(genderParameter).then(result => {
          console.log(result);
          setIdealPhotoData(prev => [...prev, ...result[1]]);

          setFetching(false);
        });
      }, 500);
    }
  }, [fetching]);

  const onClickSubmit = () => {
    getMixThreeImages(selectedPhoto).then(result => {
      console.log(result);
      setMixedPhotoData(result[1]);
      setIsModal(true);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.idealTypeTestPageBody');
      if (element) {
        const scrollTop = element.scrollTop;
        const scrollHeight = element.scrollHeight;
        const clientHeight = element.clientHeight;
        const scrolledToBottom =
          Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
          setFetching(true);
        }
      }
    };

    const addScrollListener = () => {
      const element = document.querySelector('.idealTypeTestPageBody');
      if (element) {
        element.addEventListener('scroll', handleScroll);
      }
    };

    setTimeout(() => {
      addScrollListener();
      handleScroll(); // Execute handleScroll initially
    }, 100);

    return () => {
      const element = document.querySelector('.idealTypeTestPageBody');
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
        {idealPhotoData && (
          <motion.div
            className="idealTypeTestPageBody"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {idealPhotoData?.map(data => (
              <motion.div
                className="idealTypeTestPageBody__img"
                variants={itemVariants}
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
              </motion.div>
            ))}
          </motion.div>
        )}
        {fetching && (
          <div className="idealTypeTestPageBody__loading">
            <div className="idealTypeTestPageBody__loading__circle" />
            <div className="idealTypeTestPageBody__loading__circle" />
            <div className="idealTypeTestPageBody__loading__circle" />
          </div>
        )}

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
          <AnimatePresence>
            <MixedPhotoModal
              isModal={isModal}
              setIsModal={setIsModal}
              photoURL={mixedPhotoData?.imageURL}
              photoID={mixedPhotoData?.imageID}
            />
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default IdealTypeTestPage;
