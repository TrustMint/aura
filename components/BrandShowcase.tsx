
import React from 'react';
import { Aperture } from 'lucide-react';

const BrandShowcase: React.FC = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5">
        
        {/* Subtle ambient light to allow the glass to reflect something */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-16 scale-75 md:scale-100">
            
            {/* Liquid Glass Container */}
            <div className="glass-ios-liquid w-64 h-64 md:w-80 md:h-80 rounded-[3rem] md:rounded-[4rem] flex items-center justify-center relative group transition-transform duration-700 hover:scale-105 hover:rotate-3">
                
                {/* Reflection Highlight (Simulates studio lighting) */}
                <div className="absolute top-0 left-0 w-full h-full rounded-[inherit] overflow-hidden">
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 pointer-events-none" />
                </div>

                {/* Inner Bevel Shadow */}
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />

                {/* The Logo Icon */}
                <div className="relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                    <Aperture 
                        className="w-32 h-32 md:w-40 md:h-40 text-white opacity-90" 
                        strokeWidth={0.8}
                    />
                </div>

                {/* Glass Caustics/Imperfections */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[inherit] opacity-50 mix-blend-overlay" />
            </div>

            {/* Typography */}
            <div className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-semibold tracking-[0.25em] text-white select-none drop-shadow-2xl">
                    AURA
                </h1>
                <p className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-[0.6em] opacity-60">
                    Cognitive Asset
                </p>
            </div>

        </div>
    </section>
  );
};

export default BrandShowcase;
