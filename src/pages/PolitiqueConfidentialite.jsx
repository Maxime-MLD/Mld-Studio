import LegalPage from "./LegalPage.jsx";

// Route /politique-confidentialite : rend la page légale combinée (mentions +
// confidentialité), avec sa propre balise <title> et sa canonical.
export default function PolitiqueConfidentialite() {
  return (
    <LegalPage
      seoTitle="Politique de confidentialité"
      path="/politique-confidentialite"
    />
  );
}
