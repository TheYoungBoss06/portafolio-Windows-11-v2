'use client';

import React from 'react';

interface DesktopIconProps {
  iconSrc: string;
  title: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ iconSrc, title, onClick }) => {
  return (
    <div
      className="flex flex-col items-center text-white text-sm p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md w-20 h-20 justify-center"
      onClick={onClick}
    >
      <img src={iconSrc} alt={title} className="w-10 h-10 mb-1" />
      <span className="text-center break-words">{title}</span>
    </div>
  );
};

export default DesktopIcon;
