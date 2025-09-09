import React, { useState } from 'react';
import { useApp } from '../../contexts/AppContext';

const MoodWheel: React.FC = () => {
  const { dispatch } = useApp();
  const [selectedMood, setSelectedMood] = useState('');
  const [intensity, setIntensity] = useState(5);

  const moods = [
    { id: 'शांत', label: 'शांत (Peaceful)', color: 'bg-blue-400', englishLabel: 'Peaceful' },
    { id: 'खुश', label: 'खुश (Happy)', color: 'bg-yellow-400', englishLabel: 'Happy' },
    { id: 'उत्साहित', label: 'उत्साहित (Excited)', color: 'bg-orange-400', englishLabel: 'Excited' },
    { id: 'चिंतित', label: 'चिंतित (Anxious)', color: 'bg-red-400', englishLabel: 'Anxious' },
    { id: 'उदास', label: 'उदास (Sad)', color: 'bg-indigo-400', englishLabel: 'Sad' },
    { id: 'गुस्सा', label: 'गुस्सा (Angry)', color: 'bg-red-600', englishLabel: 'Angry' },
    { id: 'आशावादी', label: 'आशावादी (Hopeful)', color: 'bg-green-400', englishLabel: 'Hopeful' },
    { id: 'तनावग्रस्त', label: 'तनावग्रस्त (Stressed)', color: 'bg-gray-500', englishLabel: 'Stressed' },
  ];

  const handleMoodSubmit = () => {
    if (selectedMood) {
      const newEntry = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        mood: selectedMood,
        intensity,
        culturalContext: 'daily_check_in',
        notes: ''
      };
      dispatch({ type: 'ADD_MOOD_ENTRY', payload: newEntry });
      setSelectedMood('');
      setIntensity(5);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mood Selection Wheel */}
      <div className="relative">
        <div className="grid grid-cols-4 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.label)}
              className={`p-3 rounded-xl transition-all duration-200 text-center ${
                selectedMood === mood.label
                  ? 'scale-110 ring-4 ring-white/50 shadow-lg'
                  : 'hover:scale-105'
              } ${mood.color} text-white`}
            >
              <div className="text-sm font-medium">
                {mood.id}
              </div>
              <div className="text-xs opacity-80">
                {mood.englishLabel}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Intensity Slider */}
      {selectedMood && (
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              How intense is this feeling?
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {selectedMood}
            </p>
          </div>
          
          <div className="space-y-2">
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Very Low</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {intensity}/10
              </span>
              <span>Very High</span>
            </div>
          </div>

          <button
            onClick={handleMoodSubmit}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
          >
            Record Mood
          </button>
        </div>
      )}
    </div>
  );
};

export default MoodWheel;