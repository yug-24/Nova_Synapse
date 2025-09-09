import React from 'react';
import { Home, MessageCircle, Headset as VrHeadset, Palette, Users, TrendingUp } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const Navigation: React.FC = () => {
  const { state, dispatch } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, labelHi: 'होम' },
    { id: 'companion', label: 'AI Companion', icon: MessageCircle, labelHi: 'साथी' },
    { id: 'vr', label: 'VR Spaces', icon: VrHeadset, labelHi: 'VR स्थान' },
    { id: 'creative', label: 'Creative', icon: Palette, labelHi: 'रचनात्मक' },
    { id: 'community', label: 'Community', icon: Users, labelHi: 'समुदाय' },
    { id: 'progress', label: 'Progress', icon: TrendingUp, labelHi: 'प्रगति' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = state.currentTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => dispatch({ type: 'SET_TAB', payload: item.id })}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                <span className="text-xs font-medium hidden sm:block">
                  {item.label}
                </span>
                <span className="text-xs font-medium sm:hidden">
                  {item.labelHi}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;