import React from 'react';
import { Video, Scissors, Sparkles, MessageCircle, Trophy } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      num: '01',
      icon: Video,
      title: 'Record your content',
      desc: 'Send me the raw footage of your weekly content just once'
    },
    {
      num: '02',
      icon: Scissors,
      title: 'Choose your style',
      desc: 'Choose the editing style that best fits your profile'
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Elite Editing',
      desc: 'We apply rhythmic cuts, dynamic zooms, interactive captions, and sound effects.'
    },
    {
      num: '04',
      icon: MessageCircle,
      title: 'Your Review',
      desc: 'Review the output and request any revisions or fine-tuning.'
    },
    {
      num: '05',
      icon: Trophy,
      title: 'Final Result!',
      desc: 'Your finished video is ready to post, retain viewers, and skyrocket in reach.'
    }
  ];

  return (
    <section id="como-funciona" className="bg-brand-dark text-white py-6 md:py-10 relative">
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Transform any footage into <span className="text-brand-gold">scroll-breaking videos.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Our scientific editing method is straightforward and engineered to capture viewer retention from the very first second.
          </p>
        </div>

        {/* Process Timeline Line (Desktop layout with dots, mobile stacking) */}
        <div className="relative">
          {/* Horizontal Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-0.5 bg-neutral-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  
                  {/* Step bubble / Icon */}
                  <div className="relative mb-6">
                    {/* Number accent */}
                    <span className="absolute -top-3 -right-3 font-mono text-xs font-black bg-brand-gold text-black px-2 py-0.5 rounded-full shadow-md z-10">
                      {step.num}
                    </span>

                    <div className="w-20 h-20 rounded-2xl bg-brand-card hover:bg-brand-gold border border-brand-card-light group-hover:border-brand-gold text-neutral-300 group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-[0_4px_20px_rgba(223,177,91,0.25)]">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Text details */}
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light px-4">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
