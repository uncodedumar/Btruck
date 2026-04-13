// components/PulseButton.tsx
"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react"; // Optional: npm i lucide-react

export default function PulseButton() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Pulse Rings */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute h-10 w-10 rounded-full bg-blue-500/50"
      />
      
      {/* Main Button */}
      <a
        href="tel:+1234567890"
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110"
      >
        <Phone size={20} fill="currentColor" />
      </a>
    </div>
  );
}