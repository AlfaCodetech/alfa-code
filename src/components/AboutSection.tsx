
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If section is in view, animate elements
            if (imageRef.current) {
              imageRef.current.classList.add('animate-fade-in-left');
              imageRef.current.classList.remove('opacity-0');
            }
            
            if (contentRef.current) {
              contentRef.current.classList.add('animate-fade-in-right');
              contentRef.current.classList.remove('opacity-0');
            }
            
            // Disconnect after animation is triggered
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
    
    const section = document.getElementById('about');
    if (section) {
      observerRef.current.observe(section);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium mb-4">
            Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Impulsionando a transformação digital
          </h2>
          <div className="w-24 h-1 bg-tech-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="opacity-0" ref={imageRef}>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22731d2628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="TechHub Solutions"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-[-20px] left-[-20px] w-32 h-32 bg-tech-primary/10 rounded-lg z-0"></div>
              <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 border-2 border-tech-primary/20 rounded-lg z-0"></div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="opacity-0" ref={contentRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Soluções tecnológicas <span className="text-gradient">personalizadas</span> para seu negócio
            </h2>
            
            <p className="text-foreground/80 mb-6">
              Nossa equipe de especialistas desenvolve soluções que combinam as mais recentes tecnologias com as melhores práticas de mercado, garantindo resultados excepcionais.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tech-primary/10 flex items-center justify-center mr-4">
                  <span className="text-tech-primary text-xl">&#9002;</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Desenvolvimento Web</h3>
                  <p className="text-foreground/70">Criamos websites modernos, responsivos e otimizados para SEO, com foco na experiência do usuário.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tech-primary/10 flex items-center justify-center mr-4">
                  <span className="text-tech-primary text-xl">&#9783;</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Aplicações Móveis</h3>
                  <p className="text-foreground/70">Desenvolvemos apps nativos e híbridos que funcionam perfeitamente em todas as plataformas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tech-primary/10 flex items-center justify-center mr-4">
                  <span className="text-tech-primary text-xl">&#9729;</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Cloud Solutions</h3>
                  <p className="text-foreground/70">Implantamos e gerenciamos infraestruturas na nuvem que são escaláveis, seguras e otimizadas para custo.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="btn btn-primary inline-flex items-center"
            >
              Solicitar Orçamento
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
