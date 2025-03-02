
import { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Code, Database, LineChart, Globe, Smartphone, Layers } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If section is in view, add animation classes to children
            const cards = Array.from(sectionRef.current?.querySelectorAll('.card-wrapper') || []);
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale');
                card.classList.remove('opacity-0');
              }, index * 150); // Stagger animation
            });
            
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
    
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites, aplicações web e e-commerces personalizados com design responsivo e otimizado."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Integração de Sistemas",
      description: "Conectamos diferentes sistemas e aplicações para automatizar processos e aumentar a produtividade."
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "Consultoria em TI",
      description: "Análise e orientação para implementação de soluções tecnológicas alinhadas aos objetivos do seu negócio."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Cloud Computing",
      description: "Migração, gerenciamento e otimização de infraestrutura na nuvem para maior segurança e escalabilidade."
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android, com foco em experiência do usuário e performance."
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Criação de interfaces intuitivas e experiências de usuário que convertem visitantes em clientes."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Soluções Completas em Tecnologia
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div className="card-wrapper opacity-0" key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
