import React, { useState } from 'react';
import { MessageSquare, Users, Calendar, MapPin, Heart, Plus } from 'lucide-react';
import ChatRoom from '../features/ChatRoom';
import GroupList from '../features/GroupList';
import EventCalendar from '../features/EventCalendar';

const CommunityPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('chats');

  const sections = [
    { id: 'chats', name: 'चैट रूम', icon: MessageSquare },
    { id: 'groups', name: 'समूह', icon: Users },
    { id: 'events', name: 'कार्यक्रम', icon: Calendar }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'chats':
        return <ChatRoom />;
      case 'groups':
        return <GroupList />;
      case 'events':
        return <EventCalendar />;
      default:
        return <ChatRoom />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          समुदायिक सहायता
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Connect with others on a similar journey
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="glass-effect rounded-xl p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            2.5K+
          </div>
          <p className="text-gray-600 dark:text-gray-400">Active Members</p>
        </div>
        <div className="glass-effect rounded-xl p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            150+
          </div>
          <p className="text-gray-600 dark:text-gray-400">Support Groups</p>
        </div>
        <div className="glass-effect rounded-xl p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            45
          </div>
          <p className="text-gray-600 dark:text-gray-400">Daily Events</p>
        </div>
        <div className="glass-effect rounded-xl p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            12
          </div>
          <p className="text-gray-600 dark:text-gray-400">Languages</p>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="flex justify-center space-x-2 mb-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg scale-105'
                  : 'glass-effect text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/20'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{section.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Section Content */}
      <div className="glass-effect rounded-3xl border border-white/20 overflow-hidden">
        {renderActiveSection()}
      </div>

      {/* Featured Groups */}
      <div className="glass-effect rounded-2xl p-6 border border-white/20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            सुझाए गए समूह
          </h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Group</span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xl">
                🧘‍♀️
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  मुंबई मेडिटेशन
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  845 members
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Daily meditation sessions for Mumbai residents
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Mumbai</span>
              </div>
              <div className="flex items-center space-x-1 text-red-500">
                <Heart className="w-4 h-4" />
                <span className="text-sm">89% helpful</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                👥
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  युवा मानसिक स्वास्थ्य
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  1.2K members
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Support group for young adults (18-25)
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Pan India</span>
              </div>
              <div className="flex items-center space-x-1 text-red-500">
                <Heart className="w-4 h-4" />
                <span className="text-sm">92% helpful</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                👨‍👩‍👧‍👦
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  पारिवारिक सहायता
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  632 members
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Family-oriented mental health support
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Delhi NCR</span>
              </div>
              <div className="flex items-center space-x-1 text-red-500">
                <Heart className="w-4 h-4" />
                <span className="text-sm">94% helpful</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;