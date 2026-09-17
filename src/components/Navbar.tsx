import { Instagram, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  navItems: string[];
  ctaText: string;
  socialLinks: {
    instagram: string;
  };
  copyright: string;
  whatsapp: string;
}

export function Navbar({
  scrolled,
  navItems,
  ctaText,
  socialLinks,
  copyright,
  whatsapp,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-700 ${scrolled || isMenuOpen ? 'bg-brand-cream py-4 shadow-sm' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-360 mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center relative z-120">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-xl sm:text-2xl font-display font-bold tracking-tighter transition-colors duration-500 whitespace-nowrap ${scrolled || isMenuOpen ? 'text-brand-dark' : 'text-white'}`}
        >
          Vitor Madeira Hair
          <span className="font-light italic text-brand-orange">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:grid grid-flow-col gap-12 text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500 justify-center ${scrolled ? 'text-brand-dark' : 'text-white'}`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-brand-orange transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-orange transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:grid justify-end">
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-full border transition-all duration-500 text-[10px] font-black uppercase tracking-[0.3em] ${scrolled ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-brand-dark'}`}
          >
            {ctaText}
          </a>
        </div>

        <div className="md:hidden grid justify-end">
          <button
            type="button"
            className={`p-3 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-brand-orange ${scrolled || isMenuOpen ? 'bg-brand-dark text-white' : 'bg-white/10 text-white backdrop-blur-md'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-brand-cream z-110 grid grid-rows-[auto_1fr_auto] pt-24"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-1/2 -right-1/2 w-[150%] aspect-square border border-brand-dark/10 rounded-full"
              />
            </div>

            <div className="relative z-10 px-12 grid content-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="group grid grid-cols-[auto_1fr] items-center gap-6"
                  >
                    <span className="text-brand-orange font-mono text-xs">0{i + 1}</span>
                    <span className="text-4xl sm:text-6xl font-display font-bold text-brand-dark group-hover:italic group-hover:text-brand-orange transition-all duration-500">
                      {item}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 p-12 border-t border-brand-dark/5 grid gap-8">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-orange text-white py-5 rounded-full font-black text-[10px] tracking-[0.3em] uppercase text-center hover:bg-brand-dark transition-colors"
              >
                {ctaText}
              </a>
              <div className="grid grid-flow-col justify-start gap-8">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-brand-dark/40 hover:text-brand-orange transition-colors" />
                </a>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark/20">
                {copyright}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
