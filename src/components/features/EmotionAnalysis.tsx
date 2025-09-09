import React from 'react';
import { Brain, Heart, TrendingUp } from 'lucide-react';

interface EmotionAnalysisProps {
  currentEmotion: string;
}

const EmotionAnalysis: React.FC<EmotionAnalysisProps> = ({ currentEmotion }) => {
  const emotionData = {
    calm: {
      color: 'blue',
      suggestions: ['Continue meditation', 'Practice gratitude', 'Nature walk'],
      insight: 'Your calm state shows excellent emotional regulation. This is perfect for deep reflection and creative work.'
    },
    happy: {
      color: 'yellow',
      suggestions: ['Share with friends', 'Creative expression', 'Help others'],
      insight: 'Happiness is contagious! Your positive energy can inspire others and strengthen relationships.'
    },
    anxious: {
      color: 'red',
      suggestions: ['Breathing exercises', 'Grounding techniques', 'Talk to someone'],
      insight: 'Anxiety is natural and manageable. Focus on what you can control and practice self-compassion.'
    }
  };

  const currentData = emotionData[currentEmotion as keyof typeof emotionData] || emotionData.calm;

  return (
    <div className="glass-effect rounded-2xl p-6 border border-white/20">
      <div className="flex items-center space-x-3 mb-4">
        <Brain className="w-5 h-5 text-purple-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          भावनात्मक विश्लेषण
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current State */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className={`w-4 h-4 bg-${currentData.color}-500 rounded-full animate-pulse`}></div>
            <span className="text-gray-900 dark:text-white font-medium">
              Current State: {currentEmotion}
            </span>
          </div>

          <div className="p-4 bg-white/10 dark:bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="font-medium text-gray-900 dark:text-white">Insight</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {currentData.insight}
            </p>
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="font-medium text-gray-900 dark:text-white">
              Recommended Actions
            </span>
          </div>

          <div className="space-y-2">
            {currentData.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/40 transition-colors cursor-pointer"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {suggestion}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emotion Pattern */}
      <div className="mt-6 pt-4 border-t border-white/20">
        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
          This Week's Pattern
        </h4>
        <div className="flex space-x-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="flex-1 text-center">
              <div className={`h-8 bg-gradient-to-t ${
                index < 5 ? 'from-green-200 to-green-500' : 'from-blue-200 to-blue-500'
              } rounded mb-1`}></div>
              <span className="text-xs text-gray-500">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionAnalysis;