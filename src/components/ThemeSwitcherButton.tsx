
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import ColorBlindModeToggle from './ColorBlindModeToggle';

const ThemeSwitcherButton = () => {
  return (
    <div className="flex items-center gap-2">
      <ColorBlindModeToggle />
      <ThemeSwitcher />
    </div>
  );
};

export default ThemeSwitcherButton;
