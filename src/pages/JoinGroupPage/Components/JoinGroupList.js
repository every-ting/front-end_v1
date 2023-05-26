import React, { useEffect, useState } from 'react';
import './JoinGroupList.scss';
import { getGroups } from '../JoinGroupPageController';

const JoinGroupList = () => {
  const [groupData, setGroupData] = useState();
  useEffect(() => {
    getGroups().then(result => {
      setGroupData(result[1].data.content);
      console.log(result[1].data);
    });
  }, []);
  return (
    <>
      <div className="groupListContainer">
        <div className="section">
          <div className="GroupList">
            <div className="GroupHeader" />
            {groupData?.map(request => (
              <div className="GroupItem" key={request.id}>
                <div className="GroupItem__image">
                  <img src="assets/images/user.png" alt="user" />
                </div>
                <div className="GroupItem__text">
                  <div className="GroupItem__name">{request.groupName}</div>
                  <div className="GroupItem__label">{request.gender}</div>
                  <div className="GroupItem__label">{request.numOfMember}</div>
                  <div className="GroupItem__label">{request.school}</div>
                </div>
                <div className="GroupItem__button">
                  <button className="acceptBtn">request</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinGroupList;
