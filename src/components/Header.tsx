
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          <a href="#home" className="relative z-50">
            <h1 className="text-xl font-bold md:text-2xl">
              <span className="text-gradient">Alfa</span>CodeTech
            </h1>
          </a>

          {/* Mobile menu button */}
          <button 
            className="z-50 block md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <div className="relative w-6 h-5">
              <span 
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground transform transition-all duration-300",
                  isMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"
                )}
              ></span>
              <span 
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 top-2",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              ></span>
              <span 
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground transform transition-all duration-300",
                  isMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
                )}
              ></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex h-full items-center justify-center">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.name} className="overflow-hidden">
                <a 
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
