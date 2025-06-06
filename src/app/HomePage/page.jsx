
import { SharedButton } from "@/Components/SharedButton";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

 const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900/100 flex text-white justify-center items-center px-4 md:mt-15 mt-7">
        <div className="max-w-4xl text-center space-y-6  ">
          <h1 className="text-5xl md:text-7xl font-extrabold  leading-tight tracking-tight">
            AMARA GBOKO <br /> ANZOUMANAN
          </h1>

          
          <h2 className="text-2xl md:text-3xl text-blue-800 font-semibold">
            Full Stack Developer
         </h2>


        

          <p className=" max-w-xl mx-auto font-serif">
            Passionné par la création de solutions web complètes,
            de l’interface utilisateur à la gestion des données côté serveur.
          </p>

          <div className="flex justify-center gap-6 text-blue-700 text-lg">
            <a
              href="https://github.com/GBOKO-git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <Github size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/gboko-amara/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <Twitter size={24} />
            </a>
          </div>

          <a href="#newProjet" role="button">
            <SharedButton name="Mes projets recents" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;

