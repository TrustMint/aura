
import React from 'react';
import Button from './Button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Invitation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-black relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Mystical Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        
        <div className="mb-12 opacity-80 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300">{t.invitation.priority}</span>
            </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-thin tracking-tighter text-white mb-8 leading-[0.9]">
          {t.invitation.title_start} <br/>
          <span className="italic font-normal text-purple-400">{t.invitation.title_end}</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          {t.invitation.desc}
        </p>

        <div className="flex flex-col items-center gap-6">
           <Button 
                size="lg" 
                className="group relative !px-12 !py-5 text-lg overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:shadow-[0_0_80px_rgba(168,85,247,0.6)]"
                onClick={() => window.open('https://join.pump.fun/HSag/se0mrwm8', '_blank')}
            >
                <span className="relative z-10 flex items-center">
                    {t.invitation.button}
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
           </Button>
           
           <p className="text-[10px] uppercase tracking-widest text-gray-600 animate-pulse">
                {t.invitation.waiting}
           </p>
        </div>

      </div>
    </section>
  );
};

export default Invitation;
