import { BUSINESS_INFO, NAV_LINKS } from '../data/siteData';
import { BrandMark } from './BrandMark';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050507] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <BrandMark variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-[#92909D]">
              Mobile Detailing &amp; Customisation Services.
            </p>
            <p className="mt-1 text-sm text-[#92909D]">
              Preston, Lancashire | North West England.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-[#B18AFF]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#92909D] transition-colors duration-200 hover:text-[#F5F3FA]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-[#B18AFF]">
              Contact &amp; Social
            </h3>
            <div className="mt-4 space-y-2.5 text-sm text-[#92909D]">
              <p>
                Phone:{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-[#F5F3FA] tabular-nums transition-colors hover:text-[#B18AFF]"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="text-[#F5F3FA] transition-colors hover:text-[#B18AFF]"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-sm border border-white/12 bg-[#15151B] px-3.5 py-2 text-xs font-medium text-[#F5F3FA] transition-colors hover:border-[#8C4FF4] hover:text-[#B18AFF]"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                Instagram
              </a>
              <a
                href={BUSINESS_INFO.tiktokHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-sm border border-white/12 bg-[#15151B] px-3.5 py-2 text-xs font-medium text-[#F5F3FA] transition-colors hover:border-[#8C4FF4] hover:text-[#B18AFF]"
              >
                <TikTokIcon className="h-3.5 w-3.5" />
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#92909D] sm:flex-row sm:items-center">
          <p>© 2026 Ace Customs. All rights reserved.</p>
          <p className="text-[#92909D]/80">
            Preston, Lancashire · North West England
          </p>
        </div>
      </div>
    </footer>
  );
}
