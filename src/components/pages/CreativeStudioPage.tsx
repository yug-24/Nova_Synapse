import React, { useState } from 'react';
import { Palette, Music, PenTool, Sparkles, Download, Share } from 'lucide-react';
import DigitalCanvas from '../features/DigitalCanvas';
import MusicComposer from '../features/MusicComposer';
import StoryCreator from '../features/StoryCreator';
import EmotionMappingTool from '../features/EmotionMappingTool';

const CreativeStudioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('canvas');

  const tabs = [
    { id: 'canvas', name: 'डिजिटल कैनवास', icon: Palette },
    { id: 'music', name: 'संगीत रचना', icon: Music },
    { id: 'story', name: 'कहानी लेखन', icon: PenTool },
    { id: 'emotion', name: 'भावना मैपिंग', icon: Sparkles }
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'canvas':
        return <DigitalCanvas />;
      case 'music':
        return <MusicComposer />;
      case 'story':
        return <StoryCreator />;
      case 'emotion':
        return <EmotionMappingTool />;
      default:
        return <DigitalCanvas />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          रचनात्मक अभिव्यक्ति स्टूडियो
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Express your emotions through art, music, and stories
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg scale-105'
                  : 'glass-effect text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/20'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="glass-effect rounded-3xl p-6 border border-white/20 min-h-[500px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {tabs.find(tab => tab.id === activeTab)?.name}
          </h2>
          <div className="flex space-x-2">
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {renderActiveTab()}
      </div>

      {/* Recent Works */}
      <div className="glass-effect rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          हाल की कृतियां
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 aspect-square">
            <div className="absolute inset-4 flex flex-col justify-center items-center text-center">
              <div className="text-4xl mb-2">🎨</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Sunset Meditation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Digital Art • 2 days ago
              </p>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                  View
                </button>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 aspect-square">
            <div className="absolute inset-4 flex flex-col justify-center items-center text-center">
              <div className="text-4xl mb-2">🎵</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Monsoon Raga
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Music • 1 week ago
              </p>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 aspect-square">
            <div className="absolute inset-4 flex flex-col justify-center items-center text-center">
              <div className="text-4xl mb-2">📖</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Journey Home
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Story • 3 days ago
              </p>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeStudioPage;