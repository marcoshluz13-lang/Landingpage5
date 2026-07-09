import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const CAROUSEL_IMAGES = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    label: "Fitness Style",
    title: "High-Energy Reels",
    description: "Designed with fast-paced cuts, high contrast grading, and punchy captions that emphasize physical milestones. Captures viewers instantly and keeps adrenaline high.",
    highlights: ["Fast-paced cuts", "High-contrast grading", "Adrenaline hooks"],
    captions: [
      { text: "WELCOME!", color: "text-brand-gold" },
      { text: "THIS REEL WAS EDITED...", color: "text-white" },
      { text: "TO HOLD YOUR ATTENTION 🧠", color: "text-brand-gold" },
      { text: "VIRAL HOOKS ⚡", color: "text-cyan-400" },
      { text: "FAST-PACED CUTS ✂️", color: "text-brand-gold" },
      { text: "AND MAGNETIC CAPTIONS!", color: "text-white" },
      { text: "THIS MULTIPLIES YOUR VIEWS!", color: "text-green-400" }
    ]
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
    label: "Podcast Highlight",
    title: "Engaging Conversational Snippets",
    description: "Rhythmic animations and contextual highlights designed to make verbal ideas visual. Perfect for keeping viewers engaged during talking-head clips.",
    highlights: ["Auto-highlights", "Rhythmic zoom", "Focus frames"],
    captions: [
      { text: "DID YOU KNOW?", color: "text-brand-gold" },
      { text: "PEOPLE LOSE FOCUS...", color: "text-white" },
      { text: "IN LESS THAN 3 SECONDS! ⏳", color: "text-brand-gold" },
      { text: "UNLESS YOU HAVE THIS!", color: "text-cyan-400" },
      { text: "HIGH-RETENTION TRICKS 💡", color: "text-brand-gold" },
      { text: "RHYTHMIC ANIMATIONS ✨", color: "text-white" },
      { text: "BOOM! ENGAGEMENT UP! 🚀", color: "text-green-400" }
    ]
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
    label: "Minimalist Tech",
    title: "Ultra-Premium Tech Showcase",
    description: "Focuses on clean, aesthetic setups, slow panning shots, and high-fidelity color grading. Perfect for products, setups, and satisfying desk tours.",
    highlights: ["Premium LUTs", "Micro-zooms", "Slick textures"],
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
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop",
    label: "Express Cooking",
    title: "Snackable Recipe Cuts",
    description: "Optimized for extreme pacing with satisfying sound effects (ASMR) and juicy color pops. Makes recipes feel effortless and appetizing in seconds.",
    highlights: ["ASMR sound design", "Vibrant colors", "Action cuts"],
    captions: [
      { text: "HUNGRY FOR VIEWS?", color: "text-brand-gold" },
      { text: "DELICIOUS EDITS...", color: "text-white" },
      { text: "SERVED IN 15 SECONDS! ⏱️", color: "text-brand-gold" },
      { text: "SOUND EFFECTS 🔊", color: "text-cyan-400" },
      { text: "SATISFYING CUTS 🔪", color: "text-brand-gold" },
      { text: "AND JUICY GRAPHICS 🍔", color: "text-white" },
      { text: "THEY CAN'T LOOK AWAY!", color: "text-green-400" }
    ]
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    label: "Growth Marketing",
    title: "High-Converting Ads",
    description: "Starts with psychological pattern-interrupt hooks and keeps viewers locked in with social proof markers, dynamic text bubbles, and clear CTAs.",
    highlights: ["Pattern interrupts", "CTA integration", "Conversion focus"],
    captions: [
      { text: "STOP SCROLLING! 🛑", color: "text-brand-gold" },
      { text: "WANT MORE SALES?", color: "text-white" },
      { text: "YOUR VIDEOS ARE BORING 💤", color: "text-brand-gold" },
      { text: "LET'S FIX THAT!", color: "text-cyan-400" },
      { text: "VIRAL CAPTIONS 💥", color: "text-brand-gold" },
      { text: "HIGH ENGAGEMENT 📈", color: "text-white" },
      { text: "CONVERT VIEWERS NOW!", color: "text-green-400" }
    ]
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    label: "Motivational Speech",
    title: "Cinematic Inspiration",
    description: "Dramatically paced edits with letterboxing, slow-motion footage, and deep-toned audio emphasis. Tailored to evoke heavy emotional resonance.",
    highlights: ["Letterbox styling", "Atmospheric lighting", "Emotional pacing"],
    captions: [
      { text: "DREAM BIG 🌟", color: "text-brand-gold" },
      { text: "WORK IN SILENCE...", color: "text-white" },
      { text: "LET SUCCESS NOISE 🔊", color: "text-brand-gold" },
      { text: "SPEAK FOR ITSELF!", color: "text-cyan-400" },
      { text: "STAY DISCIPLINED 💪", color: "text-brand-gold" },
      { text: "NEVER GIVE UP! 🚫", color: "text-white" },
      { text: "YOU'VE GOT THIS!", color: "text-green-400" }
    ]
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=600&auto=format&fit=crop",
    label: "Gaming Highlights",
    title: "Adrenaline Game Clips",
    description: "Slick screen-shake transitions, custom progress tracking lines, and gaming-themed HUD overlay edits. Perfectly timed with beat-drops.",
    highlights: ["Beat-synced shakes", "Gaming HUD overlays", "Smooth zooms"],
    captions: [
      { text: "PRO GAMEPLAY! 🎮", color: "text-brand-gold" },
      { text: "INSANE REACTION!", color: "text-white" },
      { text: "HOW DID I WIN? 🤯", color: "text-brand-gold" },
      { text: "WATCH THE CLUTCH!", color: "text-cyan-400" },
      { text: "PERFECT TIMING ⚡", color: "text-brand-gold" },
      { text: "SMOOTH TRANSITIONS 🌀", color: "text-white" },
      { text: "GG WP! 🏆", color: "text-green-400" }
    ]
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600&auto=format&fit=crop",
    label: "Travel Vlog Style",
    title: "Aesthetic Wanderlust Journeys",
    description: "Fluid speed-ramp transitions, warm pastel color grading, and organic camera-roll frames. Immersive edits that make viewers feel they are traveling.",
    highlights: ["Speed ramping", "Pastel tones", "Film-roll overlays"],
    captions: [
      { text: "LOST IN PARADISE 🏝️", color: "text-brand-gold" },
      { text: "THE BEST VIEWS...", color: "text-white" },
      { text: "YOU'VE EVER SEEN! 😍", color: "text-brand-gold" },
      { text: "WANDERLUST ✈️", color: "text-cyan-400" },
      { text: "STUNNING FOOTAGE 🌅", color: "text-brand-gold" },
      { text: "CINEMATIC VIBES 🎥", color: "text-white" },
      { text: "BOOK YOUR TRIP! 🎒", color: "text-green-400" }
    ]
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop",
    label: "Fintech & Finance",
    title: "Professional Financial Guides",
    description: "Pairs clean animated charts, professional financial terminology cards, and premium minimalist badges. Instills trust and high educational authority.",
    highlights: ["Animated chart overlays", "Clean badge designs", "Authority styling"],
    captions: [
      { text: "MAKE MONEY CRYPTO? 💸", color: "text-brand-gold" },
      { text: "DON'T GET SCAMMED!", color: "text-white" },
      { text: "SIMPLE FINANCE RULES 📊", color: "text-brand-gold" },
      { text: "RULE #1: INVEST EARLY", color: "text-cyan-400" },
      { text: "COMPOUND INTEREST 📈", color: "text-brand-gold" },
      { text: "GROW YOUR WEALTH 🚀", color: "text-white" },
      { text: "START TODAY!", color: "text-green-400" }
    ]
  }
];

