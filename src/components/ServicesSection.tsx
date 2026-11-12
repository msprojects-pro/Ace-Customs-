import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/siteData';
import { AutomotiveImage } from './AutomotiveImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
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
              What We Do
            </p>
            <h2 className="font-['Outfit'] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#F5F3FA] [text-wrap:balance]">
              More Than Just A Clean.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#92909D]">
            Professional automotive care and customisation services designed to make
            your vehicle stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group flex flex-col overflow-hidden rounded-md border border-white/10 bg-[#15151B] transition-colors duration-200 hover:border-[#8C4FF4]/50 ${service.colSpan}`}
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#0E0E13] sm:h-72 lg:h-80">
                <AutomotiveImage
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#15151B] via-[#15151B]/20 to-transparent"
                />
                <span className="absolute left-5 top-5 font-['Outfit'] text-xs font-semibold tracking-[0.2em] text-[#B18AFF] tabular-nums">
                  {service.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="font-['Outfit'] text-2xl font-semibold tracking-tight text-[#F5F3FA]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#92909D] sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#F5F3FA] transition-colors duration-200 hover:text-[#B18AFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4FF4]"
                  >
                    Enquire about {service.title}
                    <ArrowUpRight
                      className="h-4 w-4 text-[#8C4FF4] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
