import React, { useEffect, useState } from 'react';
import './CreateGroupPage.scss';
import BackButton from '../../components/backButton/commonBackButton/BackButton';
import { postGroups } from './CreateGroupController';
import { useNavigate } from 'react-router-dom';

const CreateGroupPage = () => {
  const [groupName, setGroupName] = useState('');
  const [groupNumOfMember, setGroupNumOfMember] = useState();
  const [groupMemo, setGroupMemo] = useState('');
  // const [groupSchool, setGroupSchool] = useState('');
  const navigate = useNavigate();

  const postGroup = () => {
    const data = {
      groupName: groupName,
      gender: 'MEN', // 유저의 성별이 입력됨
      memberSizeLimit: parseInt(groupNumOfMember),
      // school: groupSchool,
      memo: groupMemo,
    };
    postGroups(data).then(result => {
      console.log('result', result);
      if (result[0] === false) {
        navigate('/group');
      }
    });
  };

  const groupNameHandler = e => {
    setGroupName(e.target.value);
  };

  const groupNumOfMemberHandler = e => {
    setGroupNumOfMember(e.target.value);
  };

  const groupMemoHandler = e => {
    setGroupMemo(e.target.value);
  };

  // const groupSchoolHandler = e => {
  //   setGroupSchool(e.target.value);
  // };

  return (
    <>
      <BackButton header="팀 생성" />
      <div className="createGroupContainer">
        <div className="createGroupHeader">
          {/* <p className="createGroupHeaderTitle">그룹 생성</p> */}
          <p className="createGroupHeaderSubTitle">
            팀원들과 함께 팀을 만들어보세요!
          </p>
        </div>
        <div className="createGroupBody">
          <div className="createGroupBodyItem">
            <p className="createGroupBodyItemTitle">팀 이름</p>
            <input
              className="createGroupBodyItemInput"
              type="text"
              placeholder="팀 이름"
              value={groupName}
              onChange={groupNameHandler}
            />
          </div>
          <div className="createGroupBodyItem">
            <p className="createGroupBodyItemTitle">팀원 수</p>
            <input
              className="createGroupBodyItemInput"
              type="text"
              placeholder="팀원 수 (최소 2 ~ 최대 6)"
              value={groupNumOfMember}
              onChange={groupNumOfMemberHandler}
            />
          </div>
          {/* <div className="createGroupBodyItem">
            <p className="createGroupBodyItemTitle">학교 이름</p>
            <input
              className="createGroupBodyItemInput"
              type="text"
              placeholder="학교 이름"
              value={groupSchool}
              onChange={groupSchoolHandler}
            />
          </div> */}
          <div className="createGroupBodyItem">
            <p className="createGroupBodyItemTitle">팀 소개</p>
            <input
              className="createGroupBodyItemInput"
              type="text"
              placeholder="팀 소개"
              value={groupMemo}
              onChange={groupMemoHandler}
            />
          </div>
        </div>
        <div className="createGroupFooter">
          <button className="createGroupFooterButton" onClick={postGroup}>
            그룹 생성
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateGroupPage;
