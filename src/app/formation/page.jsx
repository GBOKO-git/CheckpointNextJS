// "use client"

import { Bricolage_Grotesque } from "next/font/google";
import { formations, contact, methode, faq } from "@/data/formation";

// Police des titres (chargée au build, aucune requête externe côté visiteur)
const titreFont = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

// SEO de la page
export const metadata = {
  title: "Formations en développement web pour débutants",
  description:
    "4 formations pour débutants complets : bases du web, back-end, front-end et full stack. Séances de 2 h : théorie et pratique.",
  openGraph: {
    title: "Formations en développement web pour débutants",
    description: "Choisis ta formation en 1, 2 ou 3 mois et inscris-toi en ligne.",
    type: "website",
    locale: "fr_FR",
  },
};

/* ---------- Classes réutilisées (clair / sombre automatique) ---------- */
const FOCUS =
  "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0B1020] dark:focus-visible:outline-[#FFF8EE]";
const BORDURE = "border-2 border-[#0B1020] dark:border-[#FFF8EE]";
const OMBRE = "shadow-[5px_5px_0_0_#0B1020] dark:shadow-[5px_5px_0_0_#FFF8EE]";
const SURFACE = "bg-white dark:bg-[#151B33]";
const DISCRET = "text-[#4A5068] dark:text-[#B4B9CE]";
const TITRE = `${titreFont.className} font-extrabold tracking-tight`;
const BOUTON = `inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center font-bold ${BORDURE} ${OMBRE} motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 ${FOCUS}`;

/* ---------- Composants ---------- */

/** Bloc de page : titre + introduction + contenu */
function Section({ id, titre, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-titre`} className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <h2 id={`${id}-titre`} className={`${TITRE} text-3xl sm:text-5xl`}>{titre}</h2>
      {intro && <p className={`mt-3 max-w-[60ch] text-lg ${DISCRET}`}>{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

/** Bouton de paiement : nouvel onglet + rel="noopener noreferrer" */
function BoutonPaiement({ formation: f }) {
  return (
    <a
      href={f.paiement}
      target="_blank"
      rel="noopener noreferrer"
      className={BOUTON}
      style={{ backgroundColor: f.accent, color: f.surAccent }}
    >
      S’inscrire et payer
      <span className="sr-only"> : {f.titre} (s’ouvre dans un nouvel onglet)</span>
    </a>
  );
}

/** Carte d’une formation */
function CarteFormation({ formation: f }) {
  return (
    <article id={`formation-${f.id}`} className={`flex scroll-mt-6 flex-col overflow-hidden rounded-3xl ${BORDURE} ${OMBRE} ${SURFACE}`}>
      {/* Bande de la couleur de la formation */}
      <div className="h-4" style={{ backgroundColor: f.accent }} aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <span
            className={`inline-block rounded-full px-3 py-0.5 text-sm font-bold ${BORDURE}`}
            style={{ backgroundColor: f.accent, color: f.surAccent }}
          >
            {f.duree}
          </span>
          <h3 className={`${TITRE} mt-3 text-2xl sm:text-3xl`}>{f.titre}</h3>
          <p className={`mt-1 ${DISCRET}`}>
            {f.niveau} · <strong className="text-[#0B1020] dark:text-[#FFF8EE]">{f.prix}</strong>
          </p>
          <p className={`mt-1 text-sm ${DISCRET}`}>Début : {f.debut}</p>
        </div>

        <div>
          <h4 className="font-bold">Pour qui ?</h4>
          <p className={`mt-1 ${DISCRET}`}>{f.pourQui}</p>
        </div>

        <div>
          <h4 className="font-bold">À la fin, tu sauras</h4>
          <ul className="mt-2 space-y-2">
            {f.apresFormation.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${BORDURE}`}
                  style={{ backgroundColor: f.accent, color: f.surAccent }}
                >
                  <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-2">
          <BoutonPaiement formation={f} />
        </div>
      </div>
    </article>
  );
}

