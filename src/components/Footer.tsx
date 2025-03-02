
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-mono">
              <span className="text-tech-accent">&lt;</span>
              <span className="text-tech-primary">Tech</span>
              <span className="text-tech-secondary">Hub</span>
              <span className="text-tech-accent">/&gt;</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Desenvolvemos soluções tecnológicas inovadoras para empresas que desejam se destacar no mundo digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#8227;</span> Início
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#8227;</span> Tecnologias
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#8227;</span> Soluções
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#8227;</span> Cases
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#8227;</span> Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tecnologias</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&lt;/&gt;</span> Frontend Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">{`{ }`}</span> Backend APIs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#9635;</span> Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#9729;</span> Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="text-tech-accent mr-2">&#9881;</span> DevOps
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Assine nossa newsletter para receber novidades sobre tecnologia, tutoriais e eventos.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-tech-primary text-white rounded-lg hover:bg-tech-secondary transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} TechHub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
