import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaAngular, FaVuejs, FaRust, FaPhp,
  FaSwift, FaLaravel, FaDocker, FaAws, FaGitAlt
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiVite, SiMongodb, SiDocker, SiGraphql,
  SiPostgresql, SiMysql, SiFirebase, SiRedux, SiKotlin, SiFlutter,
  SiGo, SiTensorflow, SiPytorch, SiNextdotjs, SiSvelte
} from "react-icons/si";


import { Exo } from 'next/font/google';

const exo = Exo({ subsets: ['latin'], weight: ['400','700','800'] });

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("tech");
  const [expanded, setExpanded] = useState(false);

  const techStack = [
    { name: "ReactJS", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-700 text-4xl" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-4xl" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600 text-4xl" /> },
    { name: "VueJS", icon: <FaVuejs className="text-green-500 text-4xl" /> },
    { name: "Rust", icon: <FaRust className="text-gray-600 text-4xl" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500 text-4xl" /> },
    { name: "Swift", icon: <FaSwift className="text-orange-500 text-4xl" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-4xl" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-4xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600 text-4xl" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-blue-400 text-4xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-4xl" /> },
    { name: "Go", icon: <SiGo className="text-blue-500 text-4xl" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-4xl" /> },
    { name: "PyTorch", icon: <SiPytorch className="text-red-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200 text-4xl" /> },
    { name: "Svelte", icon: <SiSvelte className="text-orange-500 text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  ];

  const certificates = [
    { name: "AWS Certified", icon: "☁️", image: "/aws.png" },
    { name: "Google Cloud", icon: "🌎", image: "/googlecloud.png" },
    { name: "Scrum Master", icon: "📋", image: "/scrum.png" },
    { name: "Python for Data Science", icon: "🐍", image: "/python.png" },
    { name: "Full-Stack Web Dev", icon: "💻", image: "/fullstack.png" },
    { name: "MongoDB Certification", icon: "🌳", image: "/mongodb.png" },
    { name: "Agile Project Management", icon: "📊", image: "/agile.png" },
    { name: "Docker Certified", icon: "🐳", image: "/docker.png" },
  ];

  const studies = [
    { name: "Computer Science Degree", icon: "🎓", image: "/csdegree.png" },
    { name: "Software Engineering", icon: "🖥️", image: "/softwareeng.png" },
    { name: "Data Science Bootcamp", icon: "📊", image: "/datascience.png" },
    { name: "Cybersecurity Fundamentals", icon: "🔒", image: "/cybersecurity.png" },
  ];

  const items = activeTab === "tech" ? techStack : activeTab === "cert" ? certificates : studies;
  const itemsPerRow = activeTab === "tech" ? 5 : 3;
  const visibleItems = expanded ? items : items.slice(0, itemsPerRow);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#021c1E] text-white py-8 px-4 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo2.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-[#021c1E] opacity-75"></div>

      <div className={`max-w-4xl text-center relative z-10 ${exo.className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }} // Aparece después del título
        className="text-gray-300 mt-2 text-lg font-bold"
      >
        <h2 className="text-4xl text-[#6FB98F] font-extrabold">Conoce mis Habilidades y Estudios</h2>
        <p className="text-gray-300 mt-2 text-lg font-bold">
          Explora mi trayectoria a través de <span className="text-[#78D6C6]">habilidades técnicas</span>,  
          <span className="text-[#78D6C6]">certificaciones</span> y <span className="text-[#78D6C6]">estudios</span>.
        </p>
        </motion.div>
      </div>

    
      <div className="flex justify-center mt-6 space-x-4 relative z-10">
        <button onClick={() => setActiveTab("tech")} className={`px-6 py-3 border-2 border-[#78D6C6] rounded-lg text-lg font-semibold transition-all ${activeTab === "tech" ? "bg-[#6FB98F] scale-105 text-black" : "bg-transparent text-white"}`}>Tech Stack</button>
        <button onClick={() => setActiveTab("cert")} className={`px-6 py-3 border-2 border-[#78D6C6] rounded-lg text-lg font-semibold transition-all ${activeTab === "cert" ? "bg-[#6FB98F] scale-105 text-black" : "bg-transparent text-white"}`}>Certifications</button>
        <button onClick={() => setActiveTab("studies")} className={`px-6 py-3 border-2 border-[#78D6C6] rounded-lg text-lg font-semibold transition-all ${activeTab === "studies" ? "bg-[#6FB98F] scale-105 text-black" : "bg-transparent text-white"}`}>Studies</button>
      </div>

      <div className="max-w-4xl w-full mt-8 transition-all duration-500 rounded-lg relative z-10 custom-scroll overflow-y-auto">
      <AnimatePresence>
        <motion.div layout className={`grid ${activeTab === "tech" ? "grid-cols-2 md:grid-cols-5" : "grid-cols-2 md:grid-cols-3"} gap-4 p-4`}>
            {visibleItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`rounded-lg flex flex-col items-center justify-center shadow-xl border-2 border-gray-400 text-white ${
                  activeTab === "tech" ? "bg-gray-900 p-6 w-32 h-32 md:w-36 md:h-36" : "bg-gray-900 p-4 w-56 h-40 md:w-64 md:h-48"
                }`}
              >
                {activeTab === "tech" ? (
                  <div>
                    <span className="text-4xl md:text-5xl">{item.icon}</span>
                    <p className={`mt-2 text-lg font-semibold text-center ${exo.className}`}>{item.name}</p>
                  </div>
                ) : (
                  <div>
                    <img src={item.image} alt={item.name} className="w-24 h-16 md:w-28 md:h-20 object-contain" />
                    <p className={`mt-2 text-lg font-semibold text-center ${exo.className}`}>{item.name}</p>
                  </div>
                )}
              </motion.div>
            ))}
        </motion.div>
        </AnimatePresence>
      </div>

      {items.length > itemsPerRow && (
        <div className="text-center mt-6 relative z-10">
          <button onClick={() => setExpanded(!expanded)} className="px-8 py-3 text-lg font-semibold border-2 border-[#78D6C6] rounded-lg bg-gray-900 hover:bg-[#5FA783] hover:text-black text-white transition-all">
            {expanded ? "Ver menos" : "Ver más"}
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
