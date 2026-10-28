import { createFileRoute } from "@tanstack/react-router";

import {
  bonusIdeas,
  comparison,
  everydayChallenges,
  faqItems,
  offerDetails,
  productContents,
  purchaseHref,
  recipeIdeas,
} from "../content/alivio-en-cada-plato";
import {
  ActionLink,
  ImagePlaceholder,
  PointCard,
  SectionHeading,
} from "../components/landing/landing-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alivio en Cada Plato | Método menú antiinflamatorio" },
      { name: "description", content: "Recetas fáciles e ideas prácticas para cuidar tu digestión y organizar tus comidas sin dietas extremas." },
      { property: "og:title", content: "Alivio en Cada Plato | Método menú antiinflamatorio" },
      { property: "og:description", content: "Recetas fáciles e ideas prácticas para cuidar tu digestión y organizar tus comidas sin dietas extremas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="alivio-page" id="inicio">
      <section className="ap-container ap-hero" aria-labelledby="hero-title">
        <p className="ap-eyebrow ap-hero-eyebrow">METODO MENU ANTIINFLAMATORIO</p>
        <h1 id="hero-title" className="ap-serif">
          ¿Cansada de la panza <span className="ap-gold">hinchada</span>?
        </h1>
        <p className="ap-hero-copy">
          Descubre recetas fáciles y deliciosas para cuidar tu digestión, sentirte mejor y recuperar la confianza frente al espejo, sin dietas extremas.
        </p>

        <img
          className="ap-hero-mockup"
          src="/images/alivio-mockup.webp"
          alt="Mockup del ebook con su portada y páginas de recetas"
          width="1254"
          height="1254"
          fetchPriority="high"
        />

        <div className="ap-hero-actions">
          <ActionLink href={purchaseHref}>Quiero descubrir el método</ActionLink>
        </div>
      </section>

      <section className="ap-section ap-section--sand" id="problemas">
        <div className="ap-container">
          <SectionHeading
            eyebrow="¿TE SENTÍS IDENTIFICADA?"
            description="Querés comer mejor, sentirte más liviana y verte bien, pero terminás el día con pesadez, incomodidad y la sensación de no saber qué cambiar."
          >
            No es solo la panza hinchada. Es cómo te hace sentir.
          </SectionHeading>
          <div className="ap-point-grid">
            {everydayChallenges.map((item, index) => (
              <PointCard
                key={item.title}
                number={`0${index + 1}`}
                title={item.title}
                description={item.description}
                imageSrc={
                  index === 0
                    ? "/images/panza-hinchada.jpg"
                    : index === 1
                      ? "/images/no-sabes-que-comer.jpg"
                      : index === 2
                        ? "/images/no-te-sentis-comoda.jpg"
                        : index === 3
                          ? "/images/te-cuesta-mantenerlo.jpg"
                          : undefined
                }
                imageAlt={
                  index === 0
                    ? "Mujer con malestar abdominal después de comer"
                    : index === 1
                      ? "Mujer eligiendo qué preparar frente a la heladera"
                      : index === 2
                        ? "Mujer intentando abrocharse un jean"
                        : index === 3
                          ? "Mujer frustrada al elegir entre frutas y antojos"
                          : undefined
                }
              />
            ))}
          </div>
          <p className="ap-problem-closing ap-serif">No tenés por qué seguir sintiéndote así.</p>
        </div>
      </section>

      <section className="ap-section ap-section--white" id="enfoque">
        <div className="ap-container">
          <SectionHeading
            eyebrow="LO QUE CAMBIA CON EL METODO"
            description="Encontra una forma práctica de cuidar tu alimentación con recetas simples y deliciosas, sin pasar hambre ni estar horas en la cocina."
          >
            No necesitás pasar hambre para sentirte mejor.
          </SectionHeading>
          <div className="ap-comparison">
            <table className="ap-compare-table ap-compare-table--restrictive">
              <caption>
                <p className="ap-compare-kicker">LO MISMO DE SIEMPRE</p>
                <h3 className="ap-serif">{comparison.restrictive.heading}</h3>
                <p className="ap-compare-description">{comparison.restrictive.description}</p>
              </caption>
              <tbody>
                {comparison.restrictive.points.map((point) => (
                  <tr key={point}>
                    <td>
                      <span className="ap-compare-mark" aria-hidden="true">×</span>
                      <span>{point}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="ap-compare-table ap-compare-table--practical">
              <caption>
                <p className="ap-compare-kicker">LO QUE CAMBIA</p>
                <h3 className="ap-serif">{comparison.practical.heading}</h3>
                <p className="ap-compare-description">{comparison.practical.description}</p>
              </caption>
              <tbody>
                {comparison.practical.points.map((point) => (
                  <tr key={point}>
                    <td>
                      <span className="ap-compare-mark" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ap-inline-note">
            El ebook es material informativo general y no reemplaza la orientación de un profesional
            de salud.
          </p>
        </div>
      </section>

      <section className="ap-section ap-section--sand" id="recetas">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Ideas para tu mesa"
            description="Una muestra visual provisional. Reemplazaremos estos ejemplos por las recetas confirmadas del ebook."
          >
            Todo lo que necesitás para sentirte desinchada y dejar de preguntarte qué cocinar
          </SectionHeading>
          <div className="ap-recipe-grid">
            {recipeIdeas.map((recipe) => (
              <article className="ap-recipe-card" key={recipe.name}>
                <ImagePlaceholder
                  className="ap-image-placeholder--recipe"
                  label={`Fotografía de ${recipe.name}`}
                  detail="Espacio para una fotografía real del plato."
                />
                <div className="ap-recipe-card-body">
                  <h3 className="ap-serif">{recipe.name}</h3>
                  <p className="ap-recipe-note">{recipe.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section" id="producto">
        <div className="ap-container ap-product-grid">
          <div>
            <SectionHeading
              eyebrow="Conocé el producto"
              description="Alivio en Cada Plato es un ebook digital pensado para acercarte ideas cotidianas de alimentación saludable, sin presentarse como una dieta ni como un tratamiento."
            >
              Una guía para volver a mirar tus comidas con calma
            </SectionHeading>
            <div className="ap-product-card">
              <h3>Contenido provisorio del ebook</h3>
              <ul className="ap-product-list">
                {productContents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="ap-bonus-heading">Bonos sugeridos</h3>
              <div className="ap-bonus-grid">
                {bonusIdeas.map((bonus) => (
                  <article className="ap-bonus-card" key={bonus.name}>
                    <h3>{bonus.name}</h3>
                    <p>{bonus.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <ImagePlaceholder
            className="ap-product-image"
            label="Mockup del ebook abierto junto a ingredientes naturales"
            detail="Espacio para fotografía del producto o páginas interiores."
          />
        </div>
      </section>

      <section className="ap-section ap-offer-section" id="oferta">
        <div className="ap-container">
          <SectionHeading
            eyebrow="La propuesta"
            description="Revisá los detalles del producto antes de avanzar. Los datos comerciales se completarán cuando estén definidos."
          >
            Sumá nuevas ideas saludables a tu rutina
          </SectionHeading>
          <div className="ap-offer-card">
            <p className="ap-eyebrow">Ebook digital</p>
            <h3 className="ap-offer-title">Alivio en Cada Plato</h3>
            <p className="ap-offer-price-label">Precio</p>
            <p className="ap-offer-price">A definir</p>
            <ul className="ap-offer-list">
              {offerDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <ActionLink href={purchaseHref}>Quiero el ebook</ActionLink>
            <p className="ap-offer-note">
              Sin integración de pago activa. El enlace se configura en el contenido del proyecto
              cuando el checkout esté listo.
            </p>
          </div>
        </div>
      </section>

      <section className="ap-section ap-section--sand" id="bonos">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Material adicional"
            description="Ideas de bonos para acompañar el ebook. Los recursos incluidos se confirmarán al definir el producto final."
          >
            Además, también recibís
          </SectionHeading>
          <div className="ap-bonus-grid ap-bonus-grid--featured">
            {bonusIdeas.map((bonus, index) => (
              <article className="ap-bonus-card ap-bonus-card--featured" key={bonus.name}>
                <span className="ap-card-number">Bono 0{index + 1}</span>
                <h3 className="ap-serif">{bonus.name}</h3>
                <p>{bonus.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-section--white" id="opiniones">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Experiencias de lectoras y lectores"
            description="Queremos compartir únicamente comentarios auténticos, con autorización de quienes los escribieron."
          >
            Opiniones reales
          </SectionHeading>
          <div className="ap-testimonials-empty">
            <p className="ap-testimonials-mark" aria-hidden="true">
              “ ”
            </p>
            <p>
              Estamos reuniendo las primeras opiniones para publicar acá. Esta sección se completará
              con testimonios reales; no usamos reseñas inventadas.
            </p>
          </div>
        </div>
      </section>

      <section className="ap-section ap-section--white" id="preguntas">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Antes de elegir"
            description="Respuestas provisorias para que la información importante quede clara."
          >
            Preguntas frecuentes
          </SectionHeading>
          <div className="ap-faq-list">
            {faqItems.map((item) => (
              <details className="ap-faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="ap-final-cta">
            <p className="ap-eyebrow">Alivio en Cada Plato</p>
            <h2 className="ap-serif">Una forma más amable de inspirar tu cocina.</h2>
            <ActionLink href={purchaseHref}>Ver detalles de la oferta</ActionLink>
          </div>
        </div>
      </section>

      <footer className="ap-container ap-footer">
        <p className="ap-brand">Alivio en Cada Plato</p>
        <p>Textos y detalles comerciales provisionales.</p>
      </footer>
    </main>
  );
}
