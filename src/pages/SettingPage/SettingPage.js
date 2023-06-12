import React from 'react';
import './SettingPage.scss';
import BackButton from '../../components/backButton/commonBackButton/BackButton';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const SettingPage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('key');
    localStorage.removeItem('isLogedIn');
    navigate('/');
  };
  return (
    <motion.div
      className="settingContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton header="설정" />
      <div className="settingBody">
        <div className="settingBodyItem">
          <Link to="/myPage" className="settingBodyItemTitle">
            프로필 설정
          </Link>
          <p className="settingBodyItemContent"> &gt; </p>
        </div>
        <div className="settingBodyItem">
          <p className="settingBodyItemTitle">내 정보 수정</p>
          <p className="settingBodyItemContent"> &gt; </p>
        </div>
        <div className="settingBodyItem">
          <p className="settingBodyItemTitle">알림</p>
          <p className="settingBodyItemContent"> &gt; </p>
        </div>
        <div
          className="settingBodyItem"
          onClick={() => {
            handleLogout();
          }}
        >
          <p className="settingBodyItemTitle">로그아웃</p>
          <p className="settingBodyItemContent"> &gt; </p>
        </div>
      </div>
      <div className="settingFooter">
        <div className="settingFooterItem">
          <p className="settingFooterItemTitle">이용약관</p>
          <p className="settingFooterItemTitle">개인정보처리방침</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingPage;
