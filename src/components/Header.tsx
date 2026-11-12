import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_LINKS } from '../data/siteData';
import { BrandMark } from './BrandMark';

interface HeaderProps {
  onBookServiceClick: () => void;
}

export function Header({ onBookServiceClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileBookClick = () => {
    setMobileMenuOpen(false);
    onBookServiceClick();
  };

  return (
    <header
      className={`sticky top-0 z-40 h-16 w-full transition-colors duration-200 ${
        scrolled
          ? 'border-b border-white/10 bg-[#08080B]/95 backdrop-blur-md'
          : 'border-b border-white/5 bg-[#08080B]/88 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <BrandMark variant="header" />

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative shrink-0 whitespace-nowrap py-1 text-sm font-medium tracking-wide text-[#92909D] transition-colors duration-200 hover:text-[#F5F3FA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4FF4]"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#8C4FF4] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onBookServiceClick}
            className="hidden min-h-[40px] shrink-0 whitespace-nowrap rounded-sm bg-[#8C4FF4] px-5 py-2 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#9D67F8] hover:shadow-[0_0_24px_rgba(140,79,244,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B18AFF] md:inline-flex md:items-center md:justify-center"
          >
            Book Your Service
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-[#15151B] text-[#F5F3FA] transition-colors hover:border-[#8C4FF4]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-white/10 bg-[#08080B]/98 px-4 pb-6 pt-3 backdrop-blur-lg md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick(item.href);
                  }}
                  className="flex min-h-[44px] items-center rounded-sm px-3 text-base font-medium text-[#F5F3FA] transition-colors hover:bg-[#15151B] hover:text-[#B18AFF]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={handleMobileBookClick}
                className="flex min-h-[44px] w-full items-center justify-center rounded-sm bg-[#8C4FF4] px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#9D67F8]"
              >
                Book Your Service
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
