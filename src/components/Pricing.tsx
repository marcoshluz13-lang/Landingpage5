import React, { useState } from 'react';
import { Check, PhoneCall, Zap, Play } from 'lucide-react';
import { PRICING_PLANS } from '../data';

export default function Pricing() {
  const [currency, setCurrency] = useState<'BRL' | 'USD'>('USD');

  const handleScrollToTrial = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector('#testar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPriceDisplay = (planId: string) => {
    if (currency === 'BRL') {
      if (planId === 'on-demand') return { price: 'R$ 250', period: '/ vídeo' };
      if (planId === 'monthly') return { price: 'R$ 1.500', period: '' };
      return { price: 'R$ 3.000', period: '' };
    } else {
      if (planId === 'on-demand') return { price: '$47', period: '/ video' };
      if (planId === 'monthly') return { price: '$297', period: '' };
      return { price: '$597', period: '' };
    }
  };

  return (
    <section id="precos" className="bg-brand-dark text-white pt-6 md:pt-8 pb-6 md:pb-8 relative border-t border-brand-card-light/20">
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Plans and Pricing
          </h2>
        </div>

        {/* 3 Cards Grid (Matching the color styling from Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: On-Demand (Dark Theme) */}
          <div className="bg-brand-card border border-brand-card-light/75 p-8 rounded-3xl flex flex-col justify-between hover:border-brand-gold/50 transition-colors shadow-xl group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-xl text-white">On-Demand</h3>
                  <p className="text-xs text-gray-400 mt-1 font-light">Order exactly what you need, when you need it</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-4xl sm:text-5xl font-black text-white">
                  {getPriceDisplay('on-demand').price}
                </span>
                <span className="text-sm font-mono text-gray-400 font-medium">
                  {getPriceDisplay('on-demand').period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8 border-t border-brand-card-light/50 pt-6">
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Delivery within 36 hours</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>3 free revisions</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Audio and color correction</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Customized styles</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Pay after completion</span>
                </li>
              </ul>
            </div>

            <a
              href="https://instagram.com/marcos_luz.editor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 font-bold text-center text-xs uppercase tracking-wider text-white bg-brand-card-light border border-white/5 hover:bg-brand-card-light/80 hover:border-brand-gold/30 rounded-xl transition-all active:scale-95 cursor-pointer block"
            >
              contact me
            </a>
          </div>

          {/* Card 2: Monthly (White/Light Grey Theme) */}
          <div className="bg-neutral-900 text-white border-2 border-brand-gold p-8 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-[0_15px_40px_rgba(223,177,91,0.15)] relative">
            
            {/* Top Badge */}
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-gold text-black text-[9px] uppercase font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              Personal 24/7 WhatsApp
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-xl text-white">Weekly</h3>
                  <p className="text-xs text-gray-400 mt-1 font-light">Complete package with 7 videos</p>
                </div>
                <span className="text-[10px] uppercase font-black tracking-wider bg-brand-gold text-black px-2.5 py-1 rounded-md">
                  Most Popular
                </span>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-4xl sm:text-5xl font-black text-white">
                  {getPriceDisplay('monthly').price}
                </span>
                <span className="text-sm font-mono text-gray-400 font-medium">
                  {getPriceDisplay('monthly').period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8 border-t border-brand-card-light/50 pt-6">
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Personal 24/7 WhatsApp Support</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Record once and receive within 72 hours</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Audio and color correction</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Customized styles</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>2 free revisions for each video</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-gray-300">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Pay after completion</span>
                </li>
              </ul>
            </div>

            <a
              href="https://instagram.com/marcos_luz.editor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 font-bold text-center text-xs uppercase tracking-wider text-black bg-brand-gold hover:bg-brand-gold-glow rounded-xl transition-all active:scale-95 shadow-md cursor-pointer block"
            >
              Contact Me
            </a>
          </div>

          {/* Card 3: Professional (Glowing Gold Theme) */}
          <div className="bg-brand-card text-white border border-brand-card-light p-8 rounded-3xl flex flex-col justify-between hover:border-brand-gold/50 transition-colors shadow-2xl relative">
            
            {/* Top Badge */}
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-gold text-black text-[9px] uppercase font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-brand-gold/10">
              PERSONAL 24/7 WHATSAPP
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-xl text-white">Ultra</h3>
                  <p className="text-xs text-gray-400 mt-1 font-light">Complete package with 15 videos</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-4xl sm:text-5xl font-black text-white">
                  {getPriceDisplay('professional').price}
                </span>
                <span className="text-sm font-mono text-gray-400 font-medium">
                  {getPriceDisplay('professional').period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8 border-t border-brand-card-light/50 pt-6">
                <li className="flex gap-2.5 items-start text-xs text-white">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Personal 24/7 WhatsApp Support</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-white">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Record once and receive within 5 days</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-white">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Audio and color correction</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-white">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Customized styles</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-white">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>2 free revisions for each video</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-white">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Pay after completion</span>
                </li>
              </ul>
            </div>

            <a
              href="https://instagram.com/marcos_luz.editor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 font-bold text-center text-xs uppercase tracking-wider text-black bg-brand-gold hover:bg-brand-gold-glow rounded-xl transition-all active:scale-95 shadow-md flex items-center justify-center gap-1.5 focus:outline-none"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* Disclaimer Text Box */}
        <div id="pricing-disclaimer" className="mt-12 max-w-2xl mx-auto bg-brand-card/40 border border-brand-card-light/25 p-5 sm:p-6 rounded-2xl shadow-lg">
          <ul className="text-left text-[11px] sm:text-xs text-neutral-400 font-normal space-y-2.5 leading-relaxed tracking-wide">
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold text-xs mt-0.5">*</span>
              <span>Payment via PayPal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold text-xs mt-0.5">*</span>
              <span>Record your content in portrait orientation, preferably in a well-lit environment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold text-xs mt-0.5">*</span>
              <span>Send a single file containing all the complete recordings within 24 hours for the Weekly plan and within 48 hours for the Ultra plan</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
