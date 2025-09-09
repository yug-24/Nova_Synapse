import React, { useState } from 'react';
import { Mic, MicOff, MessageCircle, Heart, Volume2 } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import CompanionAvatar from '../features/CompanionAvatar';
import ChatInterface from '../features/ChatInterface';
import EmotionAnalysis from '../features/EmotionAnalysis';

const AICompanionPage: React.FC = () => {
  const { state } = useApp();
  const [isListening, setIsListening] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState('calm');

  const toggleListening = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
      }, 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Companion Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          मिलिए अपने AI साथी से
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {state.user.companion === 'elephant' && 'Ganesha - बुद्धिमत्ता और शांति के साथी'}
          {state.user.companion === 'peacock' && 'Mayura - रंग और खुशी के साथी'}
          {state.user.companion === 'tiger' && 'Shera - शक्ति और साहस के साथी'}
        </p>
      </div>

      {/* Companion Display */}
      <div className="glass-effect rounded-3xl p-8 border border-white/20 text-center">
        <CompanionAvatar 
          type={state.user.companion} 
          emotion={currentEmotion}
          isActive={isListening}
        />
        
        {/* Voice Controls */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={toggleListening}
            className={`p-4 rounded-full transition-all duration-300 ${
              isListening
                ? 'bg-red-500 text-white shadow-lg pulse-ring'
                : 'bg-gradient-to-r from-orange-500 to-blue-600 text-white hover:shadow-lg'
            }`}
          >
            {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          
          <button className="p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
            <Volume2 className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => setCurrentEmotion(currentEmotion === 'calm' ? 'happy' : 'calm')}
            className="p-4 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all duration-300"
          >
            <Heart className="w-6 h-6" />
          </button>
        </div>

        {isListening && (
          <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <p className="text-blue-700 dark:text-blue-300">
              सुन रहा हूं... कृपया बोलें
            </p>
            <div className="flex justify-center space-x-1 mt-2">
              <div className="w-2 h-8 bg-blue-500 rounded animate-pulse"></div>
              <div className="w-2 h-12 bg-blue-500 rounded animate-pulse animation-delay-100"></div>
              <div className="w-2 h-6 bg-blue-500 rounded animate-pulse animation-delay-200"></div>
              <div className="w-2 h-10 bg-blue-500 rounded animate-pulse animation-delay-300"></div>
            </div>
          </div>
        )}
      </div>

      {/* Emotion Analysis */}
      <EmotionAnalysis currentEmotion={currentEmotion} />

      {/* Chat Interface */}
      <div className="glass-effect rounded-2xl border border-white/20">
        <div className="flex items-center space-x-3 p-4 border-b border-white/20">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            बातचीत
          </h2>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default AICompanionPage;