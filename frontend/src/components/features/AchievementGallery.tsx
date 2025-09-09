import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const AchievementGallery: React.FC = () => {
  const { state } = useApp();

  const allAchievements = [
    {
      id: 'first-steps',
      name: 'First Steps',
      nameHi: 'पहला कदम',
      description: 'Started your mental wellness journey',
      icon: '🦶',
      category: 'milestone',
      earned: true,
      dateEarned: '2025-01-01',
      rarity: 'common'
    },
    {
      id: 'meditation-master',
      name: 'Meditation Master',
      nameHi: 'ध्यान गुरु',
      description: 'Completed 7 consecutive days of meditation',
      icon: '🧘',
      category: 'meditation',
      earned: true,
      dateEarned: '2025-01-07',
      rarity: 'uncommon'
    },
    {
      id: 'creative-soul',
      name: 'Creative Soul',
      nameHi: 'रचनात्मक आत्मा',
      description: 'Created your first artwork',
      icon: '🎨',
      category: 'creative',
      earned: true,
      dateEarned: '2025-01-05',
      rarity: 'common'
    },
    {
      id: 'community-helper',
      name: 'Community Helper',
      nameHi: 'समुदायिक सहायक',
      description: 'Helped 10 community members',
      icon: '🤝',
      category: 'community',
      earned: false,
      progress: 6,
      total: 10,
      rarity: 'rare'
    },
    {
      id: 'streak-warrior',
      name: 'Streak Warrior',
      nameHi: 'निरंतरता योद्धा',
      description: 'Maintained a 30-day streak',
      icon: '🔥',
      category: 'milestone',
      earned: false,
      progress: 12,
      total: 30,
      rarity: 'epic'
    },
    {
      id: 'vr-explorer',
      name: 'VR Explorer',
      nameHi: 'VR अन्वेषक',
      description: 'Explored all VR healing spaces',
      icon: '🥽',
      category: 'vr',
      earned: false,
      progress: 2,
      total: 5,
      rarity: 'uncommon'
    },
    {
      id: 'festival-celebrant',
      name: 'Festival Celebrant',
      nameHi: 'त्योहार मनाने वाला',
      description: 'Participated in festival celebrations',
      icon: '🎉',
      category: 'cultural',
      earned: false,
      progress: 0,
      total: 3,
      rarity: 'rare'
    },
    {
      id: 'wisdom-seeker',
      name: 'Wisdom Seeker',
      nameHi: 'ज्ञान खोजी',
      description: 'Completed the spiritual journey',
      icon: '🌟',
      category: 'milestone',
      earned: false,
      progress: 2,
      total: 6,
      rarity: 'legendary'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'uncommon': return 'from-green-400 to-green-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const categories = ['all', 'milestone', 'meditation', 'creative', 'community', 'vr', 'cultural'];
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredAchievements = selectedCategory === 'all' 
    ? allAchievements 
    : allAchievements.filter(achievement => achievement.category === selectedCategory);

  const earnedCount = allAchievements.filter(a => a.earned).length;

  return (
    <div className="glass-effect rounded-2xl p-6 border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Achievement Gallery
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {earnedCount}/{allAchievements.length} badges earned
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {earnedCount * 100}
          </div>
          <div className="text-xs text-gray-500">Achievement Points</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/40'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Achievement Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
              achievement.earned
                ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 shadow-lg'
                : 'bg-white/10 dark:bg-gray-800/30 grayscale opacity-60'
            }`}
          >
            {/* Rarity Indicator */}
            <div className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${getRarityColor(achievement.rarity)}`}></div>

            {/* Achievement Icon */}
            <div className="text-center mb-3">
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                {achievement.nameHi}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                {achievement.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {achievement.description}
              </p>
            </div>

            {/* Progress or Date */}
            {achievement.earned ? (
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-yellow-600 dark:text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-medium">Earned</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {achievement.dateEarned}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  {achievement.progress}/{achievement.total}
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${((achievement.progress || 0) / (achievement.total || 1)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            )}

            {/* Rarity Label */}
            <div className="absolute bottom-2 left-2 text-xs">
              <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white text-xs font-medium`}>
                {achievement.rarity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Achievement */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
        <div className="flex items-center space-x-3">
          <Award className="w-5 h-5 text-blue-500" />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
              Next Achievement: Community Helper
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Help 4 more community members to earn this badge
            </p>
          </div>
          <div className="text-blue-500 font-semibold">
            6/10
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementGallery;