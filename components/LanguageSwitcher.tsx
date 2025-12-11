
import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'zh', label: '中文', short: 'CN' }
];

interface LanguageSwitcherProps {
  mobile?: boolean;
  scrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ mobile = false, scrolled = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: any) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (mobile) {
    const activeIndex = languages.findIndex(l => l.code === language);
    
    return (
      <div className="w-full max-w-[320px] mx-auto">
          {/* iOS Segmented Control Container */}
          <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full p-1 h-14 w-full">
            
            {/* Sliding Pill (Active State) */}
            <div 
                className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) z-0"
                style={{ 
                    left: `${(activeIndex / languages.length) * 100}%`,
                    width: `${100 / languages.length}%`,
                    transform: 'translateX(0)' 
                }}
            />
            
            {/* Language Buttons */}
            {languages.map((lang, idx) => {
                const isActive = language === lang.code;
                return (
                    <button
                        key={lang.code}
                        onClick={() => handleSelect(lang.code)}
                        className={`
                            flex-1 relative z-10 h-full text-xs font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center rounded-full
                            ${isActive ? 'text-black' : 'text-white/60 hover:text-white'}
                        `}
                    >
                        {lang.short}
                    </button>
                );
            })}
          </div>
      </div>
    );
  }

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-full transition-all duration-700 hover:bg-white/10 ${
            isOpen ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
        } ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
      >
        <Globe strokeWidth={1.5} size={scrolled ? 16 : 18} className="transition-all duration-700" />
      </button>

      {/* Dropdown - Conditionally rendered to prevent flash on load */}
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-4 w-40 py-2 rounded-2xl glass-clear-liquid shadow-2xl origin-top-right overflow-hidden animate-fade-in-up"
        >
           <div className="flex flex-col">
              {languages.map((lang) => (
                  <button
                      key={lang.code}
                      onClick={() => handleSelect(lang.code)}
                      className="relative flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors group"
                  >
                      <span className={`text-xs font-medium tracking-wide transition-colors ${language === lang.code ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                          {lang.label}
                      </span>
                      
                      {/* Active Indicator */}
                      {language === lang.code && (
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                      )}
                  </button>
              ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
