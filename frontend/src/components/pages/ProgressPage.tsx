import React from 'react';
import { TrendingUp, Target, Award, Calendar, BarChart3, Zap } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import ProgressChart from '../features/ProgressChart';
import SpiritualJourneyMap from '../features/SpiritualJourneyMap';
import AchievementGallery from '../features/AchievementGallery';
import BiometricDashboard from '../features/BiometricDashboard';

const ProgressPage: React.FC = () => {
  const { state } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          प्रगति और अंतर्दृष्टि
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your mental wellness journey
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-effect rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-500 text-sm font-medium">+12%</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            समग्र प्रगति
          </h3>
          <div className="mt-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              78%
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This month
            </p>
          </div>
          <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-500 text-sm font-medium">4/5</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            दैनिक लक्ष्य
          </h3>
          <div className="mt-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              80%
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Completion rate
            </p>
          </div>
          <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-orange-500 text-sm font-medium">7 days</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            वर्तमान स्ट्रीक
          </h3>
          <div className="mt-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              12
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Days active
            </p>
          </div>
          <div className="mt-4 flex space-x-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded ${
                  i < 5 ? 'bg-orange-500' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-purple-500 text-sm font-medium">New!</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            उपलब्धियां
          </h3>
          <div className="mt-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {state.achievements.length}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Badges earned
            </p>
          </div>
          <div className="mt-4 flex space-x-1">
            {state.achievements.slice(0, 4).map((achievement, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-sm"
              >
                {achievement.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spiritual Journey Map */}
      <SpiritualJourneyMap />

      {/* Charts and Analytics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-6">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              मूड ट्रेंड्स
            </h2>
          </div>
          <ProgressChart />
        </div>

        <BiometricDashboard />
      </div>

      {/* Achievement Gallery */}
      <AchievementGallery />
    </div>
  );
};

export default ProgressPage;