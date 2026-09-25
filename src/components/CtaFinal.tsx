import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { PhoneIcon, StarIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function CtaFinal() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-violet-700 via-violet-600 to-violet-500 px-6 py-16 text-center shadow-2xl shadow-violet-700/30 md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute inset-0 bg-dots opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgb(255 255 255 / 0.35) 1px, transparent 1px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              <StarIcon className="h-3.5 w-3.5 text-gold" />
              +50 clientes recurrentes
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              ¿Quieres que tu negocio tenga más visibilidad en Internet?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Hablemos sin compromiso. Te contamos qué puede hacer Scalix por tu
              negocio y qué plan encaja contigo.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={site.tel(site.phones[0])} variant="gold" size="lg">
                Agendar llamada
              </Button>
              <div className="flex flex-col items-center gap-1 text-sm text-white/85">
                <span className="text-xs uppercase tracking-wider text-white/60">
                  Llamada directa
                </span>
                {site.phones.map((phone, i) => (
                  <span key={phone} className="flex items-center gap-2 font-semibold">
                    {i > 0 && (
                      <span className="text-white/40">·</span>)}
                    <a href={site.tel(phone)} className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                      <PhoneIcon className="h-3.5 w-3.5" />
                      {phone}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}