import React, { useState, useEffect } from 'react';
import './ReqFavPage.scss';
import ReqFavSectionToggle from './Components/ReqFavSectionToggle/ReqFavSectionToggle';
import RequestPage from './ReqFavType/RequestPage/RequestPage';
import FavoritePage from './ReqFavType/FavoritePage/FavoritePage';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ReqFavPage = () => {
  const [section, setSection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeIndex === 0) {
      setSection('request');
    } else {
      setSection('favorite');
    }
  }, [activeIndex]);

  return (
    <div className="reqFavContainer">
      <div className="reqFavHeader">
        <div className="reqFavBackButtonContainer">
          <button className="reqFavBackButton" onClick={() => navigate(-1)}>
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

      <div className="reqFavBody">
        {section === 'request' ? <RequestPage /> : <FavoritePage />}
      </div>
    </div>
  );
};

export default ReqFavPage;
