
/**
 * ============================================================
 *  DONNÉES DE LA PAGE /formation
 *  Remplace tout ce qui contient « REMPLACE-MOI » ou « XX ».
 *  Tu n’as pas besoin de toucher à page.jsx.
 * ============================================================
 */

/** Contact : WhatsApp et e-mail */
export const contact = {
  // Numéro au format international, sans « + » ni espaces (ex. 33612345678)
  whatsapp: "0758019243",
  whatsappAffiche: "+225 07 58 01 92 43",
  email: "gboko.fullstack@gmail.com",
};

/** Méthode d’une séance */
export const methode = { total: "2 h", theorie: "30 min", pratique: "1 h 30" };

/**
 * Les 4 formations.
 * - paiement : lien de la page de paiement (s’ouvre dans un nouvel onglet)
 * - accent / surAccent : couleur de la formation et couleur du texte posé dessus
 */
export const formations = [
  {
    id: "bases",
    titre: "Bases du web",
    duree: "1 mois",
    niveau: "Débutant complet",
    prix: "50 000 FCFA",
    debut: "juste après inscription",
    paiement: "https://my.moneyfusion.net/6acd3d0f1aa364bdc7b694ca",
    accent: "#FFC21A",
    surAccent: "#0B1020",
    pourQui:
      "Pour toi qui n’as jamais codé et qui veux comprendre comment fonctionne un site web, ou essayer avant de choisir un parcours.",
    apresFormation: [
      "Utiliser le terminal, VS Code et GitHub",
      "Créer une page avec HTML, CSS et JavaScript",
      "Mettre ton premier mini-projet en ligne",
    ],
    contenu: "Terminal, VS Code, Git/GitHub, HTML, CSS, JavaScript",
    objectif: "Publier un premier site",
  },
  {
    id: "backend",
    titre: "Développeur back-end",
    duree: "2 mois",
    niveau: "Débutant complet",
    prix: "100 000 FCFA",
    debut: "Apres inscription",
    paiement: "https://my.moneyfusion.net/6acdf5ef1aa364bdc7c3bab2", 
    accent: "#14C38E",
    surAccent: "#0B1020",
    pourQui:
      "Pour toi qui aimes la logique et les données, et qui veux savoir comment une application stocke, protège et envoie l’information.",
    apresFormation: [
      "Créer une API REST avec Node.js et Express",
      "Stocker des données et gérer les connexions",
      "Déployer ton serveur en ligne",
    ],
    contenu:
      "Mois 1 + Node.js, Express, API REST, base de données, authentification, sécurité de base, déploiement",
    objectif: "Créer et déployer une API",
  },
  {
    id: "frontend",
    titre: "Développeur front-end",
    duree: "2 mois",
    niveau: "Débutant complet",
    prix: "100 000 FCFA",
    debut: "Après inscription",
    paiement: "https://my.moneyfusion.net/6acdf72a1aa364bdc7c3ec8e",
    accent: "#FF4D8D",
    surAccent: "#0B1020",
    pourQui:
      "Pour toi qui aimes le visuel et les interfaces, et qui veux créer des sites modernes, rapides et agréables à utiliser.",
    apresFormation: [
      "Construire une interface avec React",
      "Afficher des données venues d’une API",
      "Rendre ton site accessible et rapide",
    ],
    contenu:
      "Mois 1 + JavaScript avancé, appels API, React, accessibilité, performance, déploiement",
    objectif: "Créer une application React en ligne",
  },
  {
    id: "fullstack",
    titre: "Développeur full stack",
    duree: "3 mois",
    niveau: "Débutant complet",
    prix: "150 000 FCFA",
    debut: "Après inscription",
    paiement: "https://my.moneyfusion.net/6acdf8911aa364bdc7c42fd6",
    accent: "#7C4DFF",
    surAccent: "#FFFFFF",
    pourQui:
      "Pour toi qui veux le parcours le plus complet, travailler en équipe et sortir avec un vrai portfolio à montrer.",
    apresFormation: [
      "Construire une application complète, serveur et interface",
      "Travailler en équipe avec Git et GitHub",
      "Présenter tes projets dans ton portfolio",
    ],
    contenu:
      "Mois 1 + back-end + front-end, avec un projet complet en équipe et un portfolio",
    objectif: "Livrer un projet complet et un portfolio",
  },
];

/** FAQ : adapte les réponses à ta réalité */
export const faq = [
  {
    q: "Ai-je besoin d’un ordinateur ?",
    r: "Oui, un ordinateur portable est nécessaire pour pratiquer pendant les séances. Il n’a pas besoin d’être puissant.",
  },
  {
    q: "Quel niveau faut-il avoir ?",
    r: "Aucun. Les formations sont pensées pour les débutants complets : il faut seulement de la curiosité et l’envie de pratiquer.",
  },
  {
    q: "Combien de temps dure une séance ?",
    r: "Deux heures : 30 minutes de théorie pour comprendre, puis 1 h 30 de pratique avec un mini-projet.",
  },
  {
    q: "Comment se passe le paiement ?",
    r: "Tu cliques sur « S’inscrire et payer » sur la formation de ton choix. Tu es redirigé vers sa page de paiement, puis tu reçois le plan détaillé.",
  },
  {
    q: "En quoi consiste le projet final ?",
    r: "Tu construis et tu mets en ligne un vrai projet : un site pour les Bases, une API ou une application pour les parcours suivants, et un projet complet en équipe avec portfolio pour le full stack.",
  },
];