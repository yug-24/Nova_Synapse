import React, { useState } from 'react';
import { Users, MapPin, Star, Plus, Filter } from 'lucide-react';

const GroupList: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const groups = [
    {
      id: 1,
      name: 'मुंबई मेडिटेशन सर्कल',
      description: 'Daily meditation sessions for Mumbai residents',
      members: 245,
      location: 'Mumbai',
      category: 'meditation',
      rating: 4.8,
      isJoined: true,
      nextMeeting: 'Today 7:00 PM',
      language: 'Hindi/English'
    },
    {
      id: 2,
      name: 'Young Professionals Support',
      description: 'Mental health support for working professionals aged 25-35',
      members: 189,
      location: 'Pan India',
      category: 'support',
      rating: 4.7,
      isJoined: false,
      nextMeeting: 'Tomorrow 8:00 PM',
      language: 'English'
    },
    {
      id: 3,
      name: 'माताओं का समूह',
      description: 'Support group for mothers dealing with postpartum challenges',
      members: 156,
      location: 'Delhi NCR',
      category: 'support',
      rating: 4.9,
      isJoined: false,
      nextMeeting: 'Wed 6:00 PM',
      language: 'Hindi'
    },
    {
      id: 4,
      name: 'Creative Healing Arts',
      description: 'Express yourself through art, music, and writing',
      members: 98,
      location: 'Bangalore',
      category: 'creative',
      rating: 4.6,
      isJoined: true,
      nextMeeting: 'Sat 10:00 AM',
      language: 'English/Kannada'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Groups' },
    { id: 'meditation', name: 'Meditation' },
    { id: 'support', name: 'Support' },
    { id: 'creative', name: 'Creative' }
  ];

  const filteredGroups = filter === 'all' 
    ? groups 
    : groups.filter(group => group.category === filter);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Support Groups
        </h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
          <Plus className="w-4 h-4" />
          <span>Create Group</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
        <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              filter === category.id
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/40'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Groups List */}
      <div className="space-y-4">
        {filteredGroups.map((group) => (
          <div key={group.id} className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/40 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {group.name}
                  </h3>
                  {group.isJoined && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs rounded-full">
                      Joined
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {group.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{group.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{group.rating}/5</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded">
                    {group.language}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded">
                    Next: {group.nextMeeting}
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-2 ml-4">
                {group.isJoined ? (
                  <>
                    <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors">
                      View Chat
                    </button>
                    <button className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors">
                      Leave
                    </button>
                  </>
                ) : (
                  <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                    Join Group
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No groups message */}
      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">
            No groups found for the selected category.
          </p>
        </div>
      )}
    </div>
  );
};

export default GroupList;