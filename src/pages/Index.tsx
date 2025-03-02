
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Load AOS (Animate on Scroll) library from CDN
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosScript.async = true;
    document.body.appendChild(aosScript);

    // Load AOS CSS
    const aosCss = document.createElement('link');
    aosCss.rel = 'stylesheet';
    aosCss.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(aosCss);

    aosScript.onload = () => {
      // Initialize AOS
      // @ts-ignore - AOS is loaded from CDN
      window.AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out',
      });
    };

    return () => {
      // Clean up
      if (document.body.contains(aosScript)) {
        document.body.removeChild(aosScript);
      }
      if (document.head.contains(aosCss)) {
        document.head.removeChild(aosCss);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div data-aos="fade-up">
        <ServicesSection />
      </div>
      <div data-aos="fade-up">
        <AboutSection />
      </div>
      <div data-aos="fade-up">
        <PortfolioSection />
      </div>
      <div data-aos="fade-up">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
