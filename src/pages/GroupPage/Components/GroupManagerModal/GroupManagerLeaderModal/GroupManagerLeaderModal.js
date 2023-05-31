import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GroupManagerLeaderModal.scss';
import ModalBackButton from '../../../../../components/backButton/modalBackButton/ModalBackButton';

const GroupManagerLeaderModal = ({
  groupMembersData,
  isGroupManagerModal,
  setIsGroupManagerModal,
  groupName,
}) => {
  const [leader, setLeader] = useState('');
  useEffect(() => {
    console.log(groupMembersData);
    setLeader(groupMembersData.filter(item => item.role === 'LEADER'));
  }, []);

  useEffect(() => {
    console.log('asdfasdf', leader);
  }, [leader]);
  return (
    <>
      <div className="groupManagerModalContainer">
        <div className="groupManagerHeader">
          <ModalBackButton
            header={groupName}
            setIsGroupManagerModal={setIsGroupManagerModal}
          />
        </div>
        <div className="groupManagerBody">
          <div className="groupManagerBodyItem">
            <div className="groupManagerBodyItem__title">
              <p>
                팀장 <span>{leader[0]?.member?.username}</span>
              </p>
            </div>
            <div className="groupManagerBodyItem__button__wrapper">
              <button className="groupManagerBodyItem__button">넘기기</button>
              <button className="groupManagerBodyItem__button">
                팀원 신청 목록 확인
              </button>
            </div>
          </div>
          <div className="groupManagerBodyItem">
            <div className="groupManagerBodyItem__title">
              <p>팀원</p>
            </div>
            <div className="groupManagerBodyItem__member__image__wrapper">
              {groupMembersData?.map(member => (
                <div
                  className="groupManagerBodyItem__member__image__box"
                  key={member.id}
                >
                  <img
                    className="groupManagerBodyItem__member__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>
              ))}
            </div>
            <div className="groupManagerBodyItem__button__wrapper">
              <button className="groupManagerBodyItem__button">초대하기</button>
            </div>
          </div>
          <div className="groupManagerBodyItem">
            <div className="groupManagerBodyItem__title">
              <p>팀 소개</p>
            </div>
            <div className="groupManagerBodyItem__text">
              <p>
                오아이스도 목숨이 인류의 봄바람을 끓는 살 곳으로 지혜는 것이다.
                그림자는 맺어, 충분히 내는 우리의 용기가 인생을 발휘하기 피가
                것이다.
              </p>
            </div>
            <div className="groupManagerBodyItem__button__wrapper">
              <button className="groupManagerBodyItem__button">수정하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupManagerLeaderModal;
