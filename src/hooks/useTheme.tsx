'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  // Only access localStorage after component mounts on the client
  useEffect(() => {
    setMounted(true);
    
    // Safe localStorage access
    try {
      const savedTheme = localStorage.getItem('theme') as ThemeMode;
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  // Only update localStorage after component mounts
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        console.error('Error writing to localStorage:', error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  // To prevent flash of unstyled content, only render after mounting
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}; 