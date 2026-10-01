// Images réelles des projets (import Vite → URL résolue au build,
// ne jamais mettre un chemin string "src/assets/..." qui casserait au build).
import heroAmandine from "../assets/images/hero-amandine.webp";
import heroMateria from "../assets/images/hero-materia.webp";
import heroSunglases from "../assets/images/presta-signa-left.webp";
import heroClim from "../assets/images/presta-mono.webp";
import heroPhoto from "../assets/images/presta-multi-hero.webp";
import heroPaysagiste from "../assets/images/hero-paysagiste1.webp";
import heroNails from "../assets/images/hero-nails1.webp";
import heroSoudure from "../assets/images/hero-soudure.webp";
import heroDentiste from "../assets/images/hero-dentiste1.webp";
import movieSunglases from "../assets/movies/movie-sunglases.mp4";

// Concepts créatifs affichés sur /realisations. Ils illustrent les directions
// visuelles de MLD Studio sans être présentés comme de faux projets clients.
export const realisationsPageProjects = [
  {
    name: "Infirmière",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "68% 48%",
    image: heroAmandine,
    aspectRatio: "16 / 9",
    alt: "Site vitrine pour une infirmière à domicile conçu par MLD Studio",
    url: "https://www.amandine-gauthier.fr",
  },
  {
    name: "Materia",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroMateria,
    aspectRatio: "16 / 9",
    alt: "Concept de site signature pour une marbrerie haut de gamme conçu par MLD Studio",
    url: "https://materia-delta-jade.vercel.app/",
  },
  {
    name: "Paysagiste",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroPaysagiste,
    aspectRatio: "16 / 10",
    alt: "Concept de site vitrine pour un paysagiste conçu par MLD Studio",
    url: "https://paysagiste-theta.vercel.app/",
  },
  {
    name: "Sunglases",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 54%",
    image: heroSunglases,
    video: movieSunglases,
    aspectRatio: "16 / 9",
    alt: "Concept de site vitrine pour un opticien conçu par MLD Studio",
  },
  {
    name: "Snow Clim",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroClim,
    aspectRatio: "16 / 9",
    alt: "Concept de site vitrine pour un poseur de climatisation conçu par MLD Studio",
  },
  {
    name: "Nails",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroNails,
    aspectRatio: "16 / 10",
    alt: "Concept de site vitrine pour une prothésiste ongulaire conçu par MLD Studio",
    url: "https://nails-beta-gules.vercel.app/",
  },
  {
    name: "Soudure",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroSoudure,
    aspectRatio: "16 / 10",
    alt: "Concept de site vitrine pour un artisan soudeur conçu par MLD Studio",
    url: "https://denis-soudure.vercel.app/",
  },
  {
    name: "Dentiste",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 50%",
    image: heroDentiste,
    aspectRatio: "16 / 10",
    alt: "Concept de site vitrine pour un cabinet dentaire conçu par MLD Studio",
    url: "https://cabinet-dentaire-jade-chi.vercel.app/",
  },
];
