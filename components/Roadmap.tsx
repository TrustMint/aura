
import React from 'react';
import { RoadmapItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Lock } from 'lucide-react';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  const roadmapData: RoadmapItem[] = [
    {
      version: t.roadmap.items[0].version,
      title: t.roadmap.items[0].title,
      date: t.roadmap.items[0].date,
      features: t.roadmap.items[0].features,
      status: 'released'
    },
    {
      version: t.roadmap.items[1].version,
      title: t.roadmap.items[1].title,
      date: t.roadmap.items[1].date,
      features: t.roadmap.items[1].features,
      status: 'processing'
    },
    {
      version: t.roadmap.items[2].version,
      title: t.roadmap.items[2].title,
      date: t.roadmap.items[2].date,
      features: t.roadmap.items[2].features,
      status: 'planned'
    },
    // Adding classified items if they exist in translation
    ...(t.roadmap.items.length > 3 ? [{
        version: t.roadmap.items[3].version,
        title: t.roadmap.items[3].title,
        date: t.roadmap.items[3].date,
        features: t.roadmap.items[3].features,
        status: 'classified' as const
    }] : []),
    ...(t.roadmap.items.length > 4 ? [{
        version: t.roadmap.items[4].version,
        title: t.roadmap.items[4].title,
        date: t.roadmap.items[4].date,
        features: t.roadmap.items[4].features,
        status: 'classified' as const
    }] : [])
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-thin tracking-tighter text-white">{t.roadmap.title}</h2>
            <span className="text-xs font-mono text-gray-600 border border-gray-800 px-3 py-1 rounded-full">{t.roadmap.auto}</span>
        </div>
        
        <div className="space-y-0">
          {roadmapData.map((item, idx) => {
            const isClassified = item.status === 'classified';
            
            return (
                <div key={idx} className={`group relative border-l border-white/10 pl-8 pb-12 last:pb-0 ${isClassified ? 'opacity-70' : ''}`}>
                {/* Timeline Dot */}
                <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-[2px] bg-black transition-all duration-500 z-10
                    ${item.status === 'released' ? 'border-purple-500 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 
                    item.status === 'processing' ? 'border-white animate-pulse' : 
                    item.status === 'classified' ? 'border-gray-700 bg-gray-900' : 'border-gray-800'}`}>
                </div>

                <div className={`relative flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-all duration-500 group-hover:pl-4`}>
                    
                    {/* Blurred Overlay for Classified */}
                    {isClassified && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none -ml-8 -mr-4 rounded-xl backdrop-blur-[6px] bg-black/10">
                            <div className="bg-black/80 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl backdrop-blur-md">
                                <Lock className="w-3 h-3 text-gray-400" />
                                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Classified</span>
                            </div>
                        </div>
                    )}

                    <div className={`min-w-[100px] ${isClassified ? 'blur-[4px] select-none opacity-50' : ''}`}>
                        <span className={`text-sm font-mono ${item.status === 'released' ? 'text-purple-400' : 'text-gray-500'}`}>
                            {item.version}
                        </span>
                        <div className="text-[10px] text-gray-600 mt-1 uppercase tracking-wider">{item.date}</div>
                    </div>
                    
                    <div className={isClassified ? 'blur-[4px] select-none opacity-50 grayscale' : ''}>
                        <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                        <ul className="space-y-2">
                        {item.features.map((feat, fIdx) => (
                            <li key={fIdx} className="text-sm text-gray-400 font-light flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                {feat}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
