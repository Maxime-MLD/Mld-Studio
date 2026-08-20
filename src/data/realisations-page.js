// Images réelles des projets (import Vite → URL résolue au build,
// ne jamais mettre un chemin string "src/assets/..." qui casserait au build).
import heroPaysagiste from "../assets/images/hero-paysagiste1.webp";
import heroNails from "../assets/images/hero-nails1.webp";
import heroDentiste from "../assets/images/hero-dentiste1.webp";
import heroSoudure from "../assets/images/hero-soudure.webp";

// Projets affichés sur la page /realisations UNIQUEMENT.
// 3 vrais projets clients (avec leur visuel + alt SEO) + 2 cartes placeholder
// à compléter plus tard. Le même visuel sert au fond et au premier plan
// (le composant utilise le champ `image` aux deux endroits).
export const realisationsPageProjects = [
  {
    name: "Paysagiste",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroPaysagiste,
    alt: "Site vitrine pour paysagiste",
    url: "[URL_SITE]",
  },
  {
    name: "Nails",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroNails,
    alt: "Site vitrine pour onglerie",
    url: "[URL_SITE]",
  },
  {
    name: "Dentiste",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroDentiste,
    alt: "Site vitrine pour cabinet dentaire",
    url: "[URL_SITE]",
  },

  // --- 2 projets placeholder à compléter (image, nom, secteur, lien) ---
  {
    name: "Denis Soudure",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroSoudure,
    url: "[URL_SITE]",
  },
  {
    name: "[TITRE_PROJET]",
    services: ["[SECTEUR]"],
    year: "2026",
    imagePosition: "50% 50%",
    url: "[URL_SITE]",
  },
];
