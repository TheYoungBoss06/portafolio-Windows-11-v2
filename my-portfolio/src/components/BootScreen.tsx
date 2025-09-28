'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onBootComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onBootComplete();
    }, 3000); // Simula un tiempo de carga de 3 segundos
    return () => clearTimeout(timer);
  }, [onBootComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100]"
    >
      <motion.img
        src="/windows-logo.png"
        alt="Windows Logo"
        className="w-24 h-24 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.img
        src="/spinner-icon.png"
        alt="Loading Spinner"
        className="w-8 h-8 animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </motion.div>
  );
};

export default BootScreen;
