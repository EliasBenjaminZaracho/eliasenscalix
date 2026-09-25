import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con Scalix por teléfono. Llámanos o agenda una llamada y empecemos a posicionar tu negocio en Internet.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        kicker="Contacto"
        title={
          <>
            Hablemos de{" "}
            <span className="text-violet-600">tu negocio</span>
          </>
        }
        subtitle="Llámanos y te contamos cómo podemos ayudarte a tener más visibilidad y clientes en Google. Respuesta directa, sin compromiso."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {site.phones.map((phone, i) => (
            <Reveal key={phone} delay={i * 90}>
              <a
                href={site.tel(phone)}
                className={cn(
                  "group flex h-full flex-col justify-between rounded-[2rem] p-8 transition-all duration-300 md:p-10",
                  i === 0
                    ? "bg-linear-to-br from-violet-700 to-violet-500 text-white shadow-2xl shadow-violet-700/25 hover:-translate-y-1"
                    : "border border-ink/10 bg-paper text-ink hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-700/10",
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl",
                      i === 0
                        ? "bg-white/15 text-white"
                        : "bg-violet-100 text-violet-700",
                    )}
                  >
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.16em]",
                      i === 0 ? "text-white/70" : "text-muted",
                    )}
                  >
                    Teléfono {i + 1}
                  </span>
                </div>
                <div className="mt-10">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      i === 0 ? "text-white/80" : "text-muted",
                    )}
                  >
                    Llámanos ahora
                  </p>
                  <p className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                    {phone}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-center md:py-16">
            <div
              aria-hidden
              className="absolute -left-16 -top-24 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-xl font-serif text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                ¿Quieres que tu negocio tenga más visibilidad en Internet?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Una llamada y te contamos exactamente qué haríamos por tu
                negocio y qué plan encaja contigo.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={site.tel(site.phones[0])} variant="gold" size="lg">
                  Agendar llamada
                </Button>
                <p className="text-xs text-white/50">
                  Sin compromiso · Sin permanencia
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}