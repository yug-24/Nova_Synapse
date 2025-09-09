import React, { useState } from 'react';
import { Brush, Eraser, Palette, Undo, Download, Sparkles } from 'lucide-react';

const DigitalCanvas: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('brush');
  const [brushSize, setBrushSize] = useState(10);
  const [selectedColor, setSelectedColor] = useState('#FF7F00');

  const colors = [
    '#FF7F00', '#1E3A8A', '#059669', '#DC2626', '#7C3AED', '#F59E0B',
    '#EC4899', '#10B981', '#3B82F6', '#8B5CF6', '#F97316', '#06B6D4'
  ];

  const tools = [
    { id: 'brush', name: 'Brush', icon: Brush },
    { id: 'eraser', name: 'Eraser', icon: Eraser },
    { id: 'palette', name: 'Fill', icon: Palette }
  ];

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl">
        {/* Tools */}
        <div className="flex space-x-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  selectedTool === tool.id
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white/20 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/70'
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* Brush Size */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">Size:</span>
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-24"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300 w-8">
            {brushSize}
          </span>
        </div>

        {/* Colors */}
        <div className="flex space-x-1">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full transition-all duration-200 ${
                selectedColor === color ? 'ring-2 ring-white ring-offset-2 scale-110' : 'hover:scale-110'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-2 ml-auto">
          <button className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
            <Undo className="w-4 h-4" />
          </button>
          <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            <Sparkles className="w-4 h-4" />
          </button>
          <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="relative">
        <div className="aspect-video bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Digital Canvas
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Express your emotions through art
            </p>
          </div>
        </div>

        {/* AI Suggestions Panel */}
        <div className="absolute top-4 right-4 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-2 mb-3">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              AI Suggestions
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Based on your current mood (Peaceful):
            </div>
            
            <div className="space-y-1">
              <button className="w-full text-left p-2 bg-blue-100 dark:bg-blue-900/20 rounded text-xs text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors">
                🌊 Ocean waves and flowing water
              </button>
              <button className="w-full text-left p-2 bg-green-100 dark:bg-green-900/20 rounded text-xs text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors">
                🌸 Lotus flowers in bloom
              </button>
              <button className="w-full text-left p-2 bg-purple-100 dark:bg-purple-900/20 rounded text-xs text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors">
                🧘 Meditation mandala
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Artworks */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="text-center">
              <div className="text-2xl mb-1">🎭</div>
              <div className="text-xs text-gray-500">Artwork {i}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalCanvas;