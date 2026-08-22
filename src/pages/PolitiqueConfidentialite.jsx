import LegalPage, { LegalBlock } from "./LegalPage.jsx";
import { faqLegalItems } from "../data/faq-legal.js";

// Page /politique-confidentialite : RGPD, données du formulaire, destinataires,
// conservation, cookies, droits. Contenu distinct des mentions légales.
export default function PolitiqueConfidentialite() {
  return (
    <LegalPage
      seoTitle="Politique de confidentialité"
      seoDescription="Politique de confidentialité de MLD Studio : données collectées via le formulaire, finalité, conservation et droits RGPD."
      path="/politique-confidentialite"
      heroLines={["Politique de", "confidentialité."]}
      heroSub="Comment nous collectons, utilisons et protégeons vos données."
      faqItems={faqLegalItems}
      faqTitleLines={["Vos données,", "vos droits."]}
      otherPage={{ path: "/mentions-legales", label: "Mentions légales" }}
    >
      <LegalBlock num="01" title="Responsable du traitement">
        <p>
          Maxime Lagraa (MLD Dev / MLD Studio). Contact :{" "}
          <a href="mailto:contact@mld-studio.fr">contact@mld-studio.fr</a>.
        </p>
      </LegalBlock>

      <LegalBlock num="02" title="Données collectées">
        <p>
          Les seules données collectées le sont via le formulaire de contact :
        </p>
        <ul>
          <li>nom ;</li>
          <li>adresse email ;</li>
          <li>service recherché ;</li>
          <li>message.</li>
        </ul>
        <p>Aucune autre donnée n’est recueillie.</p>
      </LegalBlock>

      <LegalBlock num="03" title="Finalité & base légale">
        <p>
          Ces données servent uniquement à étudier votre demande, vous répondre
          et, si vous le souhaitez, préparer une proposition commerciale. Elles
          ne sont utilisées à aucune autre fin.
        </p>
        <p>
          Le traitement est nécessaire à l’exécution de mesures
          précontractuelles prises à votre demande.
        </p>
      </LegalBlock>

      <LegalBlock num="04" title="Destinataire des données">
        <p>
          L’éditeur du site est le destinataire des messages. Le formulaire
          passe par une fonction sécurisée hébergée chez Vercel, puis
          l’acheminement technique est assuré par Web3Forms vers l’adresse de
          réception de MLD Studio. La clé d’accès au service n’est jamais exposée
          dans le navigateur.
        </p>
      </LegalBlock>

      <LegalBlock num="05" title="Durée de conservation">
        <p>
          Les messages sont conservés pendant le temps nécessaire au traitement
          de la demande et au suivi de la relation commerciale, puis supprimés
          lorsqu’ils ne sont plus utiles.
        </p>
      </LegalBlock>

      <LegalBlock num="06" title="Cookies & suivi">
        <p>
          Ce site n’utilise aucun cookie de suivi, aucun outil d’analyse
          d’audience (analytics) et aucune publicité. Votre navigation n’est pas
          tracée.
        </p>
      </LegalBlock>

      <LegalBlock num="07" title="Vos droits (RGPD)">
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification, de suppression et d’opposition sur vos données. Ces
          droits s’exercent par email à{" "}
          <a href="mailto:contact@mld-studio.fr">contact@mld-studio.fr</a>.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la CNIL —{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            www.cnil.fr
          </a>
          .
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
