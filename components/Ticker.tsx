
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Ticker: React.FC = () => {
  const { t } = useLanguage();
  const words = t.ticker;
  
  // Duplicate words multiple times to ensure we have enough width for seamless scrolling
  // We need two full sets for the seamless translation effect
  const singleSet = words.map((word: string, i: number) => (
     <span key={i} className="text-xs md:text-sm font-mono tracking-[0.5em] text-purple-200/50 flex items-center gap-16 mx-8">
        {word}
        <span className="w-1 h-1 bg-purple-500/50 rounded-full" />
      </span>
  ));

  return (
    <div className="w-full bg-purple-900/10 border-y border-white/5 overflow-hidden py-4 backdrop-blur-sm relative z-20">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <div className="flex shrink-0">
            {singleSet}
        </div>
        <div className="flex shrink-0">
            {singleSet}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
