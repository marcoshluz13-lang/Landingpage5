import React from 'react';
import { Eye, Flame, Award, BarChart3, Clock } from 'lucide-react';

export default function ResultsPortfolio() {
  return (
    <section id="exemplos" className="bg-brand-dark text-white py-4 md:py-6 relative border-t border-brand-card-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= RESULTS TAB ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in">
          
          {/* Left Card: Main statistics breakdown */}
          <div className="lg:col-span-4 bg-brand-card p-6 md:p-8 rounded-3xl border border-brand-card-light flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold mb-2 shadow-[0_0_15px_rgba(223,177,91,0.1)]">
                <Flame className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-display text-2xl font-black text-white">
                The Secret is Retention
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Algorithms like TikTok and Instagram Reels prioritize just one metric: **Watch Time (Retention)**. Our edits keep the viewer fully engaged through a continuous flow of visual stimulants and recurring hooks.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-brand-card-light/60 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                <span className="text-xs font-mono font-bold uppercase text-brand-gold tracking-wider">Channel Growth</span>
              </div>
              <div className="text-3xl font-display font-black text-white">
                +340% <span className="text-sm text-brand-gold font-bold font-sans">Organic Views</span>
              </div>
            </div>
          </div>

          {/* Middle Card: Visual Custom Analytics Graph Mock */}
          <div className="lg:col-span-8 bg-brand-card text-white p-6 md:p-8 rounded-3xl border border-brand-card-light flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-brand-gold" />
                  <span className="font-display font-bold text-sm tracking-wide uppercase text-neutral-300">Average Audience Retention</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-brand-gold rounded-full" /> Our Model</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-gray-600 rounded-full" /> Standard Edit</span>
                </div>
              </div>

              {/* Custom Responsive SVG Graph */}
              <div className="relative w-full h-56 md:h-64 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="500" y2="50" stroke="#262626" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="#262626" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="500" y2="150" stroke="#262626" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Common Editor Path (Grey Line) */}
                  <path
                    d="M 10,100 Q 100,160 250,180 T 490,195"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="3"
                  />

                  {/* Our Model Path (Glowing Gold Line) */}
                  <path
                    d="M 10,30 C 150,15 200,60 300,45 T 490,55"
                    fill="none"
                    stroke="#dfb15b"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_#dfb15b]"
                  />

                  {/* Data Points */}
                  <circle cx="10" cy="30" r="5" fill="#dfb15b" />
                  <circle cx="250" cy="50" r="5" fill="#dfb15b" />
                  <circle cx="490" cy="55" r="5" fill="#dfb15b" />
                </svg>

                {/* Graph Label overlays */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-neutral-500 uppercase">Second 0 (Hook)</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-neutral-500 uppercase">Second 60 (End)</div>
              </div>
            </div>

            {/* Stats highlights beneath graph */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-card-light/60 mt-6">
              <div>
                <span className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1">Average Retention</span>
                <div className="flex items-center gap-1.5 text-white font-bold font-display text-lg">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>88.2%</span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1">Drop-off Rate</span>
                <div className="flex items-center gap-1.5 text-white font-bold font-display text-lg">
                  <Award className="w-4 h-4 text-brand-gold" />
                  <span>Reduced by 80%</span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1">Link Clicks (CTA)</span>
                <div className="flex items-center gap-1.5 text-white font-bold font-display text-lg">
                  <Eye className="w-4 h-4 text-brand-gold" />
                  <span>4.2x Increase</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
