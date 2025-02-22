"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#0D1117] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Imagen */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.png"
            alt="Desarrollador Full Stack"
            className="w-64 h-64 rounded-full border-4 border-green-400 shadow-lg"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-400">Sobre Mí</h2>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Soy un <span className="text-blue-400 font-semibold">Desarrollador Full Stack</span> apasionado por la 
            creación de aplicaciones web eficientes, escalables e innovadoras. Me especializo en tecnologías modernas
            como <span className="text-green-400 font-semibold">React, Next.js, Node.js y TypeScript</span>, combinando 
            <span className="text-blue-400 font-semibold"> frontend y backend</span> para crear experiencias impactantes.
          </p>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Mi enfoque se basa en la <span className="text-green-400 font-semibold">arquitectura limpia</span>, el 
            <span className="text-blue-400 font-semibold"> rendimiento óptimo</span> y la <span className="text-green-400 font-semibold">seguridad</span>. 
            Siempre busco mejorar mis habilidades y enfrentar nuevos retos tecnológicos.
          </p>

          {/* Tecnologías */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-blue-400">Stack Tecnológico</h3>
            <div className="mt-3 flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">JavaScript</span>
              <span className="px-4 py-2 bg-green-600 text-white rounded-lg">Node.js</span>
              <span className="px-4 py-2 bg-blue-400 text-white rounded-lg">React</span>
              <span className="px-4 py-2 bg-gray-700 text-white rounded-lg">Next.js</span>
              <span className="px-4 py-2 bg-yellow-500 text-white rounded-lg">TypeScript</span>
              <span className="px-4 py-2 bg-purple-500 text-white rounded-lg">MongoDB</span>
              <span className="px-4 py-2 bg-red-500 text-white rounded-lg">PostgreSQL</span>
            </div>
          </div>

          {/* Botón Contacto */}
          <div className="mt-8">
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-semibold bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all"
            >
              Contáctame
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
