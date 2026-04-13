import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    /* Added 'relative' and 'z-10' to ensure it stacks above any fixed backgrounds */
    <footer className="relative z-10 bg-black text-white pt-16 pb-8 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Newsletter Column */}
          <div className="md:col-span-6">
            <h2 className="text-2xl font-medium mb-8">Subscribe to our Newsletter!</h2>
            <div className="relative border-b border-gray-700 pb-2 flex items-center max-w-md">
              <input 
                type="email" 
                placeholder="Enter address" 
                className="bg-transparent w-full outline-none text-gray-400 placeholder-gray-600 py-2"
              />
              <ArrowRight className="w-5 h-5 text-gray-300 cursor-pointer" />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-sm">
              <div>
                <p className="text-gray-500 uppercase tracking-tighter mb-4 text-xs font-bold">Head Office</p>
                <p className="leading-relaxed font-semibold">5 West 37th Street, 12th Floor,<br />New York, NY 10018</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-tighter mb-4 text-xs font-bold">Email Us</p>
                <p className="font-semibold">hello@findrealestate.com</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-tighter mb-4 text-xs font-bold">Call Us</p>
                <p className="font-semibold">+1 212 994 9965</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-4 text-3xl font-bold tracking-tight">
            <a href="#" className="hover:text-gray-400 transition-colors">Search</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Agents</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Join</a>
            <a href="#" className="hover:text-gray-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-gray-400 transition-colors text-2xl">Agent Portal</a>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col space-y-4 text-lg font-semibold md:items-end">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Youtube</a>
            <a href="#" className="hover:underline">Linkedin</a>
          </div>
        </div>

        {/* Massive Logo Section */}
        <div className="w-full mb-12 text-center">
          <h1 className="text-[13.5vw] font-black leading-none tracking-tighter text-white uppercase select-none whitespace-nowrap">
            TRUCKSPINE
          </h1>
        </div>

        {/* Bottom Legal Section */}
        <div className="flex flex-wrap items-center justify-between text-[10px] uppercase tracking-widest text-gray-500 border-t border-gray-900 pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Fair Housing Notice</a>
            <a href="#" className="hover:text-white">Operating Procedure</a>
            <a href="#" className="hover:text-white">Press</a>
            <a href="#" className="hover:text-white">Housing Choice Vouchers Welcome</a>
            <a href="#" className="hover:text-white">Se Aceptan Vales de Elección de Vivienda</a>
          </div>
          <div className="flex gap-x-8">
            <span>FIND Real Estate</span>
            <span>Copyright © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;