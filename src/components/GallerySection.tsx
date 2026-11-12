import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteData';
import { AutomotiveImage } from './AutomotiveImage';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        showPrevious();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrevious, showNext]);

  return (
    <section
      id="work"
      className="relative border-b border-white/10 bg-[#08080B] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-2.5 text-sm font-medium tracking-wide text-[#B18AFF]">
              The Ace Customs Standard
            </p>
            <h2 className="font-['Outfit'] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#F5F3FA] [text-wrap:balance]">
              The Details Make The Difference.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#92909D]">
            Every vehicle deserves attention to detail. Explore some automotive
            inspiration and examples of the vehicles we work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.title} in lightbox`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-md border border-white/10 bg-[#15151B] text-left transition-colors duration-200 hover:border-[#8C4FF4]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4] ${item.colSpan} ${item.heightClass}`}
            >
              <AutomotiveImage
                src={item.image}
                alt={item.alt}
                className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />

              {/* Subtle purple tint overlay on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#8C4FF4]/0 transition-colors duration-300 group-hover:bg-[#8C4FF4]/14"
              />

              {/* Measured bottom scrim for text contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#08080B]/90 via-[#08080B]/25 to-transparent"
              />

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-[#08080B]/70 text-[#F5F3FA] opacity-80 backdrop-blur-sm transition-all duration-200 group-hover:border-[#8C4FF4] group-hover:bg-[#8C4FF4] group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium tracking-wide text-[#B18AFF]">
                  {item.subtitle}
                </p>
                <h3 className="mt-1 font-['Outfit'] text-lg font-semibold text-[#F5F3FA] sm:text-xl">
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Click-to-expand Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#08080B]/92 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-md border border-white/15 bg-[#15151B]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
                <div className="min-w-0 pr-4">
                  <p className="truncate text-xs font-medium tracking-wide text-[#B18AFF]">
                    {activeItem.subtitle}
                  </p>
                  <h3 className="truncate font-['Outfit'] text-base font-semibold text-[#F5F3FA] sm:text-lg">
                    {activeItem.title}
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <span className="mr-2 text-xs font-medium text-[#92909D] tabular-nums">
                    {String(activeIndex + 1).padStart(2, '0')} /{' '}
                    {String(GALLERY_ITEMS.length).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close lightbox"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-[#08080B] text-[#F5F3FA] transition-colors hover:border-[#8C4FF4] hover:text-[#B18AFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#08080B]">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[72vh] w-full object-contain"
                />

                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous vehicle photo"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/15 bg-[#08080B]/80 text-[#F5F3FA] backdrop-blur-sm transition-colors hover:border-[#8C4FF4] hover:bg-[#8C4FF4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next vehicle photo"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/15 bg-[#08080B]/80 text-[#F5F3FA] backdrop-blur-sm transition-colors hover:border-[#8C4FF4] hover:bg-[#8C4FF4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
