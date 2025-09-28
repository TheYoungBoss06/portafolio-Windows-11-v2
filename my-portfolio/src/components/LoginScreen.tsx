'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoginScreenProps {
  onLoginComplete: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoginComplete();
    }, 3000); // Simula un tiempo de "Bienvenido" de 3 segundos
    return () => clearTimeout(timer);
  }, [onLoginComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center z-[90]"
    >
      {/* Fondo borroso */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/fondo1.jpg)`, filter: 'blur(8px)' }}
      ></div>

      {/* Contenido de inicio de sesión (no borroso) */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center p-8 z-10"
      >
        <div className="w-28 h-28 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
          <img src="/user-icon.png" alt="User Profile" className="w-20 h-20 rounded-full" />
        </div>
        <h1 className="text-2xl font-semibold text-white mb-2 shadow-lg">Wilson Espinal</h1> {/* Nombre de usuario */}
        
        <div className="flex flex-col items-center mt-4">
          <img src="/spinner-icon.png" alt="Loading Spinner" className="w-6 h-6 animate-spin mb-2" />
          <span className="text-white">!Bienvenido!</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginScreen;
