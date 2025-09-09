import React from 'react';
import { Bell, Settings, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useApp } from '../../contexts/AppContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { state } = useApp();

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full festival-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌉</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                MindBridge
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                मानसिक स्वास्थ्य साथी
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {state.user.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Level {state.user.level} • {state.user.points} points
              </p>
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-600/50 transition-all duration-200"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <button className="p-2 rounded-full bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-600/50 transition-all duration-200">
              <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <button className="relative p-2 rounded-full bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-600/50 transition-all duration-200">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            <button className="p-2 rounded-full bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-600/50 transition-all duration-200">
              <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;