'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-primary shadow-lg z-50 backdrop-blur-sm bg-primary/90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white hover:text-secondary transition-colors"
          >
            Rodrigo<span className="text-secondary">Lucero</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id 
                    ? 'text-secondary font-semibold' 
                    : 'text-light hover:text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <div className={`absolute w-6 h-0.5 bg-white transition-transform ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`} />
              <div className={`absolute w-6 h-0.5 bg-white transition-opacity ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} style={{ top: '50%', transform: 'translateY(-50%)' }} />
              <div className={`absolute w-6 h-0.5 bg-white transition-transform ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
              }`} style={{ bottom: '0' }} />
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-primary/95 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg px-4 py-2 transition-colors ${
                  activeSection === item.id 
                    ? 'text-secondary font-semibold' 
                    : 'text-light hover:text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}