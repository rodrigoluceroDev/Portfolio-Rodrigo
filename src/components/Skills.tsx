// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CommandLineIcon, 
  CloudIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  BeakerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Iconos SVG para tecnologías
const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M20 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" fill="#00d8ff"/>
    <path d="M20 28.5c7.18 0 13-3.58 13-8s-5.82-8-13-8-13 3.58-13 8 5.82 8 13 8Z" stroke="#00d8ff" strokeWidth="2"/>
    <path d="M13.5 20c0 7.18-3.58 13-8 13s-8-5.82-8-13 3.58-13 8-13 8 5.82 8 13Z" stroke="#00d8ff" strokeWidth="2"/>
    <path d="M26.5 20c0 7.18 3.58 13 8 13s8-5.82 8-13-3.58-13-8-13-8 5.82-8 13Z" stroke="#00d8ff" strokeWidth="2"/>
  </svg>
);

const NextJSIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M20 32.5c6.904 0 12.5-5.596 12.5-12.5S26.904 7.5 20 7.5 7.5 13.096 7.5 20 13.096 32.5 20 32.5Z" stroke="#000" strokeWidth="1.5"/>
    <path d="M25.625 20h-7.5l3.75 6.495L25.625 20Z" fill="#000"/>
    <path d="M17.5 20h-3.125v-2.5h3.125V20Z" fill="#000"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M5 5h30v30H5V5Z" fill="#007acc"/>
    <path d="M22.5 22.5h5v2.5h-5V30h-2.5v-5h-5v-2.5h5V15h2.5v7.5Z" fill="#fff"/>
    <path d="M25 15v2.5h2.5V15H25Z" fill="#fff"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M5 5h30v30H5V5Z" fill="#f7df1e"/>
    <path d="M21.25 27.857c0 2.143 1.25 3.214 3.214 3.214 2.143 0 3.393-1.071 3.393-2.857 0-1.964-1.071-2.679-3.214-3.75l-.357-.179c-2.143-1.071-3.571-2.5-3.571-5.357 0-3.036 2.321-5.179 5.714-5.179 2.5 0 4.286.893 5.536 2.857l-3.036 1.964c-.714-1.25-1.429-1.786-2.5-1.786s-1.607.714-1.607 1.607c0 1.786.893 2.5 2.857 3.393l.357.179c2.5 1.25 3.929 2.5 3.929 5.357 0 3.393-2.679 5.536-6.429 5.536-3.571 0-5.893-1.786-6.964-4.107l3.214-1.964Zm-8.393-2.5c.536 1.071 1.071 1.786 2.143 2.857 1.071-1.071 1.786-1.607 2.5-2.5l-2.5-2.5c-1.071 1.071-1.786 1.786-2.5 2.5.357.357.714.714 1.071 1.071l-.714.572Z" fill="#000"/>
  </svg>
);

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M20 13.75c-3.75 0-6.25 2.5-7.5 5 1.25-2.5 2.5-3.75 5-3.75 3.125 0 3.75 2.5 5 4.375 1.25 1.875 2.5 3.125 5 3.125s6.25-2.5 7.5-5c-1.25 2.5-2.5 3.75-5 3.75-3.125 0-3.75-2.5-5-4.375C23.75 16.875 22.5 15.625 20 15.625c-3.75 0-6.25 2.5-7.5 5 1.25-2.5 2.5-3.75 5-3.75 3.125 0 3.75 2.5 5 4.375 1.25 1.875 2.5 3.125 5 3.125s6.25-2.5 7.5-5c-1.25 2.5-2.5 3.75-5 3.75-3.125 0-3.75-2.5-5-4.375-1.25-1.875-2.5-3.125-5-3.125Z" fill="#38bdf8"/>
  </svg>
);

const JavaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M5 5h30v30H5V5Z" fill="#EA2D2E"/>
    <path d="M22.5 15c-1.25 0-2.5.893-2.5 2.5s1.25 2.5 2.5 2.5 2.5-.893 2.5-2.5S23.75 15 22.5 15Z" fill="#fff"/>
    <path d="M22.5 22.5c-2.5 0-5 1.607-5 3.75h10c0-2.143-2.5-3.75-5-3.75Z" fill="#fff"/>
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M19.444 7.5c-4.167 0-4.444.833-4.444 4.167v3.333h8.889v1.667H11.667c-3.889 0-5.833-1.389-5.833-5.833S8.333 5 12.778 5h6.666v2.5h-6.666Zm11.112 0c-3.333 0-4.167.833-4.167 4.167v8.333c0 3.333.834 4.167 4.167 4.167h3.333c3.333 0 4.167-.834 4.167-4.167v-8.333c0-3.334-.834-4.167-4.167-4.167h-3.333Z" fill="#3776ab"/>
    <path d="M20.556 32.5c4.167 0 4.444-.833 4.444-4.167v-3.333h-8.889v-1.667h11.667c3.889 0 5.833 1.389 5.833 5.833s-2.222 5.833-6.667 5.833h-6.666v-2.5h6.666Zm-11.112 0c3.333 0 4.167-.833 4.167-4.167v-8.333c0-3.333-.834-4.167-4.167-4.167h-3.333c-3.333 0-4.167.834-4.167 4.167v8.333c0 3.334.834 4.167 4.167 4.167h3.333Z" fill="#ffd845"/>
  </svg>
);

const NodeJSIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M20 5 5 10v20l15 5 15-5V10L20 5Z" fill="#339933"/>
    <path d="M20 5v30l15-5V10L20 5Z" fill="#333"/>
    <path d="M27.5 17.5c-2.5 0-2.5 2.5-5 2.5s-2.5-2.5-5-2.5v5c2.5 0 2.5 2.5 5 2.5s2.5-2.5 5-2.5v-5Z" fill="#fff"/>
    <path d="M27.5 17.5c2.5 0 2.5 2.5 5 2.5s2.5-2.5 5-2.5v5c-2.5 0-2.5 2.5-5 2.5s-2.5-2.5-5-2.5v-5Z" fill="#fff"/>
  </svg>
);

const SpringIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M20 5c8.284 0 15 6.716 15 15s-6.716 15-15 15S5 28.284 5 20 11.716 5 20 5Z" fill="#6db33f"/>
    <path d="M20 5c8.284 0 15 6.716 15 15" stroke="#fff" strokeWidth="2"/>
    <path d="M20 5C11.716 5 5 11.716 5 20" stroke="#fff" strokeWidth="2"/>
    <path d="M20 35c-8.284 0-15-6.716-15-15" stroke="#fff" strokeWidth="2"/>
    <path d="M20 35c8.284 0 15-6.716 15-15" stroke="#fff" strokeWidth="2"/>
  </svg>
);

const MySQLIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M25 7.5 15 5v30l10-2.5V7.5Z" fill="#00758f"/>
    <path d="M25 7.5v25l10-2.5V5l-10 2.5Z" fill="#f29111"/>
    <path d="M15 5v30l10-2.5V7.5L15 5Z" fill="#00758f"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M20 7.5s-2.5 5-2.5 10c0 5 2.5 7.5 2.5 7.5s2.5-2.5 2.5-7.5S20 7.5 20 7.5Z" fill="#599636"/>
    <path d="M20 7.5s-2.5 5-2.5 10c0 5 2.5 7.5 2.5 7.5" stroke="#599636" strokeWidth="1.5"/>
    <path d="M17.5 17.5c0 5 2.5 7.5 2.5 7.5" stroke="#599636" strokeWidth="1.5"/>
  </svg>
);

const GitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M37.5 20c0 9.665-7.835 17.5-17.5 17.5S2.5 29.665 2.5 20 10.335 2.5 20 2.5 37.5 10.335 37.5 20Z" fill="#f05033"/>
    <path d="M25 30c2.5-1.25 5-5 5-10s-2.5-8.75-5-10" stroke="#fff" strokeWidth="1.5"/>
    <path d="M15 10c-2.5 1.25-5 5-5 10s2.5 8.75 5 10" stroke="#fff" strokeWidth="1.5"/>
    <path d="M15 10c2.5 1.25 5 5 5 10s-2.5 8.75-5 10" stroke="#fff" strokeWidth="1.5"/>
    <path d="M15 10h10" stroke="#fff" strokeWidth="1.5"/>
    <path d="M25 30H15" stroke="#fff" strokeWidth="1.5"/>
  </svg>
);

const DockerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-5 h-5">
    <path d="M32.5 15h-5v2.5h5V15ZM27.5 15h-5v2.5h5V15ZM30 17.5h-5V20h5v-2.5ZM25 17.5h-5V20h5v-2.5ZM27.5 20h-5v2.5h5V20ZM32.5 20h-5v2.5h5V20Z" fill="#066da5"/>
    <path d="M12.5 20h-5v2.5h5V20ZM10 17.5H5V20h5v-2.5ZM15 17.5h-5V20h5v-2.5ZM12.5 15h-5v2.5h5V15ZM17.5 15h-5v2.5h5V15ZM20 15h-5v2.5h5V15ZM22.5 15h-5v2.5h5V15ZM22.5 17.5h-5V20h5v-2.5ZM22.5 20h-5v2.5h5V20Z" fill="#066da5"/>
    <path d="M32.5 17.5h-2.5V20h2.5v-2.5ZM35 17.5h-2.5V20H35v-2.5ZM35 20h-2.5v2.5H35V20Z" fill="#066da5"/>
    <path d="M10 22.5H5V25h5v-2.5ZM12.5 22.5h-5V25h5v-2.5ZM15 22.5h-5V25h5v-2.5ZM17.5 22.5h-5V25h5v-2.5ZM20 22.5h-5V25h5v-2.5ZM22.5 22.5h-5V25h5v-2.5ZM25 22.5h-5V25h5v-2.5ZM27.5 22.5h-5V25h5v-2.5ZM30 22.5h-5V25h5v-2.5ZM32.5 22.5h-5V25h5v-2.5ZM35 22.5h-5V25h5v-2.5Z" fill="#066da5"/>
  </svg>
);

