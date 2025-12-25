import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import emailjs from '@emailjs/browser';
import { BrowserRouter } from 'react-router-dom';

emailjs.init('YG-mavnzo2q70_u7a');

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
);
