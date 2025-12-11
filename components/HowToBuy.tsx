
import React from 'react';
import Card from './Card';
import { Wallet, Search, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowToBuy: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: t.howtobuy.steps[0].title,
      desc: t.howtobuy.steps[0].desc
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.howtobuy.steps[1].title,
      desc: t.howtobuy.steps[1].desc
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: t.howtobuy.steps[2].title,
      desc: t.howtobuy.steps[2].desc
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: t.howtobuy.steps[3].title,
      desc: t.howtobuy.steps[3].desc
    }
  ];

  return (
    <section id="how-to-buy" className="py-16 md:py-24 bg-black relative">
       <div className="max-w-6xl mx-auto px-6">
         <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white mb-6">
              {t.howtobuy.title}
            </h2>
            <p className="text-gray-400 font-light text-lg">
              {t.howtobuy.subtitle}
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
                <Card key={idx} className="relative group hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute top-4 right-4 text-5xl font-bold text-white/5 font-sans group-hover:text-purple-500/10 transition-colors">
                        0{idx + 1}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        {step.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {step.desc}
                    </p>
                </Card>
            ))}
         </div>
       </div>
    </section>
  );
};

export default HowToBuy;
