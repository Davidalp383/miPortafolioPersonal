"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0a192f] via-[#102a42] to-[#0f4c75] text-gray-300 py-8 px-6 text-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between"
      >
        
        {/* Texto de Derechos */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="text-[#48cae4] font-semibold">David Alejandro</span>. Todos los derechos reservados.
        </p>

        {/* Redes Sociales */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/" className="text-[#00b4d8] hover:text-[#0077b6] text-2xl transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" className="text-[#00b4d8] hover:text-[#0077b6] text-2xl transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" className="text-[#00b4d8] hover:text-[#0077b6] text-2xl transition duration-300">
            <FaTwitter />
          </a>
          <a href="mailto:tucorreo@gmail.com" className="text-[#00b4d8] hover:text-[#0077b6] text-2xl transition duration-300">
            <FaEnvelope />
          </a>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
