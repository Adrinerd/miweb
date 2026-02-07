import React, { useState } from 'react';
import { Organ } from '../types';

const organs: Organ[] = [
  { id: 'mouth', name: 'Mouth', description: 'Food enters the body here, where chewing and saliva begin the digestion process.', pathId: 'path-mouth' },
  { id: 'esophagus', name: 'Esophagus', description: 'A muscular tube that moves food from the mouth to the stomach using rhythmic contractions.', pathId: 'path-esophagus' },
  { id: 'stomach', name: 'Stomach', description: 'Food is mixed with acids and enzymes to break it down into a semi-liquid form.', pathId: 'path-stomach' },
  { id: 'small-intestine', name: 'Small Intestine', description: 'Most nutrients are absorbed here as digestion continues with enzymes and bile.', pathId: 'path-intestine' },
  { id: 'large-intestine', name: 'Large Intestine', description: 'Water is absorbed and remaining material is formed into solid waste.', pathId: 'path-colon' },
  { id: 'rectum', name: 'Rectum', description: 'Stores waste until it is ready to be expelled from the body.', pathId: 'path-rectum' },
];

const DigestiveSystem: React.FC = () => {
  const [activeOrgan, setActiveOrgan] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Tooltip Card */}
      <div className={`absolute top-10 left-0 md:-left-20 z-20 w-64 p-5 bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl transition-all duration-300 transform ${activeOrgan ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {activeOrgan && (
          <>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{organs.find(o => o.id === activeOrgan)?.name}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {organs.find(o => o.id === activeOrgan)?.description}
            </p>
          </>
        )}
      </div>

      {/* SVG Container */}
      <svg 
        viewBox="0 0 300 500" 
        className="h-full w-auto drop-shadow-2xl"
        style={{ overflow: 'visible' }}
      >
        {/* Defs for gradients/filters */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Abstract "Tube" Path - Background Layer */}
        <path
          d="M 150 20 C 150 50, 150 80, 150 120 C 150 160, 180 180, 140 190 C 100 200, 110 240, 150 240 C 180 240, 170 280, 150 280 C 130 280, 130 320, 150 320 C 170 320, 170 360, 150 360 L 150 450"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="24"
          strokeLinecap="round"
        />

        {/* Interactive Zones (Invisible but clickable) */}
        {/* Mouth */}
        <path
          d="M 150 20 L 150 60"
          stroke="transparent"
          strokeWidth="40"
          className="cursor-pointer"
          onMouseEnter={() => setActiveOrgan('mouth')}
          onMouseLeave={() => setActiveOrgan(null)}
        />
        {/* Esophagus */}
        <path
          d="M 150 60 L 150 120"
          stroke="transparent"
          strokeWidth="40"
          className="cursor-pointer"
          onMouseEnter={() => setActiveOrgan('esophagus')}
          onMouseLeave={() => setActiveOrgan(null)}
        />
        {/* Stomach - Simplified Shape */}
        <path
          d="M 150 120 C 150 160, 180 180, 140 190"
          stroke="transparent"
          strokeWidth="50"
          className="cursor-pointer"
          onMouseEnter={() => setActiveOrgan('stomach')}
          onMouseLeave={() => setActiveOrgan(null)}
        />
        {/* Small Intestine - Coiled Center */}
        <path
          d="M 140 190 C 100 200, 110 240, 150 240 C 180 240, 170 280, 150 280"
          stroke="transparent"
          strokeWidth="50"
          className="cursor-pointer"
          onMouseEnter={() => setActiveOrgan('small-intestine')}
          onMouseLeave={() => setActiveOrgan(null)}
        />
        {/* Large Intestine - Outer U shape approx */}
        <path
          d="M 150 280 C 130 280, 130 320, 150 320 C 170 320, 170 360, 150 360"
          stroke="transparent"
          strokeWidth="50"
          className="cursor-pointer"
          onMouseEnter={() => setActiveOrgan('large-intestine')}
          onMouseLeave={() => setActiveOrgan(null)}
        />
        {/* Rectum */}
        <path
          d="M 150 360 L 150 450"
          stroke="transparent"
          strokeWidth="40"
          className="cursor-pointer"
          onMouseEnter={() => setActiveOrgan('rectum')}
          onMouseLeave={() => setActiveOrgan(null)}
        />

        {/* Visual Stroke Layer - Changes color on hover */}
        <path
          d="M 150 20 C 150 50, 150 80, 150 120 C 150 160, 180 180, 140 190 C 100 200, 110 240, 150 240 C 180 240, 170 280, 150 280 C 130 280, 130 320, 150 320 C 170 320, 170 360, 150 360 L 150 450"
          fill="none"
          stroke={activeOrgan ? "#cbd5e1" : "#94a3b8"}
          strokeWidth="4"
          strokeLinecap="round"
          className="transition-colors duration-500"
        />

        {/* Highlighted Segments based on state */}
        {activeOrgan === 'mouth' && <line x1="150" y1="20" x2="150" y2="60" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />}
        {activeOrgan === 'esophagus' && <path d="M 150 60 L 150 120" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" fill="none"/>}
        {activeOrgan === 'stomach' && <path d="M 150 120 C 150 160, 180 180, 140 190" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" fill="none"/>}
        {activeOrgan === 'small-intestine' && <path d="M 140 190 C 100 200, 110 240, 150 240 C 180 240, 170 280, 150 280" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" fill="none"/>}
        {activeOrgan === 'large-intestine' && <path d="M 150 280 C 130 280, 130 320, 150 320 C 170 320, 170 360, 150 360" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" fill="none"/>}
        {activeOrgan === 'rectum' && <line x1="150" y1="360" x2="150" y2="450" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />}

        {/* The Food Ball */}
        <circle
          r="8"
          fill="#d97706"
          className="food-particle"
          style={{
            animationPlayState: activeOrgan ? 'paused' : 'running',
            filter: 'url(#glow)'
          }}
        />
      </svg>
      
      {/* Decorative pulse rings behind */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-100 rounded-full animate-pulse-slow -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-50 rounded-full animate-pulse-slow -z-10" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default DigestiveSystem;
