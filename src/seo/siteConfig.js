// Configuration centrale du SEO.
// Toutes les autres briques SEO (composant <SEO>, schémas JSON-LD) référencent
// cet objet. On ne duplique JAMAIS une valeur en dur ailleurs : on change ici.
export const siteConfig = {
  name: "MLD Studio",
  legalName: "MLD Dev",
  url: "https://www.mld-studio.fr",
  description:
    "Création de sites internet modernes, rapides et sur mesure à Roanne, dans la Loire et partout en France.",
  locale: "fr_FR",
  ogImage: "/og-mld.jpg",
  ogImageAlt: "MLD Studio, création de sites internet à Roanne",
  author: "Maxime Lagraa",
  email: "contact@mld-studio.fr",
  phone: "+33662599771",
  phoneDisplay: "06 62 59 97 71",
  openingHours: "Du lundi au vendredi, de 9 h à 19 h",
  address: {
    city: "Roanne",
    region: "Loire",
    postalCode: "42300",
    country: "FR",
  },
  areaServed: [
    "Roanne",
    "Mably",
    "Le Coteau",
    "Riorges",
    "Villerest",
    "Charlieu",
    "Loire",
    "France",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/maxime-lagraa-4a4299386",
    instagram: "https://www.instagram.com/mld_developpement",
    googleBusiness: "https://share.google/luhyZV8ugrB2EXf48",
  },
};

export default siteConfig;
