import React from 'react';
import { Twitter, Instagram, Globe, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#FCFCFC] text-[#1a1a1a] font-sans overflow-hidden px-8 py-12 md:px-16 lg:px-24 flex flex-col justify-between">
      
      {/* Background Globe Watermark (Abstract Lines) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M20,100 Q100,20 180,100 T20,100" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M100,20 Q180,100 100,180 T100,20" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-10">
        {/* Left Side: Badges */}
        <div className="space-y-24">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            About Us
          </div>
          
          <div className="flex items-start gap-4 max-w-xs">
            <div className="p-2 border border-gray-200 rounded-full">
              <Globe size={20} strokeWidth={1.5} />
            </div>
            <p className="text-sm leading-tight text-gray-600">
              Hub support peoples from all over the world
            </p>
          </div>
        </div>

        {/* Right Side: Text & Socials */}
        <div className="space-y-8 lg:pl-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
            We help business elevate their value through custom 
            <span className="text-gray-400"> software development, product design, QA and consulting services.</span>
          </h1>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Explore our social</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#A35D33] flex items-center justify-center text-white transition-transform hover:scale-110">
                  <Twitter size={18} fill="currentColor" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-200">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-200">
                  <Globe size={18} />
                </a>
              </div>
            </div>

            <button className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-gray-300 text-lg font-medium transition-all hover:bg-black hover:text-white group">
              About Us
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Large Pill Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 z-10">
        {/* We */}
        <div className="h-44 rounded-[80px] bg-[#F2F2F2] flex items-center justify-center">
          <span className="text-4xl md:text-5xl font-medium">We</span>
        </div>
        
        {/* Create */}
        <div className="h-44 rounded-[80px] bg-gradient-to-br from-[#BC7749] to-[#8B4513] flex items-center justify-center">
          <span className="text-4xl md:text-5xl font-medium text-white/90">Create</span>
        </div>

        {/* Arrow Action */}
        <div className="h-44 rounded-[80px] bg-black flex items-center justify-center group cursor-pointer overflow-hidden">
          <ArrowRight size={80} color="white" strokeWidth={1.5} className="group-hover:translate-x-4 transition-transform duration-500" />
        </div>

        {/* Future */}
        <div className="h-44 rounded-[80px] bg-[#E5E7EB] flex items-center justify-center">
          <span className="text-4xl md:text-5xl font-medium text-gray-400">Future</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;