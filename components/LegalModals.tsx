
import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { t } = useLanguage();
  
  // Choose content based on type. Default to empty structure if translation missing to avoid crash
  const content = type === 'privacy' 
    ? (t.legal?.privacy || { title: 'Privacy Protocol', content: [] })
    : (t.legal?.terms || { title: 'Terms of Existence', content: [] });

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop - Transparent, No Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content - Clear Liquid Glass Style */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col glass-clear-liquid rounded-[2rem] shadow-2xl animate-fade-in-up overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02] shrink-0">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    {type === 'privacy' ? <ShieldCheck className="w-5 h-5 text-purple-400" /> : <FileText className="w-5 h-5 text-blue-400" />}
                </div>
                <div>
                    <h3 className="text-xl font-medium text-white tracking-tight">{content.title}</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Protocol v1.0.4</p>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
            >
                <X size={18} />
            </button>
        </div>

        {/* Scrollable Body - Added overscroll containment */}
        <div 
          className="overflow-y-auto p-6 space-y-8 no-scrollbar"
          style={{ overscrollBehavior: 'contain' }}
        >
            {content.content.map((section: any, idx: number) => (
                <div key={idx} className="space-y-3">
                    <h4 className="text-sm font-medium text-white/90 uppercase tracking-wide border-l-2 border-purple-500 pl-3">
                        {section.heading}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-light pl-3.5">
                        {section.text}
                    </p>
                </div>
            ))}
            
            <div className="pt-8 text-center">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                    Digital Signature Required: By scrolling, you accept reality.
                </p>
            </div>
        </div>

        {/* Footer (Gradient fade) */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default LegalModals;
