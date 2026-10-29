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
        </div>
      </section>

      <section className="ap-section ap-section--sand" id="recetas">
        <div className="ap-container">
          <SectionHeading
            eyebrow="Ideas para tu mesa"
            description="Descubrí recetas antiinflamatorias fáciles y deliciosas para organizar tus comidas, cuidar tu digestión y disfrutar de comer mejor sin pasar horas en la cocina."
          >
            Todo lo que necesitás para sentirte desinchada y dejar de preguntarte qué cocinar
          </SectionHeading>
          <div className="ap-recipe-grid">
            {recipeIdeas.map((recipe) => (
              <article className="ap-recipe-card" key={recipe.name}>
                {recipe.name.startsWith("Comidas antiinflamatorias") ? (
                  <img
                    className="ap-recipe-photo"
                    src="/images/comidas-antiinflamatorias.svg"
                    alt="Plato de carne con palta, tomates y huevos"
                    loading="lazy"
                  />
                ) : recipe.name.startsWith("Desayunos y meriendas para disfrutar") ? (
                  <img
                    className="ap-recipe-photo"
                    src="/images/desayunos-meriendas.svg"
                    alt="Tortitas de arroz con frutillas, banana, mantequilla de maní y arándanos"
                    loading="lazy"
                  />
                ) : recipe.name.startsWith("Opciones rápidas para") ? (
                  <img
                    className="ap-recipe-photo"
                    src="/images/opciones-rapidas.webp.svg"
                    alt="Bocados de chocolate con frutillas"
                    loading="lazy"
                  />
                ) : recipe.name.startsWith("Cómo reemplazar azúcar y harinas") ? (
                  <img
                    className="ap-recipe-photo"
                    src="https://drive.google.com/uc?export=view&id=18q7-dkCVeu0ShxeloN_ej4JBfwGLkAZK"
                    alt="Ingredientes frescos para preparar comidas y reemplazar productos refinados"
                    loading="lazy"
                  />
                ) : recipe.name === "Postres sin azúcar para darte un gusto" ? (
                  <img
                    className="ap-recipe-photo"
                    src="/images/postres-sin-azucar.svg"
                    alt="Tarta de chocolate con frutillas, sin azúcar"
                    loading="lazy"
                  />
                ) : (
                  <ImagePlaceholder
                    className="ap-image-placeholder--recipe"
                    label={`Fotografía de ${recipe.name}`}
                    detail="Espacio para una fotografía real del plato."
                  />
                )}
                <div className="ap-recipe-card-body">
                  <h3 className="ap-serif">{recipe.name}</h3>
                  <p className="ap-recipe-note">{recipe.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-product-offer-section" id="producto" aria-labelledby="product-offer-title">
        <div className="ap-container ap-product-offer">
          <div className="ap-product-offer-layout">
            <div className="ap-product-offer-art">
              <img
                className="ap-product-offer-image"
                src="/images/metodo-menu-producto.jpg"
                alt="Portada del ebook Método Menú Antiinflamatorio"
                width="1024"
                height="1536"
                loading="lazy"
              />
            </div>
            <div className="ap-product-offer-copy">
              <p className="ap-product-offer-kicker">TU NUEVA FORMA DE COMER MEJOR</p>
              <h2 className="ap-serif ap-product-offer-title" id="product-offer-title">MÉTODO MENÚ ANTIINFLAMATORIO</h2>
              <p className="ap-product-offer-description">
                Más de 500 recetas antiinflamatorias para organizar tus comidas, cuidar tu digestión y sentirte más liviana sin pasar horas en la cocina
              </p>
              <div className="ap-product-prices" aria-label="Precios por definir">
                <div className="ap-product-price ap-product-price--previous">
                  <span>Precio anterior</span>
                  <s>A definir</s>
                </div>
                <div className="ap-product-price ap-product-price--current">
                  <span>Precio actual</span>
                  <strong>A definir</strong>
                </div>
              </div>
              <span className="ap-product-offer-badge">OFERTA ESPECIAL</span>
              <ActionLink className="ap-product-purchase-button" href={purchaseHref}>QUIERO MI MÉTODO</ActionLink>
            </div>
          </div>

          <aside className="ap-product-protection" aria-label="Información de compra">
            <svg className="ap-product-shield" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3 19 6v5c0 4.7-2.9 8-7 10-4.1-2-7-5.3-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <h3>TU COMPRA ESTÁ PROTEGIDA</h3>
              <p>Consultá las condiciones de compra y devolución antes de adquirir tu método</p>
            </div>
          </aside>

          <div className="ap-product-bonus-panel">
            <p className="ap-product-bonus-kicker">TU OFERTA ESPECIAL</p>
            <h3 className="ap-serif">Bonos incluidos</h3>
            <p>Espacio para mostrar los bonos incluidos. Detalles a confirmar.</p>
          </div>
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
