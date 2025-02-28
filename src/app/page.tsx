"use client";

import { Exo } from 'next/font/google';
import { Typewriter } from "react-simple-typewriter";

const exo = Exo({ subsets: ['latin'], weight: ['400', '800'] });

import Contact from "../components/Contacto";
import Proyect from "../components/Proyectos";
import Skills from "../components/Skills";
import About from "../components/About";

import { FaArrowUp, FaArrowRight, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowLeft, FaFileAlt, FaUser, FaBullseye, FaLightbulb, 
  FaEnvelopeOpenText, FaFacebook, FaInstagram, FaYoutube, FaGithub, 
  FaLinkedin, FaEnvelope 
} from "react-icons/fa";

export default function HeroSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const transition = { duration: 0.5, ease: "easeInOut" };

  const getAnimation = (direction: string) => {
    switch (direction) {
      case "top":
        return { y: "-100vh", opacity: 1 };
      case "bottom":
        return { y: "100vh", opacity: 1 };
      case "left":
        return { x: "-100vw", opacity: 1 };
      case "right":
        return { x: "100vw", opacity: 1 };
      default:
        return {};
    }
  };

  const getReturnButtonPosition = (direction: string) => {
    switch (direction) {
      case "top":
        return "bottom-4";
      case "bottom":
        return "top-4";
      case "left":
        return "right-4";
      case "right":
        return "left-4";
      default:
        return "";
    }
  };

  const [cursorTitle, setCursorTitle] = useState(true);
  const [cursorSubtitle, setCursorSubtitle] = useState(true);
  const [cursorText, setCursorText] = useState(true);

  return (
    <div className={`${exo.className} relative flex items-center justify-center h-screen w-screen bg-gray-900 text-white overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo2.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-[#021c1E] opacity-75"></div>

      {/* Ícono en la parte superior izquierda */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-xl font-extrabold text-[#6FB98F]">
          <FaUser /> <span>DavidaLp</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
        whileTap={{ scale: 0.95 }} 
        className="absolute top-16 flex flex-col items-center border-2 border-[#6FB98F] bg-gray-900 px-0 py-1 rounded-md transition duration-75"
      >
        <a 
          className="cursor-pointer flex items-center gap-2 text-xl px-5 py-2 text-[#6FB98F] font-extrabold transition duration-75 hover:text-[#2C7873] drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]"
          onClick={() => setActiveSection("top")}
        >
          <FaUser className="text-white cursor-pointer" />Quién soy<FaArrowUp className="text-white cursor-pointer" />
        </a>
      </motion.div>

      {/* HABILIDADES (Izquierda) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
        whileTap={{ scale: 0.95 }} 
        className="absolute left-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center border-2 border-[#6FB98F] bg-gray-900 px-0 py-0 rounded-md transition duration-75"
      >
        <button 
          className="cursor-pointer flex items-center gap-2 text-xl px-6 py-3 text-[#6FB98F] font-extrabold transition duration-75 hover:text-[#2C7873] drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]"
          onClick={() => setActiveSection("left")}
        >
          <FaBullseye className="text-white cursor-pointer" />Aprendizaje<FaArrowLeft className="text-white cursor-pointer" />
        </button>
      </motion.div>

      {/* PROYECTOS (Derecha) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
        whileTap={{ scale: 0.95 }} 
        className="absolute right-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center border-2 border-[#6FB98F] bg-gray-900 px-1 py-0 rounded-md transition duration-75"
      >
        <button 
          className="cursor-pointer flex items-center gap-2 text-xl px-6 py-3 text-[#6FB98F] font-extrabold transition duration-75 hover:text-[#2C7873] drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]"
          onClick={() => setActiveSection("right")}
        >
          <FaArrowRight className="text-white cursor-pointer" />Experiencia<FaLightbulb className="text-white cursor-pointer" /> 
        </button>
      </motion.div>

      {/* CONTACTO (Abajo) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
        whileTap={{ scale: 0.95 }} 
        className="absolute bottom-14 flex flex-col items-center border-2 border-[#6FB98F] bg-gray-900 px-1 py-0 rounded-md transition duration-75"
      >
        <button 
          className="cursor-pointer flex items-center gap-2 text-xl px-6 py-3 text-[#6FB98F] font-extrabold transition duration-75 hover:text-[#2C7873] drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]"
          onClick={() => setActiveSection("bottom")}
        >
          <FaEnvelopeOpenText className="text-white cursor-pointer" />Contáctame<FaArrowDown className="text-white cursor-pointer" />
        </button>
      </motion.div>

      {/* Contenido Principal */}
      {!activeSection && (
        <div className="relative z-10 max-w-4xl text-center">
      
          {/* Título con efecto de escritura */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-[#6FB98F]"
      >
        <span className="drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]">🚀</span>{" "}
        <span>
          <Typewriter
            words={["Hola Mundo! Soy"]}
            loop={1}
            cursor={cursorTitle}
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={50}
            onLoopDone={() => setCursorTitle(false)} // Mantiene el texto y oculta el cursor
          />
        </span>
        <br></br>
        <span>
          <Typewriter
            words={["David López"]}
            loop={1}
            cursor={cursorTitle}
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={50}
            onLoopDone={() => setCursorTitle(false)} // Mantiene el texto y oculta el cursor
          />
        </span>
      </motion.h1>

      {/* Subtítulo animado */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-2xl font-extrabold text-[#6FB98F] mt-4 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#6FB98F] after:mt-2 after:mx-auto drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]"
      >
        <span>
          <Typewriter
            words={["Full Stack Developer"]}
            loop={1}
            cursor={cursorSubtitle}
            cursorStyle="|"
            typeSpeed={100}
            onLoopDone={() => setCursorSubtitle(false)}
          />
        </span>
      </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4 }} 
            className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 font-normal"
          >
            Soy una inversión en crecimiento. Con experiencia en evolución, aporto valor, innovación y eficiencia a empresas y proyectos.
          </motion.p>


          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.6 }} 
            className="flex justify-center space-x-6 mt-6"
          >
            <motion.a 
              whileHover={{ scale: 1.3 }} 
              href="https://facebook.com" 
              target="_blank" 
              className="flex items-center gap-2 text-white font-extrabold transition duration-300 hover:text-[#2C7873]"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3 }} 
              href="https://instagram.com" 
              target="_blank" 
              className="flex items-center gap-2 text-white font-extrabold transition duration-300 hover:text-[#2C7873]"
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3 }} 
              href="https://youtube.com" 
              target="_blank" 
              className="flex items-center gap-2 text-white font-extrabold transition duration-300 hover:text-[#2C7873]"
            >
              <FaYoutube size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3 }} 
              href="https://github.com" 
              target="_blank" 
              className="flex items-center gap-2 text-white font-extrabold transition duration-300 hover:text-[#2C7873]"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3 }} 
              href="https://linkedin.com" 
              target="_blank" 
              className="flex items-center gap-2 text-white font-extrabold transition duration-300 hover:text-[#2C7873]"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3 }} 
              href="mailto:tuemail@gmail.com" 
              className="flex items-center gap-2 text-white font-extrabold transition duration-300 hover:text-[#2C7873]"
            >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3 }} 
              href="/cv.pdf" 
              target="_blank" 
              className="flex items-center gap-2 text-[#6FB98F] font-extrabold transition duration-300 hover:text-[#2C7873] drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]"
            >
              <FaFileAlt size={24} /> CV
            </motion.a>
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {activeSection && (
          <motion.div 
            key={activeSection} 
            initial={getAnimation(activeSection)} 
            animate={{ x: 0, y: 0, opacity: 1 }} 
            exit={getAnimation(activeSection)} 
            transition={transition} 
            className="absolute inset-0 flex items-center justify-center bg-blue-500 text-4xl font-extrabold"
          >
            {(() => {
              switch (activeSection) {
                case "top":
                  return <div className="w-full h-full bg-[#021c1E]"><About /></div>;
                case "left":
                  return <div className="w-full h-full bg-[#123456]"><Skills /></div>;
                case "right":
                  return <div className="w-full h-full bg-[#654321]"><Proyect /></div>;
                case "bottom":
                  return <div className="w-full h-full bg-[#abcdef]"><Contact /></div>;
                default:
                  return `Sección ${activeSection.toUpperCase()}`;
              }
            })()}
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              onClick={() => setActiveSection(null)} 
              className={`absolute ${getReturnButtonPosition(activeSection)} border-2 drop-shadow-[0_0_8px_rgba(111,185,143,0.5)] border-[#6FB98F] bg-transparent text-[#6FB98F] font-extrabold transition duration-300 hover:text-[#2C7873] hover:border-[#2C7873] px-3 py-3 rounded-lg text-xs flex items-center gap-5`}
            >
              VOLVER
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
