import { ThemeType } from '@/types';

// A simple, clean theme with clear color naming
export const lightTheme: ThemeType = {
  colors: {
    primary: '#1f51b5',      // Main brand color
    secondary: '#1234fa',    // Accent color for highlights
    background: '#ffffff',   // Page background
    text: '#333333',         // Main text color
    lightText: '#777777',    // Secondary text color
    accent: '#2196f3',       // Additional accent color
    card: '#f9f9f9',         // Card background
    border: '#e0e0e0',       // Border color
  },
  fonts: {
    main: "'Inter', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  breakpoints: {
    sm: '640px',  // Small devices
    md: '768px',  // Medium devices
    lg: '1024px', // Large devices
    xl: '1280px', // Extra large devices
  },
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '2rem',     // 32px
    xl: '4rem',     // 64px
  },
  transition: '0.3s ease-in-out',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

// Dark theme with the same structure
export const darkTheme: ThemeType = {
  colors: {
    primary: '#1f51b5',      // Lighter version of primary for dark mode
    secondary: '#1234fa',    // Brighter accent for dark mode
    background: '#121212',   // Dark background
    text: '#e0e0e0',         // Light text for dark background
    lightText: '#aaaaaa',    // Secondary text color for dark mode
    accent: '#42a5f5',       // Adjusted accent for dark mode
    card: '#1e1e1e',         // Card background for dark mode
    border: '#333333',       // Border color for dark mode
  },
  fonts: {
    main: "'Inter', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  transition: '0.3s ease-in-out',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
}; 