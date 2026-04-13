"use client";
import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 185;

export default function TruckScrollSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // 1. Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, '0');
      img.src = `/truck/ezgif-frame-${frameIndex}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // 2. Drawing logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context && images[index]) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
    }
  };

  // 3. Update frame on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollFraction = Math.max(0, Math.min(1, -top / (height - windowHeight)));
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT));

      if (images[frameIndex]) {
        renderFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  useEffect(() => {
    if (images.length > 0) renderFrame(0);
  }, [images]);

  return (
    <div 
      ref={containerRef} 
      style={{ height: '400vh' }} 
      className="relative w-full bg-black"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* The Video Canvas */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay Effect */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 text-white">
          
          {/* Top Section: Heading and Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-20">
            <div className="md:col-span-4">
              <h2 className="text-[#FF7A00] text-xl font-semibold leading-tight">
                Reliable. Secure. On Time.<br />
                Every Time.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
                We are a trusted logistics partner for businesses worldwide, connecting 
                you to global markets with efficient air, sea, and land shipping services. 
                With a combination of advanced technology and a team of experienced 
                professionals, we ensure that every shipment arrives as expected—or even faster.
              </p>
            </div>
          </div>

          {/* Bottom Section: Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/20 pt-12">
            <StatBlock number="99%" label="On-Time Delivery Rate" />
            <StatBlock number="92%" label="Customer Satisfaction" isBordered />
            <StatBlock number="85%" label="Product Return Rate" isBordered />
            <StatBlock number="87%" label="Cargo Safety Rate" isBordered />
          </div>
          
        </div>
      </div>
    </div>
  );
}

// Helper component for the stat columns
function StatBlock({ number, label, isBordered = false }: { number: string, label: string, isBordered?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 px-4 ${isBordered ? 'md:border-l border-white/20' : ''}`}>
      <span className="text-6xl md:text-7xl font-medium tracking-tight">{number}</span>
      <span className="text-sm md:text-base text-white/70 font-light">{label}</span>
    </div>
  );
}