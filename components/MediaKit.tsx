
import React, { useState, useEffect, useRef } from 'react';
import { Download, Check, Image as ImageIcon, Twitter, Type, Triangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';

type AssetType = 'logo' | 'wordmark' | 'banner';

const MediaKit: React.FC = () => {
  const { t } = useLanguage();
  
  // Stores generated Data URLs for each asset type
  const [assets, setAssets] = useState<{ [key in AssetType]?: string }>({});
  const [downloading, setDownloading] = useState<AssetType | null>(null);

  // Separate Refs for generating different sizes
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ----------------------------------------------------------------------
  // GENERATOR ENGINE - ULTRA MATTE BLACK EDITION
  // ----------------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const generateAssets = () => {
        const newAssets: { [key in AssetType]?: string } = {};

        // -----------------------
        // 1. PRIMARY LOGO (1024x1024) - PURE VOID BLACK
        // -----------------------
        canvas.width = 1024;
        canvas.height = 1024;
        
        // Background: Absolute Black
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 1024, 1024);
        
        // No Glows. Just Sharp Geometry.
        drawAperture(ctx, 512, 512, 500); // x, y, size
        
        newAssets.logo = canvas.toDataURL('image/png');

        // -----------------------
        // 2. WORDMARK (2000x800) - MINIMALIST
        // -----------------------
        canvas.width = 2000;
        canvas.height = 800;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 2000, 800);

        // Icon on Left (Smaller, refined)
        drawAperture(ctx, 350, 400, 280);

        // Text on Right
        ctx.font = 'bold 360px Inter, sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText("AURA", 650, 400 + 10); 
        
        // Tagline - High Tech Monospace
        ctx.font = '500 32px monospace';
        ctx.fillStyle = '#666666';
        ctx.letterSpacing = "0.5em";
        ctx.fillText("COGNITIVE ASSET // v1.0", 665, 580);

        newAssets.wordmark = canvas.toDataURL('image/png');

        // -----------------------
        // 3. SOCIAL BANNER (1500x500) - THE SIGNAL
        // -----------------------
        canvas.width = 1500;
        canvas.height = 500;

        // Background: Pure Black
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 1500, 500);

        // Faint Coordinates Grid
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 2;
        ctx.beginPath();
        // Crosshair
        ctx.moveTo(750, 200); ctx.lineTo(750, 300);
        ctx.moveTo(700, 250); ctx.lineTo(800, 250);
        ctx.stroke();

        // Main Text Center
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.font = 'bold 160px Inter, sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText("AURA", 750, 240);

        ctx.font = '400 16px monospace';
        ctx.fillStyle = '#888888';
        ctx.letterSpacing = "0.8em";
        ctx.fillText("DESIGNED IN THE VOID", 750, 340);

        newAssets.banner = canvas.toDataURL('image/png');

        setAssets(newAssets);
    };

    // Helper to draw the Aperture Icon - Sharper, Thicker, Premium
    const drawAperture = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        const scale = size / 24;
        const offsetX = x - (12 * scale);
        const offsetY = y - (12 * scale);

        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.scale(scale, scale);

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 0.8; // Thinner, more elegant lines
        ctx.lineCap = 'butt'; // Sharp ends
        ctx.lineJoin = 'miter';

        ctx.beginPath();
        // Outer Circle - Removed for cleaner look, or keep very thin? 
        // Let's keep it but very thin.
        ctx.arc(12, 12, 11, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.lineWidth = 1.2; // Inner geometry thicker
        ctx.beginPath();
        const lines = [
             [14.31, 8, 20.05, 17.94],
             [9.69, 8, 21.17, 8],
             [7.38, 12, 13.12, 2.06],
             [9.69, 16, 3.95, 6.06],
             [14.31, 16, 2.83, 16],
             [16.62, 12, 10.88, 21.94]
        ];

        lines.forEach(l => {
            ctx.moveTo(l[0], l[1]);
            ctx.lineTo(l[2], l[3]);
        });
        
        ctx.stroke();
        
        // Center "Iris" fill (optional, makes it look like a camera/eye)
        ctx.beginPath();
        ctx.arc(12, 12, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.restore();
    };

    generateAssets();
  }, []);

  const handleDownload = (type: AssetType) => {
    const dataUrl = assets[type];
    if (!dataUrl) return;

    setDownloading(type);
    
    const link = document.createElement('a');
    link.download = `AURA_${type.toUpperCase()}_v1.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(null), 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-black relative border-t border-white/5 overflow-hidden">
        <canvas ref={canvasRef} className="hidden" />
        
        {/* No Glows. Pure Void. */}
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header - Centered & Strict */}
            <div className="mb-24 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-6 opacity-50">
                    <Triangle className="w-2 h-2 fill-white text-white rotate-180" />
                    <span className="text-[10px] font-mono text-white uppercase tracking-[0.4em]">
                        {t.mediakit.subtitle}
                    </span>
                </div>
                <h2 className="text-6xl md:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[0.85] select-none">
                    {t.mediakit.title}
                </h2>
                <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-8" />
                <p className="text-gray-500 font-light text-xl leading-relaxed max-w-2xl mx-auto">
                    {t.mediakit.desc}
                </p>
            </div>

            {/* Asset Grid - Premium "Museum" Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                
                {/* 1. PRIMARY LOGO (Square) */}
                <div className="group relative bg-[#050505] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500">
                    {/* Image Area - Pure Black */}
                    <div className="relative h-[400px] flex items-center justify-center p-12">
                        {assets.logo ? (
                            <img src={assets.logo} alt="Logo" className="h-64 w-64 object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        ) : <div className="animate-pulse w-24 h-24 bg-white/5 rounded-full" />}
                    </div>
                    
                    {/* Info Area - Glass Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass-ios-liquid border-t border-white/5 flex justify-between items-center backdrop-blur-md">
                        <div>
                            <h3 className="text-lg text-white font-medium tracking-tight mb-1">{t.mediakit.assets.logo_title}</h3>
                            <p className="text-xs text-gray-500 font-mono tracking-wider">1024x1024 • PNG</p>
                        </div>
                        <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleDownload('logo')}
                            disabled={!assets.logo}
                            className="bg-white text-black hover:bg-gray-200 border-none rounded-xl"
                        >
                            {downloading === 'logo' ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                        </Button>
                    </div>
                </div>

                {/* 2. WORDMARK (Rectangle) */}
                <div className="group relative bg-[#050505] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500">
                    <div className="relative h-[400px] flex items-center justify-center p-8">
                        {assets.wordmark ? (
                            <img src={assets.wordmark} alt="Wordmark" className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-90" />
                        ) : <div className="animate-pulse w-48 h-12 bg-white/5 rounded-lg" />}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass-ios-liquid border-t border-white/5 flex justify-between items-center backdrop-blur-md">
                        <div>
                            <h3 className="text-lg text-white font-medium tracking-tight mb-1">{t.mediakit.assets.wordmark_title}</h3>
                            <p className="text-xs text-gray-500 font-mono tracking-wider">2000x800 • PNG</p>
                        </div>
                        <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleDownload('wordmark')}
                            disabled={!assets.wordmark}
                            className="bg-white text-black hover:bg-gray-200 border-none rounded-xl"
                        >
                            {downloading === 'wordmark' ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                        </Button>
                    </div>
                </div>

                {/* 3. SOCIAL BANNER (Full Width) */}
                <div className="lg:col-span-2 group relative bg-[#050505] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 mt-4">
                    <div className="relative w-full aspect-[3/1] bg-black">
                        {assets.banner ? (
                            <img src={assets.banner} alt="Social Banner" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                        ) : <div className="w-full h-full bg-white/5 animate-pulse" />}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass-ios-liquid border-t border-white/5 flex justify-between items-center backdrop-blur-md">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                                <Twitter className="w-5 h-5 fill-current" />
                            </div>
                            <div>
                                <h3 className="text-lg text-white font-medium tracking-tight mb-1">{t.mediakit.assets.banner_title}</h3>
                                <p className="text-xs text-gray-500 font-mono tracking-wider">1500x500 • HIGH-RES</p>
                            </div>
                        </div>
                        <Button 
                            variant="secondary" 
                            size="md"
                            onClick={() => handleDownload('banner')}
                            disabled={!assets.banner}
                            className="bg-white text-black hover:bg-gray-200 border-none rounded-xl px-6"
                        >
                            {downloading === 'banner' ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold tracking-widest">{t.mediakit.assets.download}</span>}
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default MediaKit;
