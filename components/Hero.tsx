
import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, ChevronRight, Sparkles, Copy, Check, Mouse } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const CA = "7qWti1vFYT96UyzAPFDyFjJbDVjiDNU5C2kQ9d96pump"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-24 overflow-hidden bg-black selection:bg-purple-500 selection:text-white">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-radial from-purple-900/10 via-black to-black opacity-30 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-purple-900/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative flex flex-col items-center flex-grow justify-center">
        
        {/* Status Chip */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 animate-fade-in-up hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-gray-300 font-medium group-hover:text-white transition-colors">
            {t.hero.systemOnline}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-7xl md:text-[10rem] font-medium tracking-tighter mb-8 text-white animate-fade-in-up delay-100 leading-[0.85] select-none mix-blend-screen">
          <span className="block blur-[1px] hover:blur-0 transition-all duration-700 opacity-80">{t.hero.prefix}</span>
          <span className="gradient-text font-bold block mt-2 relative">
            {t.hero.title}
            <span className="absolute -inset-1 blur-2xl bg-purple-500/10 -z-10 animate-pulse"></span>
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide animate-fade-in-up delay-200">
          {t.hero.subtitle}
        </p>

        {/* Action Area */}
        <div className="flex flex-col items-center gap-6 animate-fade-in-up delay-300 w-full">
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <Button size="lg" className="group min-w-[220px] shadow-[0_0_50px_rgba(168,85,247,0.3)]" onClick={() => window.open('https://join.pump.fun/HSag/se0mrwm8', '_blank')}>
                {t.hero.init}
                <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div 
                onClick={handleCopy}
                className="group cursor-pointer min-w-[220px] h-[54px] rounded-full bg-white/5 border border-white/10 flex items-center justify-between px-6 hover:bg-white/10 hover:border-purple-500/30 transition-all active:scale-95"
            >
                <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">
                    {copied ? t.hero.copied : 'CA: 7qWt...pump'}
                </span>
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-500 group-hover:text-white" />}
            </div>
          </div>
          
          <p className="text-[10px] uppercase tracking-widest text-gray-600 mt-4 opacity-60 hover:opacity-100 transition-opacity">
             {t.hero.verified}
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Moved significantly lower */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-20 pb-4" onClick={() => document.getElementById('ticker')?.scrollIntoView({behavior: 'smooth'})}>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-black/20">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-down" />
          </div>
      </div>

    </section>
  );
};

export default Hero;
