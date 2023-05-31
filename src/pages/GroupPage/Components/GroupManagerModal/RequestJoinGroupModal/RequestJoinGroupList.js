import React, { useEffect, useState } from 'react';
import './RequestJoinGroupList.scss';
// import { getBlindUsers } from '../RequestJoinGroupPageController';
import { getGroupMembersRequest } from '../../../GroupPageController';
import { AiOutlineStar } from 'react-icons/ai';

const RequestJoinGroupList = ({ isGroupManagerModal }) => {
  const [usersData, setUsersData] = useState();

  useEffect(() => {
    getGroupMembersRequest(isGroupManagerModal).then(result => {
      setUsersData(result[1].data);
    });
  }, []);

  return (
    <>
      <div className="requestJoinGroupListContainer">
        <div className="section">
          <div className="requestJoinGroupList">
            {/* <div className="requestJoinGroupHeader">
              <div className="requestJoinGroupHeader__text">내가 속한 팀</div>
            </div> */}
            {usersData?.map(request => (
              <div className="requestJoinGroupItem" key={request.id}>
                <div className="requestJoinGroupItem__image__box">
                  <img
                    className="requestJoinGroupItem__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>
                <div className="requestJoinGroupItem__text__wrapper">
                  <div className="requestJoinGroupItem__text">
                    <div className="requestJoinGroupItem__label">
                      <p className="requestJoinGroupItem__label__text">
                        {request.user.mbti}
                      </p>
                    </div>
                    <div className="requestJoinGroupItem__label">
                      <p className="requestJoinGroupItem__label__text">
                        {request.user.weight}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="requestJoinGroupItem__text">
                    <div className="requestJoinGroupItem__label">
                      <p className="requestJoinGroupItem__label__text">
                        {request.user.height}{' '}
                      </p>
                    </div>
                  </div>

                  <div className="requestJoinGroupItem__major">
                    <p className="requestJoinGroupItem__major__text">
                      {request.user.major}
                    </p>
                  </div>
                </div>
                <div className="requestJoinGroupItem__button__wrapper">
                  <button className="requestJoinGroupItem__button__fav">
                    <AiOutlineStar />
                  </button>
                  <button className="requestJoinGroupItem__button__text">
                    요청
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestJoinGroupList;
