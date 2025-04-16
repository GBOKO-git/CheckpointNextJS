import ProjectList from "./ProjectList"

const projects = [
    {
        name:"🔢 Application Web de Tri de Nombres",
        description:"Ce projet est une application web dédiée à la gestion du tri de nombres en ordre croissant. Elle permet de classer facilement une série de nombres du plus petit au plus grand. Ce type de tri est essentiel pour analyser des données numériques, comparer des valeurs ou préparer des calculs plus complexes. ",
        technologie:"Tailwind Css",
        imgUrl: "/classeur.png",
        projectUrl:"https://insertion-sort-algocom.vercel.app/",
    },
    {
        name:"💻 Premier projet avec Tailwind CSS",
        description:"Ce site est mon tout premier projet réalisé avec Tailwind CSS, un framework de classes utilitaires qui permet de construire des interfaces modernes rapidement et efficacement. L’objectif était de me familiariser avec les bases de Tailwind, le responsive design, et la structuration d’un site web simple.",
        technologie:"HTML, Tailwind Css",
        imgUrl: "tailwind.png",
        projectUrl:"https://pratice-tailwindcss-two.vercel.app/",
    },
    {
        name:"🛒 Site E-commerce Vitrine ",
        description:"Ce projet est une maquette de site e-commerce réalisée dans le cadre d’un checkpoint d’évaluation. L’objectif était de créer un site vitrine moderne et responsive en utilisant HTML, CSS et le framework Bootstrap.",
        technologie:"bootstrap, html, javacript",
        imgUrl: "/ecomerce.png",
        projectUrl:"https://gboko-git.github.io/boutique_e-commerce/",
    },
    {
        name:"📁 Site Portfolio – Checkpoint ",
        description:"Ce site portfolio a été réalisé dans le cadre d’un checkpoint d’évaluation en HTML et CSS. L’objectif de ce projet était de mettre en pratique les bases du développement web en créant une page personnelle structurée, responsive et visuellement claire.",
        technologie:"HTML & CSS",
        imgUrl: "/portfolio1.png",
        projectUrl:"https://html-css-chekpoint.vercel.app/#home",
    },
    {
        name:"✈️ Air CI Travel Agency",
        description:"Ce site est un espace non-officiel dédié à Air Côte d’Ivoire, la compagnie aérienne nationale qui connecte la Côte d’Ivoire au reste du continent africain et au monde. Ce site vise à partager des informations, des photos, et des ressources utiles autour de la compagnie, de ses vols.",
        technologie:"Html, bootstrap ",
        imgUrl: "/airci.png",
        projectUrl:"https://gboko-git.github.io/WebsiteTravelAgency/",
    },
    {
        name:"💼 Site Portfolio – Simplon",
        description:"Ce site portfolio a été réalisé dans le cadre du test de sélection pour intégrer la formation de développeur web proposée par Simplon.co. Il présente mon parcours, mes motivations, ainsi qu’un aperçu de mes premières compétences techniques en HTML, CSS et Tailwind CSS.",
        technologie:"HTML, CSS, JAVASCRIPT",
        imgUrl: "/simplon.png",
        projectUrl:"https://portfolio-simplon.vercel.app/",
    },
    {
        name:"🚀 Portfolio - formation GoMyCode",
        description:"Ce site portfolio a été conçu dans le cadre de ma formation chez GoMyCode, avec pour objectif de présenter mes compétences techniques et projets réalisés. Il reflète mon évolution en développement web et sert de vitrine professionnelle pour me positionner sur le marché du travail.",
        technologie:"HTMJ, TAILWIND CSS, JAVASCRIPT ",
        imgUrl: "/portfolio.png",
        projectUrl:"https://portfolio-gomycode-profil-n89l5m6ml-gbokos-projects.vercel.app/",
    },
    {
        name:"🎨 Change Color ",
        description:"Ce projet est une application web simple et interactive permettant de changer dynamiquement la couleur de fond d'une page en un clic. Développée dans le cadre d’un checkpoint pratique de formation.",
        technologie:"HTML, CSS et JavaScript",
        imgUrl:"/colorChange.png",
        projectUrl:"https://changecolorcom.vercel.app/",
    },
    {
        name:"Application Météo",
        description:"L'application météo permet à l'utilisateur de consulter les conditions météorologiques actuelles d'une ville donnée. L'application récupère les données météorologiques à partir de l'API OpenWeatherMap et les affiche dynamiquement dans le navigateur.",
        technologie:"HTML, CSS, JAVASCRIPT",
        imgUrl: "/meteo.png",
        projectUrl:"https://meteo-network-requests-java-script.vercel.app/",
    },
    {
        name:"portfolio express",
        description:"Ce projet est une application web simple développée avec **Express.js**. Un middleware personnalisé vérifie que la requête est faite durant les heures de travail. Si ce n'est pas le cas, l'utilisateur reçoit un message lui indiquant que l'application est fermée.",
        technologie:"NODE.js, EXPRESS, HTML, CSS, ES6",
        imgUrl: "/express.png",
        projectUrl:"https://express-checkpoint-theta.vercel.app/",
    },
    {
        name:"Panier d'achat",
        description:"Ce projet met en œuvre un système de panier d'achat en utilisant les principes de programmation orientée objet (POO). L’objectif est de structurer les données et les actions associées à un panier en ligne, comme on pourrait le retrouver sur un site e-commerce.",
        technologie:"HTML, BOOTSTRAP, JAVASCRIPT, CSS",
        imgUrl: "/panier.png",
        projectUrl:"https://dom-checkpoint-panier.vercel.app/",
    },
    {
        name:"AVIF",
        description:"Collaboration: projet de groupe d'etudiants. Une application front-end basée sur React construite avec des technologies Web modernes, axée sur la fourniture d'une interface utilisateur réactive et interactive.Mise place pour l’autonomisation, la valorisation et l’insertion des femmes.",
        technologie:"React, TypeScript,Tailwind CSS, vite, React Router DOM, Lucide React, Motion ",
        imgUrl: "/avif.png",
        projectUrl:"https://avif-three.vercel.app/acceuil",
    },
    
   
]

 const Projects = () => {
    return(
        <>
            <ProjectList projects={projects}/>
        </>
    )
}
export default Projects