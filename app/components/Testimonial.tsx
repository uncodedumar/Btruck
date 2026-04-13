import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    content: 'Track biomarkers and schedule tests at your convenience.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Michael Smith',
    content: 'With our platform, you can easily follow your health every day.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Emma Brown',
    content: 'This is your reliable health companion. Book tests easily.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Vital Trace',
    content: 'The most comprehensive health insights I have ever used.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative z-10 bg-black py-20 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-sm"></span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Real results</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Transforming Global Health
          </h2>
        </div>

        {/* Unified Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col bg-white rounded-[24px] overflow-hidden border border-white/10 shadow-2xl h-full"
            >
              {/* Image Section (Top) */}
              <div className="relative h-64 w-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Review Section (Bottom) */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <p className="text-[14px] text-gray-800 leading-relaxed font-medium flex-grow">
                  "{item.content}"
                </p>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}