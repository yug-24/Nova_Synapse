import React from 'react';
import { Play, BookOpen, Users, Heart } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const QuickActions: React.FC = () => {
  const { dispatch } = useApp();

  const actions = [
    {
      id: 'meditation',
      icon: Play,
      label: '5-min Meditation',
      labelHi: '5 मिनट ध्यान',
      color: 'from-blue-500 to-indigo-600',
      action: () => dispatch({ type: 'SET_TAB', payload: 'vr' })
    },
    {
      id: 'journal',
      icon: BookOpen,
      label: 'Daily Journal',
      labelHi: 'दैनिक डायरी',
      color: 'from-green-500 to-emerald-600',
      action: () => dispatch({ type: 'SET_TAB', payload: 'creative' })
    },
    {
      id: 'connect',
      icon: Users,
      label: 'Connect',
      labelHi: 'जुड़ें',
      color: 'from-purple-500 to-pink-600',
      action: () => dispatch({ type: 'SET_TAB', payload: 'community' })
    },
    {
      id: 'companion',
      icon: Heart,
      label: 'Talk to Companion',
      labelHi: 'साथी से बात करें',
      color: 'from-orange-500 to-red-600',
      action: () => dispatch({ type: 'SET_TAB', payload: 'companion' })
    }
  ];

  return (
    <div className="glass-effect rounded-2xl p-6 border border-white/20">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        त्वरित क्रियाएं
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={action.action}
              className={`p-4 bg-gradient-to-r ${action.color} text-white rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg group`}
            >
              <Icon className="w-6 h-6 mb-2 mx-auto group-hover:animate-pulse" />
              <div className="text-sm font-medium">
                {action.labelHi}
              </div>
              <div className="text-xs opacity-80">
                {action.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;