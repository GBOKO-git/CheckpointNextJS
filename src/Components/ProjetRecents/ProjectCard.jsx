"use client";

import Link from "next/link";
import { useState } from "react";

const newProjects = [
  {
    name: "AZshop",
    image: "/azshop.png",
    status: "Déployé",
    title: "Site e-commerce de produits vivriers ivoiriens",
    link: "https://e-commerce-azshop.vercel.app/",
    description:
      "    Bienvenue sur AZshop, ma toute première application e-commerce développée dans le cadre de mon apprentissage du développement web fullstack. Ce projet combine à la fois un frontend moderne et un backend robuste pour offrir une expérience utilisateur fluide et complète.",
    details:
      "Le site permet aux utilisateurs de découvrir, rechercher et acheter des denrées locales telles que le manioc, le riz local, le gombo, ou encore le poisson fumé. Grâce à une interface moderne et intuitive, les utilisateurs peuvent facilement naviguer entre les catégories, gérer leur panier, créer un compte, et passer commande en toute sécurité.",
    technologies:
      "Next.js, Tailwind CSS, Redux, MongoDB et Express",
  },
  {
    name: "AEEY",
    image: "/aeey.png",
    status: "En production",
    title: "Association des Eleves et Etudiants de Yaokro ",
    link: "#",
    description:
      "L’Association des Élèves et Étudiants de Yaokro (AEEY) est un cadre de rassemblement, de solidarité et de développement pour les jeunes de Yaokro engagés dans des études secondaires et supérieures.",
    details:
      "L’AEEY est une organisation estudiantine dynamique regroupant les élèves et étudiants originaires de Yaokro. Elle a pour mission de promouvoir la solidarité, l’excellence académique, le développement personnel et l'engagement communautaire de ses membres à travers des activités culturelles, éducatives et sociales. Notre association est un cadre d'entraide, de partage et de valorisation de notre identité, où chaque membre trouve soutien et inspiration pour réussir son parcours scolaire et universitaire.",
    technologies:
      "Next.js, Tailwind CSS, Redux, MongoDB et Express.",
  },
];

const NewProject = () => {
  const [showModal, setShowModal] = useState(null);
  return (
    <>
      {newProjects.map((project, index) => (
        <div
        id="newProjet"
          key={index}
          className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 grid scroll-offset"
        >
          <a href="#">
            <img
              className="rounded-t-lg w-full h-auto"
              src={project.image}
              alt={project.name}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.title}
            </p>
            <button
              onClick={() => setShowModal(project)}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              description
            </button>
          </div>
        </div>
      ))}

      {showModal && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="null"
          className=" flex fixed inset-0 bg-slate-100/90 bg-opacity-50  top-0 right-0 left-0 z-100 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {showModal.name}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    onClick={() => setShowModal(null)}
                    className="w-3 h-3"
                    aria-hidden="null"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                  {showModal.description}
                </p>
                <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                  {showModal.details}
                </p>
                <p className=" leading-relaxed text-gray-800 dark:text-gray-400 font-serif font-bold">
                  {showModal.technologies}
                </p>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <div>
                  <Link
                    href={showModal.link}
                    target="_blank"
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Voir le projet
                  </Link>
                  <button
                    onClick={() => setShowModal(null)}
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Decliner
                  </button>
                </div>
                <div>
                  <button className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    {showModal.status}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProject;
