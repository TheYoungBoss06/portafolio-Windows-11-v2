'use client';

import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu'; // Importar el componente StartMenu

const wallpapers = [
  '/fondo1.jpg',
  '/fondo2.jpg',
  // Puedes añadir más fondos de pantalla aquí
];

const Desktop: React.FC = () => {
  const [currentWallpaper, setCurrentWallpaper] = useState(wallpapers[0]);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaper((prevWallpaper) => {
        const currentIndex = wallpapers.indexOf(prevWallpaper);
        const nextIndex = (currentIndex + 1) % wallpapers.length;
        return wallpapers[nextIndex];
      });
    }, 30000); // Cambia cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${currentWallpaper})` }}
    >
      {/* Aquí irán los íconos del escritorio */}
      {/* Aquí irán las ventanas */}
      <StartMenu isOpen={isStartMenuOpen} onClose={toggleStartMenu} />
      <Taskbar onStartButtonClick={toggleStartMenu} />
    </div>
  );
};

export default Desktop;
