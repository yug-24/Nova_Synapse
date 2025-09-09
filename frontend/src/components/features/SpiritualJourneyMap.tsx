import React from 'react';
import { MapPin, Lock, CheckCircle, Star } from 'lucide-react';

const SpiritualJourneyMap: React.FC = () => {
  const journeySteps = [
    {
      id: 1,
      name: 'आत्म-जागरूकता',
      englishName: 'Self Awareness',
      status: 'completed',
      description: 'Understanding your inner thoughts and emotions',
      points: 500,
      icon: '🧠'
    },
    {
      id: 2,
      name: 'मानसिक शांति',
      englishName: 'Mental Peace',
      status: 'completed',
      description: 'Finding calm in daily life through meditation',
      points: 750,
      icon: '🧘‍♀️'
    },
    {
      id: 3,
      name: 'भावनात्मक संतुलन',
      englishName: 'Emotional Balance',
      status: 'current',
      description: 'Learning to regulate emotions effectively',
      points: 300,
      totalPoints: 1000,
      icon: '⚖️'
    },
    {
      id: 4,
      name: 'रचनात्मक अभिव्यक्ति',
      englishName: 'Creative Expression',
      status: 'available',
      description: 'Channel emotions through art and creativity',
      points: 0,
      totalPoints: 1200,
      icon: '🎨'
    },
    {
      id: 5,
      name: 'सामुदायिक जुड़ाव',
      englishName: 'Community Connection',
      status: 'locked',
      description: 'Building meaningful relationships and support',
      points: 0,
      totalPoints: 1500,
      icon: '🤝'
    },
    {
      id: 6,
      name: 'आंतरिक ज्ञान',
      englishName: 'Inner Wisdom',
      status: 'locked',
      description: 'Achieving deep understanding and peace',
      points: 0,
      totalPoints: 2000,
      icon: '🌟'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'current': return 'text-blue-500';
      case 'available': return 'text-orange-500';
      case 'locked': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'current': return <Star className="w-6 h-6 text-blue-500 animate-pulse" />;
      case 'available': return <MapPin className="w-6 h-6 text-orange-500" />;
      case 'locked': return <Lock className="w-6 h-6 text-gray-400" />;
      default: return <MapPin className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-6 border border-white/20">
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-2xl">🗺️</div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            आध्यात्मिक यात्रा मानचित्र
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Your path to mental wellness and inner peace
          </p>
        </div>
      </div>

      {/* Journey Path */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-gray-300 dark:to-gray-600"></div>

        <div className="space-y-8">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="relative flex items-start space-x-4">
              {/* Status Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  step.status === 'completed' 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : step.status === 'current'
                    ? 'bg-blue-100 dark:bg-blue-900/20'
                    : step.status === 'available'
                    ? 'bg-orange-100 dark:bg-orange-900/20'
                    : 'bg-gray-100 dark:bg-gray-800/20'
                }`}>
                  <div className="text-2xl">{step.icon}</div>
                </div>
                <div className="absolute -top-1 -right-1">
                  {getStatusIcon(step.status)}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <div className={`p-4 rounded-xl ${
                  step.status === 'current' 
                    ? 'bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800' 
                    : 'bg-white/10 dark:bg-gray-800/30'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`text-lg font-semibold ${getStatusColor(step.status)}`}>
                        {step.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.englishName}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${getStatusColor(step.status)}`}>
                        {step.points}/{step.totalPoints || step.points} XP
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {step.description}
                  </p>

                  {/* Progress Bar */}
                  {step.status === 'current' && step.totalPoints && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Progress</span>
                        <span>{Math.round((step.points / step.totalPoints) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(step.points / step.totalPoints) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  {step.status === 'current' && (
                    <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                      Continue Journey
                    </button>
                  )}
                  
                  {step.status === 'available' && (
                    <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors">
                      Start This Step
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="mt-8 p-4 bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-900 dark:text-white">
            Overall Journey Progress
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            33% Complete
          </span>
        </div>
        <div className="w-full bg-white/50 dark:bg-gray-700/50 rounded-full h-3">
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 h-3 rounded-full w-1/3 transition-all duration-1000"></div>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
          You're making excellent progress on your wellness journey!
        </p>
      </div>
    </div>
  );
};

export default SpiritualJourneyMap;