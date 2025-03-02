
import { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [headingRef.current, subheadingRef.current, ctaRef.current];
    
    // Set initial opacity to 0
    elements.forEach((el) => {
      if (el) el.style.opacity = '0';
    });
    
    // Animate elements in sequence with setTimeout
    setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.style.opacity = '1';
        headingRef.current.style.transform = 'translateY(0)';
      }
    }, 300);
    
    setTimeout(() => {
      if (subheadingRef.current) {
        subheadingRef.current.style.opacity = '1';
        subheadingRef.current.style.transform = 'translateY(0)';
      }
    }, 600);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = '1';
        ctaRef.current.style.transform = 'translateY(0)';
      }
    }, 900);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 transform translate-y-8"
          >
            Soluções Tecnológicas para o 
            <span className="text-gradient block mt-2">Sucesso da Sua Empresa</span>
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto transition-all duration-1000 delay-300 transform translate-y-8"
          >
            Desenvolvemos sistemas e aplicações que impulsionam seus negócios.
          </p>
          
          <a 
            href="#services" 
            ref={ctaRef}
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium hover:shadow-lg hover:bg-primary/90 transition-all duration-300 transform translate-y-8"
          >
            Conheça Nossos Serviços
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-foreground/50" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
