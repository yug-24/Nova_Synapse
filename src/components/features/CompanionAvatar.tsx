import React from 'react';

interface CompanionAvatarProps {
  type: 'elephant' | 'peacock' | 'tiger';
  emotion: string;
  isActive: boolean;
}

const CompanionAvatar: React.FC<CompanionAvatarProps> = ({ type, emotion, isActive }) => {
  const getCompanionDisplay = () => {
    const baseClasses = `text-8xl transition-all duration-500 ${isActive ? 'companion-bounce' : 'floating'}`;
    
    switch (type) {
      case 'elephant':
        return (
          <div className={baseClasses}>
            {emotion === 'happy' ? '🐘😊' : emotion === 'calm' ? '🐘😌' : '🐘'}
          </div>
        );
      case 'peacock':
        return (
          <div className={baseClasses}>
            {emotion === 'happy' ? '🦚✨' : emotion === 'calm' ? '🦚💙' : '🦚'}
          </div>
        );
      case 'tiger':
        return (
          <div className={baseClasses}>
            {emotion === 'happy' ? '🐅😸' : emotion === 'calm' ? '🐅😺' : '🐅'}
          </div>
        );
      default:
        return <div className={baseClasses}>🐘</div>;
    }
  };

  const getCompanionName = () => {
    switch (type) {
      case 'elephant':
        return 'Ganesha';
      case 'peacock':
        return 'Mayura';
      case 'tiger':
        return 'Shera';
      default:
        return 'Companion';
    }
  };

  const getCompanionQuote = () => {
    const quotes = {
      elephant: {
        happy: 'हर बाधा को हटाने के लिए मैं यहां हूं!',
        calm: 'शांति से, धैर्य के साथ आगे बढ़ते हैं।',
        default: 'मैं आपका मार्गदर्शक हूं।'
      },
      peacock: {
        happy: 'जीवन में रंग भरने का समय!',
        calm: 'सुंदरता हर जगह है, बस देखना है।',
        default: 'आपकी रचनात्मकता को जगाते हैं।'
      },
      tiger: {
        happy: 'आत्मविश्वास के साथ आगे बढ़ें!',
        calm: 'अंदरूनी शक्ति से भरपूर हैं आप।',
        default: 'साहस और शक्ति का प्रतीक हूं।'
      }
    };

    return quotes[type][emotion as keyof typeof quotes[typeof type]] || quotes[type].default;
  };

  return (
    <div className="relative">
      {/* Companion Display */}
      <div className="relative z-10 flex flex-col items-center">
        {getCompanionDisplay()}
        
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {getCompanionName()}
          </h3>
          
          <div className="max-w-xs mx-auto p-3 bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              "{getCompanionQuote()}"
            </p>
          </div>
        </div>
      </div>

      {/* Ambient Effects */}
      {isActive && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-600/20 rounded-full animate-ping"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-green-400/20 to-purple-600/20 rounded-full animate-ping animation-delay-300"></div>
        </>
      )}
      
      {/* Emotion Indicator */}
      <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${
        emotion === 'happy' ? 'bg-yellow-400' : 
        emotion === 'calm' ? 'bg-blue-400' : 'bg-gray-400'
      } animate-pulse`}></div>
    </div>
  );
};

export default CompanionAvatar;