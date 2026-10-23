// Grille tarifaire affichée dans la section Prix (offres + tableau comparatif).
export const pricingPlans = [
  {
    name: "Monopage",
    description:
      "Un site monopage moderne, clair et prêt à présenter votre activité.",
    price: "500 € ou 59 €/mois",
    suffix: "TTC",
  },
  {
    name: "Multipage",
    description:
      "Plus d’espace pour détailler vos services et développer votre visibilité.",
    price: "990 € ou 99€/mois",
    suffix: "TTC",
  },
  {
    name: "Signature",
    description:
      "Une expérience premium, direction artistique poussée, animations avancées, sections et interactions personnalisées.",
    price: "1490 € ou 149 €/mois",
    suffix: "TTC",
  },
];

export const pricingFeatures = [
  { label: "Format du site", values: ["Monopage", "Multipage", "Sur mesure"] },
  {
    label: "Nombre de pages",
    values: ["1 page", "1 à 5 pages", "1 à 5 pages"],
  },
  { label: "Design moderne", values: ["Inclus", "Inclus", "Inclus"] },
  {
    label: "Recherche créative",
    values: ["Essentielle", "Personnalisée", "Direction complète"],
    info: "Analyse de votre activité, de vos clients et recherche d’une direction visuelle adaptée.",
  },
  { label: "Responsive", values: ["Inclus", "Inclus", "Inclus"] },
  { label: "Performance", values: ["Optimisée", "Optimisée", "Avancée"] },
  {
    label: "SEO local",
    values: ["Bases incluses", "Bases incluses", "Avancé"],
    info: "Structure, balises et contenu préparés pour renforcer votre visibilité dans votre zone.",
  },
  { label: "Animations", values: ["Fluides", "Avancées", "Premium"] },
  {
    label: "Délai indicatif",
    values: ["1–2 semaines", "2–4 semaines", "4–6 semaines"],
  },
  {
    label: "Fiche Google Business",
    values: ["+ 99 € TTC", "+ 99 € TTC", "+ 99 € TTC"],
  },
  {
    label: "Maintenance & hébergement",
    values: ["Inclus", "Inclus", "Inclus"],
  },
];
