import React, { useEffect, useState } from 'react';
import './GroupReqFavModal.scss';
import AppHeader from '../../../../../components/appHeader/AppHeader';
import { motion } from 'framer-motion';
import GroupReqList from './GroupReqList';
import GroupFavList from './GroupFavList';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import ReqFavSectionToggle from '../../ReqFavSectionToggle/ReqFavSectionToggle';

const GroupReqFavModal = ({ setIsGroupManagerModal, isGroupManagerModal }) => {
  const [section, setSection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex === 0) {
      setSection('request');
    } else {
      setSection('favorite');
    }
  }, [activeIndex]);

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
          title="reqFav"
          setSection={setSection}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div>
        <div className="groupReqFavGroupContent__body">
          {/* <div className="requestJoinGroupContent__body__title">내가 속한 팀</div> */}
          {section === 'request' ? (
            <GroupReqList isGroupManagerModal={isGroupManagerModal} />
          ) : (
            <GroupFavList isGroupManagerModal={isGroupManagerModal} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GroupReqFavModal;
