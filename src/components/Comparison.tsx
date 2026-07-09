import React from 'react';
import { XCircle, CheckCircle2, Sparkles, Trophy, Users, TrendingUp } from 'lucide-react';

export default function Comparison() {
  const painPoints = [
    {
      title: "Deadlines & Delays",
      common: "Recurring delays, ghosting without notice, and constant excuses about missed deadlines.",
      ours: "Strict 24h to 72h business turnaround times guaranteed."
    },
    {
      title: "Retention Science",
      common: "Only cuts out breaths, with zero understanding of hooks or algorithmic retention.",
      ours: "Pre-analysis of scripts to inject psychological hooks and high-retention cuts."
    },
    {
      title: "Captions & Animations",
      common: "Static, generic captions with outdated fonts that are boring and hard to read.",
      ours: "Stylized interactive captions"
    },
    {
      title: "Sound Design & Music",
      common: "Dry, silent videos or annoying stock background music that bores viewers.",
      ours: "Licensed tracks and immersive sound effects (Whooshes, Pops, Swooshes, SFX)."
    },
    {
      title: "Pricing & Revisions",
      common: "Unstable pricing, charging extra for any simple tweak or requested revision.",
      ours: "1 free review per video.Flat, transparent pricing with no surprises."
    }
  ];

  return (
    <section className="bg-brand-dark/30 text-white py-16 md:py-24 relative border-t border-brand-card-light/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-brand-gold font-display text-sm font-bold uppercase tracking-widest block">
              Absolute Peace of Mind
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
              Stop stressing over amateur editors.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light max-w-xl">
              Forget missed deadlines, ugly captions, and low-engagement edits. We offer a professional ecosystem engineered for rapid, predictable results.
            </p>
          </div>
          <div className="bg-brand-card border border-brand-card-light p-6 rounded-2xl flex flex-col items-center text-center justify-center space-y-2">
            <span className="font-display text-4xl font-black text-brand-gold shadow-sm">$2,000+</span>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Average Annual Savings</p>
            <p className="text-[11px] text-gray-500 leading-snug">Compared to hiring inconsistent freelancers or full-time staff editors.</p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="bg-brand-card rounded-3xl border border-brand-card-light/60 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-brand-card-light/40 py-4 px-6 font-display font-bold text-xs uppercase tracking-wider border-b border-brand-card-light/60 text-gray-400">
            <div className="md:col-span-4">Metrics & Services</div>
            <div className="md:col-span-4 mt-2 md:mt-0 text-red-400">Standard Editor</div>
            <div className="md:col-span-4 mt-2 md:mt-0 text-brand-gold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              LuzEdit (Marcos Luz)
            </div>
          </div>

          <div className="divide-y divide-brand-card-light/60">
            {painPoints.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 py-6 px-6 gap-4 items-start hover:bg-brand-card-light/10 transition-colors">
                
                {/* Topic Title */}
                <div className="md:col-span-4">
                  <h4 className="font-display font-black text-sm text-white">{item.title}</h4>
                </div>

                {/* Common Editor */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-gray-400">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-light">{item.common}</p>
                </div>

                {/* Our Model */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium">{item.ours}</p>
                </div>

              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
