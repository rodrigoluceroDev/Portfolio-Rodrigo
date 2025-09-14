// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-primary overflow-hidden">
      {/* Elementos de fondo decorativos modernos */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#1a2530] opacity-95"></div>
      
      {/* Patrón de puntos decorativos */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3498db_1px,transparent_2px)] [background-size:32px_32px]"></div>
      
      {/* Formas geométricas de fondo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full filter blur-3xl opacity-15 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-15 animate-pulse-slow delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary rounded-lg filter blur-3xl opacity-10 rotate-45 animate-pulse-slow delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Saludo inicial */}
          <motion.p 
            className="text-secondary text-lg md:text-xl font-medium mb-4"
            variants={itemVariants}
          >
            ¡Hola! Soy
          </motion.p>
          
          {/* Nombre principal */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Rodrigo <span className="text-accent">Lucero</span>
          </motion.h1>
          
          {/* Descripción */}
          <motion.div 
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            variants={itemVariants}
          >
            <span className="block">Desarrollador Full Stack especializado en crear</span>
            <span className="block">experiencias digitales excepcionales con</span>
            <span className="text-secondary font-semibold">React</span>, <span className="text-secondary font-semibold">Next.js</span> y <span className="text-secondary font-semibold">TypeScript</span>.
          </motion.div>
          
          {/* Botones de acción */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 mb-16"
            variants={itemVariants}
          >
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Ver Proyectos
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contactarme
            </a>
          </motion.div>
        </motion.div>
        
        {/* Flecha de scroll mejorada y moderna - POSICIÓN MÁS BAJA */}
        <motion.div 
          className="absolute bottom1 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-secondary group-hover:text-accent transition-colors duration-300"
          >
            <span className="text-sm mb-2 font-medium tracking-wider text-gray-400 group-hover:text-white transition-colors">DESCUBRIR MÁS</span>
            <div className="w-10 h-10 rounded-full border-2 border-secondary group-hover:border-accent flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
              <ChevronDownIcon className="w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;