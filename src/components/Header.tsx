import React, { useState } from 'react';
import { Menu, X, Play, Video } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Examples', href: '#exemplos' },
    { label: 'How It Works', href: '#como-funciona' },
    { label: 'Pricing', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-card-light/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Menu Items (Desktop) */}
          <nav className="hidden md:flex space-x-8 items-center flex-1 justify-end pr-12">
            <a
              href="#exemplos"
              onClick={(e) => handleScroll(e, '#exemplos')}
              className="text-gray-300 hover:text-brand-gold text-sm font-medium tracking-wide transition-colors"
            >
              Examples
            </a>
            <a
              href="#como-funciona"
              onClick={(e) => handleScroll(e, '#como-funciona')}
              className="text-gray-300 hover:text-brand-gold text-sm font-medium tracking-wide transition-colors"
            >
              How it works
            </a>
          </nav>

          {/* Logo (Centered) */}
          <div className="flex-shrink-0 flex justify-center py-2">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 focus:outline-none"
            >
              <div className="relative flex items-center justify-center bg-brand-gold/10 border border-brand-gold/30 w-9 h-9 rounded-lg">
                <Video className="w-5 h-5 text-brand-gold" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              </div>
              <span className="font-display text-2xl font-black tracking-tighter text-white">
                luz<span className="text-brand-gold">edit</span>
              </span>
            </a>
          </div>

          {/* Right Menu Items + CTA (Desktop) */}
          <nav className="hidden md:flex space-x-8 items-center flex-1 pl-12">
            <a
              href="#precos"
              onClick={(e) => handleScroll(e, '#precos')}
              className="text-gray-300 hover:text-brand-gold text-sm font-medium tracking-wide transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScroll(e, '#faq')}
              className="text-gray-300 hover:text-brand-gold text-sm font-medium tracking-wide transition-colors"
            >
              FAQ
            </a>
            <a
              href="#testar"
              onClick={(e) => handleScroll(e, '#testar')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-wider text-black bg-brand-gold hover:bg-brand-gold-glow rounded-lg transition-all active:scale-95 shadow-[0_4px_20px_rgba(223,177,91,0.25)]"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Try for $1.90
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-card focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-card border-b border-brand-card-light/60 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-card-light transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 px-3 border-t border-brand-card-light/40">
              <a
                href="#testar"
                onClick={(e) => handleScroll(e, '#testar')}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 font-black text-center text-sm tracking-wider text-black bg-brand-gold hover:bg-brand-gold-glow rounded-lg transition-colors active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                TRY VIDEO FOR $1.90
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
