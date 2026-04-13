import React from 'react';
import Image from 'next/image';

const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-end">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-hero.jpg" // Update to a team or brand-focused image
          alt="Our Team and Mission"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Darker gradient overlay for better text readability on "About" pages */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-32">
        <div className="max-w-3xl text-white">
          <span className="inline-block text-sm uppercase tracking-[0.2em] mb-4 opacity-80 font-medium">
            Our Story
          </span>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-[1.1]">
            Redefining the <br />
            <span className="font-semibold text-[#FF8A3D]">Future of Wellness</span>
          </h1>
          
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-10 max-w-2xl">
            Born from a vision to make health data actionable, we are a collective of 
            innovators, creators, and health experts dedicated to helping you understand 
            the science of yourself.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-black hover:bg-[#FF8A3D] hover:text-white rounded-full font-semibold transition-all duration-300">
              Meet the Team
            </button>

            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition-all duration-300">
              Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;