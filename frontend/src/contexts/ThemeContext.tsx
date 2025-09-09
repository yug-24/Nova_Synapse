import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  festivalTheme: string;
  setFestivalTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [festivalTheme, setFestivalTheme] = useState('default');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const savedFestival = localStorage.getItem('festivalTheme');
    if (saved) {
      setIsDark(saved === 'dark');
    }
    if (savedFestival) {
      setFestivalTheme(savedFestival);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleSetFestivalTheme = (theme: string) => {
    setFestivalTheme(theme);
    localStorage.setItem('festivalTheme', theme);
  };

  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleTheme,
      festivalTheme,
      setFestivalTheme: handleSetFestivalTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};