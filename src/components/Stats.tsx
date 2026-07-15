import React, { useState, useEffect } from 'react';
import { Video, Eye, Award } from 'lucide-react';

export default function Stats() {
  const [videosCount, setVideosCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [retentionCount, setRetentionCount] = useState(0);

  useEffect(() => {
    // Staggered counting animations
    const duration = 2000; // ms
    const steps = 60;
    const intervalTime = duration / steps;

    const targetVideos = 75;
    const targetViews = 9; // Million
    const targetRetention = 88; // %

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setVideosCount(Math.min(targetVideos, Math.round((targetVideos / steps) * currentStep)));
      setViewsCount(Math.min(targetViews, Math.round((targetViews / steps) * currentStep)));
      setRetentionCount(Math.min(targetRetention, Math.round((targetRetention / steps) * currentStep)));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-brand-dark/80 text-white py-4 sm:py-6 relative overflow-hidden border-t border-b border-brand-card-light/40 backdrop-blur-sm">
      {/* Subtle lines bg */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#dfb15b_1px,transparent_1px),linear-gradient(to_bottom,#dfb15b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-3 divide-x divide-brand-card-light/40 items-center justify-items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(223,177,91,0.1)]">
              <Video className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold" />
            </div>
            <div className="text-left">
              <span className="font-display text-base sm:text-2xl font-black tracking-tight text-brand-gold leading-none block">
                {videosCount}+
              </span>
              <span className="text-gray-400 uppercase font-mono text-[8px] sm:text-[10px] tracking-wider font-bold leading-none mt-1 block">
                Videos Edited
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(223,177,91,0.1)]">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold" />
            </div>
            <div className="text-left">
              <span className="font-display text-base sm:text-2xl font-black tracking-tight text-brand-gold leading-none block">
                {viewsCount}M+
              </span>
              <span className="text-gray-400 uppercase font-mono text-[8px] sm:text-[10px] tracking-wider font-bold leading-none mt-1 block">
                Total Views
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(223,177,91,0.1)]">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold" />
            </div>
            <div className="text-left">
              <span className="font-display text-base sm:text-2xl font-black tracking-tight text-brand-gold leading-none block">
                {retentionCount}%
              </span>
              <span className="text-gray-400 uppercase font-mono text-[8px] sm:text-[10px] tracking-wider font-bold leading-none mt-1 block">
                Retention Reached
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
