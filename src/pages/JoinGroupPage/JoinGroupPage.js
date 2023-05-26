import React from 'react';
import JoinGroupList from './Components/JoinGroupList';
import BackButton from '../../components/backButton/commonBackButton/BackButton';

const JoinGroupPage = () => {
  return (
    <>
      <BackButton header="과팅 팀 조회하기" />
      <JoinGroupList />
    </>
  );
};

export default JoinGroupPage;
