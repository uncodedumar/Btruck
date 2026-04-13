"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How does Liventa support home buyers through entire purchase process?",
    answer: "We match buyers with verified properties, provide expert guidance, and support them through viewing, negotiation, and closing."
  },
  {
    question: "Can Liventa help sell properties faster at competitive market prices?",
    answer: "Yes, we utilize data-driven marketing and a broad network of verified buyers to ensure your property gains maximum exposure and sells at the best possible price point."
  },
  {
    question: "Are properties on Liventa legally verified before public listing?",
    answer: "Absolutely. Every listing undergoes a rigorous legal audit to ensure all documentation is authentic and the title is clear before it ever goes live on our platform."
  },
  {
    question: "Which cities and neighborhoods does Liventa currently cover?",
    answer: "We are currently operating in major metropolitan hubs. Please check our 'Locations' page for a detailed map of specific neighborhoods and upcoming expansions."
  },
  {
    question: "Do you offer investment guidance for long term real estate growth?",
    answer: "Our specialized investment desk provides historical data analysis and growth forecasting to help you build a profitable long-term real estate portfolio."
  },
  {
    question: "How can I schedule property visits with Liventa agents?",
    answer: "You can schedule a visit directly through the property listing page by clicking 'Book a Tour' or by contacting our 24/7 support line."
  }
];

const FaqSection = () => {
  // Controlled state for the accordion
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black min-h-screen py-20 px-6 font-sans relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#C5A267]"></span>
            <span className="text-[12px] uppercase tracking-[0.2em] text-gray-400 font-medium">
              Asked Question
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
            Frequently Asked Question
          </h2>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#111111] border border-white/5 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group hover:bg-[#1a1a1a] transition-colors"
              >
                <span className={`text-lg md:text-xl font-medium pr-8 transition-colors ${openIndex === index ? 'text-[#C5A267]' : 'text-white'}`}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-white/70 group-hover:text-white">
                  {openIndex === index ? (
                    <Minus strokeWidth={1.5} size={24} />
                  ) : (
                    <Plus strokeWidth={1.5} size={24} />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed max-w-3xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;