const Skills = () => {
  // Categorías de habilidades con iconos de Heroicons
  const skillCategories = [
    {
      title: 'Desarrollo Frontend',
      icon: <CodeBracketIcon className="w-6 h-6" />,
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      skills: [
        { name: 'React', icon: <ReactIcon /> },
        { name: 'Next.js', icon: <NextJSIcon /> },
        { name: 'TypeScript', icon: <TypeScriptIcon /> },
        { name: 'JavaScript', icon: <JavaScriptIcon /> },
        { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      ]
    },
    {
      title: 'Desarrollo Backend',
      icon: <ServerIcon className="w-6 h-6" />,
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      skills: [
        { name: 'Java', icon: <JavaIcon /> },
        { name: 'Spring Boot', icon: <SpringIcon /> },
        { name: 'Python', icon: <PythonIcon /> },
        { name: 'Node.js', icon: <NodeJSIcon /> },
        { name: 'APIs REST', icon: <div className="text-lg">🔗</div> },
      ]
    },
    {
      title: 'Base de Datos',
      icon: <CloudIcon className="w-6 h-6" />,
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
      skills: [
        { name: 'MySQL', icon: <MySQLIcon /> },
        { name: 'MariaDB', icon: <div className="text-lg">🐬</div> },
        { name: 'MongoDB', icon: <MongoDBIcon /> },
        { name: 'DBeaver', icon: <div className="text-lg">🦫</div> },
      ]
    },
    {
      title: 'Herramientas & DevOps',
      icon: <CommandLineIcon className="w-6 h-6" />,
      color: 'from-orange-600 to-orange-800',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-800',
      skills: [
        { name: 'Git & GitHub', icon: <GitIcon /> },
        { name: 'Postman', icon: <div className="text-lg">📡</div> },
        { name: 'Docker', icon: <DockerIcon /> },
        { name: 'Power BI', icon: <div className="text-lg">📈</div> },
      ]
    },
    {
      title: 'Testing & QA',
      icon: <BeakerIcon className="w-6 h-6" />,
      color: 'from-yellow-600 to-yellow-800',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      skills: [
        { name: 'Testing Automatizado', icon: <div className="text-lg">🧪</div> },
        { name: 'Control de Calidad', icon: <div className="text-lg">✅</div> },
        { name: 'Dynamics 365', icon: <div className="text-lg">🏢</div> },
      ]
    },
    {
      title: 'Sistemas & Automatización',
      icon: <CpuChipIcon className="w-6 h-6" />,
      color: 'from-indigo-600 to-indigo-800',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-800',
      skills: [
        { name: 'SCADA/PLC', icon: <div className="text-lg">🏭</div> },
        { name: 'Automatización', icon: <div className="text-lg">⚡</div> },
        { name: 'Sistemas Embebidos', icon: <div className="text-lg">🔌</div> },
      ]
    }
  ];

  // Habilidades blandas
  const softSkills = [
    {
      title: 'Gestión de Proyectos',
      icon: <ChartBarIcon className="w-6 h-6" />,
      description: 'Planificación y ejecución eficiente'
    },
    {
      title: 'Liderazgo',
      icon: <UserGroupIcon className="w-6 h-6" />,
      description: 'Coordinación de equipos multidisciplinarios'
    },
    {
      title: 'Resolución de Problemas',
      icon: <PuzzlePieceIcon className="w-6 h-6" />,
      description: 'Análisis y solución creativa'
    },
    {
      title: 'Innovación',
      icon: <LightBulbIcon className="w-6 h-6" />,
      description: 'Aplicación de nuevas tecnologías'
    }
  ];

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skillItemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={floatingAnimation}
            className="inline-block mb-4"
          >
            <RocketLaunchIcon className="w-12 h-12 text-blue-600 mx-auto" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Habilidades y <span className="text-blue-600">Tecnologías</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conjunto de herramientas y tecnologías que utilizo para desarrollar soluciones innovadoras y eficientes
          </p>
        </motion.div>

        {/* Grid de habilidades técnicas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="relative group h-full"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full transform transition-all duration-300 group-hover:shadow-xl flex flex-col">
                {/* Header de la categoría */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                {/* Lista de habilidades */}
                <motion.div 
                  className="grid grid-cols-2 gap-3 mt-auto"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={`flex items-center p-3 ${category.bgColor} rounded-lg hover:bg-opacity-80 transition-all duration-300`}
                      variants={skillItemVariants}
                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      <div className="mr-2 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className={`text-sm font-medium ${category.textColor}`}>{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Habilidades blandas */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Habilidades <span className="text-blue-600">Complementarias</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 text-center h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="inline-block p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="font-bold text-gray-800 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Elemento decorativo final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              rotate: 360,
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear" as const
              }
            }}
            className="inline-block p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white mb-4"
          >
            <ShieldCheckIcon className="w-8 h-8" />
          </motion.div>
          <p className="text-lg text-gray-600">
            Comprometido con el aprendizaje continuo y la mejora constante
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;