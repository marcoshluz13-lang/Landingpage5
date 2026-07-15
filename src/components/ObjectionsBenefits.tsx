import React from 'react';
import { XCircle, CheckCircle2, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

export default function ObjectionsBenefits() {
  const comparisonRows = [
    {
      category: "Deadlines & Delays",
      standard: "Recurring delays, ghosting without notice, and constant excuses about missed deadlines.",
      luzedit: "Strict business turnaround times guaranteed."
    },
    {
      category: "Captions & Animations",
      standard: "Static, generic captions with outdated fonts that are boring and hard to read.",
      luzedit: "Stylized interactive captions"
    },
    {
      category: "Sound Design & Music",
      standard: "Dry, silent videos or annoying stock background music that bores viewers.",
      luzedit: "Licensed tracks and immersive sound effects (Whooshes, Pops, Swooshes, SFX)."
    },
    {
      category: "Pricing & Revisions",
      standard: "Unstable pricing, charging extra for any simple tweak or requested revision.",
      luzedit: "1 free review per video. Flat, transparent pricing with no surprises."
    }
  ];

  return (
    <section id="peace-of-mind" className="bg-brand-dark text-white pt-16 md:pt-24 pb-6 md:pb-8 relative overflow-hidden border-t border-brand-card-light/40">
      {/* Subtle background grid lines for cohesive design */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#dfb15b_1px,transparent_1px),linear-gradient(to_bottom,#dfb15b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper gold tag, title and subtitle */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-xs md:text-sm font-mono tracking-widest text-brand-gold uppercase font-bold mb-3"
          >
            ABSOLUTE PEACE OF MIND
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4"
          >
            Stop stressing over amateur editors.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto"
          >
            No more missed deadlines, ugly captions, or low-engagement edits — just a professional ecosystem engineered for speed and results.
          </motion.p>
        </div>

        {/* Savings Card Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-brand-card rounded-3xl p-6 sm:p-8 border border-brand-card-light flex flex-col items-center justify-center text-center shadow-2xl max-w-md mx-auto mb-12 hover:border-brand-gold/30 transition-all duration-300"
        >
          <span className="block font-display text-4xl sm:text-5xl font-black text-brand-gold tracking-tight leading-none">
            $2,000+
          </span>
          <span className="text-gray-400 uppercase font-mono text-[10px] sm:text-xs tracking-widest font-bold mt-2">
            AVERAGE ANNUAL SAVINGS
          </span>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-3 font-light">
            Compared to hiring inconsistent freelancers or full-time staff editors.
          </p>
        </motion.div>

        {/* Comparison Table Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-brand-card rounded-[32px] p-6 sm:p-10 border border-brand-card-light shadow-2xl max-w-2xl mx-auto"
        >
          {/* Card Header */}
          <div className="text-left mb-8 pb-6 border-b border-brand-card-light/60">
            <span className="block text-xs font-mono tracking-widest text-neutral-500 uppercase font-bold mb-2">
              METRICS & SERVICES
            </span>
            <div className="space-y-1.5 mt-3">
              <span className="block text-xs sm:text-sm font-mono tracking-wider text-red-500 font-bold uppercase">
                STANDARD EDITOR
              </span>
              <span className="block text-xs sm:text-sm font-mono tracking-wider text-brand-gold font-bold uppercase flex items-center gap-1.5">
                <Monitor className="w-4 h-4" /> MarcosEdits
              </span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-8">
            {comparisonRows.map((row, index) => (
              <div 
                key={index} 
                className="space-y-3 pb-6 border-b border-brand-card-light/40 last:border-0 last:pb-0"
              >
                <h4 className="font-display font-bold text-white text-base sm:text-lg">
                  {row.category}
                </h4>
                <div className="space-y-3">
                  {/* Standard Editor Drawback */}
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(239,68,68,0.1)]">
                      <XCircle className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {row.standard}
                    </p>
                  </div>
                  
                  {/* LuzEdit Advantage */}
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(223,177,91,0.1)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                    </div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                      {row.luzedit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
