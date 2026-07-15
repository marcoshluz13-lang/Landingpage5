import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Trophy, Zap, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_VIDEOS = [
  {
    id: 1,
    wistiaId: "b737rmwo9l",
    label: "Video 1",
    captions: [
      { text: "WELCOME!", color: "text-brand-gold" },
      { text: "THIS VIDEO WAS EDITED...", color: "text-white" },
      { text: "TO HOLD YOUR ATTENTION 🧠", color: "text-brand-gold" },
      { text: "VIRAL HOOKS ⚡", color: "text-cyan-400" },
      { text: "FAST-PACED CUTS ✂️", color: "text-brand-gold" },
      { text: "AND MAGNETIC CAPTIONS!", color: "text-white" },
      { text: "THIS MULTIPLIES YOUR VIEWS!", color: "text-green-400" }
    ]
  },
  {
    id: 2,
    wistiaId: "466cecn7xh",
    label: "Video 2",
    captions: [
      { text: "THE PERFECT SETUP", color: "text-brand-gold" },
      { text: "CLEAN. MINIMAL. SEXY.", color: "text-white" },
      { text: "BUT HOW DO YOU FILM IT? 📸", color: "text-brand-gold" },
      { text: "IT'S ALL IN THE EDITS!", color: "text-cyan-400" },
      { text: "COLOR GRADING 🔥", color: "text-brand-gold" },
      { text: "DYNAMIC ZOOM-INS 🔍", color: "text-white" },
      { text: "MAKE IT LOOK PREMIUM!", color: "text-green-400" }
    ]
  },
  {
    id: 3,
    wistiaId: "bxjualz75b",
    label: "Video 3",
    captions: [
      { text: "DID YOU KNOW?", color: "text-brand-gold" },
      { text: "PEOPLE LOSE FOCUS...", color: "text-white" },
      { text: "IN LESS THAN 3 SECONDS! ⏳", color: "text-brand-gold" },
      { text: "UNLESS YOU HAVE THIS!", color: "text-cyan-400" },
      { text: "HIGH-RETENTION TRICKS 💡", color: "text-brand-gold" },
      { text: "RHYTHMIC ANIMATIONS ✨", color: "text-white" },
      { text: "BOOM! ENGAGEMENT UP! 🚀", color: "text-green-400" }
    ]
  }
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextSlide = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % CAROUSEL_VIDEOS.length);
  };

  const prevSlide = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + CAROUSEL_VIDEOS.length) % CAROUSEL_VIDEOS.length);
  };

  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#precos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-brand-dark pt-4 pb-16 md:pt-6 md:pb-24">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white text-center lg:text-left">
              This editing style will <span className="text-brand-gold relative inline-block">literally multiply<span className="absolute left-0 bottom-1 w-full h-1.5 bg-brand-gold/30 -z-10" /></span> your views!
            </h1>

            {/* Horizontal Video Player (16:9 Aspect Ratio) */}
            <div 
              className="relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_60px_rgba(223,177,91,0.1)] border border-brand-card-light/60 transition-all duration-500"
            >
              <iframe
                src="https://fast.wistia.net/embed/iframe/tfvtpk6q5b?videoFoam=true"
                title="Wistia Video Player"
                allow="autoplay; fullscreen"
                frameBorder="0"
                scrolling="no"
                className="w-full h-full rounded-2xl animate-fade-in"
                allowFullScreen
              />
            </div>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-light text-center lg:text-left">
              Using surgical high-retention hooks, rhythmic cuts, immersive sound design, and elements of viral psychology, we extract the maximum potential from your raw footage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button
                onClick={handleScrollToPricing}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-brand-gold hover:bg-brand-gold-glow rounded-xl transition-all shadow-[0_4px_20px_rgba(223,177,91,0.3)] hover:shadow-[0_6px_25px_rgba(223,177,91,0.5)] active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <Zap className="w-4 h-4 fill-current" />
                View Plans & Pricing
              </button>
            </div>
          </div>

          {/* Right Column: Custom Interactive Phone Player Carousel */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center gap-6 relative w-full">
            <p className="font-display text-lg sm:text-xl font-black tracking-tight leading-tight text-white text-center animate-fade-in">
              The level of <span className="text-brand-gold">quality</span> you can achieve in your next videos
            </p>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] flex flex-col items-center">
              
              {/* Navigation Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-card/90 border border-brand-card-light/60 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all active:scale-90 shadow-lg backdrop-blur-md cursor-pointer"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Navigation Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-card/90 border border-brand-card-light/60 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all active:scale-90 shadow-lg backdrop-blur-md cursor-pointer"
                aria-label="Next Video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Phone Frame Mockup */}
              <div className="relative w-[280px] sm:w-[310px] aspect-[9/16] bg-brand-card rounded-[38px] p-2.5 border-[4px] border-brand-card-light shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden">
                
                {/* Phone Speaker/Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-brand-card rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-neutral-800 rounded-full mb-0.5" />
                </div>

                {/* Video Viewport Container */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-black">
                  <div 
                    className="flex h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
                  >
                    {CAROUSEL_VIDEOS.map((video) => (
                      <div 
                        key={video.id} 
                        className="w-full h-full shrink-0 relative"
                      >
                        <iframe
                          src={`https://fast.wistia.net/embed/iframe/${video.wistiaId}?videoFoam=true`}
                          title={video.label}
                          allow="autoplay; fullscreen"
                          frameBorder="0"
                          scrolling="no"
                          className="w-full h-full absolute inset-0 rounded-[28px] border-none"
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bullet Indicators */}
              <div className="flex gap-2 mt-4 z-10">
                {CAROUSEL_VIDEOS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentVideoIndex 
                        ? 'w-6 bg-brand-gold' 
                        : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
