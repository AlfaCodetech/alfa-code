
import { useState, useEffect, useRef } from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If section is in view, add animation classes to items
            const items = Array.from(sectionRef.current?.querySelectorAll('.portfolio-grid-item') || []);
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.classList.remove('opacity-0');
              }, index * 100); // Stagger animation
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

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Plataforma E-commerce",
      category: "web",
      description: "Desenvolvimento de uma plataforma de e-commerce completa para uma empresa de varejo, incluindo sistema de pagamento, gerenciamento de estoque e painel administrativo personalizado."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Aplicativo de Finanças",
      category: "mobile",
      description: "Aplicativo mobile para controle financeiro pessoal, com recursos de categorização de gastos, gráficos de desempenho e sincronização com contas bancárias."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Dashboard Analítico",
      category: "web",
      description: "Dashboard analítico para empresa de marketing digital, com visualização de dados em tempo real, relatórios personalizados e integração com diversas plataformas de marketing."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Sistema de Gestão",
      category: "software",
      description: "Sistema integrado de gestão empresarial para indústria de manufatura, com módulos de produção, estoque, financeiro e recursos humanos."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Site Institucional",
      category: "design",
      description: "Redesign completo do site institucional para uma empresa de consultoria, com foco em experiência do usuário e conversão de leads."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "App de Delivery",
      category: "mobile",
      description: "Aplicativo de delivery para uma rede de restaurantes, com sistema de pedidos, rastreamento em tempo real e programa de fidelidade."
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'software', name: 'Software' },
    { id: 'design', name: 'Design' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos Projetos Recentes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-foreground/70 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-grid-item opacity-0">
              <PortfolioItem
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
              />
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        <div className="text-center mt-12">
          <button className="inline-block px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors">
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
