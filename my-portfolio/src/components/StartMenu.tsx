'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-[400px] h-[500px] bg-[#0a2540] bg-opacity-60 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col"
    >
      {/* Sección de aplicaciones fijadas */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Fijado</h2>
        <div className="grid grid-cols-4 gap-3">
          {/* Placeholder para apps fijadas */}
          <div className="flex flex-col items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <img src="/vscode-icon.png" alt="VSCode" className="h-8 w-8 mb-1" />
            <span className="text-xs text-center">VSCode</span>
          </div>
          <div className="flex flex-col items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <img src="/explorer-icon.png" alt="Explorer" className="h-8 w-8 mb-1" />
            <span className="text-xs text-center">Explorador</span>
          </div>
          <div className="flex flex-col items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <img src="/settings-icon.png" alt="Settings" className="h-8 w-8 mb-1" />
            <span className="text-xs text-center">Configuración</span>
          </div>
          {/* Más apps fijadas */}
        </div>
      </div>

      {/* Sección de aplicaciones recomendadas */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Recomendado</h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Placeholder para apps recomendadas */}
          <div className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <img src="/project-icon.png" alt="Project 1" className="h-6 w-6 mr-2" />
            <span className="text-sm">Proyecto 1</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <img src="/project-icon.png" alt="Project 2" className="h-6 w-6 mr-2" />
            <span className="text-sm">Proyecto 2</span>
          </div>
          {/* Más apps recomendadas */}
        </div>
      </div>

      {/* Sección de usuario y apagado */}
      <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
        <div className="flex items-center">
          <img src="/user-icon.png" alt="User" className="h-8 w-8 rounded-full mr-2" />
          <span className="text-sm">Usuario</span>
        </div>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <img src="/power-icon.svg" alt="Power" className="h-6 w-6" /> {/* Ícono de apagado */}
        </button>
      </div>
    </motion.div>
  );
};

export default StartMenu;
