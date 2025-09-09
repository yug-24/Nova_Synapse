import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { useTheme } from '../../contexts/ThemeContext';
import Header from './Header';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AICompanionPage from '../pages/AICompanionPage';
import VRSpacesPage from '../pages/VRSpacesPage';
import CreativeStudioPage from '../pages/CreativeStudioPage';
import CommunityPage from '../pages/CommunityPage';
import ProgressPage from '../pages/ProgressPage';

const MainLayout: React.FC = () => {
  const { state } = useApp();
  const { isDark } = useTheme();

  const renderCurrentPage = () => {
    switch (state.currentTab) {
      case 'home':
        return <HomePage />;
      case 'companion':
        return <AICompanionPage />;
      case 'vr':
        return <VRSpacesPage />;
      case 'creative':
        return <CreativeStudioPage />;
      case 'community':
        return <CommunityPage />;
      case 'progress':
        return <ProgressPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="spiritual-pattern min-h-screen">
        <Header />
        <main className="pb-20">
          {renderCurrentPage()}
        </main>
        <Navigation />
      </div>
    </div>
  );
};

export default MainLayout;