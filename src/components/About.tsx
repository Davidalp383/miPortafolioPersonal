'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#021c1E] text-white flex justify-center items-center min-h-screen p-4 relative">
      {/* Fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo2.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-[#021c1E] opacity-75"></div>

      <div className="max-w-3xl w-full flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="w-full flex items-center"
        >
          {/* Foto de perfil */}
          <div className="w-1/3 flex justify-center">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              className=" drop-shadow-[0_0_8px_rgba(111,185,143,0.5)] -w-32 h-42s bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center -ml-16 mt-28  border-4 border-[#6FB98F]"
            >
              <Image
                src="/foto.png"
                alt="Profile Picture"
                width={228}
                height={228}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          {/* Información personal */}
          <div className="w-2/3 text-left">
            <h2 className="text-4xl font-extrabold mt-1 text-center"> <span className="text-4x font-extrabold text-[#6FB98F] drop-shadow-[0_0_8px_rgba(111,185,143,0.5)] text-center">DavidaLp</span> - David Alejandro Lopez Sanchez</h2>
            <p className="text-gray-300 font-bold mt-1 text-lg text-center">
              En constante <span className="text-[#78D6C6]">evolución</span>, apasionado por la <span className="text-[#78D6C6]">tecnología</span> y la creación de <span className="text-[#78D6C6]">soluciones innovadoras</span>. Persistente ante los <span className="text-[#78D6C6]">desafíos</span>, con una mentalidad <span className="text-[#78D6C6]">analítica</span> y una <span className="text-[#78D6C6]">creatividad</span> que impulsa la <span className="text-[#78D6C6]">resolución de problemas</span>. Siempre en busca de mejorar mis <span className="text-[#78D6C6]">habilidades</span> y explorar nuevas <span className="text-[#78D6C6]">herramientas</span> para construir <span className="text-[#78D6C6]">aplicaciones eficientes</span> y <span className="text-[#78D6C6]">escalables</span>.
            </p>


          </div>
        </motion.div>

        {/* Sección de estadísticas */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-fit grid grid-cols-3 gap-4 -mr-52 mb-20 -mt-11 text-center"
        >
          <div className="bg-gray-900 border-2 border-[#78D6C6] text-[#78D6C6] p-4 rounded-lg drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]">
            <p className="text-2xl font-bold">0</p>
            <p className="text-xl text-gray-400">Proyectos</p>
          </div>
          <div className="bg-gray-900 border-2 border-[#78D6C6] text-[#78D6C6] p-4 rounded-lg drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]">
            <p className="text-2xl font-bold">0</p>
            <p className="text-gray-400 text-xl">Certificates</p>
          </div>
          <div className="flex gap-3 flex-col w-36">

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 -mr-14 border-[#78D6C6] text-[#78D6C6] px-4 py-2 rounded-lg font-bold text-lg bg-transparent transition  hover:text-[#2C7873]"
              >
                Download CV
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 -mr-14 border-[#78D6C6] text-[#78D6C6] px-4 py-2 rounded-lg font-bold text-sm bg-transparent transition  hover:text-[#2C7873]"
              >
                View Projects
              </motion.button>
            </div>
        </motion.div>
      </div>
      <div className="relative right-6 top-40 transform -translate-y-1/2 text-center ml-12 ">
  <h3 className="text-3xl font-extrabold text-[#6FB98F] -ml-2 mb-6 border-b-2  border-[#78D6C6] drop-shadow-[0_0_8px_rgba(111,185,143,0.5)]">Mi cultura Personal</h3>
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.7 }}
    className="w-fit grid grid-cols-1 gap-3 ml-2 text-center mb-2"
  >
    <div className="bg-gray-900 p-2 border-2 border-[#78D6C6] bg-transparent rounded-lg">
      <p className="text-sm font-bold">Disfruto una vida activa siempre</p>
    </div>
    <div className="bg-gray-900 p-2 rounded-lg border-2 border-[#78D6C6] bg-transparent">
      <p className="text-sm font-bold">Me encanta leer constantemente</p>
    </div>
    <div className="bg-gray-900 p-2 rounded-lg border-2 border-[#78D6C6] bg-transparent">
      <p className="text-sm font-bold">Creo contenido digital auténtico</p>
    </div>
    <div className="bg-gray-900 p-2 rounded-lg border-2 border-[#78D6C6] bg-transparent">
      <p className="text-sm font-bold">Me apasiona la guitarra y el piano</p>
    </div>
    <div className="bg-gray-900 p-2 rounded-lg border-2 border-[#78D6C6] bg-transparent">
      <p className="text-sm font-bold">Amo aprender idiomas diversos</p>
    </div>
  </motion.div>
      </div>
    </div>
  );
}
