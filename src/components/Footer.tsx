import React from 'react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Mail, href: 'mailto:marcoshluz13@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="bg-brand-dark text-white py-16 relative overflow-hidden border-t border-brand-card-light/40">
      {/* Curved background transition */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-brand-gold/30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
        
        {/* Title */}
        <div className="space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
            Get In Touch With Us
          </h2>
          <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
            Questions, custom quotes, or brand requests? Send us a message right now!
          </p>
        </div>

        {/* Social Icons Bar */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socials.map((soc, index) => {
            const Icon = soc.icon;
            return (
              <a
                key={index}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-card hover:bg-brand-gold hover:text-black hover:shadow-[0_0_15px_rgba(223,177,91,0.4)] transition-all duration-300 flex items-center justify-center text-white shadow-md active:scale-90 border border-brand-card-light/50"
                aria-label={soc.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright tags */}
        <div className="pt-8 border-t border-brand-card-light/40 text-[10px] sm:text-xs text-white/70 font-mono tracking-wider flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            © 2026 Marcos Luz. All rights reserved.
          </span>
          <span className="font-bold hover:text-brand-gold transition-colors">
            Developed by LuzEdit | Since 2016
          </span>
        </div>

      </div>
    </footer>
  );
}
