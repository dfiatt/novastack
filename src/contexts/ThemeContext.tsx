
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'orange' | 'blue' | 'purple' | 'green';
type ColorModeType = 'normal' | 'colorblind';

interface ThemeContextType {
  theme: ThemeType;
  colorMode: ColorModeType;
  setTheme: (theme: ThemeType) => void;
  setColorMode: (mode: ColorModeType) => void;
  toggleColorBlindMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('orange');
  const [colorMode, setColorMode] = useState<ColorModeType>('normal');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    const savedColorMode = localStorage.getItem('colorMode') as ColorModeType;
    
    if (savedTheme) {
      setTheme(savedTheme);
      updateThemeClasses(savedTheme);
    } else {
      updateThemeClasses('orange');
    }
    
    if (savedColorMode) {
      setColorMode(savedColorMode);
      updateColorModeClasses(savedColorMode);
    } else {
      updateColorModeClasses('normal');
    }

    // Apply initial root class for consistent styling
    document.documentElement.classList.add('theme-orange');
  }, []);

  // Apply theme classes to root element
  const updateThemeClasses = (newTheme: ThemeType) => {
    // Remove previous theme classes
    document.documentElement.classList.remove('theme-orange', 'theme-blue', 'theme-purple', 'theme-green');
    // Add new theme class
    document.documentElement.classList.add(`theme-${newTheme}`);
  };
  
  // Apply color mode classes to root element
  const updateColorModeClasses = (newMode: ColorModeType) => {
    if (newMode === 'colorblind') {
      document.documentElement.classList.add('colorblind-mode');
    } else {
      document.documentElement.classList.remove('colorblind-mode');
    }
  };
  
  const updateTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeClasses(newTheme);
  };
  
  const updateColorMode = (newMode: ColorModeType) => {
    setColorMode(newMode);
    localStorage.setItem('colorMode', newMode);
    updateColorModeClasses(newMode);
  };
  
  const toggleColorBlindMode = () => {
    const newMode = colorMode === 'normal' ? 'colorblind' : 'normal';
    updateColorMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      colorMode, 
      setTheme: updateTheme, 
      setColorMode: updateColorMode,
      toggleColorBlindMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
