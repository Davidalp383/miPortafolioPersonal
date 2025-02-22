"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Full Stack",
    description: "Tienda en línea con React, Node.js y Stripe.",
    image: "/projects/ecommerce.png",
    link: "#",
  },
  {
    title: "Dashboard de Análisis de Datos",
    description: "Visualización de datos con Next.js y D3.js.",
    image: "/projects/dashboard.png",
    link: "#",
  },
  {
    title: "Red Social para Desarrolladores",
    description: "Conexión de desarrolladores con Firebase y Tailwind.",
    image: "/projects/social.png",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#102a42] to-[#0f4c75] text-white px-6 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-[#48cae4] mb-12"
      >
        Mis <span className="text-[#90e0ef]">Proyectos</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#102a42] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#90e0ef]">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a 
                href={project.link} 
                className="mt-4 inline-block text-[#00b4d8] hover:text-[#0077b6] font-bold transition duration-300"
              >
                Ver Proyecto →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
