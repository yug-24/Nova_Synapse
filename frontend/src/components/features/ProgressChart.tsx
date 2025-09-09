import React from 'react';
import { TrendingUp } from 'lucide-react';

const ProgressChart: React.FC = () => {
  const weekData = [
    { day: 'Mon', mood: 7, activity: 85, stress: 3 },
    { day: 'Tue', mood: 6, activity: 70, stress: 5 },
    { day: 'Wed', mood: 8, activity: 90, stress: 2 },
    { day: 'Thu', mood: 7, activity: 75, stress: 4 },
    { day: 'Fri', mood: 9, activity: 95, stress: 1 },
    { day: 'Sat', mood: 8, activity: 80, stress: 2 },
    { day: 'Sun', mood: 9, activity: 85, stress: 1 },
  ];

  return (
    <div className="space-y-4">
      {/* Chart Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Mood</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Activity</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Stress</span>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end space-x-3 h-32">
        {weekData.map((data, index) => (
          <div key={data.day} className="flex-1 flex flex-col items-center space-y-2">
            <div className="flex flex-col space-y-1 w-full">
              {/* Mood bar */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden">
                <div
                  className="bg-blue-500 rounded-sm transition-all duration-500"
                  style={{ height: `${data.mood * 4}px` }}
                ></div>
              </div>
              
              {/* Activity bar */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden">
                <div
                  className="bg-green-500 rounded-sm transition-all duration-500"
                  style={{ height: `${data.activity * 0.4}px` }}
                ></div>
              </div>
              
              {/* Stress bar (inverted) */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden">
                <div
                  className="bg-red-500 rounded-sm transition-all duration-500"
                  style={{ height: `${data.stress * 8}px` }}
                ></div>
              </div>
            </div>
            
            <span className="text-xs text-gray-500">{data.day}</span>
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Positive Trend
            </span>
          </div>
          <p className="text-xs text-green-600 dark:text-green-400">
            Your mood has improved by 28% this week
          </p>
        </div>

        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Best Day
            </span>
          </div>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Friday showed the highest wellbeing score
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;