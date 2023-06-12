import React, { useEffect, useState } from 'react';
import './GroupReqFavModal.scss';
import AppHeader from '../../../../../components/appHeader/AppHeader';
import { motion } from 'framer-motion';
import GroupReqList from './GroupReqList';
import GroupFavList from './GroupFavList';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import ReqFavSectionToggle from '../../ReqFavSectionToggle/ReqFavSectionToggle';
import { getGroupLikes, getGroupReqs } from '../../../GroupPageController';

const GroupReqFavModal = ({
  setIsGroupManagerModal,
  isGroupManagerModal,
  groupId,
}) => {
  const [section, setSection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [groupReqsData, setGroupReqsData] = useState();
  const [groupFavLikesData, setGroupFavLikesData] = useState();
  const [renderData, setRenderData] = useState(false);
  const [isModify, setIsModify] = useState(false);

  useEffect(() => {
    if (activeIndex === 0) {
      setSection('favorite');
    } else {
      setSection('request');
    }
  }, [activeIndex]);

  useEffect(() => {
    getGroupReqs(isGroupManagerModal).then(result => {
      console.log('상대팀', result);
      setGroupReqsData(result[1].data);
      setRenderData(true);
      setIsModify(false);
    });
  }, [isModify]);

  useEffect(() => {
    getGroupLikes(isGroupManagerModal).then(result => {
      console.log('상대팀', result);
      setGroupFavLikesData(result[1].data);
      setRenderData(true);
      setIsModify(false);
    });
  }, [isModify]);

  return (
    <motion.div className="groupReqFavContainer">
      <div className="groupReqFavHeader">
        <div className="groupReqFavBackButtonWrapper">
          <button
            className="groupReqFavBackButton"
            onClick={() => setIsGroupManagerModal(0)}
          >
            <MdOutlineArrowBackIosNew />
          </button>
        </div>

        <ReqFavSectionToggle
          title="favReq"
          setSection={setSection}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div>
        <div className="groupReqFavGroupContent__body">
          {/* <div className="requestJoinGroupContent__body__title">내가 속한 팀</div> */}
          {section === 'request' && renderData ? (
            <GroupReqList
              isGroupManagerModal={isGroupManagerModal}
              groupReqsData={groupReqsData}
              groupId={groupId}
              setIsModify={setIsModify}
            />
          ) : (
            <GroupFavList
              isGroupManagerModal={isGroupManagerModal}
              groupFavLikesData={groupFavLikesData}
              groupId={groupId}
              setIsModify={setIsModify}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GroupReqFavModal;
