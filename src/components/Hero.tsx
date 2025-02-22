"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin, FaEnvelope, FaUser, FaBullseye, FaLightbulb, FaEnvelopeOpenText } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo.jpg')" }}
      ></div>

      {/* Fondo semitransparente */}
      <div className="absolute inset-0 bg-[#021c1E] opacity-80"></div>

      {/* Botón Superior */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-16 flex flex-col items-center z-10"
      >
        <a
          href="/about"
          className="flex items-center gap-2 text-xl px-6 py-3 text-[#6FB98F] font-bold transition duration-300 hover:border-b-2 hover:border-[#6FB98F] hover:text-[#6FB98F] hover:scale-105"
        >
          <FaUser className="text-white"/> ACERCA DE MI
        </a>
      </motion.div>

      {/* Botón Izquierdo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10"
      >
        <a
          href="/skills"
          className="flex items-center gap-2 text-xl px-6 py-3 text-[#6FB98F] font-bold transition duration-300 hover:border-b-2 hover:border-[#6FB98F] hover:text-[#6FB98F] hover:scale-105"
        >
          <FaBullseye className="text-white"/> HABILIDADES
        </a>
      </motion.div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#6FB98F]"
        >
          🚀 Hola mundo!<br /> Soy <span className="text-[#2C7873]">David López</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-2xl font-bold text-[#6FB98F] mt-4 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#6FB98F] after:mt-2 after:mx-auto"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mt-4"
        >
          Soy una inversión en crecimiento. Con experiencia en evolución, aporto valor, innovación y eficiencia a empresas y proyectos.
        </motion.p>

      {/* Redes Sociales */}
      <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center space-x-6 mt-6"
        >
          <motion.a whileHover={{ scale: 1.1, color: "#6FB98F" }} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, color: "#6FB98F" }} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, color: "#6FB98F" }} href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, color: "#6FB98F" }} href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, color: "#6FB98F" }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, color: "#6FB98F" }} href="mailto:tuemail@gmail.com">
            <FaEnvelope size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Botón Derecho */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10"
      >
        <a
          href="/projects"
          className="flex items-center gap-2 text-xl px-6 py-3 text-[#6FB98F] font-bold transition duration-300 hover:border-b-2 hover:border-[#6FB98F] hover:text-[#6FB98F] hover:scale-105"
        >
          <FaLightbulb className="text-white"/> PROYECTOS
        </a>
      </motion.div>

      {/* Botón Inferior */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-16 flex flex-col items-center z-10"
      >
        <a
          href="/contact"
          className="flex items-center gap-2 px-6 py-3 text-xl text-[#6FB98F] font-bold transition duration-300 hover:border-b-2 hover:border-[#6FB98F] hover:text-[#6FB98F] hover:scale-105"
        >
          <FaEnvelopeOpenText  className="text-white"/> CONTACTAME
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
