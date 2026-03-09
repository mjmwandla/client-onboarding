import { createContext, useContext, useState, useEffect } from 'react';
import { setTheme } from '../constants/colors';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('omig-theme');
    return saved || 'dark';
  });

  // Sync C object before render
  setTheme(mode);

  useEffect(() => {
    localStorage.setItem('omig-theme', mode);
  }, [mode]);

  const toggle = () => setMode(m => m === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
