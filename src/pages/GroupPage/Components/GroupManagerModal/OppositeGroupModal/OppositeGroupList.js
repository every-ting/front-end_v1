import React, { useEffect, useState } from 'react';
import './OppositeGroupList.scss';
// import { getBlindUsers } from '../OppositeGroupPageController';
import { getOppositeGroups } from '../../../GroupPageController';
import { AiOutlineStar } from 'react-icons/ai';

const OppositeGroupList = ({ isGroupManagerModal }) => {
  const [oppositeGroupsData, setOppositeGroupsData] = useState();

  useEffect(() => {
    getOppositeGroups(isGroupManagerModal).then(result => {
      console.log('상대팀', result);
      setOppositeGroupsData(result[1].data);
    });
  }, []);

  return (
    <>
      <div className="oppositeGroupListContainer">
        <div className="section">
          <div className="oppositeGroupList">
            {/* <div className="oppositeGroupHeader">
              <div className="oppositeGroupHeader__text">내가 속한 팀</div>
            </div> */}
            {oppositeGroupsData?.content?.map(data => (
              <div className="oppositeGroupItem" key={data?.id}>
                <div className="oppositeGroupItem__image__box">
                  <img
                    className="oppositeGroupItem__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>

                <div className="oppositeGroupItem__text__wrapper">
                  <div className="oppositeGroupItem__header">
                    <div className="oppositeGroupItem__header__name">
                      {data.group.groupName}
                    </div>
                    <div className="oppositeGroupItem__header__num">
                      {data.group.memberCount}/{data.group.memberSizeLimit}
                    </div>
                  </div>

                  <div className="oppositeGroupItem__text">
                    <div className="oppositeGroupItem__label">
                      <p className="oppositeGroupItem__label__text">
                        {data?.group?.averageAgeOfMembers}
                      </p>
                    </div>
                    <div className="oppositeGroupItem__label">
                      <p className="oppositeGroupItem__label__text">
                        {data?.group?.majorsOfMembers[0]}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="oppositeGroupItem__text">
                    <div className="oppositeGroupItem__label">
                      <p className="oppositeGroupItem__label__text">
                        {data?.group?.majorsOfMembers[1]}{' '}
                      </p>
                    </div>
                    <div className="oppositeGroupItem__label">
                      <p className="oppositeGroupItem__label__text">
                        {data?.group?.majorsOfMembers[2]}{' '}
                      </p>
                    </div>
                  </div>

                  <div className="oppositeGroupItem__major">
                    <p className="oppositeGroupItem__major__text">
                      {data?.group?.school}
                    </p>
                  </div>
                </div>
                <div className="oppositeGroupItem__button__wrapper">
                  <button className="oppositeGroupItem__button__fav">
                    <AiOutlineStar />
                  </button>
                  <button className="oppositeGroupItem__button__text">
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

export default OppositeGroupList;
