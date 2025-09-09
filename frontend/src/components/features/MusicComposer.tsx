import React, { useState } from 'react';
import { Play, Pause, Square, Music, Volume2, Download } from 'lucide-react';

const MusicComposer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState('tabla');
  const [tempo, setTempo] = useState(120);

  const instruments = [
    { id: 'tabla', name: 'तबला', icon: '🥁', sound: 'Tabla' },
    { id: 'sitar', name: 'सितार', icon: '🎸', sound: 'Sitar' },
    { id: 'flute', name: 'बांसुरी', icon: '🪈', sound: 'Flute' },
    { id: 'harmonium', name: 'हारमोनियम', icon: '🎹', sound: 'Harmonium' },
    { id: 'veena', name: 'वीणा', icon: '🎵', sound: 'Veena' },
    { id: 'drums', name: 'ढोल', icon: '🪘', sound: 'Dhol' }
  ];

  const ragas = [
    'Raga Yaman', 'Raga Bhairav', 'Raga Malkauns', 'Raga Desh', 'Raga Bhupali'
  ];

  return (
    <div className="space-y-6">
      {/* Instrument Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          वाद्य यंत्र चुनें
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {instruments.map((instrument) => (
            <button
              key={instrument.id}
              onClick={() => setSelectedInstrument(instrument.id)}
              className={`p-4 rounded-xl text-center transition-all duration-200 ${
                selectedInstrument === instrument.id
                  ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 dark:bg-gray-800/30 hover:bg-white/20 dark:hover:bg-gray-800/40'
              }`}
            >
              <div className="text-2xl mb-1">{instrument.icon}</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {instrument.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Composition Area */}
      <div className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            संगीत रचना
          </h3>
          
          <div className="flex items-center space-x-4">
            {/* Tempo Control */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Tempo:</span>
              <input
                type="range"
                min="60"
                max="200"
                value={tempo}
                onChange={(e) => setTempo(Number(e.target.value))}
                className="w-24"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 w-8">
                {tempo}
              </span>
            </div>

            {/* Transport Controls */}
            <div className="flex space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                <Square className="w-4 h-4" />
              </button>
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Virtual Keyboard/Pads */}
        <div className="space-y-4">
          <div className="grid grid-cols-8 gap-2">
            {[...Array(16)].map((_, i) => (
              <button
                key={i}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg hover:from-orange-200 hover:to-blue-300 dark:hover:from-orange-800/50 dark:hover:to-blue-800/50 transition-all duration-200 flex items-center justify-center"
              >
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {String.fromCharCode(65 + i)}
                </span>
              </button>
            ))}
          </div>

          {/* Pattern Sequencer */}
          <div className="space-y-2">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">
              Pattern Sequencer
            </h4>
            <div className="grid grid-cols-16 gap-1">
              {[...Array(64)].map((_, i) => (
                <button
                  key={i}
                  className={`h-8 rounded transition-colors ${
                    i % 16 === 0
                      ? 'bg-red-200 dark:bg-red-800/30'
                      : i % 4 === 0
                      ? 'bg-blue-200 dark:bg-blue-800/30'
                      : 'bg-gray-200 dark:bg-gray-700'
                  } hover:bg-orange-300 dark:hover:bg-orange-700/50`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Raga Suggestions */}
      <div className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Suggested Ragas for Peace
        </h4>
        <div className="flex flex-wrap gap-2">
          {ragas.map((raga) => (
            <button
              key={raga}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
            >
              {raga}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Compositions */}
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Recent Compositions
        </h4>
        <div className="space-y-2">
          {['Monsoon Melody', 'Evening Raga', 'Peaceful Dawn'].map((title, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <Music className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    2 days ago • 3:45
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Play className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicComposer;