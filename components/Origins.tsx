
import React from 'react';
import Card from './Card';
import { Eye, Lock, FileText, Binary, Fingerprint, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Origins: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="origins" className="py-16 md:py-24 bg-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Story Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-8 w-full justify-center opacity-60">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1 max-w-[100px]" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/80">{t.origins.chapter}</span>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1 max-w-[100px]" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-8">
                <Lock className="w-3 h-3 text-red-400" />
                <span className="text-red-400/90 text-[10px] uppercase tracking-[0.3em] font-medium">{t.origins.declassified}</span>
            </div>
            
            <h2 className="text-6xl md:text-9xl font-semibold tracking-tighter text-white mb-8 mix-blend-screen">
              {t.origins.title}
            </h2>
            <p className="max-w-2xl text-gray-400 font-light leading-relaxed text-lg md:text-xl">
               {t.origins.description}
            </p>
        </div>

        {/* Digital Dossier Timeline */}
        <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

            <div className="space-y-16">
                {t.origins.entries.map((entry: any, index: number) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Content Side */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                <div className={`flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-start text-left`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-mono text-xs text-purple-400 tracking-wider bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                                            {entry.date}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl text-white font-medium mb-4 tracking-tight">{entry.title}</h3>
                                    <Card className="bg-white/[0.02] backdrop-blur-md border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 group w-full">
                                        <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                                            {entry.text}
                                        </p>
                                    </Card>
                                </div>
                            </div>

                            {/* Center Marker */}
                            <div className="absolute left-[20px] md:left-1/2 top-0 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-10">
                                <div className="w-3 h-3 rounded-full bg-black border border-white/30 relative">
                                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                                </div>
                            </div>

                            {/* Empty Space for Balance */}
                            <div className="hidden md:block w-1/2" />
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Visual Evidence Grid */}
        <div className="mt-16 md:mt-24 border-t border-white/5 pt-16">
            <h4 className="text-center text-xs font-mono text-gray-600 uppercase tracking-widest mb-12">System Artifacts</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                    { icon: <Binary />, label: t.origins.proof.code, color: "text-blue-400" },
                    { icon: <Eye />, label: t.origins.proof.watching, color: "text-purple-400" },
                    { icon: <Fingerprint />, label: "BIO-ID LINKED", color: "text-red-400" },
                    { icon: <Database />, label: "DATA PERMANENT", color: "text-green-400" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-500 group">
                        <div className={`w-10 h-10 mb-4 opacity-50 group-hover:opacity-100 transition-opacity ${item.color}`}>
                            {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Origins;
