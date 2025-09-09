import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import MainLayout from './components/layout/MainLayout';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
          <MainLayout />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;