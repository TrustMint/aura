
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Manifesto: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="manifesto" className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black opacity-40" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Chapter Marker */}
        <div className="flex items-center gap-4 mb-16 w-full justify-center opacity-50">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1 max-w-[100px]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-white">{t.manifesto.chapter}</span>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1 max-w-[100px]" />
        </div>

        <h2 className="text-sm font-mono text-gray-500 mb-12 uppercase tracking-widest text-center">
           {t.manifesto.system}
        </h2>

        <div className="space-y-16 md:space-y-24">
            {/* Point 1 */}
            <div className="group">
                <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 group-hover:text-purple-300 transition-colors duration-500">
                    {t.manifesto.p1_title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl group-hover:text-white transition-colors duration-500">
                    {t.manifesto.p1_text}
                </p>
            </div>

            {/* Point 2 */}
            <div className="group md:text-right flex flex-col items-end">
                <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 group-hover:text-purple-300 transition-colors duration-500">
                    {t.manifesto.p2_title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl group-hover:text-white transition-colors duration-500">
                    {t.manifesto.p2_text}
                </p>
            </div>

            {/* Point 3 */}
            <div className="group">
                <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 group-hover:text-purple-300 transition-colors duration-500">
                    {t.manifesto.p3_title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl group-hover:text-white transition-colors duration-500">
                    {t.manifesto.p3_text}
                </p>
            </div>
        </div>

        <div className="mt-24 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-6">
                {t.manifesto.end}
            </p>
            <div className="w-px h-24 bg-gradient-to-b from-gray-800 to-transparent mx-auto" />
        </div>

      </div>
    </section>
  );
};

export default Manifesto;
