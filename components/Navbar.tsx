
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, Aperture, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems: NavItem[] = [
    { label: t.nav.origins, href: '#origins' },
    { label: t.nav.manifesto, href: '#manifesto' },
    { label: t.nav.specs, href: '#features' },
    { label: t.nav.economics, href: '#economics' },
    { label: t.nav.vault, href: '#staking' },
    { label: t.nav.roadmap, href: '#roadmap' },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    // Initial check to set state correctly on page load
    if (window.scrollY > 50) {
        setIsScrolled(true);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Prevent rubber-banding issues on iOS from triggering logic
      if (currentScrollY < 0) return;

      const threshold = 50; // Distance from top where "Hero" state is always active
      const sensitivity = 5; // Pixels to scroll before triggering change

      // Always expanded at the very top
      if (currentScrollY < threshold) {
        setIsScrolled(false);
        lastScrollY = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY;

      // Logic:
      // If scrolling DOWN (diff > sensitivity) -> Shrink (isScrolled = true)
      // If scrolling UP (diff < -sensitivity) -> Expand (isScrolled = false)
      
      if (diff > sensitivity) {
        setIsScrolled(true);
        lastScrollY = currentScrollY;
      } else if (diff < -sensitivity) {
        setIsScrolled(false);
        lastScrollY = currentScrollY;
      }
      
      // If diff is within sensitivity range, we do nothing and keep lastScrollY 
      // to accumulate the delta until it exceeds sensitivity.
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict Scroll Locking
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => { 
        document.body.style.overflow = 'unset'; 
        document.documentElement.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed z-50 left-0 right-0 flex justify-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled ? 'top-4 md:top-6' : 'top-8'
        }`}
      >
        <div 
            className={`pointer-events-auto relative flex items-center justify-between glass-ios-liquid shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isScrolled
                ? 'h-[52px] px-4 rounded-full' // Compact iPhone Island style
                : 'py-3 px-6 lg:px-8 rounded-full' // Expanded
            }`}
            style={{
                width: isScrolled ? '220px' : '1000px',
                maxWidth: '92vw'
            }}
        >
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer relative z-10 shrink-0 group" 
            onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth'});
            }}
          >
            <div className={`relative flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md animate-pulse-slow group-hover:bg-purple-500/40 transition-colors" />
                <Aperture className={`text-white relative z-10 transition-all duration-700 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} />
            </div>
            
            {/* Logo Text - Always Visible */}
            <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] max-w-[150px] opacity-100`}>
                <span className="font-semibold tracking-[0.15em] text-white whitespace-nowrap text-sm pl-0.5">
                  AURA
                </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className={`hidden lg:flex items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isScrolled ? 'max-w-0 opacity-0 mx-0' : 'max-w-[800px] opacity-100 mx-4'
            }`}>
            <div className="flex items-center gap-0.5 xl:gap-1">
                {navItems.map((item) => (
                <a 
                    key={item.label} 
                    href={item.href}
                    className="
                    relative rounded-full text-[11px] xl:text-[12px] px-4 py-2 uppercase tracking-wider font-medium 
                    text-gray-400 whitespace-nowrap hover:text-white hover:bg-white/10 transition-all duration-300
                    shrink-0
                    "
                >
                    {item.label}
                </a>
                ))}
            </div>
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-1.5 shrink-0 relative z-10 pl-1">
             
             {/* Desktop Language Switcher - Always Visible on Desktop/Tablet */}
             <div className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] origin-right ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                 <div className="hidden sm:block">
                    <LanguageSwitcher scrolled={isScrolled} />
                 </div>
             </div>

             {/* "Get" Button - Hides completely when scrolled */}
             <div className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 overflow-hidden rounded-full ${
                 isScrolled ? 'w-0 opacity-0 scale-0 m-0' : 'w-auto opacity-100 scale-100'
             }`}>
                <Button 
                    size="sm" 
                    variant='primary'
                    className={`!transition-all !duration-700 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.2)] !px-6 !py-2.5 !text-xs border-transparent`} 
                    onClick={() => window.open('https://join.pump.fun/HSag/se0mrwm8', '_blank')}
                >
                    <Sparkles className="w-3.5 h-3.5 mr-2" />
                    <span className="inline-block">
                        {t.nav.get}
                    </span>
                </Button>
             </div>

            {/* Mobile/Tablet Toggle */}
            <button 
                className={`lg:hidden text-white/70 hover:text-white transition-all duration-700 ml-1 rounded-full p-2 hover:bg-white/5 ${isScrolled ? 'scale-90' : 'scale-100'}`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
            >
                <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY - Centered Modal Style */}
      <div 
          className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-500 ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{ 
              visibility: mobileMenuOpen ? 'visible' : 'hidden', 
              opacity: mobileMenuOpen ? 1 : 0 
          }}
      >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />

          {/* Modal Content */}
          <div 
            className={`
                relative w-full max-w-sm max-h-[85vh]
                glass-thick rounded-[2.5rem]
                flex flex-col shadow-2xl border border-white/10
                transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1)
                ${mobileMenuOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-8'}
            `}
          >
              <div className="absolute top-5 right-5 z-[70]">
                <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/5 text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                    <X size={18} />
                </button>
              </div>

              {/* Scrollable Container with Containment */}
              <div 
                className="flex-1 overflow-y-auto no-scrollbar w-full py-12 px-6"
                style={{ overscrollBehavior: 'contain' }}
              >
                <div className="flex flex-col items-center justify-center min-h-full">
                    <div className="flex flex-col items-center gap-2 w-full mb-8">
                        {navItems.map((item, idx) => (
                        <a 
                            key={item.label} 
                            href={item.href}
                            className={`group relative w-full text-center py-3 transition-all duration-500 transform
                            ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 40}ms` }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="text-2xl font-light tracking-widest text-white/70 group-hover:text-white transition-colors duration-300 uppercase">
                                {item.label}
                            </span>
                        </a>
                        ))}
                    </div>

                    <div className={`w-12 h-px bg-white/10 my-4 transition-all duration-700 delay-300 ${mobileMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />

                    <div className={`flex flex-col items-center gap-6 w-full transition-all duration-700 delay-200 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <Button 
                            size="md" 
                            className="w-full shadow-[0_0_30px_rgba(168,85,247,0.2)] text-xs" 
                            onClick={() => window.open('https://join.pump.fun/HSag/se0mrwm8', '_blank')}
                        >
                            {t.nav.initialize}
                        </Button>

                        <div className="scale-90 w-full">
                           <LanguageSwitcher mobile />
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
