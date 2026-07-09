import React, { useState } from 'react';
import { Send, FileVideo, Sparkles, Check, Loader2 } from 'lucide-react';
import { TrialSubmission } from '../types';

export default function TrialSection() {
  const [submissions, setSubmissions] = useState<TrialSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'form' | 'processing' | 'done'>('form');
  const [currentProgressText, setCurrentProgressText] = useState('');

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [notes, setNotes] = useState('');

  const runSimulationSteps = () => {
    const messages = [
      'Connecting to your Google Drive link...',
      'Downloading raw video (MP4 Format)...',
      'Analyzing hooks with audience retention intelligence...',
      'Automatically trimming silences and breaths...',
      'Styling dynamic captions matching LuzEdit standards...',
      'Adding sound design (Swooshes, Pops, FX)...',
      'Rendering final video in High Definition (1080x1920)...',
      'Video exported successfully!'
    ];

    let currentMsgIndex = 0;
    setCurrentProgressText(messages[0]);

    const interval = setInterval(() => {
      currentMsgIndex++;
      if (currentMsgIndex < messages.length) {
        setCurrentProgressText(messages[currentMsgIndex]);
      } else {
        clearInterval(interval);
        setStep('done');
      }
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !videoLink) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('processing');
      runSimulationSteps();

      // Save to client side requests list
      const newSubmission: TrialSubmission = {
        id: 'sub-' + Math.random().toString(36).substr(2, 9),
        name,
        email,
        whatsapp,
        videoLink,
        notes,
        submittedAt: new Date().toLocaleTimeString(),
        status: 'done'
      };
      setSubmissions([newSubmission, ...submissions]);
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setWhatsapp('');
    setVideoLink('');
    setNotes('');
    setStep('form');
  };

  return (
    <section id="testar" className="bg-brand-dark text-white py-16 md:py-24 relative overflow-hidden border-t border-brand-card-light/20">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-gold font-display text-sm font-bold uppercase tracking-widest block mb-2">
            Risk-Free Trial
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Test our quality. <br /><span className="text-brand-gold">No strings attached.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Want to see the power of our editing on your own video before committing? Order a trial edit for a symbolic price of $1.90.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Side: Trial Package details (Dark Card matching Trial Video) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-brand-card text-white p-8 rounded-3xl border border-brand-card-light shadow-[0_15px_30px_rgba(223,177,91,0.15)] w-full max-w-sm text-left relative overflow-hidden flex flex-col justify-between">
              
              {/* Decorative line */}
              <div className="absolute top-0 inset-x-0 h-2 bg-brand-gold" />

              <div>
                <div className="text-center mb-6">
                  <span className="font-display font-black text-2xl uppercase tracking-wider text-white block">
                    Trial Video
                  </span>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <span className="text-brand-gold font-display text-5xl font-black shadow-sm">$1.90</span>
                    <span className="text-xs font-mono font-bold uppercase text-gray-400">One-Off</span>
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
                    <span className="font-medium">Creative use of emojis, gifs, and zoom</span>
                  </li>
                  <li className="flex gap-2.5 items-start text-xs text-gray-300">
                    <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="font-medium">Visual identity and brand logo placement</span>
                  </li>
                  <li className="flex gap-2.5 items-start text-xs text-gray-300">
                    <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="font-medium">Exclusive discounts on future orders</span>
                  </li>
                </ul>
              </div>

              {/* Glowing decorative button at bottom */}
              <div className="bg-brand-gold text-black py-3.5 px-4 rounded-xl text-center text-xs font-black uppercase tracking-widest shadow-md">
                100% Satisfaction Guarantee
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form or Simulation Dashboard */}
          <div className="lg:col-span-7 bg-brand-card p-6 md:p-8 rounded-3xl border border-brand-card-light/60 shadow-2xl">
            
            {/* 1. Brief Form Step */}
            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <FileVideo className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-display font-black text-xl text-white">Fill Out Your Brief</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-dark/80 border border-brand-card-light/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">Your Phone / WhatsApp</label>
                    <input
                      type="text"
                      placeholder="e.g., +1 (555) 000-0000"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-brand-dark/80 border border-brand-card-light/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">Contact Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., john@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-brand-dark/80 border border-brand-card-light/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold flex items-center gap-1.5">
                    Raw Video Link *
                    <span className="text-[9px] text-gray-500 font-sans font-light capitalize">(Google Drive, Dropbox, etc.)</span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="e.g., https://drive.google.com/..."
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                    className="w-full bg-brand-dark/80 border border-brand-card-light/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">Special Instructions or Reference</label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Paste a link of a reference video or describe the tone (serious, motivational, funny)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-brand-dark/80 border border-brand-card-light/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-brand-gold hover:bg-brand-gold-glow disabled:bg-neutral-800 text-black font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-lg shadow-brand-gold/15 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      PROCESSING DATA...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      REQUEST TRIAL VIDEO
                    </>
                  )}
                </button>
              </form>
            )}

            {/* 2. Live Simulation of Editing Pipeline */}
            {step === 'processing' && (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-brand-gold/10 border-t-brand-gold animate-spin flex items-center justify-center" />
                  <Sparkles className="w-6 h-6 text-brand-gold absolute inset-0 m-auto animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">
                    Processing Your Video
                  </h3>
                  <p className="text-gray-400 text-sm font-mono h-6 animate-pulse px-4 max-w-md mx-auto">
                    {currentProgressText}
                  </p>
                </div>

                <div className="w-full max-w-sm bg-neutral-900 h-2 rounded-full overflow-hidden border border-brand-card-light/30">
                  <div className="h-full bg-brand-gold rounded-full animate-[progress-pulse_12s_infinite] w-full" />
                </div>
              </div>
            )}

            {/* 3. Finished Mock Video Result Step */}
            {step === 'done' && (
              <div className="py-6 flex flex-col items-center text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-2">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-black text-xl text-white">
                    Submission Received!
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
                    Our editing team successfully received your brief. Here is a real-time simulation of our rendering engine for you!
                  </p>
                </div>

                {/* Simulated Smartphone with the processed cooking/workout clip */}
                <div className="relative w-[180px] aspect-[9/16] bg-black rounded-[24px] p-1.5 border-[2px] border-brand-card-light overflow-hidden shadow-xl">
                  <video
                    src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1e2e2ecb50080f08149f1db1&profile_id=165&oauth2_token_id=57447761"
                    className="w-full h-full object-cover rounded-[18px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating caption */}
                  <span className="absolute bottom-6 left-2 right-2 text-center text-[10px] font-display font-black tracking-widest text-yellow-400 uppercase drop-shadow">
                    VIRAL CONTENT GENERATED! 🔥
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 font-bold text-xs uppercase tracking-wider bg-brand-card-light hover:bg-neutral-800 border border-white/5 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Video
                  </button>
                  <a
                    href="https://wa.me/5511999999999?text=Hi%20Marcos%2C%20I%20just%20submitted%20a%20trial%20video%20brief%20through%20your%20portfolio%21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 font-bold text-xs uppercase tracking-wider bg-brand-gold hover:bg-brand-gold-glow text-black rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
