import { useState, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';
import { SERVICES } from './data/siteData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].title);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('enquiry-name');
      if (nameInput instanceof HTMLInputElement) {
        window.setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
      }
    }
  }, []);

  const handleSelectService = useCallback(
    (serviceTitle: string) => {
      setSelectedService(serviceTitle);
      scrollToContact();
    },
    [scrollToContact]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#08080B] text-[#F5F3FA]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-[#8C4FF4] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Header onBookServiceClick={scrollToContact} />

        <main id="main-content">
          <HeroSection onBookServiceClick={scrollToContact} />
          <ServicesSection onSelectService={handleSelectService} />
          <GallerySection />
          <AboutContactSection selectedService={selectedService} />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
