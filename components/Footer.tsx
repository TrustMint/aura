
import React, { useState } from 'react';
import { Aperture } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LegalModals from './LegalModals';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="py-12 md:py-16 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="space-y-6 max-w-xs">
            <div className="flex items-center gap-2">
                <Aperture className="w-5 h-5 text-white/40" />
                <span className="font-light tracking-[0.2em] text-white">AURA</span>
            </div>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium text-white">{t.footer.platform}</span>
              <a href="#hero" className="text-xs text-gray-500 hover:text-white transition-colors">{t.nav.origins}</a>
              <a href="#manifesto" className="text-xs text-gray-500 hover:text-white transition-colors">{t.nav.manifesto}</a>
              <a href="#features" className="text-xs text-gray-500 hover:text-white transition-colors">{t.nav.specs}</a>
              <a href="#economics" className="text-xs text-gray-500 hover:text-white transition-colors">{t.nav.economics}</a>
              <a href="#staking" className="text-xs text-gray-500 hover:text-white transition-colors">{t.nav.vault}</a>
              <a href="#roadmap" className="text-xs text-gray-500 hover:text-white transition-colors">{t.nav.roadmap}</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium text-white">{t.footer.connect}</span>
              
              {/* X (Twitter) - Active */}
              <a href="https://x.com/aura_soll" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors">
                X (Twitter)
              </a>

              {/* Telegram - Soon */}
              <div className="relative group w-fit cursor-not-allowed">
                  <span className="text-xs text-gray-600 transition-colors group-hover:text-gray-500 select-none">Telegram</span>
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                     <span className="bg-white/10 backdrop-blur-md border border-white/5 px-1.5 py-0.5 rounded text-[8px] font-mono text-gray-400 uppercase tracking-wider whitespace-nowrap">
                        {t.footer.soon}
                     </span>
                  </div>
              </div>

              {/* Discord - Soon */}
              <div className="relative group w-fit cursor-not-allowed">
                  <span className="text-xs text-gray-600 transition-colors group-hover:text-gray-500 select-none">Discord</span>
                   <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                     <span className="bg-white/10 backdrop-blur-md border border-white/5 px-1.5 py-0.5 rounded text-[8px] font-mono text-gray-400 uppercase tracking-wider whitespace-nowrap">
                        {t.footer.soon}
                     </span>
                  </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium text-white">{t.footer.acquire}</span>
              <a href="https://join.pump.fun/HSag/se0mrwm8" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">{t.footer.pump}</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <button 
                onClick={() => setModalType('privacy')}
                className="text-[10px] text-gray-600 hover:text-white transition-colors"
            >
                {t.footer.privacy}
            </button>
            <button 
                onClick={() => setModalType('terms')}
                className="text-[10px] text-gray-600 hover:text-white transition-colors"
            >
                {t.footer.terms}
            </button>
          </div>
        </div>
      </div>

      <LegalModals 
        isOpen={!!modalType} 
        type={modalType || 'privacy'} 
        onClose={() => setModalType(null)} 
      />
    </footer>
  );
};

export default Footer;
