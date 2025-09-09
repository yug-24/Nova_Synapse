import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

const EventCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const events = [
    {
      id: 1,
      title: 'Virtual Meditation Session',
      titleHi: 'आभासी ध्यान सत्र',
      time: '7:00 PM - 8:00 PM',
      date: '2025-01-09',
      type: 'meditation',
      attendees: 45,
      location: 'Online',
      description: 'Guided meditation for stress relief and inner peace'
    },
    {
      id: 2,
      title: 'Mental Health Awareness Workshop',
      titleHi: 'मानसिक स्वास्थ्य जागरूकता कार्यशाला',
      time: '3:00 PM - 5:00 PM',
      date: '2025-01-10',
      type: 'workshop',
      attendees: 78,
      location: 'Mumbai Community Center',
      description: 'Learn about mental health resources and coping strategies'
    },
    {
      id: 3,
      title: 'Art Therapy Session',
      titleHi: 'कला चिकित्सा सत्र',
      time: '10:00 AM - 12:00 PM',
      date: '2025-01-11',
      type: 'creative',
      attendees: 25,
      location: 'Delhi Art Studio',
      description: 'Express emotions through creative art activities'
    },
    {
      id: 4,
      title: 'Makar Sankranti Celebration',
      titleHi: 'मकर संक्रांति उत्सव',
      time: '6:00 PM - 9:00 PM',
      date: '2025-01-14',
      type: 'festival',
      attendees: 156,
      location: 'Various Cities',
      description: 'Community celebration with traditional activities and mindfulness'
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'meditation': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300';
      case 'workshop': return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300';
      case 'creative': return 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300';
      case 'festival': return 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300';
      default: return 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Community Events
        </h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            My Events
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Create Event
          </button>
        </div>
      </div>

      {/* Mini Calendar */}
      <div className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <Calendar className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            January 2025
          </h3>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-xs font-medium text-gray-500 p-2">
              {day}
            </div>
          ))}
          
          {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`p-2 text-sm rounded-lg transition-colors ${
                date === selectedDate
                  ? 'bg-blue-500 text-white'
                  : date === new Date().getDate()
                  ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                  : 'hover:bg-white/20 dark:hover:bg-gray-700/20 text-gray-900 dark:text-white'
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Upcoming Events
        </h3>
        
        {events.map((event) => (
          <div key={event.id} className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/40 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {event.titleHi}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${getEventColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                  {event.title}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 ml-4">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                  Join Event
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/10 dark:bg-gray-800/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            12
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Events This Week
          </div>
        </div>
        <div className="bg-white/10 dark:bg-gray-800/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            3
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Events Joined
          </div>
        </div>
        <div className="bg-white/10 dark:bg-gray-800/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            45
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Hours Participated
          </div>
        </div>
        <div className="bg-white/10 dark:bg-gray-800/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            89%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Attendance Rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;