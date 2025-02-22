"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#102a42] to-[#0f4c75] text-white px-6 py-20">
      
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-[#48cae4] mb-12"
      >
        Contáctame<span className="text-[#90e0ef]"> 📩</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-[#102a42] bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Tu Nombre" 
            className="px-4 py-3 bg-[#0a192f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
          />
          <input 
            type="email" 
            placeholder="Tu Correo" 
            className="px-4 py-3 bg-[#0a192f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
          />
          <textarea 
            placeholder="Tu Mensaje" 
            rows={5} 
            className="px-4 py-3 bg-[#0a192f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#00b4d8] hover:bg-[#0077b6] text-white font-bold rounded-lg transition duration-300"
          >
            Enviar Mensaje 🚀
          </motion.button>
        </form>
      </motion.div>

      {/* Redes Sociales */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex gap-6 mt-8"
      >
        <a href="https://github.com/" className="text-[#00b4d8] hover:text-[#0077b6] text-3xl transition duration-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" className="text-[#00b4d8] hover:text-[#0077b6] text-3xl transition duration-300">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" className="text-[#00b4d8] hover:text-[#0077b6] text-3xl transition duration-300">
          <FaTwitter />
        </a>
        <a href="mailto:tucorreo@gmail.com" className="text-[#00b4d8] hover:text-[#0077b6] text-3xl transition duration-300">
          <FaEnvelope />
        </a>
      </motion.div>

    </section>
  );
};

export default Contact;
