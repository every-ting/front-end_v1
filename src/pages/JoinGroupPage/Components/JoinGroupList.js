import React, { useEffect, useState } from 'react';
import './JoinGroupList.scss';
import { getGroups } from '../JoinGroupPageController';

const JoinGroupList = () => {
  const [groupData, setGroupData] = useState();
  useEffect(() => {
    getGroups().then(result => {
      setGroupData(result[1].data.content);
    });
  }, []);
  return (
    <>
      <div className="groupListContainer">
        <div className="section">
          <div className="groupList">
            <div className="groupHeader" />
            {groupData?.map(request => (
              <div className="groupItem" key={request.group.id}>
                <div className="groupItem__image">
                  <img src="assets/images/user.png" alt="user" />
                </div>
                <div className="groupItem__text">
                  <div className="groupItem__name">
                    {request.group.groupName}
                  </div>
                  <div className="groupItem__label">
                    <p className="groupItem__label__text">
                      {request.group.gender}
                    </p>
                  </div>
                  <div className="groupItem__label">
                    <p className="groupItem__label__text">
                      {request.group.memberCount}/
                      {request.group.memberSizeLimit}
                    </p>
                  </div>
                  <div className="groupItem__label">
                    <p className="groupItem__label__text">
                      {request.group.school}
                    </p>
                  </div>
                </div>
                <div className="groupItem__button">
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
