import React from 'react';
import Image from 'next/image';

const HeroServiceSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image Container */}
      {/* Changed 'absolute' to 'fixed' and added overflow-hidden to the parent */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Image
          src="/your-image-path.jpg" // Replace with your image
          alt="Health and Wellness"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6">
            Your health in your hands
          </h1>
          
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-10 max-w-xl">
            Visualize your progress, take action, and live better with Zentum. 
            Our platform empowers you to take charge of your health journey.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#FF8A3D] hover:bg-[#e07935] text-white rounded-full font-medium transition-all duration-300">
              Get started
            </button>

            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium transition-all duration-300">
              See how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServiceSection;