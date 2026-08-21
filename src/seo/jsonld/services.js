import { siteConfig } from "../siteConfig.js";

const definitions = [
  ["Site vitrine monopage", "1000", "Création d'un site vitrine monopage moderne, responsive, rapide et préparé pour le référencement."],
  ["Site vitrine multipage", "1500", "Création d'un site vitrine de deux à six pages avec architecture SEO et design sur mesure."],
  ["Site vitrine signature", "2500", "Création d'une expérience web premium avec direction artistique et animations sur mesure."],
  ["Optimisation de fiche Google Business", "200", "Création ou optimisation d'une fiche Google Business pour les entreprises qui respectent les règles d'éligibilité de Google."],
  ["Maintenance et hébergement", "39", "Maintenance, hébergement et jusqu'à trois demandes de modification par mois."],
];

export const servicesJsonLd = definitions.map(([name, price, description], index) => ({
  "@type": "Service",
  "@id": `${siteConfig.url}/#service-${index + 1}`,
  name,
  description,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: { "@type": "Country", name: "France" },
  offers: {
    "@type": "Offer",
    price,
    priceCurrency: "EUR",
    url: `${siteConfig.url}/#services`,
  },
}));

export default servicesJsonLd;
