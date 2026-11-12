import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_MEDIA } from '../data/siteData';
import { AutomotiveImage } from './AutomotiveImage';

interface HeroSectionProps {
  onBookServiceClick: () => void;
}

export function HeroSection({ onBookServiceClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] w-full items-end overflow-hidden border-b border-white/10 bg-[#08080B] pb-14 pt-24 sm:pb-20 lg:min-h-[90vh] lg:items-center lg:py-28"
    >
      {/* Full-bleed cinematic vehicle photography */}
      <div className="absolute inset-0 z-0">
        <AutomotiveImage
          src={HERO_MEDIA.image}
          alt={HERO_MEDIA.alt}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        {/* Measured scrims ensuring WCAG AA legibility across dark studio shadows and bright reflections */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#08080B] via-[#08080B]/80 to-[#08080B]/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#08080B] via-transparent to-[#08080B]/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-[540px] -translate-x-1/2 rounded-full bg-[#8C4FF4]/12 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-[#B18AFF]">
            Premium Mobile Detailing &amp; Customisation
          </p>

          <h1 className="font-['Outfit'] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.06] tracking-tight text-[#F5F3FA] [text-wrap:balance]">
            Your Car.
            <br />
            <span className="text-[#8C4FF4]">Your Style.</span>
            <br />
            Our Craft.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#D8D5E2] sm:text-lg">
            From professional mobile detailing to bespoke automotive customisation, Ace
            Customs helps bring out the best in your vehicle. Serving Preston and the
            North West.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onBookServiceClick}
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#8C4FF4] px-7 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#9D67F8] hover:shadow-[0_0_28px_rgba(140,79,244,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B18AFF]"
            >
              Book Your Service
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href="#work"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center whitespace-nowrap rounded-sm border border-white/20 bg-[#15151B]/75 px-7 py-3 text-sm font-semibold tracking-wide text-[#F5F3FA] backdrop-blur-sm transition-all duration-200 hover:border-[#8C4FF4] hover:bg-[#15151B] hover:text-[#B18AFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-[#92909D]">
            <span>Detailing</span>
            <span aria-hidden="true" className="text-[#8C4FF4]">
              |
            </span>
            <span>Customisation</span>
            <span aria-hidden="true" className="text-[#8C4FF4]">
              |
            </span>
            <span>Automotive Care</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
