'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Update CSS variables and localStorage when theme changes
    const root = document.documentElement;
    
    if (isDarkMode) {
      // Dark mode colors
      root.style.setProperty('--bg-primary', '#0a0a0b');
      root.style.setProperty('--bg-secondary', '#1a1a1d');
      root.style.setProperty('--bg-tertiary', '#2d2d32');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e5e5');
      root.style.setProperty('--text-muted', '#a1a1a1');
      root.style.setProperty('--glass-bg', 'rgba(212, 175, 55, 0.1)');
      root.style.setProperty('--glass-border', 'rgba(212, 175, 55, 0.2)');
      root.style.setProperty('--shadow-light', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--shadow-dark', 'rgba(0, 0, 0, 0.3)');
      document.body.style.background = 'linear-gradient(135deg, #0a0a0b 0%, #1a1a1d 100%)';
    } else {
      // Light mode colors
      root.style.setProperty('--bg-primary', '#f8f9fa');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-tertiary', '#e9ecef');
      root.style.setProperty('--text-primary', '#212529');
      root.style.setProperty('--text-secondary', '#495057');
      root.style.setProperty('--text-muted', '#6c757d');
      root.style.setProperty('--glass-bg', 'rgba(212, 175, 55, 0.15)');
      root.style.setProperty('--glass-border', 'rgba(212, 175, 55, 0.3)');
      root.style.setProperty('--shadow-light', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--shadow-dark', 'rgba(0, 0, 0, 0.15)');
      document.body.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)';
    }
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 