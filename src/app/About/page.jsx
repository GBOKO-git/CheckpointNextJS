import { MessageSquare, Rocket, Settings2, User } from "lucide-react";
import "../../Components/style.css"
const About = () => {
    return(
        <>
           <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-gradient-to-r from-indigo-100 via-blue-300 to-slate-100 min-h-screen h-auto" >
                
           <div className="flex justify-center">
            <img
                src="dev.png"
                alt="Portrait de Gboko"
                width={362}
                height={300}
                className="bg-amber-200 rounded-t-full hover:scale-105 transition-transform duration-500 shadow-lg"
            />
         </div>


                <div className=" grid gap-3 md:mr-12 text-l">
                
                    <div>
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <User size={28} className="text-indigo-600" />
                        Mon profil
                    </h1>

                        <p className="text-justify">
                        Doté d’une solide expertise aussi bien en frontend qu’en backend, je construis des applications robustes, scalables et centrées sur l’utilisateur.
                        J'aime transformer des idées en produits concrets et fonctionnels, avec un souci constant de performance, de sécurité et de maintenabilité.
                        </p>
                        
                    </div>
                    <div>
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <Settings2 size={26} className="text-blue-600" />
                        Technologies que j’utilise
                    </h1>
                        <ul className="text-justify">
                            <li>Frontend : React, Next.js, Tailwind CSS, TypeScript, Bootstrap</li>
                            <li>Backend : Node.js, Express, MongoDB, Mongoose, SQL</li>
                            <li>Outils & DevOps : Git, GitHub, Render, Vercel, Netlify</li>
                            <li>Méthodologies : Agile</li>
                        </ul>
                    </div>
                    <div>
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <Rocket size={26} className="text-red-500" />
                        Ce que je propose
                    </h1>

                        <ul className="text-justify">
                            <li>Développement complet d’applications web</li>
                            <li>Intégration d’API et services tiers</li>
                            <li>Maintenance et évolution de projets existants</li>
                            <li>Collaboration fluide avec les équipes produit, design et technique</li>
                        </ul>
                    </div>
                    <div>
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <MessageSquare size={26} className="text-purple-600" />
                        Un mot personnel
                    </h1>

                        <p className="text-justify">
                        Curieux, rigoureux et toujours en veille technologique, je suis motivé par l’envie de créer des expériences numériques utiles et élégantes.
                        Je crois que le code est un moyen de résoudre des problèmes humains, et j'aime collaborer sur des projets qui ont du sens.
                        </p>
                    </div>
                </div>
           </div>
    </>
    );
}
export default About;