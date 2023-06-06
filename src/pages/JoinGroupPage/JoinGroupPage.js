import React, { useEffect, useState } from 'react';
import JoinGroupList from './Components/JoinGroupList';
import BackButton from '../../components/backButton/commonBackButton/BackButton';
import { getGroups } from './JoinGroupPageController';

const JoinGroupPage = () => {
  const [renderGroupList, setRenderGroupList] = useState(false);
  const [groupData, setGroupData] = useState();
  useEffect(() => {
    getGroups().then(result => {
      setGroupData(result[1].data.content);
      setRenderGroupList(true);
    });
  }, []);

  return (
    <>
      <BackButton header="과팅 팀 조회하기" />
      {renderGroupList && <JoinGroupList groupData={groupData} />}
    </>
  );
};

export default JoinGroupPage;
