interface BrandMarkProps {
  variant?: 'header' | 'footer';
}

export function BrandMark({ variant = 'header' }: BrandMarkProps) {
  if (variant === 'footer') {
    return (
      <div className="inline-flex items-center gap-3.5">
        <svg
          width="36"
          height="36"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect width="64" height="64" rx="10" fill="#15151B" />
          <rect
            x="1.5"
            y="1.5"
            width="61"
            height="61"
            rx="8.5"
            stroke="#8C4FF4"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <path
            d="M16 44L28.5 16H35.5L48 44H40.8L38.2 37.6H25.8L23.2 44H16ZM28.2 31.8H35.8L32 22.4L28.2 31.8Z"
            fill="#F5F3FA"
          />
          <path d="M21 49H43" stroke="#8C4FF4" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="font-['Outfit'] text-xl font-bold tracking-tight text-[#F5F3FA]">
            ACE <span className="text-[#8C4FF4]">CUSTOMS</span>
          </span>
          <span className="mt-1 text-[11px] font-medium tracking-[0.26em] text-[#92909D]">
            AUTOMOTIVE
          </span>
        </div>
      </div>
    );
  }

  return (
    <a
      href="#home"
      aria-label="Ace Customs Automotive Home"
      className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4FF4]"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="64" height="64" rx="10" fill="#15151B" />
        <rect
          x="1.5"
          y="1.5"
          width="61"
          height="61"
          rx="8.5"
          stroke="#8C4FF4"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
        <path
          d="M16 44L28.5 16H35.5L48 44H40.8L38.2 37.6H25.8L23.2 44H16ZM28.2 31.8H35.8L32 22.4L28.2 31.8Z"
          fill="#F5F3FA"
        />
        <path d="M21 49H43" stroke="#8C4FF4" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="font-['Outfit'] text-lg font-bold tracking-tight text-[#F5F3FA] whitespace-nowrap">
        Ace <span className="text-[#8C4FF4]">Customs</span>
      </span>
    </a>
  );
}
