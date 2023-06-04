import React, { useState, useEffect } from 'react';
import './AppHeader.scss';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { RiListSettingsLine } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';
import FilterModal from '../modal/filterModal/FilterModal';

const AppHeader = ({ title }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    if (isFilterModalOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setIsFilterModalOpen(false);
      }, 3000);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFilterModalOpen]);
  return (
    <>
      {isFilterModalOpen && <FilterModal />}

      <div className="appHeaderContainer">
        <div className="appHeaderWrapper">
          <div className="appHeaderTitle">
            <p className="appHeaderTitleText">{title}</p>
          </div>
          <div className="appHeaderMenu">
            <div
              className="appHeaderMenuItem"
              onClick={() => {
                setIsFilterModalOpen(true);
              }}
            >
              <RiListSettingsLine />
              {/* <Link to="/setting">
        <RiListSettingsLine />
      </Link> */}
            </div>
            {title === '소개팅' && (
              <div className="appHeaderMenuItem">
                <Link to="/blind/request">
                  <FiStar />
                </Link>
              </div>
            )}
            {title === '과팅' && (
              <div className="appHeaderMenuItem">
                <Link to="/request">
                  <FiStar />
                </Link>
              </div>
            )}
            <div className="appHeaderMenuItem">
              <Link to="/alert">
                <AiOutlineBell />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
