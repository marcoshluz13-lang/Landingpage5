import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="bg-brand-dark text-white pt-6 md:pt-8 pb-12 md:pb-16 relative border-t border-brand-card-light/20">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-gold font-display text-sm font-bold uppercase tracking-widest block mb-2">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Find answers to common questions about our editing workflow, turnaround times, and revisions.
          </p>
        </div>

        {/* Custom Accordion List (Matching Screenshot Outline structure) */}
        <div className="divide-y divide-brand-card-light border-y border-brand-card-light max-w-3xl mx-auto text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-5">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left py-2 hover:text-brand-gold focus:outline-none select-none cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm sm:text-base tracking-tight pr-6 transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-brand-gold shrink-0 bg-brand-card-light/50 p-1.5 rounded-lg border border-brand-card-light/35">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated expand/collapse answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light pb-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
