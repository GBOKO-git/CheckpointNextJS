

# 🧩 Tâche de Contrôle : Construire un Site Web de Portfolio avec Next.js
https://my-next-portfolio-pi.vercel.app/

## 📝 Description de la Tâche

Votre mission est de créer un site web de **portfolio** en utilisant **Next.js**. Ce site devra présenter vos **compétences**, **projets** et **informations de contact**. Il devra intégrer :

- Un design stylisé (via CSS Modules, Tailwind CSS ou autre)
- Des images (photos de profil, projets, etc.)
- Le routage basé sur les fichiers (pages)
- Le rendu côté serveur (SSR)
- Le déploiement sur une plateforme d'hébergement

---

## 🚀 Instructions

### 1. Mise en route avec Next.js

- Initialisez un nouveau projet Next.js avec `create-next-app` ou configurez-le manuellement.
- Assurez-vous que la **structure du projet** est bien organisée :
  - Dossier `pages` pour le routage
  - Dossier `components` pour les composants réutilisables
  - Dossier `styles` pour les fichiers de style

### 2. Styliser les Composants et Afficher les Images

- Utilisez **CSS Modules**, **Tailwind CSS**, ou tout autre système de style de votre choix.
- Intégrez des **images de vos projets**, une **photo de profil**, ou toute image pertinente :
  - Avec le composant `Image` de Next.js (`next/image`)
  - Ou avec la balise HTML standard `<img>`

### 3. Routage par Page avec Next.js

- Créez des **pages dédiées** pour chaque section du portfolio :
  - `Accueil` (`/`)
  - `À propos` (`/about`)
  - `Projets` (`/projects`)
  - `Contact` (`/contact`)
- Implémentez le **routage basé sur les fichiers**, système intégré à Next.js via le dossier `pages`.

---

## ☁️ Déploiement

- Déployez votre site sur une plateforme comme :
  - [Vercel](https://vercel.com)  
  - [Netlify](https://www.netlify.com)
  - [Render](https://render.com)

---

Si tu veux, je peux aussi t’aider à ajouter une section “Fonctionnalités”, “Tech Stack”, ou même un exemple de structure de dossier. Tu veux qu’on pousse ça un peu plus ?


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
