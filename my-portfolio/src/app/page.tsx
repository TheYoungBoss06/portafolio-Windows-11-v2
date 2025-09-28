'use client';

import React, { useState } from 'react';
import Desktop from '@/components/Desktop';
import BootScreen from '@/components/BootScreen';
import LoginScreen from '@/components/LoginScreen';
import { AnimatePresence } from 'framer-motion';

type AppState = 'boot' | 'login' | 'desktop';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('boot');

  const handleBootComplete = () => {
    setAppState('login');
  };

  const handleLoginComplete = () => {
    setAppState('desktop');
  };

  return (
    <AnimatePresence mode="wait">
      {appState === 'boot' && (
        <BootScreen key="boot" onBootComplete={handleBootComplete} />
      )}
      {appState === 'login' && (
        <LoginScreen key="login" onLoginComplete={handleLoginComplete} />
      )}
      {appState === 'desktop' && (
        <Desktop key="desktop" />
      )}
    </AnimatePresence>
  );
}
