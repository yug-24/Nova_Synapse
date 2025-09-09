import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';

interface MeditationPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MeditationPlayer: React.FC<MeditationPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const [currentTrack, setCurrentTrack] = React.useState(0);
  const [progress, setProgress] = React.useState(30);

  const tracks = [
    { name: 'हिमालयी शांति', duration: '15:00', type: 'Nature Sounds' },
    { name: 'गंगा आरती', duration: '12:30', type: 'Spiritual' },
    { name: 'वन की आवाज़ें', duration: '20:00', type: 'Forest Ambiance' }
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {tracks[currentTrack].name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tracks[currentTrack].type} • {tracks[currentTrack].duration}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{Math.floor(progress * 15 / 100)}:{(progress * 9 % 60).toString().padStart(2, '0')}</span>
          <span>{tracks[currentTrack].duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4">
        <button 
          onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-200"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        <button 
          onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <SkipForward className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      {/* Playlist */}
      <div className="space-y-2">
        <h5 className="font-medium text-gray-900 dark:text-white text-sm">Playlist</h5>
        {tracks.map((track, index) => (
          <button
            key={index}
            onClick={() => setCurrentTrack(index)}
            className={`w-full text-left p-2 rounded-lg transition-colors ${
              currentTrack === index
                ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800/30'
            }`}
          >
            <div className="font-medium text-sm text-gray-900 dark:text-white">
              {track.name}
            </div>
            <div className="text-xs text-gray-500">
              {track.type} • {track.duration}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MeditationPlayer;