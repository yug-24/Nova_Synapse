import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, Settings, Map } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import VR360Viewer from '../features/VR360Viewer';
import MeditationPlayer from '../features/MeditationPlayer';

const VRSpacesPage: React.FC = () => {
  const { state } = useApp();
  const [currentSpace, setCurrentSpace] = useState('himalayas');
  const [isPlaying, setIsPlaying] = useState(false);

  const vrSpaces = [
    {
      id: 'himalayas',
      name: 'हिमालय शिखर',
      description: 'Peaceful mountain peaks',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg',
      type: 'meditation',
      benefits: ['Stress Relief', 'Focus Enhancement']
    },
    {
      id: 'ganges',
      name: 'गंगा आरती',
      description: 'Sacred riverside ceremony',
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg',
      type: 'spiritual',
      benefits: ['Spiritual Connection', 'Inner Peace']
    },
    {
      id: 'kerala',
      name: 'केरल बैकवाटर्स',
      description: 'Serene backwaters',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      type: 'nature',
      benefits: ['Relaxation', 'Mental Clarity']
    },
    {
      id: 'rajasthan',
      name: 'राजस्थान रेगिस्तान',
      description: 'Golden sand dunes',
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
      type: 'adventure',
      benefits: ['Confidence Building', 'Courage']
    }
  ];

  const currentSpaceData = vrSpaces.find(space => space.id === currentSpace);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          VR हीलिंग स्पेसेस
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Immersive healing environments from across India
        </p>
      </div>

      {/* VR Viewer */}
      <div className="glass-effect rounded-3xl p-6 border border-white/20">
        <div className="relative">
          <VR360Viewer 
            imageUrl={currentSpaceData?.image || vrSpaces[0].image}
            title={currentSpaceData?.name || vrSpaces[0].name}
          />
          
          {/* VR Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
              <RotateCcw className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
              <Volume2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Space Info */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {currentSpaceData?.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {currentSpaceData?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentSpaceData?.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
          
          <MeditationPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
      </div>

      {/* Space Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vrSpaces.map((space) => (
          <button
            key={space.id}
            onClick={() => setCurrentSpace(space.id)}
            className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
              currentSpace === space.id
                ? 'ring-4 ring-blue-500 scale-105'
                : 'hover:scale-102'
            }`}
          >
            <div className="aspect-square relative">
              <img
                src={space.image}
                alt={space.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {space.name}
                </h4>
                <p className="text-white/80 text-sm">
                  {space.description}
                </p>
              </div>
              
              {currentSpace === space.id && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Session Stats */}
      <div className="glass-effect rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <Map className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            सत्र का रिकॉर्ड
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              45
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Total Sessions
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              12h 30m
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Time Spent
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              89%
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Stress Reduction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRSpacesPage;