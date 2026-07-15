import React from 'react';
import { Check } from 'lucide-react';

export default function TrialSection() {
  return (
    <section id="testar" className="bg-brand-dark text-white pt-6 md:pt-8 pb-6 md:pb-8 relative overflow-hidden border-t border-brand-card-light/20">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-gold font-display text-sm font-bold uppercase tracking-widest block mb-2">
            Risk-Free Trial
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Put my quality to the test. <br /><span className="text-brand-gold">No strings attached.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Want to see the power of the editing on your own video before committing? Order a free trial edit.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          {/* Trial Package details (Dark Card matching Trial Video) */}
          <div className="bg-brand-card text-white p-8 rounded-3xl border border-brand-card-light shadow-[0_15px_30px_rgba(223,177,91,0.15)] w-full max-w-md text-left relative overflow-hidden flex flex-col justify-between">
            
            {/* Decorative line */}
            <div className="absolute top-0 inset-x-0 h-2 bg-brand-gold" />

            <div>
              <div className="text-center mb-6">
                <span className="font-display font-black text-2xl uppercase tracking-wider text-white block">
                  Trial Video
                </span>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="text-white font-display text-5xl font-black line-through decoration-red-500 decoration-[4px] shadow-sm">
                    $1
                  </span>
                  <span className="text-brand-gold font-display text-5xl font-black shadow-sm">
                    $0
                  </span>
                </div>
              </div>

              {/* Trial Features Checklist */}
              <ul className="space-y-4 mb-8 border-t border-brand-card-light/60 pt-6">
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="font-medium">Transform raw footage into 1 short clip</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="font-medium">Absolute focus on viral potential</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="font-medium">Interactive and animated captions</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="font-medium">Delivery within 24 hours</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="font-medium">Same quality as paid plans</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="font-medium">15-second final video</span>
                </li>
              </ul>
            </div>

            {/* Glowing decorative button at bottom */}
            <a
              href="https://instagram.com/marcos_luz.editor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-black py-3.5 px-4 rounded-xl text-center text-xs font-black uppercase tracking-widest shadow-md hover:bg-brand-gold-glow transition-all active:scale-95 block cursor-pointer"
            >
              100% Satisfaction Guarantee
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
