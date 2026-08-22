import LegalPage, { LegalBlock } from "./LegalPage.jsx";

// Page /mentions-legales : identité de l'entreprise, éditeur, hébergeur,
// propriété intellectuelle. Contenu distinct de la politique de confidentialité.
export default function MentionsLegales() {
  return (
    <LegalPage
      seoTitle="Mentions légales"
      seoDescription="Mentions légales de MLD Studio : éditeur du site, hébergeur et propriété intellectuelle."
      path="/mentions-legales"
      heroLines={["Mentions", "légales."]}
      heroSub="Éditeur, hébergeur et informations légales du site MLD Studio."
      otherPage={{
        path: "/politique-confidentialite",
        label: "Politique de confidentialité",
      }}
    >
      <LegalBlock num="01" title="Éditeur du site">
        <p>
          Maxime Lagraa — Entrepreneur individuel, profession libérale non
          réglementée. Nom légal : MLD Dev. Nom public : MLD Studio.
        </p>
        <p>
          SIRET : 848&nbsp;799&nbsp;029&nbsp;00022. TVA non applicable,
          article&nbsp;293&nbsp;B du CGI (franchise en base).
        </p>
        <p>
          Contact :{" "}
          <a href="mailto:contact@mld-studio.fr">contact@mld-studio.fr</a> —{" "}
          <a href="tel:+33662599771">06 62 59 97 71</a>.
        </p>
        <p>
          Adresse : 41&nbsp;Chemin de Villevert, 42720&nbsp;Vougy (activité
          exercée à domicile).
        </p>
      </LegalBlock>

      <LegalBlock num="02" title="Directeur de la publication">
        <p>Maxime Lagraa.</p>
      </LegalBlock>

      <LegalBlock num="03" title="Hébergeur">
        <p>
          Vercel Inc., 340&nbsp;S&nbsp;Lemon&nbsp;Ave&nbsp;#4133, Walnut,
          CA&nbsp;91789, USA —{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
          .
        </p>
      </LegalBlock>

      <LegalBlock num="04" title="Propriété intellectuelle">
        <p>
          L’ensemble du contenu et du code de ce site est la propriété de
          l’éditeur. Toute reproduction, représentation ou réutilisation, totale
          ou partielle, est interdite sans autorisation préalable écrite.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
