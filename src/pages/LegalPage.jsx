import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import Noise from "../components/Noise.jsx";
import Faq from "../components/sections/Faq.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import { faqLegalItems } from "../data/faq-legal.js";
import "./LegalPage.css";

// Page légale combinée (mentions légales + confidentialité).
// Réutilise STRICTEMENT le système visuel du site :
//   - <Noise> pour le grain sur la bande sombre (même composant que Contact) ;
//   - la ligne verticale centrale + l'effet cascade + la grille titre/texte,
//     via LegalPage.css qui calque .faq-section / .contact-section ;
//   - le composant <Faq> existant, alimenté avec des questions légales.
// `seoTitle` / `path` permettent à chaque route (/mentions-legales et
// /politique-confidentialite) d'avoir sa propre balise <title> et sa canonical.
export default function LegalPage({ seoTitle, path }) {
  return (
    <>
      <SEO title={seoTitle} path={path} noindex={true} />

      <main className="legal-page">
        {/* Bande sombre : titre de page + grain (même base que la section Contact). */}
        <section className="legal-hero">
          <Noise className="noise-behind" opacity={0.11} />

          <div className="legal-hero-inner">
            <p className="legal-hero-eyebrow">Informations légales</p>
            <h1 className="legal-hero-title">
              <span>Mentions légales</span>
              <span>&amp; confidentialité</span>
            </h1>
            <p className="legal-hero-sub">
              Comment nous collectons, utilisons et protégeons vos données.
            </p>
            <p className="legal-hero-date">Dernière mise à jour : 18 août 2026</p>
          </div>
        </section>

        {/* Corps clair : ligne verticale centrale + cascade + grille titre/texte. */}
        <section className="legal-body">
          <div className="legal-body-accent" aria-hidden="true" />

          <div className="legal-inner">
            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">01</span>
                <h2>Éditeur du site</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Maxime Lagraa — Entrepreneur individuel, profession libérale
                  non réglementée. Enseigne : MLD Dev.
                </p>
                <p>
                  SIRET : 848&nbsp;799&nbsp;029&nbsp;00022. TVA non applicable,
                  article&nbsp;293&nbsp;B du CGI (franchise en base).
                </p>
                <p>
                  Contact :{" "}
                  <a href="mailto:contact@mld-dev.com">contact@mld-dev.com</a>.
                </p>
                <p>
                  Adresse : Roanne (42300). Activité exercée à domicile —
                  l’adresse précise est communiquée sur demande à des fins
                  légales.
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">02</span>
                <h2>Directeur de la publication</h2>
              </div>
              <div className="legal-block-body">
                <p>Maxime Lagraa.</p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">03</span>
                <h2>Hébergeur</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Vercel Inc., 340&nbsp;S&nbsp;Lemon&nbsp;Ave&nbsp;#4133,
                  Walnut, CA&nbsp;91789, USA —{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vercel.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">04</span>
                <h2>Responsable du traitement</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Maxime Lagraa, MLD Dev. Contact :{" "}
                  <a href="mailto:contact@mld-dev.com">contact@mld-dev.com</a>.
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">05</span>
                <h2>Données collectées</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Les seules données collectées le sont via le formulaire de
                  contact :
                </p>
                <ul>
                  <li>nom ;</li>
                  <li>adresse email ;</li>
                  <li>message.</li>
                </ul>
                <p>Aucune autre donnée n’est recueillie.</p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">06</span>
                <h2>Finalité &amp; base légale</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Ces données servent uniquement à répondre à votre demande de
                  contact. Elles ne sont utilisées à aucune autre fin.
                </p>
                <p>
                  Le traitement repose sur le consentement de la personne qui
                  envoie le formulaire.
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">07</span>
                <h2>Destinataire des données</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  L’éditeur du site est le seul destinataire des messages.
                  L’acheminement technique est assuré par le service Web3Forms :
                  les messages sont transmis par email et ne sont pas stockés
                  dans une base de données par l’éditeur.
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">08</span>
                <h2>Durée de conservation</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Les emails sont conservés le temps nécessaire au traitement de
                  la demande, puis supprimés.
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">09</span>
                <h2>Cookies &amp; suivi</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Ce site n’utilise aucun cookie de suivi, aucun outil d’analyse
                  d’audience (analytics) et aucune publicité. Votre navigation
                  n’est pas tracée.
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">10</span>
                <h2>Vos droits (RGPD)</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  Conformément au RGPD, vous disposez d’un droit d’accès, de
                  rectification, de suppression et d’opposition sur vos données.
                  Ces droits s’exercent par email à{" "}
                  <a href="mailto:contact@mld-dev.com">contact@mld-dev.com</a>.
                </p>
                <p>
                  Vous pouvez également introduire une réclamation auprès de la
                  CNIL —{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.cnil.fr
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="legal-block">
              <div className="legal-block-head">
                <span className="legal-block-num">11</span>
                <h2>Propriété intellectuelle</h2>
              </div>
              <div className="legal-block-body">
                <p>
                  L’ensemble du contenu et du code de ce site est la propriété de
                  l’éditeur. Toute reproduction, représentation ou réutilisation,
                  totale ou partielle, est interdite sans autorisation préalable
                  écrite.
                </p>
              </div>
            </div>
          </div>

          <Link className="legal-back" to="/">
            ← Retour à l’accueil
          </Link>
        </section>

        {/* FAQ légale : composant Faq existant, alimenté avec des questions légales. */}
        <Faq
          items={faqLegalItems}
          eyebrow="FAQ"
          titleLines={["Vos données,", "vos droits."]}
          contactHref="#contact"
          id="faq-legal"
        />

        {/* Section Contact + Footer réutilisés tels quels (mêmes composants que l'accueil). */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
