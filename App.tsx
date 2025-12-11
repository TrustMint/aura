
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Origins from './components/Origins';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Staking from './components/Staking';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Invitation from './components/Invitation';
import MediaKit from './components/MediaKit';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 selection:text-white relative">
        {/* Living Void Background - Reduced opacity for Pure Black feel */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] bg-purple-900/3 blur-[120px] rounded-full animate-aurora mix-blend-screen" />
            <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-blue-900/3 blur-[100px] rounded-full animate-pulse-slow mix-blend-screen" />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <div id="ticker">
              <Ticker />
          </div>
          <Origins />
          <Manifesto />
          <Features />
          <HowToBuy />
          <Tokenomics />
          <Staking />
          <Roadmap />
          <Invitation />
          <MediaKit />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;
