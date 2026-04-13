import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    /* Added relative and z-10 to ensure it covers sticky backgrounds below it */
    <section className="relative z-10 bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-8 lg:hidden">
               <span className="w-2 h-2 bg-amber-600"></span>
               <span className="text-xs uppercase tracking-widest text-gray-400">About Us</span>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image 
                src="/your-property-image.jpg" // Replace with your image path
                alt="Modern Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            <div>
              <div className="hidden lg:flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-amber-600"></span>
                <span className="text-xs uppercase tracking-widest text-gray-400">About Us</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 max-w-3xl">
                Our mission is to simplify real estate decisions, empower buyers and sellers, 
                and connect communities through trusted guidance, transparent data, 
                and smart property insights.
              </h2>

              {/* Updated Button: Increased padding-y (py-5) and border-radius (rounded-lg) */}
              <button className="bg-[#C29D66] hover:bg-[#b08b55] text-white px-10 py-5 rounded-lg flex items-center gap-3 transition-all duration-300 text-sm font-semibold mb-16 shadow-lg">
                Make An Appointment 
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-12">
              {/* Added solid bg-white/10 to ensure stats stand out against pure black */}
              <div className="bg-white/10 p-8 rounded-sm">
                <p className="text-4xl md:text-5xl font-light mb-4">$2M+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Project Value</p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-sm">
                <p className="text-4xl md:text-5xl font-light mb-4">250+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Happy Customer</p>
              </div>

              <div className="bg-white/10 p-8 rounded-sm">
                <p className="text-4xl md:text-5xl font-light mb-4">2K+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Verified Listing</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;