
import React from 'react';
import Card from './Card';
import Button from './Button';
import { Layers, Hourglass, TrendingUp, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Staking: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="staking" className="py-16 md:py-24 bg-black relative border-t border-white/5">
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                    <Hourglass className="w-3 h-3 text-purple-400" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300">{t.staking.badge}</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-thin tracking-tighter text-white mb-6">
                    Resonance <br />
                    <span className="text-gray-500">Vault.</span>
                </h2>
                
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                    {t.staking.desc}
                </p>

                <ul className="space-y-6 mb-10">
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <Layers className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-1">{t.staking.f1.title}</h4>
                            <p className="text-sm text-gray-500">{t.staking.f1.desc}</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-1">{t.staking.f2.title}</h4>
                            <p className="text-sm text-gray-500">{t.staking.f2.desc}</p>
                        </div>
                    </li>
                </ul>

                <Button variant="ghost" disabled className="opacity-50 cursor-not-allowed">
                    {t.staking.button}
                </Button>
            </div>

            {/* UI Mockup */}
            <div className="relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-900/20 blur-[80px] rounded-full" />

                <Card className="glass-thick !p-0 relative overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                    {/* Mock Header */}
                    <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                        <span className="text-xs font-mono text-gray-400">{t.staking.mockup.app}</span>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                    </div>

                    {/* Mock Body */}
                    <div className="p-8 space-y-8">
                        <div className="text-center">
                            <span className="text-xs text-gray-500 uppercase tracking-widest">{t.staking.mockup.tvl}</span>
                            <div className="text-4xl font-light text-white mt-2 tracking-tight blur-[4px] select-none">
                                $88,294,102.42
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                                <span className="text-[10px] text-gray-500 uppercase">{t.staking.mockup.apy}</span>
                                <div className="text-xl text-purple-400 mt-1">∞%</div>
                            </div>
                            <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                                <span className="text-[10px] text-gray-500 uppercase">{t.staking.mockup.share}</span>
                                <div className="text-xl text-white mt-1">0.00</div>
                            </div>
                        </div>

                        {/* Disabled Button */}
                        <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-gray-500 text-sm font-mono flex items-center justify-center gap-2 cursor-not-allowed group">
                            <Lock className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                            <span>{t.staking.mockup.offline}</span>
                        </button>
                    </div>

                    {/* Overlay for "Coming Soon" */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="bg-black border border-purple-500/30 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-pulse">
                            <span className="text-xs font-mono text-purple-300 tracking-widest">{t.staking.mockup.soon}</span>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Staking;
