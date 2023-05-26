import React from 'react';
import './AlertPage.scss';
import BackButton from '../../components/backButton/commonBackButton/BackButton';

const ALERT_DATA = [
  {
    id: 1,
    title: '과팅 - 팀A 가입 요청이 승인되었습니다.',
    created_at: '1분전',
  },
  {
    id: 2,
    title: '과팅 - 팀A 가입 요청이 승인되었습니다.',
    created_at: '2분전',
  },
  {
    id: 3,
    title: '소개팅 - 요청이 승인되었습니다. ',
    created_at: '3분전',
  },
  {
    id: 4,
    title: '소개팅 - 요청이 승인되었습니다. ',
    created_at: '4분전',
  },
  {
    id: 5,
    title: '소개팅 - 요청이 승인되었습니다. ',
    created_at: '5분전',
  },
];

const AlertPage = () => {
  return (
    <div className="alertContainer">
      <BackButton header="알림" />
      <div className="alertBody">
        {ALERT_DATA.map(alert => (
          <div className="alertBodyItem" key={alert.id}>
            <div className="alertBodyItemText">
              <p className="alertBodyItemTitle">{alert.title}</p>
              <p className="alertBodyItemCreatedAt">{alert.created_at}</p>
            </div>
            <button className="alertBodyItemButton">삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertPage;
