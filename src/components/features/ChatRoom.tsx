import React, { useState } from 'react';
import { Send, Heart, Flag, MoreVertical } from 'lucide-react';

const ChatRoom: React.FC = () => {
  const [message, setMessage] = useState('');
  const [activeRoom, setActiveRoom] = useState('general');

  const chatRooms = [
    { id: 'general', name: 'सामान्य चर्चा', members: 234, active: true },
    { id: 'meditation', name: 'ध्यान समूह', members: 89, active: true },
    { id: 'anxiety', name: 'चिंता सहायता', members: 156, active: false },
    { id: 'youth', name: 'युवा समुदाय', members: 67, active: true }
  ];

  const messages = [
    {
      id: 1,
      user: 'Priya M.',
      message: 'आज की शुरुआत ध्यान के साथ की। बहुत शांति मिली।',
      time: '10:30 AM',
      likes: 5,
      region: 'Mumbai'
    },
    {
      id: 2,
      user: 'Rajesh K.',
      message: 'मैं भी रोज़ाना प्राणायाम करता हूं। बहुत फायदा होता है।',
      time: '10:35 AM',
      likes: 3,
      region: 'Delhi'
    },
    {
      id: 3,
      user: 'Anjali S.',
      message: 'क्या कोई मुंबई में meditation group join करना चाहेगा?',
      time: '10:45 AM',
      likes: 8,
      region: 'Mumbai'
    },
    {
      id: 4,
      user: 'Anonymous User',
      message: 'Thanks for all the support here. This community means a lot to me.',
      time: '11:00 AM',
      likes: 12,
      region: 'Bangalore'
    }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="flex h-96">
      {/* Chat Rooms Sidebar */}
      <div className="w-64 border-r border-white/20 p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          Chat Rooms
        </h3>
        <div className="space-y-2">
          {chatRooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                activeRoom === room.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-white/10 dark:hover:bg-gray-800/30'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{room.name}</span>
                {room.active && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
              <div className="text-xs opacity-75 mt-1">
                {room.members} members
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="group">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {msg.user}
                  </span>
                  <span className="text-xs text-gray-500">
                    {msg.region}
                  </span>
                  <span className="text-xs text-gray-500">
                    {msg.time}
                  </span>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/20 dark:hover:bg-gray-700/20 rounded">
                  <MoreVertical className="w-3 h-3 text-gray-500" />
                </button>
              </div>
              
              <div className="bg-white/10 dark:bg-gray-800/30 rounded-lg p-3 mb-2">
                <p className="text-gray-900 dark:text-white text-sm">
                  {msg.message}
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                  <Heart className="w-3 h-3" />
                  <span>{msg.likes}</span>
                </button>
                <button className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  Reply
                </button>
                <button className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  <Flag className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-white/20">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message... (अपना संदेश लिखें...)"
              className="flex-1 px-4 py-2 bg-white/10 dark:bg-gray-800/30 border border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Remember: Be kind, supportive, and respect others' privacy
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;