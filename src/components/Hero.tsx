import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Trophy, Zap, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_VIDEOS = [
  {
    id: 1,
    url: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f607d23a1005ca6526960cb4e25a1e263d91cf5&profile_id=165&oauth2_token_id=57447761",
    label: "Fitness Style",
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
    url: "https://player.vimeo.com/external/403842180.sd.mp4?s=01cd203b60f1e14917f8a7e040f9f38fdf22728f&profile_id=165&oauth2_token_id=57447761",
    label: "Podcast Highlight",
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
    url: "https://player.vimeo.com/external/510850877.sd.mp4?s=d31da9046c3b6528882b7bdf08f5195e2d6342b5&profile_id=165&oauth2_token_id=57447761",
    label: "Minimalist Tech",
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
    url: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1e2e2ecb50080f08149f1db1&profile_id=165&oauth2_token_id=57447761",
    label: "Express Cooking",
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
    url: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f607d23a1005ca6526960cb4e25a1e263d91cf5&profile_id=165&oauth2_token_id=57447761",
    label: "Growth Marketing",
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
    url: "https://player.vimeo.com/external/403842180.sd.mp4?s=01cd203b60f1e14917f8a7e040f9f38fdf22728f&profile_id=165&oauth2_token_id=57447761",
    label: "Motivational Speech",
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
    url: "https://player.vimeo.com/external/510850877.sd.mp4?s=d31da9046c3b6528882b7bdf08f5195e2d6342b5&profile_id=165&oauth2_token_id=57447761",
    label: "Gaming Highlights",
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
    url: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1e2e2ecb50080f08149f1db1&profile_id=165&oauth2_token_id=57447761",
    label: "Travel Vlog Style",
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
    url: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f607d23a1005ca6526960cb4e25a1e263d91cf5&profile_id=165&oauth2_token_id=57447761",
    label: "Fintech & Finance",
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

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [captionIndex, setCaptionIndex] = useState(0);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [isHorizontalPlaying, setIsHorizontalPlaying] = useState(false);
  const [isHorizontalMuted, setIsHorizontalMuted] = useState(true);
  const horizontalVideoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = CAROUSEL_VIDEOS[currentVideoIndex];

  // Captions animation based on the currently active video
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCaptionIndex((prev) => (prev + 1) % activeVideo.captions.length);
      }, 1800);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentVideoIndex, activeVideo.captions.length]);

  // Handle active video swapping and playing state
  useEffect(() => {
    setCaptionIndex(0);

    videoRefs.current.forEach((ref, idx) => {
      if (ref) {
        if (idx !== currentVideoIndex) {
          ref.pause();
          ref.currentTime = 0;
        } else {
          if (isPlaying) {
            ref.play().catch(err => console.log("Video play warning:", err));
          } else {
            ref.pause();
          }
        }
      }
    });
  }, [currentVideoIndex, isPlaying]);

  const togglePlay = () => {
    const nextPlayState = !isPlaying;
    setIsPlaying(nextPlayState);

    const ref = videoRefs.current[currentVideoIndex];
    if (ref) {
      if (nextPlayState) {
        ref.play().catch(err => console.log(err));
      } else {
        ref.pause();
      }
    }
  };

  const nextSlide = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % CAROUSEL_VIDEOS.length);
  };

  const prevSlide = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + CAROUSEL_VIDEOS.length) % CAROUSEL_VIDEOS.length);
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

  const toggleHorizontalPlay = () => {
    if (horizontalVideoRef.current) {
      if (isHorizontalPlaying) {
        horizontalVideoRef.current.pause();
      } else {
        horizontalVideoRef.current.play().catch(err => console.log(err));
      }
      setIsHorizontalPlaying(!isHorizontalPlaying);
    }
  };

  const toggleHorizontalMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (horizontalVideoRef.current) {
      horizontalVideoRef.current.muted = !isHorizontalMuted;
      setIsHorizontalMuted(!isHorizontalMuted);
    }
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white text-center">
              This editing style will <span className="text-brand-gold relative inline-block">literally multiply<span className="absolute left-0 bottom-1 w-full h-1.5 bg-brand-gold/30 -z-10" /></span> your views!
            </h1>

            {/* Horizontal Video Player (16:9 Aspect Ratio) */}
            <div 
              onClick={toggleHorizontalPlay}
              className="relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_60px_rgba(223,177,91,0.1)] border border-brand-card-light/60 group/horizontal cursor-pointer transition-all duration-500"
            >
              {/* HTML5 Video */}
              <video
                ref={horizontalVideoRef}
                src="https://player.vimeo.com/external/435674703.sd.mp4?s=7f607d23a1005ca6526960cb4e25a1e263d91cf5&profile_id=165&oauth2_token_id=57447761"
                className="w-full h-full object-cover"
                loop
                muted={isHorizontalMuted}
                playsInline
              />

              {/* Dark overlay when paused or hovered */}
              <div className={`absolute inset-0 bg-black/45 transition-opacity duration-300 pointer-events-none ${isHorizontalPlaying ? 'opacity-0 group-hover/horizontal:opacity-100' : 'opacity-100'}`} />

              {/* Centered Large Play Button when paused */}
              {!isHorizontalPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-brand-gold text-black flex items-center justify-center shadow-[0_0_25px_rgba(223,177,91,0.55)] group-hover/horizontal:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                </div>
              )}

              {/* Controls Overlay Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleHorizontalPlay();
                  }}
                  className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-black/80 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  {isHorizontalPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#BDBDBD] uppercase bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-brand-card-light/30">
                    {isHorizontalPlaying ? 'Active Preview' : 'Interactive Demo'}
                  </span>
                  <button
                    onClick={toggleHorizontalMute}
                    className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-black/80 hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    {isHorizontalMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-brand-card-light/30">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
                <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">16:9 ASPECT</span>
              </div>
            </div>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              Using surgical high-retention hooks, rhythmic cuts, immersive sound design, and elements of viral psychology, we extract the maximum potential from your raw footage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleScrollToPricing}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-brand-gold hover:bg-brand-gold-glow rounded-xl transition-all shadow-[0_4px_20px_rgba(223,177,91,0.3)] hover:shadow-[0_6px_25px_rgba(223,177,91,0.5)] active:scale-95 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current" />
                View Plans & Pricing
              </button>
              <a
                href="#exemplos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-brand-card hover:bg-brand-card-light rounded-xl border border-brand-card-light/50 transition-colors active:scale-95"
              >
                View Portfolio
              </a>
            </div>

          </div>

          {/* Right Column: Custom Interactive Phone Player Carousel */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-2 relative">
            <p className="font-display text-lg sm:text-xl font-black tracking-tight leading-tight text-white text-center max-w-[300px] sm:max-w-[340px] animate-fade-in">
              The level of <span className="text-brand-gold">quality</span> you can achieve in your next videos
            </p>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] flex flex-col items-center">
              
              {/* Navigation Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-2 lg:-left-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-card/90 border border-brand-card-light/60 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all active:scale-90 shadow-lg backdrop-blur-md cursor-pointer"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Navigation Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-2 lg:-right-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-card/90 border border-brand-card-light/60 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all active:scale-90 shadow-lg backdrop-blur-md cursor-pointer"
                aria-label="Next Video"
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
                  style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
                >
                  {CAROUSEL_VIDEOS.map((video, idx) => {
                    const isActive = idx === currentVideoIndex;
                    return (
                      <div 
                        key={video.id}
                        className="w-full shrink-0 flex-none px-0.5"
                      >
                        <div className="relative w-[280px] sm:w-[310px] aspect-[9/16] bg-brand-card rounded-[38px] p-3 border-[4px] border-brand-card-light shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden group">
                          
                          {/* Phone Speaker/Camera Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-card rounded-b-2xl z-20 flex items-center justify-center">
                            <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1" />
                          </div>

                          {/* Video Screen container */}
                          <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
                            
                            {/* HTML Video player */}
                            <video
                              ref={(el) => { videoRefs.current[idx] = el; }}
                              src={video.url}
                              className="w-full h-full object-cover"
                              loop
                              muted={isMuted}
                              playsInline
                            />

                            {/* Video overlay graphic elements mimicking viral video captions */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                            {/* Animated Captions */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 px-4 select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] animate-bounce">
                              {isActive && isPlaying ? (
                                <span className={`font-display text-xl sm:text-2xl font-black tracking-widest uppercase block transform scale-110 transition-all duration-300 ${video.captions[captionIndex]?.color || 'text-white'}`}>
                                  {video.captions[captionIndex]?.text}
                                </span>
                              ) : (
                                <div className="flex flex-col items-center gap-2">
                                  <span className="font-display text-yellow-400 text-lg sm:text-xl font-black tracking-wider uppercase block">
                                    TAP TO PLAY
                                  </span>
                                  <span className="font-sans text-black text-xs font-bold block px-3 py-1 bg-brand-gold backdrop-blur-sm rounded-full">
                                    {video.label}
                                  </span>
                                </div>
                              )}
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
                                    setCurrentVideoIndex(idx);
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
                                    setCurrentVideoIndex(idx);
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
                                Video {idx + 1}/9
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
                {CAROUSEL_VIDEOS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentVideoIndex(index);
                      setIsPlaying(true);
                    }}
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
