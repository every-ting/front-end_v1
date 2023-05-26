import React from 'react';
import './MyPage.scss';
import BackButton from '../../../components/backButton/commonBackButton/BackButton';
import { motion } from 'framer-motion';

const MyPage = () => {
  return (
    <motion.div
      className="myPageContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton header="내 정보" />
      <div className="myPageBody">
        <div className="myPageImageWrapper">
          <img
            className="myPageImage"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile"
          />
        </div>
        <div className="myPageBodyItem">
          <p className="myPageBodyItemTitle">이름</p>
          <input
            className="myPageBodyItemContent"
            type="text"
            placeholder="김민수"
            value="김민수"
          />
        </div>
        <div className="myPageBodyItem">
          <p className="myPageBodyItemTitle">학번</p>{' '}
          <input
            className="myPageBodyItemContent"
            type="text"
            placeholder="2017111111"
            value="2017111111"
          />
        </div>
        <div className="myPageBodyItem">
          <p className="myPageBodyItemTitle">학과</p>
          <input
            className="myPageBodyItemContent"
            type="text"
            placeholder="컴퓨터공학과"
            value="컴퓨터공학과"
          />{' '}
        </div>
        <div className="myPageBodyItem">
          <p className="myPageBodyItemTitle">학년</p>
          <input
            className="myPageBodyItemContent"
            type="text"
            placeholder="4학년"
            value="4학년"
          />{' '}
        </div>
        <div className="myPageBodyItemContainer">
          <div className="myPageBodyItem">
            <p className="myPageBodyItemTitle">키</p>
            <input
              className="myPageBodyItemContent"
              type="text"
              placeholder="180"
              value="180"
            />{' '}
          </div>
          <div className="myPageBodyItem">
            <p className="myPageBodyItemTitle">몸무게</p>
            <input
              className="myPageBodyItemContent"
              type="text"
              placeholder="80"
              value="80"
            />{' '}
          </div>
          <div className="myPageBodyItem">
            <p className="myPageBodyItemTitle">MBTI</p>
            <input
              className="myPageBodyItemContent"
              type="text"
              placeholder="ENTP"
              value="ENTP"
            />{' '}
          </div>
        </div>
        <div className="myPageBodyItem">
          <p className="myPageBodyItemTitle">자기소개</p>
          <input
            className="myPageBodyItemContent"
            type="text"
            placeholder="헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다.

            "
            value="헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다.

            "
          />{' '}
        </div>
      </div>
    </motion.div>
  );
};

export default MyPage;
