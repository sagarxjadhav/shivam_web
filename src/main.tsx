import React from 'react';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import emailjs from '@emailjs/browser';
// import { StrictMode } from 'react';

emailjs.init('YG-mavnzo2q70_u7a');

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  // </StrictMode>
);
