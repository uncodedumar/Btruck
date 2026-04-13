import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-between p-6 md:p-12 font-sans text-white">
      
      {/* Background Image - Fixed & Cover */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/hero.webp" 
          alt="Background Silhouette" 
          className="h-full w-full object-cover opacity-60" 
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Top Header Area */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-medium mb-4 flex items-center gap-2 tracking-widest uppercase">
            <span className="text-white/40">|</span> Creative Agency
          </p>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
            We start from <br />
            <span className="text-white/60">zero,</span> delivering <br />
            only what mat<span className="italic underline decoration-1">t</span>er.
          </h1>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium opacity-70">3000+ Customers</span>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {/* Primary Button */}
            <button className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 font-semibold hover:bg-gray-200 transition-all">
              Chat With Us
              <div className="bg-black text-white rounded-full p-1">
                <ArrowRight size={16} />
              </div>
            </button>
            
            {/* Glassmorphism Button */}
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all">
              Our Works
            </button>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="relative z-10 self-end mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale invert">
        <div className="font-bold text-xl tracking-tighter">zantic</div>
        <div className="font-semibold italic">BookStore</div>
        <div className="flex items-center gap-1 font-bold italic underline">Wager</div>
        <div className="font-mono text-sm uppercase tracking-widest">Mercury</div>
      </div>

      {/* Bottom Status Bar - White Glassmorphism */}
      <div className="relative z-10 mt-12 w-full h-16 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-between px-10 text-[10px] uppercase tracking-[0.2em] font-medium text-white">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            10+ Years Exp
        </div>
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            Based in Warsaw
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            Scroll Down
        </div>
      </div>

    </section>
  );
};

export default HeroSection;