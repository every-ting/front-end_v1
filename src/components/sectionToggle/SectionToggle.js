import React from 'react';
import './SectionToggle.scss';

import { useState } from 'react';

const SectionToggle = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <span>과팅</span>
        </div>
        <div
          className={`sectionToggleItem ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleToggleClick(1)}
        >
          <span>소개팅</span>
        </div>
      </div>
    </div>
  );
};

export default SectionToggle;
