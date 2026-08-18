import { siteConfig } from "../siteConfig.js";

// URL absolue de l'image (les schémas exigent une URL complète).
const absoluteImage = siteConfig.ogImage.startsWith("http")
  ? siteConfig.ogImage
  : `${siteConfig.url}${siteConfig.ogImage}`;

/**
 * Schéma "service-area business".
 *
 * MLD Dev est un freelance qui travaille à domicile : il n'y a PAS de vitrine
 * ni d'adresse de rue à afficher. On modélise donc l'activité comme une
 * entreprise de zone de service :
 *   - PostalAddress SANS streetAddress (on garde seulement ville / région / CP)
 *   - areaServed listant les communes réellement couvertes
 * Cette combinaison (absence de streetAddress + areaServed) est le signal que
 * Google interprète comme un "service-area business" plutôt qu'un établissement
 * physique. C'est exactement ce qu'on veut pour un freelance à domicile.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteImage,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "€",
  address: {
    "@type": "PostalAddress",
    // Pas de streetAddress : travail à domicile, pas d'adresse publique.
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Roanne" },
    { "@type": "City", name: "Riorges" },
    { "@type": "City", name: "Mably" },
    { "@type": "City", name: "Le Coteau" },
    { "@type": "City", name: "Villerest" },
    { "@type": "City", name: "Charlieu" },
    { "@type": "AdministrativeArea", name: "Loire" },
  ],
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
    siteConfig.social.google,
  ],
};

export default localBusinessJsonLd;
