import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Exo } from 'next/font/google';

const exo = Exo({ subsets: ['latin'], weight: ['400','700','800'] });

const text = "Conoce mis proyectos y procesos de desarrollo";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i:number) => ({
    opacity: 1,
    transition: { delay: i * 0.05 }, // Retraso progresivo por letra
  }),
};

const projects = [
  { name: "E-Commerce Website", image: "/ecommerce.jpg", link: "#" },
  { name: "Portfolio Website", image: "/portfolio.jpg", link: "#" },
  { name: "Dashboard UI", image: "/dashboard.jpg", link: "#" },
  { name: "Blog Platform", image: "/blog.jpg", link: "#" },
  { name: "Task Manager App", image: "/taskmanager.jpg", link: "#" },
  { name: "Weather App", image: "/weather.jpg", link: "#" },
  { name: "Social Media Clone", image: "/social.jpg", link: "#" },
  { name: "Finance Tracker", image: "/finance.jpg", link: "#" },
  { name: "AI Chatbot", image: "/chatbot.jpg", link: "#" },
  { name: "Job Board Platform", image: "/jobboard.jpg", link: "#" },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <section className={`${exo.className} h-screen flex flex-col justify-center items-center bg-[#021c1E] text-white py-8 px-4 relative`}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo2.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-[#021c1E] opacity-75"></div>

      <div className="max-w-4xl text-center relative z-10">
      {/* Título animado letra por letra */}
      <motion.h2
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-[#6FB98F]"
      >
        {text.split("").map((char, i) => (
          <motion.span key={i} variants={textVariants} custom={i}>
            {char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Párrafo animado palabra por palabra */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }} // Aparece después del título
        className="text-gray-300 mt-2 text-lg font-bold"
      >
       <span>  
        Explora mi <span className="text-[#78D6C6]">portafolio</span> y descubre <span className="text-[#78D6C6]">proyectos</span> de <span className="text-[#78D6C6]">desarrollo web</span>, <span className="text-[#78D6C6]">análisis de datos</span> y <span className="text-[#78D6C6]">gestión de software</span>.  
        Cada uno refleja mi habilidad para <span className="text-[#78D6C6]">resolver problemas</span>, <span className="text-[#78D6C6]">optimizar procesos</span> y crear <span className="text-[#78D6C6]">soluciones innovadoras</span> con <span className="text-[#78D6C6]">tecnología moderna</span>.  
        ¡<span className="text-[#78D6C6]">Haz clic</span> para ver más!  
      </span>  
      </motion.p>
    </div>

      <div className="max-w-4xl w-full mt-8 transition-all duration-500 rounded-lg relative z-10 custom-scroll overflow-y-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(111, 185, 143, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg flex flex-col items-center justify-center shadow-xl border-2 border-gray-400 text-white bg-gray-900 p-6 w-56 h-40 md:w-64 md:h-48 backdrop-blur-md"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-center">
                  <img src={project.image} alt={project.name} className="w-24 h-16 md:w-28 md:h-20 object-contain" />
                  <p className="mt-2">{project.name}</p>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {projects.length > 3 && (
        <div className="text-center mt-6 relative z-10">
          <button onClick={() => setExpanded(!expanded)} className="px-8 py-3 text-lg font-semibold border-2 border-[#78D6C6] rounded-lg  bg-gray-900 hover:bg-[#5FA783] hover:text-black text-white transition-all">
            {expanded ? "See Less" : "See More"}
          </button>
        </div>
      )}

      <style jsx>{`
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #6FB98F #012b2d;
          scroll-behavior: smooth;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #012b2d;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #6FB98F;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #5FA783;
        }
      `}</style>
    </section>
  );
}