/** Tableau comparatif (défile à l’horizontale sur téléphone) */
function Tableau() {
  const lignes = [
    ["Durée", "duree"],
    ["Contenu", "contenu"],
    ["Objectif", "objectif"],
    ["Prix", "prix"],
  ];
  return (
    <div
      className={`overflow-x-auto rounded-2xl ${BORDURE} ${SURFACE} ${FOCUS}`}
      tabIndex={0}
      role="region"
      aria-label="Tableau comparatif des formations"
    >
      <table className="w-full min-w-[44rem] border-collapse text-left">
        <caption className="sr-only">Comparaison des 4 formations : durée, contenu, objectif et prix</caption>
        <thead>
          <tr>
            <td className={`sticky left-0 ${SURFACE}`} />
            {formations.map((f) => (
              <th key={f.id} scope="col" className={`${TITRE} p-4 align-bottom text-lg`} style={{ borderTop: `8px solid ${f.accent}` }}>
                {f.titre}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map(([label, cle]) => (
            <tr key={cle} className="border-t-2 border-[#0B1020]/20 dark:border-[#FFF8EE]/20">
              <th scope="row" className={`sticky left-0 p-4 font-bold ${SURFACE}`}>{label}</th>
              {formations.map((f) => (
                <td key={f.id} className={`p-4 align-top ${DISCRET}`}>{f[cle]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Page ---------- */

export default function PageFormation() {
  const etapes = [
    ["Je choisis", "Je compare les formations et je prends celle qui me correspond."],
    ["Je paie", "Je clique sur « S’inscrire et payer » et je règle sur la page de paiement."],
    ["Je reçois le plan détaillé", "Le programme séance par séance arrive après mon inscription."],
    ["On démarre ensemble", "Tout le monde commence par le même tronc commun : le mois 1."],
  ];

  return (
    <main className="min-h-screen bg-[#FFF8EE] text-[#0B1020] dark:bg-[#0B1020] dark:text-[#FFF8EE]">
      {/* 1. En-tête */}
      <header className="mx-auto w-full max-w-6xl px-5 pb-6 pt-14 sm:px-8 sm:pt-24">
        <h1 className={`${TITRE} max-w-[20ch] text-5xl leading-[1.02] sm:text-7xl`}>
          Apprends à coder, même si tu pars de zéro.
        </h1>
        <p className={`mt-5 max-w-[60ch] text-lg sm:text-xl ${DISCRET}`}>
          Quatre formations en développement web pour les débutants complets. <br /> Tu pars du même point que tout le monde, puis tu choisis jusqu’où aller.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Aller à une formation">
          {formations.map((f) => (
            <li key={f.id} >
              <a
                href={`#formation-${f.id}`}
                className={`inline-flex min-h-11 items-center rounded-full px-4 font-bold ${BORDURE} ${FOCUS}`}
                style={{ backgroundColor: f.accent, color: f.surAccent }}
              >
                {f.titre}, {f.duree}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* 2. Ma méthode */}
      <Section
        id="methode"
        titre="Ma méthode"
        intro={`Chaque séance dure ${methode.total}. On comprend d’abord, puis on construit.`}
      >
        <div className={`flex h-24 overflow-hidden rounded-2xl text-center font-bold sm:h-28 ${BORDURE}`} role="img" aria-label={`${methode.theorie} de théorie puis ${methode.pratique} de pratique avec un mini-projet`}>
          <div className="flex flex-1 flex-col items-center justify-center bg-[#0B1020] px-2 text-[#FFF8EE] dark:bg-[#FFF8EE] dark:text-[#0B1020]">
            <span className={`${TITRE} text-2xl sm:text-3xl`}>{methode.theorie}</span>
            <span className="text-sm sm:text-base">Théorie</span>
          </div>
          <div className={`flex flex-[3] flex-col items-center justify-center px-2 ${SURFACE}`}>
            <span className={`${TITRE} text-2xl sm:text-3xl`}>{methode.pratique}</span>
            <span className="text-sm sm:text-base">Pratique avec un mini-projet</span>
          </div>
        </div>
      </Section>

      {/* 3. Les 4 formations */}
      <Section id="formations" titre="Choisis ta formation" intro="Les quatre parcours démarrent ensemble avec le même mois 1.">
        <div className="grid gap-8 md:grid-cols-2">
          {formations.map((f) => (
            <CarteFormation key={f.id} formation={f} />
          ))}
        </div>
      </Section>

      {/* 4. Tableau comparatif */}
      <Section id="comparatif" titre="Les formations côte à côte">
        <Tableau />
      </Section>

      {/* 5. Comment ça marche */}
      <Section id="fonctionnement" titre="Comment ça marche">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map(([titre, texte], i) => (
            <li key={titre} className={`rounded-2xl p-5 ${BORDURE} ${SURFACE}`}>
              <span aria-hidden="true" className={`${TITRE} flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1020] text-lg text-[#FFF8EE] dark:bg-[#FFF8EE] dark:text-[#0B1020]`}>
                {i + 1}
              </span>
              <h3 className={`${TITRE} mt-3 text-xl`}>{titre}</h3>
              <p className={`mt-1 ${DISCRET}`}>{texte}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. FAQ (balises <details> : accessibles au clavier, sans JavaScript) */}
      <Section id="faq" titre="Questions fréquentes">
        <div className="max-w-3xl space-y-3">
          {faq.map((item) => (
            <details key={item.q} className={`group rounded-2xl ${BORDURE} ${SURFACE}`}>
              <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 text-lg font-bold [&::-webkit-details-marker]:hidden ${FOCUS}`}>
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="shrink-0 motion-safe:transition-transform group-open:rotate-45">
                  <path d="M10 3v14M3 10h14" />
                </svg>
              </summary>
              <p className={`px-5 pb-5 ${DISCRET}`}>{item.r}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* 7. Contact */}
      <Section id="contact" titre="Une question ? Écris-moi">
        <div className="rounded-3xl bg-[#0B1020] p-6 text-[#FFF8EE] dark:bg-[#FFF8EE] dark:text-[#0B1020] sm:p-10">
          <p className="max-w-[44ch] text-lg">Je réponds volontiers avant que tu choisisses ta formation.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#14C38E] px-5 py-3 font-bold text-[#0B1020] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#FFC21A]"
            >
              Écrire sur WhatsApp
              <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
            </a>
            <a
              href="/Contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-current px-5 py-3 font-bold focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#FFC21A]"
            >
              Envoyer un e-mail
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">
            {contact.whatsappAffiche} · {contact.email}
          </p>
        </div>
      </Section>
    </main>
  );
}