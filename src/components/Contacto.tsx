"use client";

import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaTiktok, FaFacebook } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-screen text-white p-4 bg-[#021c1E] overflow-hidden">
      {/* Fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo2.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-[#021c1E] opacity-75"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-auto max-h-[90vh] px-6 z-10 overflow-y-auto">
        {/* Formulario de contacto */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-6 rounded-xl shadow-xl w-full mt-12 md:w-1/2 max-w-md border border-[#78D6C6]"
        >
          <h2 className="text-2xl font-bold text-[#6FB98F]">Get in Touch</h2>
          <p className="text-gray-300 text-sm mb-4">Send me a message.</p>

          <div className="flex items-center bg-[#222] p-3 rounded-lg mb-4 border border-[#78D6C6]">
            <FaUser className="text-gray-400 mr-2 text-lg" />
            <input type="text" placeholder="Your Name" className="bg-transparent outline-none text-white w-full text-sm" />
          </div>

          <div className="flex items-center bg-[#222] p-3 rounded-lg mb-4 border border-[#78D6C6]">
            <FaEnvelope className="text-gray-400 mr-2 text-lg" />
            <input type="email" placeholder="Your Email" className="bg-transparent outline-none text-white w-full text-sm" />
          </div>

          <div className="bg-[#222] p-3 rounded-lg mb-4 border border-[#78D6C6]">
            <textarea placeholder="Your Message" className="bg-transparent outline-none text-white w-full h-20 text-sm"></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" flex justify-center w-full border text-xl border-[#78D6C6] text-[#78D6C6] px-3 py-2 rounded-lg font-bold bg-transparent hover:text-[#2C7873]"
          >
            <FaPaperPlane className="mr-2 text-xl" /> Send
          </motion.button>
        </motion.div>

        {/* Redes sociales */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-900 p-6 rounded-xl shadow-xl w-full md:w-1/3 max-w-sm mt-4 md:mt-0 md:ml-6 border border-[#78D6C6]"
        >
          <h2 className="text-2xl font-bold text-[#6FB98F]">Connect</h2>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaTiktok, FaFacebook].map((Icon, index) => (
              <motion.a 
                key={index} 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center bg-[#222] p-3 rounded-lg border border-[#78D6C6] hover:bg-[#6FB98F] transition-all"
              >
                <Icon className="text-lg" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
