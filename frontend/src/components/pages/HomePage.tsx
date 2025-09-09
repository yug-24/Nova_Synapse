import React from 'react';
import { Calendar, Heart, Activity, Star, Flame, Target } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import DashboardCard from '../ui/DashboardCard';
import MoodWheel from '../features/MoodWheel';
import QuickActions from '../features/QuickActions';
import WelcomeMessage from '../features/WelcomeMessage';

const HomePage: React.FC = () => {
  const { state } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <WelcomeMessage />
      
      {/* Today's Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          icon={Heart}
          title="आज का मूड"
          value="शांत"
          subtitle="Peaceful"
          color="text-red-500"
          gradient="from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"
        />
        <DashboardCard
          icon={Activity}
          title="स्ट्रीक"
          value="7"
          subtitle="दिन चालू"
          color="text-green-500"
          gradient="from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"
        />
        <DashboardCard
          icon={Star}
          title="आज के पॉइंट्स"
          value="150"
          subtitle="XP earned"
          color="text-yellow-500"
          gradient="from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20"
        />
        <DashboardCard
          icon={Target}
          title="लक्ष्य"
          value="3/5"
          subtitle="completed"
          color="text-blue-500"
          gradient="from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"
        />
      </div>

      {/* Mood Tracking */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              मूड ट्रैकर
            </h2>
            <Calendar className="w-5 h-5 text-gray-500" />
          </div>
          <MoodWheel />
        </div>

        <div className="space-y-4">
          <QuickActions />
          
          {/* Recent Achievements */}
          <div className="glass-effect rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                हाल की उपलब्धियां
              </h3>
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <div className="space-y-3">
              {state.achievements.slice(0, 3).map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {achievement.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Rituals */}
      <div className="glass-effect rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          आज के अनुष्ठान (Daily Rituals)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-4">
            <div className="text-2xl mb-2">🧘‍♀️</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              सुबह का ध्यान
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              15 minutes of mindful breathing
            </p>
            <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-2 mt-3">
              <div className="bg-orange-500 h-2 rounded-full w-full"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4">
            <div className="text-2xl mb-2">📖</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              ग्रेटिट्यूड जर्नल
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Write 3 things you're grateful for
            </p>
            <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-2 mt-3">
              <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4">
            <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              पारिवारिक समय
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Quality time with loved ones
            </p>
            <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-2 mt-3">
              <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;