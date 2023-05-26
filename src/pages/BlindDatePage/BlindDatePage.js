import React from 'react';
import './BlindDatePage.scss';
import AppHeader from '../../components/appHeader/AppHeader';
import { motion } from 'framer-motion';
import BlindDateList from './Components/BlindDateList';

const DatePage = () => {
  return (
    <motion.div
      className="blindDateContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppHeader title="소개팅" />
      <div className="blindDateContent">
        <div className="blindDateContent__body">
          {/* <div className="blindDateContent__body__title">내가 속한 팀</div> */}
          <BlindDateList />
        </div>
      </div>
    </motion.div>
  );
};

export default DatePage;
