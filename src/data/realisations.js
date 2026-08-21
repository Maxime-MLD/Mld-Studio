// Projets présentés dans la diapo des réalisations (section Realisations).
import heroSunglases from "../assets/images/presta-signa-mid.webp";
import heroClim from "../assets/images/presta-mono.webp";
import heroPhoto from "../assets/images/presta-multi-hero.webp";
import movieSunglases from "../assets/movies/movie-sunglases.mp4";

export const projects = [
  {
    name: "Sunglases",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "50% 54%",
    image: heroSunglases,
    video: movieSunglases,
    aspectRatio: "16 / 9",
    alt: "Concept de site vitrine pour opticien conçu par MLD Studio",
  },
  {
    name: "Snow Clim",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "68% 48%",
    image: heroClim,
    aspectRatio: "16 / 9",
    alt: "Concept de site vitrine pour un poseur de climatisation conçu par MLD Studio",
  },
  {
    name: "Fashion",
    services: ["SEO", "Design", "Développement"],
    year: "2026",
    imagePosition: "34% 56%",
    image: heroPhoto,
    aspectRatio: "16 / 9",
    alt: "Concept de site vitrine pour une photographe conçu par MLD Studio",
  },
];
