import Noise from "../Noise.jsx";
import { pricingPlans, pricingFeatures } from "../../data/prix.js";
import { usePrixAnimation } from "../../scripts/prix.js";

// Section Prix : tableau comparatif desktop + cartes empilées sur mobile.
function Prix() {
  const sectionRef = usePrixAnimation();

  return (
    <section
      ref={sectionRef}
      id="tarifs"
      className="pricing-section"
      aria-labelledby="pricing-title"
    >
      <Noise className="noise-behind" opacity={0.11} />

      <div className="pricing-inner">
        <div className="pricing-thought">
          <div className="pricing-thought-top">
            <p className="pricing-label">Notre façon de penser</p>

            <div className="pricing-profile">
              <figure>
                <img
                  src="/assets/pricing-portrait.jpg"
                  alt="Portrait de la direction créative MLD"
                />
              </figure>
              <div className="pricing-profile-copy">
                <strong>MLD Studio</strong>
                <p>
                  Direction créative
                  <br />
                  Design &amp; développement
                </p>
              </div>
            </div>
          </div>

          <div className="pricing-quote-row">
            <blockquote>
              <span className="pricing-quote-line">"Le plus difficile dans la création</span>
              <span className="pricing-quote-line">d’un site n’est pas le code —</span>
              <span className="pricing-quote-line">c’est de savoir quoi retirer.</span>
              <span className="pricing-quote-line">Chaque élément qui n’aide pas</span>
              <span className="pricing-quote-line">le visiteur travaille contre vous."</span>
            </blockquote>
            <p>
              Nous traitons la <strong>simplicité</strong> comme une{" "}
              <strong>discipline</strong>, jamais comme un raccourci.
            </p>
          </div>
        </div>

        <div className="pricing-content">
          <div className="pricing-title-row">
            <h2 id="pricing-title">Tarifs.</h2>
          </div>

          <div className="pricing-desktop-table">
            <div className="pricing-plan-heads">
              <div aria-hidden="true" />
              {pricingPlans.map((plan) => (
                <article key={plan.name}>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </article>
              ))}
            </div>

            <div className="pricing-price-row">
              <p>Fonctionnalités</p>
              {pricingPlans.map((plan) => (
                <p key={plan.name}>
                  <strong>{plan.price}</strong>
                  <small>{plan.suffix}</small>
                </p>
              ))}
            </div>

            <div className="pricing-feature-list">
              {pricingFeatures.map((feature) => (
                <div className="pricing-feature-row" key={feature.label}>
                  <p>
                    {feature.label}
                    {feature.info && (
                      <span
                        className="pricing-info"
                        data-tooltip={feature.info}
                        tabIndex="0"
                        aria-label={feature.info}
                      >
                        i
                      </span>
                    )}
                  </p>
                  {feature.values.map((value, index) => (
                    <span key={`${feature.label}-${pricingPlans[index].name}`}>
                      {value}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div className="pricing-actions">
              <span aria-hidden="true" />
              {pricingPlans.map((plan) => (
                <a href="#contact" key={plan.name}>
                  <span>Démarrer</span>
                  <span aria-hidden="true">Démarrer</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pricing-mobile-plans">
            {pricingPlans.map((plan, planIndex) => (
              <article className="pricing-mobile-plan" key={plan.name}>
                <header>
                  <div>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <p>
                    <strong>{plan.price}</strong>
                    <small>{plan.suffix}</small>
                  </p>
                </header>
                <dl>
                  {pricingFeatures.map((feature) => (
                    <div key={feature.label}>
                      <dt>{feature.label}</dt>
                      <dd>{feature.values[planIndex]}</dd>
                    </div>
                  ))}
                </dl>
                <a href="#contact">
                  <span>Démarrer</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="pricing-bottom-accent" aria-hidden="true" />
    </section>
  );
}

export default Prix;
