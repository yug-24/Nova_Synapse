import React, { useState, useRef, useEffect } from 'react';
import { Send, Smile } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'companion';
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! आज आपका दिन कैसा रहा?',
      sender: 'companion',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'मैं समझ सकता हूं। आपकी भावनाएं महत्वपूर्ण हैं।',
        'यह सुनकर अच्छा लगा। क्या आप इस बारे में और बताना चाहेंगे?',
        'आपने बहुत अच्छा साझा किया है। आइए इस पर थोड़ा और विचार करते हैं।',
        'मैं आपके साथ हूं। एक गहरी सांस लेते हैं और आगे बढ़ते हैं।'
      ];
      
      const companionMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'companion',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, companionMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-96 flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white'
                  : 'bg-white/20 dark:bg-gray-700/50 text-gray-900 dark:text-white'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/20 dark:bg-gray-700/50 px-4 py-2 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/20">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="अपनी बात कहें..."
              className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/30 border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <Smile className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={sendMessage}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            disabled={!inputMessage.trim() || isTyping}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;