export default function PhoneShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [captionIndex, setCaptionIndex] = useState(0);
  
  const activeItem = CAROUSEL_IMAGES[currentIndex];

  // Captions auto-animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCaptionIndex((prev) => (prev + 1) % activeItem.captions.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, activeItem.captions.length]);

  // Reset caption index when changing slides
  useEffect(() => {
    setCaptionIndex(0);
  }, [currentIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  // Support touch swipe gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Support desktop drag-to-slide gestures
  const [dragStart, setDragStart] = useState<number | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStart === null) return;
    const distance = dragStart - e.clientX;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setDragStart(null);
  };

  return (
    <section className="bg-brand-dark py-16 border-t border-brand-card-light/40 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
            Validated <span className="text-brand-gold">Editing Styles</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 font-light">
            Interactive demonstration showing how professional visual designs capture interest and hold attention.
          </p>
        </div>

        {/* Recreated Phone Player Container */}
        <div className="relative w-full max-w-[340px] sm:max-w-[370px] flex flex-col items-center">
          
          {/* Navigation Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:-left-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-card/90 border border-brand-card-light/60 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all active:scale-90 shadow-lg backdrop-blur-md cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 lg:-right-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-card/90 border border-brand-card-light/60 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all active:scale-90 shadow-lg backdrop-blur-md cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Overflow Hidden viewport container */}
          <div 
            className="relative w-[280px] sm:w-[310px] overflow-hidden rounded-[38px] select-none touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {CAROUSEL_IMAGES.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div 
                    key={item.id}
                    className="w-full shrink-0 flex-none px-0.5"
                  >
                    <div className="relative w-[280px] sm:w-[310px] aspect-[9/16] bg-brand-card rounded-[38px] p-3 border-[4px] border-brand-card-light shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden group">
                      
                      {/* Phone Speaker/Camera Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-card rounded-b-2xl z-20 flex items-center justify-center">
                        <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1" />
                      </div>

                      {/* Video Screen container */}
                      <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
                        
                        {/* High-quality display image */}
                        <img
                          src={item.imageUrl}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                          alt={item.label}
                        />

                        {/* Video overlay graphic elements mimicking viral video captions */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none" />

                        {/* Animated Captions */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 px-4 select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] animate-bounce">
                          {isActive && isPlaying ? (
                            <span className={`font-display text-xl sm:text-2xl font-black tracking-widest uppercase block transform scale-110 transition-all duration-300 ${item.captions[captionIndex]?.color || 'text-white'}`}>
                              {item.captions[captionIndex]?.text}
                            </span>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <span className="font-display text-yellow-400 text-lg sm:text-xl font-black tracking-wider uppercase block">
                                PAUSED
                              </span>
                              <span className="font-sans text-black text-xs font-bold block px-3 py-1 bg-brand-gold backdrop-blur-sm rounded-full">
                                {item.label}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Dynamic Label Badge in bottom corner */}
                        <div className="absolute top-10 left-4 z-10">
                          <span className="font-mono text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                            <ImageIcon className="w-3 h-3 text-brand-gold" /> {item.label}
                          </span>
                        </div>

                        {/* Simulated Seek Bar */}
                        <div className="absolute bottom-2 left-4 right-4 z-10 bg-white/20 h-1 rounded-full overflow-hidden pointer-events-none">
                          <div className={`h-full bg-brand-gold rounded-full transition-all duration-100 ${isActive && isPlaying ? 'w-2/3' : 'w-1/4'}`} />
                        </div>

                        {/* Centered Large Play Button when paused */}
                        {(!isPlaying || !isActive) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isActive) {
                                setCurrentIndex(idx);
                                setIsPlaying(true);
                              } else {
                                togglePlay();
                              }
                            }}
                            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-brand-gold/90 text-black flex items-center justify-center hover:scale-110 transition-transform active:scale-90 z-20 shadow-[0_0_20px_rgba(223,177,91,0.5)] cursor-pointer"
                          >
                            <Play className="w-8 h-8 fill-current translate-x-0.5" />
                          </button>
                        )}

                        {/* Controls overlay (Bottom bar) */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isActive) {
                                setCurrentIndex(idx);
                                setIsPlaying(true);
                              } else {
                                togglePlay();
                              }
                            }}
                            className="p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors cursor-pointer"
                          >
                            {isActive && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </button>
                          <span className="font-mono text-[9px] text-gray-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                            Slide {idx + 1}/9
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bullet Navigation Indicators */}
          <div className="flex gap-2 mt-5">
            {CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(true);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'w-6 bg-brand-gold' 
                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Dynamic Information Section tailored for each slide */}
          <div className="mt-8 text-center w-full px-4 py-5 bg-brand-card/30 border border-brand-card-light/20 rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-300">
            <h3 className="font-display text-base sm:text-lg font-extrabold text-white mb-2 transition-all duration-300">
              {activeItem.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed transition-all duration-300">
              {activeItem.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
