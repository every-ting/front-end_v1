import React from 'react';
import './ErrorModal.scss';
import { motion } from 'framer-motion';

const ErrorModal = ({ errorModalMessage }) => {
  return (
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
  );
};

export default ErrorModal;
