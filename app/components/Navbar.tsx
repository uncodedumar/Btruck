// components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import PulseButton from "../components/PulseButton";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Pulse Phone Button */}
        <div className="flex items-center">
          <PulseButton />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;