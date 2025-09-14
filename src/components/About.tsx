'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Animaciones para la sección About - CORREGIDAS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
      // Eliminamos la propiedad 'ease' para evitar el error
    }
  }
};

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Título de la sección */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        >
          Sobre <span className="text-secondary">Mí</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-80 h-80 mx-auto">
              <Image
                src="/placeholder-about.jpg" // Reemplaza con tu imagen
                alt="Rodrigo Lucero - Desarrollador Full Stack"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-secondary/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-dark mb-6">
              Desarrollador Full Stack & Apasionado por la Tecnología
            </h3>
            
            <div className="space-y-4 text-dark/80">
              <p>
                Soy un desarrollador full stack con experiencia en la creación de aplicaciones web modernas 
                y responsivas. Mi pasión es transformar ideas en soluciones digitales que impacten 
                positivamente en las personas.
              </p>
              
              <p>
                Me especializo en JavaScript, React, Next.js, Node.js y otras tecnologías modernas. 
                Disfruto enfrentando desafíos que me permitan crecer profesionalmente y aprender 
                constantemente.
              </p>

              <p>
                Cuando no estoy programando, me gusta participar en comunidades de desarrollo, 
                contribuir a proyectos open source y mantenerme actualizado con las últimas 
                tendencias tecnológicas.
              </p>
            </div>

            {/* Estadísticas */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">+2</div>
                <div className="text-sm text-dark/70">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">+15</div>
                <div className="text-sm text-dark/70">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">+10</div>
                <div className="text-sm text-dark/70">Tecnologías dominadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-dark/70">Comprometido</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}