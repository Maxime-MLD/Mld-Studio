// Configuration centrale du SEO.
// Toutes les autres briques SEO (composant <SEO>, schémas JSON-LD) référencent
// cet objet. On ne duplique JAMAIS une valeur en dur ailleurs : on change ici.
export const siteConfig = {
  name: "MLD Dev",
  url: "https://mld-dev.com",
  description:
    "Création de sites vitrines pour artisans, restaurants et commerces à Roanne et dans la Loire.",
  locale: "fr_FR",
  ogImage: "/og/og-default.jpg",
  author: "Maxime Lagraa",
  email: "contact@mld-dev.com",
  phone: "+33662599771",
  address: {
    city: "Roanne",
    region: "Loire",
    postalCode: "42300",
    country: "FR",
  },
  geo: {
    latitude: 46.0339,
    longitude: 4.0689,
  },
  social: {
    linkedin: "https://www.linkedin.com/in/maxime-lagraa-4a4299386",
    instagram: "https://www.instagram.com/mld_developpement",
    google:
      "https://www.google.com/maps/place//data=!4m3!3m2!1s0x818e7c397bc4f969:0xab4357d73b8f262f!12e1",
  },
};

export default siteConfig;
