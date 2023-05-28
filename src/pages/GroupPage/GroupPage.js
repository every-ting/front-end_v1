import React from 'react';
import './GroupPage.scss';
import AppHeader from '../../components/appHeader/AppHeader';
import CreateGroupButton from './Components/GroupButton/CreateGroupButton';
import JoinGroupButton from './Components/GroupButton/JoinGroupButton';
import GroupList from './Components/GroupList';
import { motion } from 'framer-motion';

const GroupPage = () => {
  return (
    <motion.div
      className="groupContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppHeader title="과팅" />
      <div className="groupContent">
        <div className="groupContent__header">
          <CreateGroupButton />
          <JoinGroupButton />
        </div>
        <div className="groupContent__body">
          <div className="groupContent__body__title">내가 속한 팀</div>
          <GroupList />
        </div>
      </div>
    </motion.div>
  );
};

export default GroupPage;
