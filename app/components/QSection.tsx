import React from 'react';
import { 
  Ship, 
  Truck, 
  Globe, 
  Warehouse, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    title: "Sea Freight",
    description: "Fast shipping solutions for long distances, ensuring goods arrive efficiently and safely.",
    icon: <Ship className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Express Freight",
    description: "Rapid delivery service for urgent needs without compromising on quality.",
    icon: <Truck className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Land Freight",
    description: "Local and international land transportation with competitive pricing and flexible schedules.",
    icon: <Globe className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Warehousing",
    description: "Secure storage for your goods with efficient inventory management.",
    icon: <Warehouse className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Custom Clearance",
    description: "Fast and easy customs processing with the assistance of our expert team.",
    icon: <FileText className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Freight Insurance",
    description: "Comprehensive protection for your shipments against risks during transit.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
  },
];

const ServicesSection = () => {
  return (
    // Changed: Added 'relative' and 'z-10' to ensure it stacks above background fixed elements
    // Changed: 'bg-black' is now explicitly solid
    <section className="relative z-10 bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <p className="text-orange-500 font-medium mb-2">We Service</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            One Company. Endless Freight Solutions.
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              // Changed: Removed /40 transparency and backdrop-blur to keep it strictly opaque
              // Changed: Set a solid bg-zinc-950 or bg-[#0a0a0a] for a deep "brutalist" feel
              className="relative group overflow-hidden rounded-2xl p-8 
                         bg-zinc-950
                         border-[0.5px] border-white/10 
                         transition-all duration-300 hover:border-orange-500/50"
            >
              {/* Subtle corner glow remains but is now contained over a solid black bg */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 blur-[50px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 border-[0.5px] border-white/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;