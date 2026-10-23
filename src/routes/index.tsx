import { ArrowDown, ArrowRight, Check, Heart, Sparkles } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const highlights = [
  {
    number: "01",
    title: "Ideas para todos los días",
    description:
      "Inspiración rica y cercana para salir de la rutina y volver a disfrutar la cocina.",
  },
  {
    number: "02",
    title: "Pasos simples, resultados ricos",
    description:
      "Recetas explicadas con claridad para que cocinar se sienta más fácil desde el primer paso.",
  },
  {
    number: "03",
    title: "Una mesa para compartir",
    description: "Propuestas para preparar algo rico, invitar a los tuyos y disfrutar sin apuro.",
  },
];

const included = [
  "Recetas caseras para sumar variedad a tu menú",
  "Instrucciones claras para acompañarte en cada preparación",
  "Ideas para cocinar, compartir y disfrutar en casa",
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf8f1] text-[#263a2d]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="La Mesa Simple, inicio">
          <span className="grid size-10 place-items-center rounded-full bg-[#d9e0cc] text-[#425b42]">
            <Heart size={18} strokeWidth={1.8} />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">La Mesa Simple</span>
        </a>
        <nav
          className="hidden items-center gap-8 text-sm text-[#596658] md:flex"
          aria-label="Navegación principal"
        >
          <a className="transition hover:text-[#263a2d]" href="#recetario">
            El recetario
          </a>
          <a className="transition hover:text-[#263a2d]" href="#incluye">
            Qué vas a encontrar
          </a>
        </nav>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#344c39] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#263a2d]"
          href="#compra"
        >
          Lo quiero <ArrowRight size={16} />
        </a>
      </header>

      <section
        id="inicio"
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1fr_0.92fr] lg:px-10 lg:pb-28 lg:pt-16"
      >
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9dfd1] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#586e51]">
            <Sparkles size={14} /> Un recetario para disfrutar más
          </div>
          <h1 className="font-serif text-5xl leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Que cocinar rico vuelva a ser <span className="italic text-[#a45e3d]">simple.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#667063]">
            Ideas caseras, pasos claros y ese gustito de sentarse a la mesa con algo hecho por vos.
            Un recetario para acompañar tus días, sin vueltas.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-3 rounded-full bg-[#344c39] px-7 py-4 text-base font-medium text-white shadow-lg shadow-[#344c39]/10 transition hover:-translate-y-0.5 hover:bg-[#263a2d]"
              href="#compra"
            >
              Quiero el recetario <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-[#53604f] transition hover:text-[#a45e3d]"
              href="#incluye"
            >
              Conocé qué incluye <ArrowDown size={15} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#e3e2d8] pt-6 text-sm text-[#70786d]">
            <span className="inline-flex items-center gap-2">
              <Check size={15} className="text-[#6c805f]" /> Para cocinar a tu ritmo
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={15} className="text-[#6c805f]" /> Inspiración para tu mesa
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]" id="recetario">
          <div className="absolute -right-5 top-8 h-32 w-32 rounded-full bg-[#e8c8a9]/60 blur-2xl" />
          <div className="absolute -bottom-7 -left-6 h-40 w-40 rounded-full bg-[#d9e0cc]/80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e7e2d5] shadow-2xl shadow-[#4a4436]/15 ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
              alt="Plato colorido con vegetales frescos sobre una mesa"
              className="h-[440px] w-full object-cover sm:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b20]/75 via-transparent to-[#1e2b20]/5" />
            <div className="absolute left-6 top-6 rounded-full border border-white/60 bg-[#fbf8f1]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#53634e] shadow-sm backdrop-blur">
              Recetario digital
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/70 bg-[#fbf8f1]/95 p-6 shadow-xl backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a45e3d]">
                La Mesa Simple
              </p>
              <p className="mt-2 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                Recetas para volver a disfrutar
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6d7468]">
                Cocina rica, cotidiana y hecha con cariño.
              </p>
            </div>
          </div>
          <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-[#4a4436]/10 sm:block">
            <p className="font-serif text-lg italic text-[#667b59]">Hecho para compartir</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e4da] bg-[#f3f1e8] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a674d]">
              Menos vueltas, más mesa
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              Una ayuda rica para tus días reales.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#687064]">
              Abrí el recetario cuando necesites una idea nueva, ganas de cocinar o una excusa para
              compartir algo rico.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-[#e5e3d9] bg-[#fbfaf6] p-7 sm:p-8"
              >
                <span className="font-serif text-lg italic text-[#a45e3d]">{item.number}</span>
                <h3 className="mt-6 font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#70786d]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="incluye"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-[#d9e0cc] p-8 sm:p-12">
          <div className="absolute -right-10 -top-12 size-56 rounded-full border border-[#84927b]/30" />
          <div className="absolute -right-2 -top-4 size-40 rounded-full border border-[#84927b]/30" />
          <div className="relative max-w-sm">
            <span className="grid size-12 place-items-center rounded-full bg-[#fbf8f1] text-[#667b59]">
              <Heart size={20} />
            </span>
            <p className="mt-10 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Cocinar también es una forma de cuidarte.
            </p>
            <p className="mt-5 leading-7 text-[#566451]">
              No hace falta que todo salga perfecto. A veces, una receta sencilla y un ratito en la
              cocina alcanzan para hacer lindo el día.
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a674d]">
            Adentro vas a encontrar
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
            Un recetario pensado para usar, guardar y volver a abrir.
          </h2>
          <ul className="mt-8 space-y-5">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-4 text-[#606b5c]">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#e4e9dd] text-[#586f50]">
                  <Check size={14} />
                </span>
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
          <a
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#405a42] transition hover:text-[#a45e3d]"
            href="#compra"
          >
            Quiero sumar estas ideas a mi cocina <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section id="compra" className="bg-[#344c39] px-6 py-20 text-[#fbf8f1] lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8c5a4]">
              Tu próxima idea empieza acá
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              Hagamos lugar para algo rico en tu mesa.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/75">
              El recetario está presentado. Para habilitar la compra falta sumar el precio y
              conectar el enlace de pago.
            </p>
          </div>
          <div className="min-w-[min(100%,320px)] rounded-3xl bg-[#fbf8f1] p-7 text-[#263a2d] shadow-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a674d]">
              La Mesa Simple
            </p>
            <p className="mt-3 font-serif text-2xl">Recetario digital</p>
            <p className="mt-2 text-sm leading-6 text-[#71796e]">
              Precio y forma de entrega a definir.
            </p>
            <a
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#344c39] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#263a2d]"
              href="#compra"
            >
              Consultar por el recetario <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-[#7b8177] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <a href="#inicio" className="font-serif text-lg font-semibold text-[#40533f]">
          La Mesa Simple
        </a>
        <p>Hecho con cariño, para disfrutar alrededor de la mesa.</p>
      </footer>
    </main>
  );
}
