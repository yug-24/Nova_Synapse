import React from 'react';
import { Activity, Heart, Moon, Zap } from 'lucide-react';

const BiometricDashboard: React.FC = () => {
  const biometricData = {
    heartRate: {
      current: 72,
      average: 75,
      trend: 'down',
      status: 'good'
    },
    sleepQuality: {
      lastNight: 8.2,
      average: 7.8,
      hours: 7.5,
      trend: 'up'
    },
    stressLevel: {
      current: 3,
      average: 4,
      trend: 'down',
      status: 'low'
    },
    energy: {
      current: 85,
      morning: 90,
      afternoon: 82,
      evening: 78
    }
  };

  const moodPredictions = [
    { time: '9:00 AM', prediction: 'Energetic', confidence: 85 },
    { time: '1:00 PM', prediction: 'Focused', confidence: 78 },
    { time: '6:00 PM', prediction: 'Peaceful', confidence: 92 },
    { time: '10:00 PM', prediction: 'Relaxed', confidence: 88 }
  ];

  const interventionSuggestions = [
    {
      trigger: 'Elevated stress detected',
      suggestion: '5-minute breathing exercise',
      type: 'immediate',
      icon: '🫁'
    },
    {
      trigger: 'Low energy pattern',
      suggestion: 'Take a short walk outside',
      type: 'activity',
      icon: '🚶‍♀️'
    },
    {
      trigger: 'Sleep quality declining',
      suggestion: 'Start evening meditation routine',
      type: 'preventive',
      icon: '🧘‍♂️'
    }
  ];

  return (
    <div className="glass-effect rounded-2xl p-6 border border-white/20">
      <div className="flex items-center space-x-3 mb-6">
        <Activity className="w-5 h-5 text-green-500" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          जैविक डेटा डैशबोर्ड
        </h2>
      </div>

      {/* Current Vitals */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-red-100 dark:bg-red-900/20 rounded-lg">
          <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            {biometricData.heartRate.current}
          </div>
          <div className="text-xs text-red-700 dark:text-red-300">
            Heart Rate (BPM)
          </div>
          <div className={`text-xs mt-1 ${
            biometricData.heartRate.trend === 'down' ? 'text-green-600' : 'text-orange-600'
          }`}>
            ↓ {biometricData.heartRate.average - biometricData.heartRate.current} from avg
          </div>
        </div>

        <div className="text-center p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <Moon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {biometricData.sleepQuality.lastNight}
          </div>
          <div className="text-xs text-blue-700 dark:text-blue-300">
            Sleep Quality /10
          </div>
          <div className="text-xs mt-1 text-green-600">
            {biometricData.sleepQuality.hours}h slept
          </div>
        </div>

        <div className="text-center p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
          <Zap className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {biometricData.stressLevel.current}
          </div>
          <div className="text-xs text-orange-700 dark:text-orange-300">
            Stress Level /10
          </div>
          <div className="text-xs mt-1 text-green-600">
            ↓ Lower than usual
          </div>
        </div>

        <div className="text-center p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <Activity className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {biometricData.energy.current}%
          </div>
          <div className="text-xs text-green-700 dark:text-green-300">
            Energy Level
          </div>
          <div className="text-xs mt-1 text-blue-600">
            Peak at 9 AM
          </div>
        </div>
      </div>

      {/* Mood Predictions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Today's Mood Predictions
        </h3>
        <div className="space-y-2">
          {moodPredictions.map((prediction, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-white/10 dark:bg-gray-800/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {prediction.time}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {prediction.prediction}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${prediction.confidence}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">
                  {prediction.confidence}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intervention Suggestions */}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Smart Interventions
        </h3>
        <div className="space-y-2">
          {interventionSuggestions.map((intervention, index) => (
            <div key={index} className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="text-xl">{intervention.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    {intervention.trigger}
                  </div>
                  <div className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    Suggested: {intervention.suggestion}
                  </div>
                </div>
                <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-lg hover:bg-yellow-600 transition-colors">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleep-Emotion Correlation */}
      <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
          Sleep-Emotion Correlation
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-purple-700 dark:text-purple-300">Better sleep quality correlates with:</span>
            <ul className="text-purple-600 dark:text-purple-400 text-xs mt-1 space-y-1">
              <li>• 23% better mood scores</li>
              <li>• 31% lower stress levels</li>
            </ul>
          </div>
          <div>
            <span className="text-purple-700 dark:text-purple-300">Optimal sleep window:</span>
            <div className="text-purple-600 dark:text-purple-400 text-xs mt-1">
              10:30 PM - 6:00 AM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiometricDashboard;