
import React, { useRef, useState } from 'react';
import { Cpu, Zap, Wifi, ShieldCheck, Infinity, Fingerprint } from 'lucide-react';
import { Feature } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;
  
      const rect = divRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };

    return (
        <div 
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-[2.5rem] p-8 overflow-hidden bg-white/[0.02] border border-white/5 group transition-all duration-500 spotlight-card ${
                feature.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
            }`}
            style={{
                '--mouse-x': `${position.x}px`,
                '--mouse-y': `${position.y}px`,
            } as React.CSSProperties}
        >
            <div className="relative z-10">
                <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 shadow-lg">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-normal mb-3 text-white tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      title: t.features.items[0].title,
      description: t.features.items[0].desc,
      icon: <Zap className="w-6 h-6 text-yellow-200" />,
      colSpan: 1
    },
    {
      title: t.features.items[1].title,
      description: t.features.items[1].desc,
      icon: <Wifi className="w-6 h-6 text-purple-400" />,
      colSpan: 1
    },
    {
      title: t.features.items[2].title,
      description: t.features.items[2].desc,
      icon: <Infinity className="w-6 h-6 text-blue-400" />,
      colSpan: 1
    },
    {
      title: t.features.items[3].title,
      description: t.features.items[3].desc,
      icon: <Fingerprint className="w-6 h-6 text-pink-400" />,
      colSpan: 2
    },
    {
      title: t.features.items[4].title,
      description: t.features.items[4].desc,
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      colSpan: 1
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-black relative">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
                <h2 className="text-5xl md:text-7xl font-thin tracking-tighter text-white mb-2">
                {t.features.header}
                </h2>
                <p className="text-gray-500 text-sm tracking-wide">{t.features.subheader}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <Cpu className="w-4 h-4 text-purple-500 animate-pulse" />
                <span className="text-xs font-mono text-purple-400">{t.features.chip}</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
