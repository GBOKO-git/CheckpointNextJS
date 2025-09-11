
// import { SharedButton } from "@/Components/SharedButton";
// import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

//  const HomePage = () => {
//   return (
//     <>
//       <div className="min-h-dvh bg-gray-900/100 flex text-white justify-center items-center px-4 ">
//         <div className="max-w-4xl text-center space-y-6  ">
//           <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold  leading-tight tracking-tight">
//             AMARA GBOKO <br /> ANZOUMANAN
//           </h1>

          
//           <h2 className="text-2xl md:text-3xl text-blue-800 font-semibold">
//             DEVELOPPEUR FULL STACK JUNIOR
//          </h2>


        

//           <p className=" max-w-xl mx-auto font-serif">
//             Passionné par la création de solutions web complètes,
//             de l’interface utilisateur à la gestion des données côté serveur.
//           </p>

//           <div className="flex justify-center gap-6 text-blue-700 text-lg">
//             <a
//               href="https://github.com/GBOKO-git"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-black transition"
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="http://www.linkedin.com/in/gboko-amara/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-black transition"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-black transition"
//             >
//               <Instagram size={24} />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-black transition"
//             >
//               <Twitter size={24} />
//             </a>
//           </div>

//           <a href="#newProjet" role="button">
//             <SharedButton name="Mes projets recents" />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

"use client";
import { SharedButton } from "@/Components/SharedButton";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HomePage = () => {
const words = [
  "PASSIONNÉ PAR LE WEB ET LE MOBILE",
  "CRÉATEUR DE SOLUTIONS INTELLIGENTES",
  "INNOVATION ET PERFORMANCE",
  "EXPÉRIENCE UTILISATEUR OPTIMALE",
  "APPRENTISSAGE CONTINU ET ADAPTATION",
  "CODE PROPRE ET MAINTENABLE",
  "TRANSFORMATION DIGITALE PAR LE CODE",
  "PROTOTYPAGE RAPIDE DE PROJETS",
  "INTÉGRATION FRONT-END / BACK-END",
];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(words[index].slice(0, i + 1));
      i++;
      if (i === words[index].length) {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          setText("");
        }, 2000);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="min-h-dvh flex justify-center items-center px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl text-center space-y-6">
        <motion.h1
          className="text-2xl md:text-5xl lg:text-7xl font-extrabold font-serif leading-tight tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AMARA GBOKO <br /> ANZOUMANAN
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-blue-400 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          DEVELOPPEUR FULL STACK JUNIOR
        </motion.h2>
        <motion.h6
          className="text-sm md:text-md text-blue-400 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {text}
        </motion.h6>

        <motion.p
          className="max-w-xl mx-auto font-serif text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Développeur full stack passionné, je crée des applications web performantes et élégantes,
          du design de l’interface à la gestion efficace des données côté serveur.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 text-blue-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[{
            href: "https://github.com/GBOKO-git",
            icon: <Github size={24} />
          },{
            href: "http://www.linkedin.com/in/gboko-amara/",
            icon: <Linkedin size={24} />
          },{
            href: "https://instagram.com",
            icon: <Instagram size={24} />
          },{
            href: "https://twitter.com",
            icon: <Twitter size={24} />
          }].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a href="#newProjet" role="button">
            <SharedButton
              name="Mes projets récents"
              className="transition-transform transform hover:scale-105 duration-300"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
