import React, { useState } from 'react';
import { BookOpen, Feather, Save, Share, Sparkles } from 'lucide-react';

const StoryCreator: React.FC = () => {
  const [storyText, setStoryText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const templates = [
    {
      id: 'journey',
      title: 'Inner Journey',
      titleHi: 'आंतरिक यात्रा',
      prompt: 'Once upon a time, I embarked on a journey to discover...'
    },
    {
      id: 'transformation',
      title: 'Transformation',
      titleHi: 'परिवर्तन',
      prompt: 'The day I realized I needed to change was when...'
    },
    {
      id: 'gratitude',
      title: 'Gratitude Story',
      titleHi: 'कृतज्ञता की कहानी',
      prompt: 'I never knew how much this meant to me until...'
    },
    {
      id: 'courage',
      title: 'Finding Courage',
      titleHi: 'साहस की खोज',
      prompt: 'My heart was racing, but I knew I had to...'
    }
  ];

  const handleTextChange = (text: string) => {
    setStoryText(text);
    setWordCount(text.trim().split(/\s+/).filter(word => word.length > 0).length);
  };

  const useTemplate = (template: any) => {
    setSelectedTemplate(template.id);
    setStoryText(template.prompt);
    setWordCount(template.prompt.trim().split(/\s+/).length);
  };

  return (
    <div className="space-y-6">
      {/* Template Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Story Templates / कहानी के टेम्पलेट्स
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => useTemplate(template)}
              className={`p-4 text-left rounded-xl transition-all duration-200 ${
                selectedTemplate === template.id
                  ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-gray-800/30 hover:bg-white/20 dark:hover:bg-gray-800/40'
              }`}
            >
              <div className="font-semibold mb-1">
                {template.titleHi}
              </div>
              <div className="text-sm opacity-80">
                {template.title}
              </div>
              <div className="text-xs mt-2 opacity-70">
                "{template.prompt.substring(0, 50)}..."
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Writing Area */}
      <div className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <Feather className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Your Story / आपकी कहानी
            </h3>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Words: {wordCount}
            </span>
            <div className="flex space-x-2">
              <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                <Save className="w-4 h-4" />
              </button>
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Share className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <textarea
          value={storyText}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="शुरुआत करें... Begin your story here..."
          className="w-full h-64 p-4 bg-white/10 dark:bg-gray-700/30 border border-white/20 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* AI Writing Assistant */}
      <div className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <h4 className="font-semibold text-gray-900 dark:text-white">
            AI Writing Assistant
          </h4>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Suggestions based on your current mood:
          </div>
          
          <div className="space-y-1">
            <button className="w-full text-left p-2 bg-blue-100 dark:bg-blue-900/20 rounded text-sm text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors">
              💭 Add a moment of reflection
            </button>
            <button className="w-full text-left p-2 bg-green-100 dark:bg-green-900/20 rounded text-sm text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors">
              🌅 Describe the setting in more detail
            </button>
            <button className="w-full text-left p-2 bg-purple-100 dark:bg-purple-900/20 rounded text-sm text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors">
              💫 Include a lesson learned
            </button>
          </div>
        </div>
      </div>

      {/* Recent Stories */}
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Recent Stories / हाल की कहानियां
        </h4>
        <div className="space-y-2">
          {[
            { title: 'My Morning Walk', titleHi: 'मेरी सुबह की सैर', words: 245, date: '2 days ago' },
            { title: 'Finding Peace', titleHi: 'शांति की तलाश', words: 389, date: '1 week ago' },
            { title: 'Family Gathering', titleHi: 'पारिवारिक मिलन', words: 156, date: '2 weeks ago' }
          ].map((story, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/40 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {story.titleHi}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {story.title} • {story.words} words • {story.date}
                  </div>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCreator;