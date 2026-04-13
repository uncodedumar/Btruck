import React from 'react';

interface ServiceSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  isReversed: boolean;
}

const services: ServiceSection[] = [
  {
    id: 1,
    title: "Dry Van Dispatching",
    subtitle: "Reliable Freight Management",
    description: "Keep your trailers moving with high-paying dry van loads. Our dispatchers handle the paperwork and negotiations so you can focus on the road.",
    imageSrc: "/images/dry-van.jpg",
    isReversed: false,
  },
  {
    id: 2,
    title: "Reefer Logistics",
    subtitle: "Temperature Controlled Precision",
    description: "Specialized dispatch for refrigerated units. We ensure your sensitive cargo stays cool while maximizing your RPM through premium lane selection.",
    imageSrc: "/images/reefer.jpg",
    isReversed: true,
  },
  {
    id: 3,
    title: "Flatbed & Hotshot",
    subtitle: "Specialized Equipment Experts",
    description: "From Stepdecks to Hotshots, we find the specialized freight that pays a premium. We manage oversized permits and complex routing seamlessly.",
    imageSrc: "/images/flatbed.jpg",
    isReversed: false,
  },
  {
    id: 4,
    title: "Box Truck Dispatch",
    subtitle: "Local & Regional Excellence",
    description: "Optimized routing for 24ft - 26ft box trucks. We bridge the gap between shippers and smaller units for consistent, profitable runs.",
    imageSrc: "/images/box-truck.jpg",
    isReversed: true,
  },
  {
    id: 5,
    title: "Power Only Solutions",
    subtitle: "Maximum Flexibility",
    description: "Focus purely on driving. We pair your tractor with pre-loaded trailers, reducing wait times and increasing your fleet's efficiency.",
    imageSrc: "/images/power-only.jpg",
    isReversed: false,
  },
];

const TruckingServices = () => {
  return (
    /* Changed bg-[#f0f5ff] to bg-black and added relative z-10 to ensure it covers fixed backgrounds */
    <section className="relative z-10 bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 ${
              service.isReversed ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              {/* Updated border to 1px white and removed the thick white/50 border */}
              <div className="relative aspect-[4/3] w-full bg-neutral-900 rounded-[2rem] shadow-2xl overflow-hidden border border-white/20">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                   {/* Inner container border set to 1px white */}
                   <div className="w-full h-full bg-[#111] rounded-xl overflow-hidden border border-white">
                      <div className="w-full h-full flex flex-col p-6">
                        <div className="h-4 w-24 bg-white/10 rounded mb-4" />
                        <div className="flex gap-4 mb-6">
                           <div className="h-24 w-1/2 bg-white/5 rounded-lg animate-pulse" />
                           <div className="h-24 w-1/2 bg-white/5 rounded-lg animate-pulse" />
                        </div>
                        <div className="h-32 w-full bg-white/5 rounded-lg border border-dashed border-white/20" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {service.subtitle}
              </div>
              {/* Text color changed to white */}
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {service.title}
              </h2>
              {/* Text color changed to slate-400 for better readability on black */}
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg">
                {service.description}
              </p>
              <button className="group flex items-center gap-3 text-lg font-bold text-white hover:text-blue-400 transition-colors">
                Learn more 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TruckingServices;