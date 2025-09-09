import React, { useState } from 'react';
import { Zap, Palette, Music, PenTool, Target } from 'lucide-react';

const EmotionMappingTool: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState('peaceful');
  
  const emotions = [
    { id: 'peaceful', name: 'शांत', color: 'blue', intensity: 7 },
    { id: 'joyful', name: 'खुशी', color: 'yellow', intensity: 8 },
    { id: 'anxious', name: 'चिंता', color: 'red', intensity: 5 },
    { id: 'hopeful', name: 'आशा', color: 'green', intensity: 6 },
    { id: 'nostalgic', name: 'नॉस्टेल्जिक', color: 'purple', intensity: 4 },
  ];

  const creativeMappings = {
    peaceful: {
      art: ['Ocean waves', 'Mountain landscapes', 'Zen gardens'],
      music: ['Classical Indian', 'Nature sounds', 'Meditation bells'],
      writing: ['Reflection journals', 'Gratitude stories', 'Peaceful memories']
    },
    joyful: {
      art: ['Bright colors', 'Dancing figures', 'Festival scenes'],
      music: ['Celebration songs', 'Upbeat rhythms', 'Folk music'],
      writing: ['Success stories', 'Happy moments', 'Adventure tales']
    },
    anxious: {
      art: ['Abstract forms', 'Stormy weather', 'Maze patterns'],
      music: ['Calming melodies', 'Slow rhythms', 'Healing sounds'],
      writing: ['Worry journals', 'Coping strategies', 'Hope letters']
    },
    hopeful: {
      art: ['Sunrise scenes', 'Growing plants', 'Open doors'],
      music: ['Inspiring melodies', 'Building crescendos', 'Hopeful lyrics'],
      writing: ['Future dreams', 'Goal setting', 'Motivational stories']
    },
    nostalgic: {
      art: ['Vintage scenes', 'Family portraits', 'Old photographs'],
      music: ['Traditional songs', 'Childhood tunes', 'Memory melodies'],
      writing: ['Childhood stories', 'Family histories', 'Memory collections']
    }
  };

  const currentMapping = creativeMappings[selectedEmotion as keyof typeof creativeMappings];

  return (
    <div className="space-y-6">
      {/* Emotion Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Select Your Current Emotion / अपनी भावना चुनें
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {emotions.map((emotion) => (
            <button
              key={emotion.id}
              onClick={() => setSelectedEmotion(emotion.id)}
              className={`p-4 rounded-xl text-center transition-all duration-200 ${
                selectedEmotion === emotion.id
                  ? `bg-${emotion.color}-500 text-white shadow-lg scale-105`
                  : 'bg-white/10 dark:bg-gray-800/30 hover:bg-white/20 dark:hover:bg-gray-800/40'
              }`}
            >
              <div className="text-lg font-semibold mb-1">
                {emotion.name}
              </div>
              <div className="text-xs opacity-80">
                Intensity: {emotion.intensity}/10
              </div>
              <div className={`w-full bg-white/20 rounded-full h-1 mt-2`}>
                <div
                  className={`bg-white h-1 rounded-full`}
                  style={{ width: `${emotion.intensity * 10}%` }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Creative Mapping Results */}
      <div className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Zap className="w-5 h-5 text-purple-500" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Creative Expression Mapping
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Art Suggestions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-orange-500" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Art Ideas
              </h4>
            </div>
            <div className="space-y-2">
              {currentMapping.art.map((idea, index) => (
                <div
                  key={index}
                  className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-900/30 transition-colors"
                >
                  <div className="text-sm text-orange-700 dark:text-orange-300">
                    {idea}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Music Suggestions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Music className="w-4 h-4 text-blue-500" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Music Ideas
              </h4>
            </div>
            <div className="space-y-2">
              {currentMapping.music.map((idea, index) => (
                <div
                  key={index}
                  className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    {idea}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Writing Suggestions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <PenTool className="w-4 h-4 text-green-500" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Writing Ideas
              </h4>
            </div>
            <div className="space-y-2">
              {currentMapping.writing.map((idea, index) => (
                <div
                  key={index}
                  className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg cursor-pointer hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
                >
                  <div className="text-sm text-green-700 dark:text-green-300">
                    {idea}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Target className="w-4 h-4 text-purple-500" />
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Recommended Action Plan
          </h4>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <div className="font-medium text-purple-700 dark:text-purple-300 mb-2">
              Immediate Action (Next 15 minutes)
            </div>
            <div className="text-sm text-purple-600 dark:text-purple-400">
              Start with a simple sketch or write a few lines expressing your current feeling of {emotions.find(e => e.id === selectedEmotion)?.name}.
            </div>
          </div>

          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
            <div className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">
              Extended Session (Next hour)
            </div>
            <div className="text-sm text-indigo-600 dark:text-indigo-400">
              Dedicate time to one of the suggested creative activities. Let your emotions guide your expression.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionMappingTool;