import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="w-full min-h-[500px] bg-black flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-20 relative overflow-hidden">
      {/* Background Subtle Gradient Effect (Optionally keep or adjust for total black theme) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,#3d261b_0%,transparent_50%)]" />

      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center z-10">
        
        {/* Left Image Side - Swapped */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-2xl">
            <Image 
              src="/path-to-your-image.jpg" // Replace with your actual image path
              alt="Luxury Lifestyle View"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>

        {/* Right Content Side - Swapped */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <div className="group cursor-pointer">
            <div className="flex items-center justify-between border-b border-[#3d2c24] pb-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-light text-[#d4b196] leading-tight">
                  Seamless Enterprise <br /> AI Integrations
                </h2>
                <p className="text-[#a08d84] text-sm lg:text-base max-w-md leading-relaxed">
                  Transforming operations with high-performance ML/DL solutions, 
                  bespoke chatbots, and custom SaaS software designed for 
                  unparalleled digital growth.
                </p>
              </div>
              <span className="text-[#d4b196] text-2xl group-hover:translate-x-2 transition-transform duration-300">
                &rsaquo;
              </span>
            </div>
          </div>

          {/* CTA Button - Modified with border radius, size, and boldness */}
          <div className="pt-4 flex justify-center md:justify-start"> {/* Center on mobile, left on desktop */}
            <button className="px-12 py-5 bg-[#d4b196] text-[#1a0f0a] font-bold tracking-wide uppercase text-xl rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;