'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiStripe,
  SiChartdotjs,
  SiCssmodules
} from 'react-icons/si';
import { useEffect, useRef, useState } from 'react';

// Definición de tipos para TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

// Mapeo de tecnologías a iconos - Solución al error JSX
const techIcons: Record<string, React.ReactElement> = {
  "Next.js": <SiNextdotjs className="text-black" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  "React": <SiReact className="text-blue-500" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "Express": <SiExpress className="text-gray-800" />,
  "Stripe": <SiStripe className="text-purple-500" />,
  "Chart.js": <SiChartdotjs className="text-pink-400" />,
  "CSS Modules": <SiCssmodules className="text-pink-600" />
};

// Datos de proyectos
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    description: "Mi portfolio personal desarrollado con Next.js, TypeScript, Tailwind CSS y Framer Motion. Incluye diseño responsive, animaciones suaves y una interfaz moderna que muestra mis habilidades y proyectos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rodrigoluceroDev/Portfolio-Rodrigo",
    demoUrl: "#projects"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Una plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/rodrigoluceroDev/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Aplicación para gestión de tareas con arrastrar y soltar, categorías y recordatorios.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rodrigoluceroDev/task-manager",
    demoUrl: "https://taskmanager-demo.vercel.app"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico con pronósticos en tiempo real y gráficos interactivos.",
    technologies: ["React", "Chart.js", "CSS Modules"],
    githubUrl: "https://github.com/rodrigoluceroDev/weather-dashboard",
    demoUrl: "https://weather-demo.vercel.app"
  }
];

// Componente de animación personalizada
const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// Componente de tarjeta de proyecto individual
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <AnimatedCard>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="h-48 bg-gradient-to-r from-[#2d3e50] to-[#3498db] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <span className="text-white text-xl font-semibold z-10 text-center px-4">{project.title}</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Tecnologías utilizadas:</h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm"
                  title={tech}
                >
                  <span className="mr-2 text-lg">{techIcons[tech]}</span>
                  <span className="text-gray-700">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-[#2d3e50] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300 flex-1 justify-center"
            >
              <FaGithub className="mr-2" /> Código
            </a>
            <a 
              href={project.demoUrl} 
              target={project.demoUrl.startsWith('http') ? '_blank' : '_self'} 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-[#e74c3c] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300 flex-1 justify-center"
            >
              <FaExternalLinkAlt className="mr-2" /> Demo
            </a>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

// Componente principal de la sección de proyectos
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedCard>
          <h2 className="text-4xl font-bold text-center text-[#2d3e50] mb-4">
            Mis Proyectos
          </h2>
        </AnimatedCard>
        <AnimatedCard delay={1}>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado, demostrando mis habilidades y experiencia en desarrollo web.
          </p>
        </AnimatedCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;