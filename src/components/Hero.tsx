'use client';

import { motion } from 'framer-motion';

// Animaciones simples sin variants complejos
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-dark pt-20 px-4">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
      >
        {/* Título Principal */}
        <motion.h1
          variants={itemAnimation}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Rodrigo <span className="text-secondary">Lucero</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={itemAnimation}
          className="text-xl md:text-2xl text-light mb-8 font-light"
        >
          Desarrollador Full Stack & Diseñador UI/UX
        </motion.p>

        {/* Descripción */}
        <motion.p
          variants={itemAnimation}
          className="text-lg text-light/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Creo experiencias digitales excepcionales con las últimas tecnologías web. 
          Pasión por el código limpio, diseño intuitivo y performance optimizada.
        </motion.p>

        {/* Botones */}
        <motion.div
          variants={itemAnimation}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg shadow-secondary/25"
          >
            Ver Proyectos
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Contactarme
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-light rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-light rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}