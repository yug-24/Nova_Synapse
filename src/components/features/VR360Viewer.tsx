import React, { useState } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface VR360ViewerProps {
  imageUrl: string;
  title: string;
}

const VR360Viewer: React.FC<VR360ViewerProps> = ({ imageUrl, title }) => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  return (
    <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group">
      {/* 360 Image */}
      <div 
        className="w-full h-full bg-cover bg-center transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          transform: `rotate(${rotation}deg) scale(${zoom})`
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Title overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-white/80 text-sm">360° Immersive View</p>
        </div>

        {/* VR Indicators */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <div className="px-3 py-1 bg-red-500 text-white text-sm rounded-full animate-pulse">
            LIVE
          </div>
          <div className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
            360°
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setRotation(rotation - 15)}
          className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
          className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom(Math.min(2, zoom + 0.1))}
          className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors">
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* Meditation Points */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-0"></div>
      </div>

      <div className="absolute top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75 animation-delay-500"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default VR360Viewer;