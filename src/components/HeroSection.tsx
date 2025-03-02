
import { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headingRef.current, subheadingRef.current, ctaRef.current, codeBlockRef.current];
    
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
      if (codeBlockRef.current) {
        codeBlockRef.current.style.opacity = '1';
        codeBlockRef.current.style.transform = 'translateY(0)';
      }
    }, 900);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = '1';
        ctaRef.current.style.transform = 'translateY(0)';
      }
    }, 1200);
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
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-left">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 transform translate-y-8"
            >
              Transforme seu negócio com
              <span className="text-gradient block"> Soluções Tecnológicas</span>
            </h1>
            
            <p 
              ref={subheadingRef}
              className="text-lg md:text-xl text-foreground/80 mb-8 transition-all duration-1000 delay-300 transform translate-y-8"
            >
              Desenvolvimento web moderno, aplicações móveis e soluções em nuvem para a era digital.
            </p>
            
            <div 
              ref={codeBlockRef}
              className="code-block mb-8 transition-all duration-1000 delay-600 transform translate-y-8"
            >
              <pre>
                <code>
                  <span className="text-tech-accent">const</span> <span className="text-tech-primary">techhub</span> = {"{"}
                  <br />  innovation: <span className="text-green-400">'constant'</span>,
                  <br />  solutions: <span className="text-green-400">'scalable'</span>,
                  <br />  delivery: <span className="text-green-400">'on-time'</span>
                  <br />{"}"}
                </code>
              </pre>
            </div>
            
            <a 
              href="#technologies" 
              ref={ctaRef}
              className="btn btn-primary inline-block transition-all duration-1000 delay-900 transform translate-y-8"
            >
              Explorar Tecnologias
            </a>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-tech-primary/10 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tech-accent/10 rounded-full filter blur-xl"></div>
              <div className="relative z-10 p-2 rounded-lg border border-white/20 shadow-xl backdrop-blur-sm">
                <div className="bg-tech-dark rounded-lg overflow-hidden">
                  <div className="flex items-center space-x-2 px-4 py-2 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-white/70 font-mono">index.html</div>
                  </div>
                  <div className="p-4 text-sm font-mono text-white">
                    <div className="text-gray-400">&lt;<span className="text-tech-accent">div</span> <span className="text-tech-primary">class</span>=<span className="text-green-400">"app"</span>&gt;</div>
                    <div className="pl-4 text-gray-400">&lt;<span className="text-tech-accent">h1</span>&gt;<span className="text-white">Hello World</span>&lt;/<span className="text-tech-accent">h1</span>&gt;</div>
                    <div className="pl-4 text-gray-400">&lt;<span className="text-tech-accent">p</span>&gt;<span className="text-white">Welcome to TechHub</span>&lt;/<span className="text-tech-accent">p</span>&gt;</div>
                    <div className="text-gray-400">&lt;/<span className="text-tech-accent">div</span>&gt;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
