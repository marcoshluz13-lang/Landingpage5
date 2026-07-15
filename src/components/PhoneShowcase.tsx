import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// @ts-ignore
import millionaireImg from '../assets/images/millionaire_cigar_edit_1783689617897.jpg';
// @ts-ignore
import jayShettyImg from '../assets/images/jay_shetty_style_1783693150062.jpg';
// @ts-ignore
import devinJathoImg from '../assets/images/devin_jatho_style_1783693602855.jpg';
// @ts-ignore
import bymaximiseStyleImg from '../assets/images/bymaximise_style_ui_1783693790261.jpg';
// @ts-ignore
import alexHormoziImg from '../assets/images/alex_hormozi_style_1783694019109.jpg';
// @ts-ignore
import basicStyleImg from '../assets/images/basic_style_ui_1783694301055.jpg';

const CAROUSEL_IMAGES = [
  {
    id: 1,
    imageUrl: millionaireImg,
    label: "Finance Style",
    title: "Iman Gadzhi Style — Minimalist & Luxurious",
    description: "Clean cuts, slow-paced motion, and a premium feel — perfect for brands that want to look sophisticated and high-end.",
    highlights: ["Luxury warm grading", "Status typography", "Authority hooks"],
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
    imageUrl: jayShettyImg,
    label: "Podcast Highlight",
    title: "Minimalistic Style — Less Is More",
    description: "Sharp cuts, elegant graphics, and strategic negative space — designed to eliminate distraction and sharpen focus.",
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
    id: 5,
    imageUrl: devinJathoImg,
    label: "Growth Marketing",
    title: "Devin Jatho Style — Futuristic & Fast-Paced",
    description: "Rapid cuts, 3D motion graphics, and rotoscope effects create a sleek, futuristic look that keeps viewers glued.",
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
    imageUrl: bymaximiseStyleImg,
    label: "Motivational Speech",
    title: "ByMaximise Style — Immersive Cinematography",
    description: "Text blending, rotoscope masking, and cinematic B-rolls combine for a deeply immersive, emotionally driven visual story.",
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
    imageUrl: alexHormoziImg,
    label: "Gaming Highlights",
    title: "Alex Hormozi Style — High-Energy & Attention-Grabbing",
    description: "Bold captions, strategic emojis, and punchy cuts — built to stop the scroll and keep viewers hooked from second one.",
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
    imageUrl: basicStyleImg,
    label: "Travel Vlog Style",
    title: "Basic Style — Simple & Effective",
    description: "Text hooks, image overlays, and interactive captions — a clean, no-frills approach that gets your message across fast.",
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
  }
];

export default function PhoneShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const activeItem = CAROUSEL_IMAGES[currentIndex];

  // Auto-advance slides every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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
    <section className="bg-brand-dark pt-6 pb-16 border-t border-brand-card-light/40 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
            Validated <span className="text-brand-gold">Editing Styles</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 font-light">
            I use proven techniques from top influencers to boost your retention, engagement, and growth.
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

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bullet Navigation Indicators */}
          <div className="flex gap-2 mt-6">
            {CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
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
