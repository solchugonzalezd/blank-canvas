import { createFileRoute } from "@tanstack/react-router";

import {
  bonusIdeas,
  comparison,
  everydayChallenges,
  faqItems,
  heroBenefits,
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
  component: Index,
});

function Index() {
  return (
    <main className="alivio-page" id="inicio">
      <header className="ap-container ap-header">
        <a className="ap-brand" href="#inicio" aria-label="Alivio en Cada Plato, inicio">
          Alivio en Cada Plato
        </a>
        <nav className="ap-nav" aria-label="Navegación principal">
          <a href="#recetas">Recetas</a>
          <a href="#producto">El ebook</a>
          <a href="#bonos">Bonos</a>
          <a href="#opiniones">Opiniones</a>
          <a href="#preguntas">Preguntas frecuentes</a>
        </nav>
        <ActionLink href={purchaseHref}>Ver la oferta</ActionLink>
      </header>

      <section className="ap-container ap-hero" aria-labelledby="hero-title">
        <p className="ap-eyebrow">METODO MENU ANTIINFLAMATORIO</p>
        <h1 id="hero-title" className="ap-serif">
          ¿Cansada de la panza hinchada? Descubre cómo sentirte más liviana
        </h1>
        <p className="ap-hero-copy">
          Descubre recetas fáciles y deliciosas para cuidar tu digestión, sentirte más liviana y volver a disfrutar de tu cuerpo, sin dietas extremas ni pasar horas en la cocina.
        </p>

        <div className="ap-ebook-mockup" aria-label="Mockup provisional de la portada del ebook">
          <div className="ap-ebook-cover">
            <p className="ap-ebook-cover-label">Guía digital de alimentación</p>
            <h2 className="ap-serif">
              Alivio en
              <br />
              <span>Cada Plato</span>
            </h2>
            <div className="ap-cover-image-space">Espacio para imagen de portada</div>
            <p className="ap-ebook-cover-label">Recetas · ideas · bienestar cotidiano</p>
          </div>
        </div>

        <ul className="ap-hero-benefits">
          {heroBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <div className="ap-hero-actions">
          <ActionLink href={purchaseHref}>Quiero conocer la oferta</ActionLink>
          <a className="ap-button ap-button--outline" href="#producto">
            Conocer el ebook
          </a>
        </div>
        <p className="ap-hero-note">
          Textos, precio y detalles del producto pendientes de confirmar.
        </p>
      </section>

      <section className="ap-photo-feature" aria-label="Fotografía protagonista del ebook">
        <div className="ap-container">
          <ImagePlaceholder
            className="ap-image-placeholder--woman"
            label="Mujer en una cocina luminosa sosteniendo Alivio en Cada Plato"
            detail="Reemplazar este espacio por una fotografía natural y editorial."
          />
        </div>
      </section>

      <section className="ap-section ap-section--white" id="problemas">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Si esto te suena familiar"
            description="Comer de una manera que te haga bien no debería sentirse como otra obligación imposible de sostener."
          >
            ¿Te gustaría comer mejor, pero no sabés por dónde empezar?
          </SectionHeading>
          <div className="ap-point-grid">
            {everydayChallenges.map((item, index) => (
              <PointCard
                key={item.title}
                number={`0${index + 1}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-section--sand" id="enfoque">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Un enfoque más amable"
            description="No se trata de hacerlo perfecto: se trata de encontrar opciones prácticas y flexibles para tu vida cotidiana."
          >
            Menos restricciones. Más equilibrio en cada plato.
          </SectionHeading>
          <div className="ap-comparison">
            <article className="ap-compare-card">
              <p className="ap-compare-kicker">Una mirada rígida</p>
              <h3 className="ap-serif">{comparison.restrictive.heading}</h3>
              <p>{comparison.restrictive.description}</p>
              <ul>
                {comparison.restrictive.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <article className="ap-compare-card ap-compare-card--practical">
              <p className="ap-compare-kicker">La propuesta del ebook</p>
              <h3 className="ap-serif">{comparison.practical.heading}</h3>
              <p>{comparison.practical.description}</p>
              <ul>
                {comparison.practical.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="ap-inline-note">
            El ebook es material informativo general y no reemplaza la orientación de un profesional
            de salud.
          </p>
        </div>
      </section>

      <section className="ap-section ap-section--white" id="recetas">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Ideas para tu mesa"
            description="Una muestra visual provisional. Reemplazaremos estos ejemplos por las recetas confirmadas del ebook."
          >
            Recetas simples para disfrutar todos los días
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
