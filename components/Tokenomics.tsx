
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import Card from './Card';
import { Lock, Zap, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const data = [
  { name: 'Public', value: 100, color: '#A855F7' },
];

const Tokenomics: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="economics" className="py-16 md:py-24 bg-black relative overflow-hidden z-10">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <span className="text-purple-500 text-[10px] uppercase tracking-[0.4em] mb-4 block font-medium">{t.tokenomics.metrics}</span>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter text-white">
              {t.tokenomics.title}
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Visual Widget: The Ring */}
            <div className="md:col-span-1 glass-thick rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative min-h-[400px]">
                <div className="absolute top-8 left-8">
                     <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{t.tokenomics.allocation}</span>
                </div>
                
                {/* 3D-like Ring */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                    <PieChart width={256} height={256}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            <Cell key="cell-0" fill="#A855F7" style={{ filter: 'drop-shadow(0px 0px 10px rgba(168, 85, 247, 0.5))' }} />
                        </Pie>
                    </PieChart>
                    
                    {/* Inner Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-5xl font-bold text-white tracking-tighter">100%</span>
                        <span className="text-xs text-purple-400 uppercase tracking-widest mt-2">{t.tokenomics.public}</span>
                    </div>
                </div>

                <div className="mt-8 text-center px-4">
                     <p className="text-sm text-gray-400 font-light leading-relaxed">
                        {t.tokenomics.desc}
                     </p>
                </div>
            </div>

            {/* Bento Grid Stats */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Supply Card */}
                <Card className="glass-thick !bg-white/[0.02] flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-yellow-300" />
                        </div>
                        <span className="text-xs font-mono text-gray-600">{t.tokenomics.cards.supply.title}</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-medium text-white mb-1 tracking-tight">{t.tokenomics.cards.supply.value}</h3>
                        <p className="text-xs text-gray-500">{t.tokenomics.cards.supply.sub}</p>
                    </div>
                </Card>

                {/* Liquidity Card */}
                <Card className="glass-thick !bg-white/[0.02] flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Lock className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-xs font-mono text-gray-600">{t.tokenomics.cards.liquidity.title}</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-medium text-white mb-1 tracking-tight">{t.tokenomics.cards.liquidity.value}</h3>
                        <p className="text-xs text-gray-500">{t.tokenomics.cards.liquidity.sub}</p>
                    </div>
                </Card>

                {/* Tax Card */}
                <Card className="glass-thick !bg-white/[0.02] flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-xs font-mono text-gray-600">{t.tokenomics.cards.tax.title}</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-medium text-white mb-1 tracking-tight">{t.tokenomics.cards.tax.value}</h3>
                        <p className="text-xs text-gray-500">{t.tokenomics.cards.tax.sub}</p>
                    </div>
                </Card>

                {/* Authority Card */}
                <Card className="glass-thick !bg-white/[0.02] flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Users className="w-5 h-5 text-pink-400" />
                        </div>
                        <span className="text-xs font-mono text-gray-600">{t.tokenomics.cards.auth.title}</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-medium text-white mb-1 tracking-tight">{t.tokenomics.cards.auth.value}</h3>
                        <p className="text-xs text-gray-500">{t.tokenomics.cards.auth.sub}</p>
                    </div>
                </Card>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
