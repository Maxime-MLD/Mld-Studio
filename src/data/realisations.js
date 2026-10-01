// Projets présentés dans la diapo des réalisations (section Realisations).
import heroAmandine from "../assets/images/hero-amandine.webp";
import heroMateria from "../assets/images/hero-materia.webp";
import heroPaysagiste from "../assets/images/hero-paysagiste1.webp";
// import movieSunglases from "../assets/movies/movie-sunglases.mp4";

export const projects = [
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
];
