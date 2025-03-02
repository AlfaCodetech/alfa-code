
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
    <section id="about" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="opacity-0" ref={imageRef}>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="AlfaCodeTech Team"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-[-20px] left-[-20px] w-32 h-32 bg-primary/10 rounded-lg z-0"></div>
              <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 border-2 border-primary/20 rounded-lg z-0"></div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="opacity-0" ref={contentRef}>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Sobre Nós
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Construindo o futuro digital para seu negócio
            </h2>
            
            <p className="text-foreground/80 mb-6">
              Na AlfaCodeTech, somos apaixonados por transformar ideias em soluções tecnológicas que impulsionam o crescimento dos nossos clientes. Desde 2010, temos ajudado empresas de todos os tamanhos a navegar pela transformação digital.
            </p>
            
            <p className="text-foreground/80 mb-8">
              Nossa equipe é formada por especialistas dedicados que combinam expertise técnica com uma profunda compreensão dos desafios de negócios. Acreditamos em parcerias de longo prazo e no desenvolvimento de soluções que não apenas atendem às necessidades atuais, mas também preparam nossos clientes para o futuro.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-sm text-foreground/70">Anos de Experiência</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">200+</span>
                <span className="text-sm text-foreground/70">Projetos Entregues</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-foreground/70">Especialistas</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">98%</span>
                <span className="text-sm text-foreground/70">Satisfação do Cliente</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Fale Conosco
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
