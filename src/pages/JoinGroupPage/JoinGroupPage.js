import React, { useEffect, useState } from 'react';
import JoinGroupList from './Components/JoinGroupList';
import BackButton from '../../components/backButton/commonBackButton/BackButton';
import { getGroups } from './JoinGroupPageController';

const JoinGroupPage = () => {
  const [renderGroupList, setRenderGroupList] = useState(false);
  const [groupData, setGroupData] = useState();
  const [isModify, setIsModify] = useState(false);
  useEffect(() => {
    getGroups().then(result => {
      setGroupData(result[1].data.content);
      setRenderGroupList(true);
      setIsModify(false);
    });
  }, [isModify]);

  return (
    <>
      <BackButton header="과팅 팀 조회하기" />
      {renderGroupList && (
        <JoinGroupList groupData={groupData} setIsModify={setIsModify} />
      )}
    </>
  );
};

export default JoinGroupPage;
