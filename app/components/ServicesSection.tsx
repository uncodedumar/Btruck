import React from 'react';

// Define the shape of our service data for strong typing
interface ServiceItem {
  number: string;
  title: string | React.ReactNode; // Title can include line breaks
  hashtags: string[];
}

// The service data, making it easy to update or add items
const servicesData: ServiceItem[] = [
  {
    number: '01.',
    title: (
      <>
        Visual
        <br />
        Direction
      </>
    ),
    hashtags: ['#artdirection', '#visual'],
  },
  {
    number: '02.',
    title: (
      <>
        Branding &
        <br />
        Strategy
      </>
    ),
    hashtags: ['#logodesign', '#strategy'],
  },
  {
    number: '03.',
    title: (
      <>
        UI/UX
        <br />
        Design
      </>
    ),
    hashtags: ['#mobiledesign', '#webdesign'],
  },
  {
    number: '04.',
    title: 'Motion Design', // No break needed here
    hashtags: ['#motiongraphic', '#filmmaker'],
  },
  {
    number: '05.',
    title: 'Motion Design', // No break needed here
    hashtags: ['#motiongraphic', '#filmmaker'],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-12 lg:p-20 font-sans antialiased relative overflow-hidden">
      {/* Stylized Globe Wireframe Background (Bottom Left) 
        This uses an inline SVG for precision and performance.
      */}
      <div className="absolute bottom-[-10%] left-[-5%] w-1/2 h-1/2 opacity-20 z-0 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.1"
        >
          {/* Creating the wireframe grid lines */}
          <ellipse cx="50" cy="50" rx="48" ry="48" />
          <ellipse cx="50" cy="50" rx="30" ry="48" />
          <ellipse cx="50" cy="50" rx="10" ry="48" />
          <ellipse cx="50" cy="50" rx="48" ry="30" />
          <ellipse cx="50" cy="50" rx="48" ry="10" />
          {/* vertical lines for sphere depth */}
          <line x1="10" y1="20" x2="90" y2="20" />
          <line x1="2" y1="40" x2="98" y2="40" />
          <line x1="2" y1="60" x2="98" y2="60" />
          <line x1="10" y1="80" x2="90" y2="80" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-x-8 gap-y-12 relative z-10">
        
        {/* === Left Column: Services Header and CTA === */}
        <div className="col-span-12 md:col-span-4 lg:col-span-5 flex flex-col justify-between pt-4">
          <div>
            {/* "Services" Tag with a dot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333] rounded-full text-sm text-[#888] mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#888]"></span>
              Services
            </div>
            
            {/* Main Heading "Our Services" */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-16">
              Our<br />Services
            </h1>
          </div>
          
          {/* Explore Services Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-white text-black px-6 py-4 rounded-full font-medium group text-lg transition-transform hover:scale-105"
            >
              Explore services
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#ccc] transition-colors group-hover:border-black">
                {/* Arrow Right Icon */}
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M1 6H17M17 6L12 1M17 6L12 11"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* === Right Column: Support Message and Service Cards === */}
        <div className="col-span-12 md:col-span-8 lg:col-span-7 grid grid-cols-2 gap-x-6 gap-y-8">
          
          {/* Top Row: Support Message & Globe Icon */}
          <div className="col-span-2 flex justify-end items-start pt-4 mb-4">
            <div className="flex items-start gap-3 max-w-[280px]">
              <p className="text-right text-[#888] text-sm leading-relaxed">
                We support peoples from all over the world
              </p>
              {/* Wireframe Globe Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="1"
                className="mt-0.5 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <ellipse cx="12" cy="12" rx="4" ry="10" />
                <path d="M2.2,12 C2.2,12 21.8,12 21.8,12" />
              </svg>
            </div>
          </div>

          {/* Mapping through services data to create cards */}
          {servicesData.map((service, index) => (
            <article
              key={index}
              className="bg-[#1a1a1a] rounded-3xl p-8 aspect-square flex flex-col justify-between relative group overflow-hidden border border-[#262626]"
            >
              
              {/* Service Title */}
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-medium leading-[1.2] text-[#eee] relative z-10 max-w-[80%]">
                {service.title}
              </h3>
              
              {/* Large, Translucent Background Number */}
              <span className="absolute bottom-2 left-6 text-[20vw] md:text-[140px] font-bold text-[#eee] opacity-5 pointer-events-none select-none z-0">
                {service.number}
              </span>
              
              {/* Hashtags (at the bottom right) */}
              <div className="flex flex-col items-end gap-1.5 text-sm text-[#777] relative z-10 self-end">
                {service.hashtags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;