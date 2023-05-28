import React, { useState, useEffect } from 'react';
import './SectionToggle.scss';

const SectionToggle = ({ title, setSection, setActiveIndex, activeIndex }) => {
  const handleToggleClick = index => {
    setActiveIndex(index);
  };
  return (
    <div className="sectionToggleContainer">
      <div className="sectionToggle">
        <div
          className={`sectionToggleItem ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleToggleClick(0)}
        >
          <span>{title === 'groupDating' ? '과팅' : '요청'}</span>
        </div>
        <div
          className={`sectionToggleItem ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleToggleClick(1)}
        >
          <span>{title === 'groupDating' ? '소개팅' : '찜'}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionToggle;
