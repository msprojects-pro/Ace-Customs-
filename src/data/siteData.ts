const publicImage = (filename: string) =>
  `${import.meta.env.BASE_URL}images/${filename}`;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  colSpan: string;
  imageAspect: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  colSpan: string;
  heightClass: string;
}

export const BUSINESS_INFO = {
  name: 'Ace Customs',
  tagline: 'Mobile Detailing & Customisation Services',
  location: 'Preston, Lancashire, United Kingdom',
  serviceArea: 'Preston, Lancashire | North West England',
  phoneDisplay: '07762 120472',
  phoneHref: 'tel:+447762120472',
  email: 'Acecustoms66@gmail.com',
  emailHref: 'mailto:Acecustoms66@gmail.com',
  whatsappHref: 'https://wa.me/447762120472',
  instagramHandle: '@ace___customs',
  instagramHref: 'https://www.instagram.com/ace___customs/',
  tiktokHandle: '@ace__customs',
  tiktokHref: 'https://www.tiktok.com/@ace__customs',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const;

export const HERO_MEDIA = {
  image: publicImage('hero-sports-car.jpg'),
  alt: 'Gloss black luxury performance coupe under architectural detailing studio lighting with mirror paint reflections',
};

export const ABOUT_MEDIA = {
  image: publicImage('about-studio-car.jpg'),
  alt: 'Side profile of a dark luxury grand tourer sports car illuminated by studio overhead lighting',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-detailing',
    number: '01',
    title: 'Mobile Detailing',
    description:
      "Professional vehicle detailing at your convenience, helping restore your vehicle's appearance and keep it looking its best.",
    image: publicImage('service-mobile-detailing.jpg'),
    alt: 'Freshly detailed gloss black performance car wing and forged alloy wheel with hydrophobic water beading',
    colSpan: 'lg:col-span-7',
    imageAspect: 'aspect-[16/10]',
  },
  {
    id: 'automotive-customisation',
    number: '02',
    title: 'Automotive Customisation',
    description:
      'Customisation services to give your vehicle a more personal and distinctive appearance.',
    image: publicImage('service-customisation.jpg'),
    alt: 'Silver metallic sports coupe fitted with gloss black aero splitter and dark forged alloy wheels',
    colSpan: 'lg:col-span-5',
    imageAspect: 'aspect-[4/3] lg:aspect-[10/9]',
  },
  {
    id: 'vehicle-maintenance',
    number: '03',
    title: 'Vehicle Maintenance',
    description:
      'Automotive care and maintenance services to help keep your vehicle in great condition.',
    image: publicImage('service-maintenance.jpg'),
    alt: 'Jet-black performance SUV with immaculate bodywork and dark alloy wheels in a clean studio bay',
    colSpan: 'lg:col-span-5',
    imageAspect: 'aspect-[4/3] lg:aspect-[10/9]',
  },
  {
    id: 'coding-diagnostics',
    number: '04',
    title: 'Coding & Diagnostics',
    description:
      'Vehicle coding and diagnostic services to help identify and address vehicle-related issues.',
    image: publicImage('service-diagnostics.jpg'),
    alt: 'Modern performance car cockpit showing illuminated digital instrument cluster and stitched leather steering wheel',
    colSpan: 'lg:col-span-7',
    imageAspect: 'aspect-[16/10]',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gloss-black-coupe',
    title: 'Deep Gloss Restoration',
    subtitle: 'Black Performance Coupe · Exterior Finish',
    image: publicImage('gallery-black-coupe.jpg'),
    alt: 'Gloss black German performance coupe photographed at twilight with deep mirror reflections across the bodywork',
    colSpan: 'md:col-span-7',
    heightClass: 'h-[280px] sm:h-[340px] lg:h-[420px]',
  },
  {
    id: 'liquid-silver-gt',
    title: 'Sculpted Paintwork Clarity',
    subtitle: 'Silver GT Sports Car · Studio Presentation',
    image: publicImage('gallery-silver-gt.jpg'),
    alt: 'Liquid silver metallic luxury GT sports car under softbox studio lighting showing clean bodylines',
    colSpan: 'md:col-span-5',
    heightClass: 'h-[280px] sm:h-[340px] lg:h-[420px]',
  },
  {
    id: 'carbon-paint-macro',
    title: 'Surface & Trim Refinement',
    subtitle: 'Exterior Paintwork · Carbon Detail',
    image: publicImage('gallery-paint-finish.jpg'),
    alt: 'Close-up of metallic obsidian black paintwork and carbon fibre mirror cap reflecting crisp overhead light',
    colSpan: 'md:col-span-5',
    heightClass: 'h-[280px] sm:h-[320px] lg:h-[380px]',
  },
  {
    id: 'stealth-suv-detail',
    title: 'Executive SUV Care',
    subtitle: 'Luxury 4x4 · Full Exterior Detail',
    image: publicImage('gallery-suv-detail.jpg'),
    alt: 'Stealth black luxury performance SUV with deep wet-look gloss clearcoat and satin black trim',
    colSpan: 'md:col-span-7',
    heightClass: 'h-[280px] sm:h-[320px] lg:h-[380px]',
  },
  {
    id: 'custom-saloon-stance',
    title: 'Bespoke Visual Presence',
    subtitle: 'Performance Saloon · Automotive Customisation',
    image: publicImage('gallery-custom-stance.jpg'),
    alt: 'Dark charcoal performance saloon featuring gloss black multi-spoke wheels and privacy glazing in concrete bay',
    colSpan: 'md:col-span-8',
    heightClass: 'h-[280px] sm:h-[340px] lg:h-[400px]',
  },
  {
    id: 'flagship-rear-finish',
    title: 'Every Angle Considered',
    subtitle: 'Flagship Coupe · Rear Quarter Finish',
    image: publicImage('gallery-rear-quarter.jpg'),
    alt: 'Rear three-quarter view of a black flagship sports car with LED taillight bar and gloss diffuser',
    colSpan: 'md:col-span-4',
    heightClass: 'h-[280px] sm:h-[340px] lg:h-[400px]',
  },
];
