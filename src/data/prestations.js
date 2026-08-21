import prestaMono from "../assets/images/presta-mono.webp";
import prestaMonoService from "../assets/images/presta-mono-service.webp";
import prestaMonoContact from "../assets/images/presta-mono-contact.webp";
import prestaMultiHero from "../assets/images/presta-multi-hero.webp";
import prestaMultiPort from "../assets/images/presta-multi-port.webp";
import prestaMultiAbout from "../assets/images/presta-multi-about.webp";
import prestaSignature from "../assets/images/presta-signature.webp";
import prestaGoogle from "../assets/images/presta-google.webp";
import prestaMaintenance from "../assets/images/presta-maintenance.webp";
// Images de démonstration pour le carrousel « Site vitrine multipage »
// (à remplacer par vos 3 vrais visuels multipage, idéalement au même ratio).
import heroPaysagiste from "../assets/images/hero-paysagiste1.webp";
import heroDentiste from "../assets/images/hero-dentiste1.webp";
import prestaLeft from "../assets/images/presta-signa-left.webp";
import prestaMid from "../assets/images/presta-signa-mid.webp";
import prestaRight from "../assets/images/presta-signa-right.webp";

// Prestations affichées dans la section Prestations (accordéon).

export const services = [
  {
    title: "Site vitrine monopage",
    priceLabel: "À partir de",
    price: "1 000 € TTC",
    description: [
      "Une page unique, moderne et structurée pour présenter votre activité, vos services et transformer rapidement les visiteurs en demandes de contact.",
      "Le site est responsive, rapide et préparé pour le SEO local afin que vos futurs clients vous trouvent facilement dans votre zone.",
    ],
    image: prestaMono,
    // Carrousel de 3 images pour la prestation monopage.
    images: [prestaMono, prestaMonoService, prestaMonoContact],
    imagePosition: "48% 50%",
  },
  {
    title: "Site vitrine multipage",
    priceLabel: "À partir de",
    price: "1 500 € TTC",
    description: [
      "Un site moderne composé d’une page principale et de 1 à 5 pages supplémentaires pour organiser clairement votre activité : prestations, réalisations, à propos ou contact.",
      "La navigation, la vitesse, le responsive et les bases du SEO local sont travaillés ensemble pour informer, rassurer et être trouvé localement.",
    ],
    image: prestaMultiHero,
    // Carrousel de 3 images (uniquement sur cette prestation).
    images: [prestaMultiHero, prestaMultiPort, prestaMultiAbout],
    imagePosition: "64% 48%",
  },
  {
    title: "Site vitrine signature",
    priceLabel: "À partir de",
    price: "2 500 € TTC",
    description: [
      "Une expérience web haut de gamme de 1 à 5 pages, conçue après une recherche approfondie de votre activité, de vos clients et de votre univers visuel.",
      "Design exclusif, animations premium et interactions sur mesure : un site que personne d’autre n’aura, rapide, responsive et pensé pour mettre votre savoir-faire en valeur tout en renforçant votre visibilité locale.",
    ],
    image: prestaSignature,
    // Carrousel de 3 images (uniquement sur cette prestation).
    images: [prestaLeft, prestaMid, prestaRight],
    imagePosition: "50% 56%",
  },
  {
    title: "Fiche Google Business",
    priceLabel: "Tarif",
    price: "200 € TTC",
    description: [
      "Création et optimisation de votre fiche Google avec les bonnes catégories, vos services, vos coordonnées, votre zone d’intervention et une présentation claire, uniquement si votre activité respecte les règles d’éligibilité de Google.",
      "Une base complète pour apparaître plus efficacement dans Google Maps et dans les recherches locales liées à votre activité.",
    ],
    image: prestaGoogle,
    imagePosition: "34% 52%",
  },
  {
    title: "Maintenance & hébergement",
    priceLabel: "Abonnement",
    price: "39 € TTC / mois",
    description: [
      "Hébergement, surveillance technique et maintenance courante pour conserver un site rapide, disponible et correctement mis à jour.",
      "Jusqu’à trois demandes de modification par mois, d’une heure maximum chacune, pour changer vos textes ou images et importer de nouveaux visuels.",
    ],
    image: prestaMaintenance,
    imagePosition: "72% 50%",
  },
];
