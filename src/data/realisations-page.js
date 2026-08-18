import { projects } from "./realisations.js";

// Projets affichés sur la page /realisations UNIQUEMENT.
// On reprend les 3 projets de la section Réalisations de la home (sans toucher
// à leur source), auxquels on ajoute un lien externe à renseigner, puis on
// ajoute 2 projets propres à cette page avec des placeholders clairs à remplir.
export const realisationsPageProjects = [
  // Les 3 projets de la home + un lien vers le site en ligne (à renseigner :
  // la donnée d'origine n'en contient pas).
  ...projects.map((project) => ({ ...project, url: "[URL_SITE]" })),

  // --- Projets ajoutés uniquement sur cette page (à compléter) ---
  {
    name: "Nails",
    services: ["[SECTEUR]"],
    year: "2026",
    imagePosition: "50% 50%",
    image: "../assets/hero-paysagiste.png", // remplacer par le visuel du projet
    url: "[URL_SITE]",
  },
  {
    name: "PAYSAGISTE",
    services: ["[SECTEUR]"],
    year: "2026",
    imagePosition: "50% 50%",
    image: "/assets/placeholder-projet.jpg", // remplacer par le visuel du projet
    url: "[URL_SITE]",
  },
];
