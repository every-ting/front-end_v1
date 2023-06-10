import React from 'react';
import './ErrorModal.scss';
import { AnimatePresence, motion } from 'framer-motion';

const ErrorModal = ({ errorModalMessage }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="errorModalContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="errorModalContent">
          <h1>알림</h1>
          <p>{errorModalMessage}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorModal;
