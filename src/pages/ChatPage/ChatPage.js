import React, { useEffect, useState } from 'react';
import './ChatPage.scss';
import SectionToggle from '../../components/sectionToggle/SectionToggle';
import GroupChat from './ChatType/GroupChat';
import DateChat from './ChatType/DateChat';
import { motion } from 'framer-motion';

const ChatPage = () => {
  const [section, setSection] = useState('group');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex === 0) {
      setSection('group');
    } else {
      setSection('date');
    }
  }, [activeIndex]);

  return (
    <motion.div
      className="chatContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section">
        <SectionToggle
          title="groupDating"
          setSection={setSection}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        {section === 'group' ? <GroupChat /> : <DateChat />}
      </div>
    </motion.div>
  );
};

export default ChatPage;
