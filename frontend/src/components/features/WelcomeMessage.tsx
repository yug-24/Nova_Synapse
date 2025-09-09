import React from 'react';
import { useApp } from '../../contexts/AppContext';

const WelcomeMessage: React.FC = () => {
  const { state } = useApp();
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'सुप्रभात';
    if (hour < 17) return 'नमस्कार';
    return 'शुभ संध्या';
  };

  const getMotivationalQuote = () => {
    const quotes = [
      'मन एव मनुष्याणां कारणं बन्धमोक्षयो: - Your mind is the cause of bondage and liberation',
      'योगस्थ: कुरु कर्माणि - Perform your duties with a balanced mind',
      'सर्वे भवन्तु सुखिन: - May all beings be happy and peaceful',
    ];
    return quotes[new Date().getDate() % quotes.length];
  };

  return (
    <div className="glass-effect rounded-3xl p-8 border border-white/20 text-center">
      <div className="animated-gradient bg-clip-text text-transparent mb-4">
        <h1 className="text-4xl font-bold">
          {getGreeting()}, {state.user.name.split(' ')[0]}!
        </h1>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
        आज आपकी आंतरिक शांति की यात्रा कैसी चल रही है?
      </p>
      
      <div className="max-w-2xl mx-auto p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl">
        <p className="text-gray-700 dark:text-gray-300 italic">
          "{getMotivationalQuote()}"
        </p>
      </div>
      
      <div className="flex justify-center mt-6 space-x-4">
        <div className="flex items-center space-x-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/20 rounded-full">
          <span className="text-orange-600 dark:text-orange-400 font-semibold">
            Level {state.user.level}
          </span>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            {state.user.points} Points
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;