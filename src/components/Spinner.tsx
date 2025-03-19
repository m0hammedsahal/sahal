// components/Spinner.js
import React from 'react';
import { motion } from 'framer-motion';
import './Spinner.css';

const Spinner = () => {
  return (
    <motion.div
      className="spinner-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="spinner">
        <motion.div
          className="spinner-inner"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </div>
      <motion.p
        className="spinner-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
      </motion.p>
    </motion.div>
  );
};

export default Spinner;