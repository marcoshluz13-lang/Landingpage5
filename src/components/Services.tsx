import React from 'react';
import { Youtube, Instagram, Flame, Mic, Laptop, HelpCircle, Megaphone, Activity } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "YouTube Shorts",
      desc: "Grow your channel's views and subscribers with ultra-dynamic Shorts and ruthless retention hooks.",
      icon: Youtube
    },
    {
      title: "Instagram Reels",
      desc: "Domine the Reels algorithm with clinical edits designed to trigger instant saves and shares.",
      icon: Instagram
    },
    {
      title: "TikTok Videos",
      desc: "Ride viral trends with pristine TikTok pacing. Colorful captions, sound effects, and emojis included.",
      icon: Flame
    },
    {
      title: "Podcast Highlights",
      desc: "Repurpose your best podcast moments or live streams into high-converting dynamic clips.",
      icon: Mic
    },
    {
      title: "Product Demos",
      desc: "Convert your store visitors into loyal customers by showcasing product value in seconds.",
      icon: Laptop
    },
    {
      title: "Video Explainers",
      desc: "Simplify complex ideas and products into friendly, highly educational visual narratives.",
      icon: HelpCircle
    },
    {
      title: "Social Media Ads",
      desc: "High-converting ad creatives. Drastically reduce your customer acquisition cost.",
      icon: Megaphone
    },
    {
      title: "Motion Graphics",
      desc: "Elevate your brand's visual identity by adding custom motion graphics, title sequences, and transitions.",
      icon: Activity
    }
  ];

  return (
    <section className="bg-brand-dark text-white py-16 md:py-24 relative overflow-hidden border-t border-brand-card-light/40">
      {/* Visual background decor */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-brand-gold/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
            Formats we supercharge.
          </h2>
          <p className="text-white/90 text-sm sm:text-base mt-4 font-light">
            No matter the format or platform, we tailor our viral editing science to your specific niche.
          </p>
        </div>

        {/* Services Grid (Matches the Red grid from Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={index}
                className="bg-brand-card rounded-2xl p-6 border border-brand-card-light hover:border-brand-gold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors shadow-[0_0_10px_rgba(223,177,91,0.1)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-gold transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-card-light/40 flex justify-end">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase group-hover:text-brand-gold transition-colors">
                    LuzEdit • Pro
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
