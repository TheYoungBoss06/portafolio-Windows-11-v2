'use client';

import React, { useState, useEffect } from 'react';

interface TaskbarProps {
  onStartButtonClick: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ onStartButtonClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-[#0a2540] bg-opacity-60 backdrop-blur-sm flex items-center justify-between px-2 z-50">
      {/* Botón de Inicio */}
      <div className="flex items-center h-full">
        <button
          className="h-full px-3 hover:bg-gray-700 hover:bg-opacity-70 flex items-center justify-center"
          onClick={onStartButtonClick}
        >
          <img src="/windows-logo.png" alt="Start" className="h-6 w-6" /> {/* Usar windows-logo.png */}
        </button>
      </div>

      {/* Íconos anclados y barra de búsqueda */}
      <div className="flex items-center space-x-2">
        {/* Barra de búsqueda (placeholder) */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-gray-700 bg-opacity-50 rounded-full h-8 px-3 pl-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img src="/search-icon.png" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" /> {/* Necesitarás un ícono de búsqueda */}
        </div>
        {/* Íconos de aplicaciones (placeholders) */}
        <img src="/edge-icon.png" alt="Edge" className="h-7 w-7 cursor-pointer" />
        <img src="/vscode-icon.png" alt="VSCode" className="h-7 w-7 cursor-pointer" />
        <img src="/explorer-icon.png" alt="Explorer" className="h-7 w-7 cursor-pointer" />
        <img src="/settings-icon.png" alt="Settings" className="h-7 w-7 cursor-pointer" />
      </div>

      {/* Bandeja del sistema */}
      <div className="flex items-center space-x-3 text-sm">
        {/* Íconos de sistema (placeholders) */}
        <img src="/wifi-icon.png" alt="Wifi" className="h-5 w-5" />
        <img src="/battery-icon.png" alt="Battery" className="h-5 w-5" />
        <img src="/volume-icon.png" alt="Volume" className="h-5 w-5" />
        
        {/* Reloj */}
        <div className="text-right">
          <div>{formatTime(currentTime)}</div>
          <div>{formatDate(currentTime)}</div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
