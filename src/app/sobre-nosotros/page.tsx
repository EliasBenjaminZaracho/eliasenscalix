import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";
import { ShieldIcon, UsersIcon, ZapIcon, MapPinIcon, StarIcon } from "@/components/icons";
import { reservedSlots, trustValues } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Scalix: más de 50 clientes recurrentes confían en nuestro posicionamiento online. Especialistas en negocios locales, SEO, GEO y Google Maps.",
};

const valueIcons = [MapPinIcon, ShieldIcon, ZapIcon, UsersIcon];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        kicker="Confianza"
        title={
          <>
            Más de 50 negocios recurrentes{" "}
            <span className="text-violet-600">confían en Scalix</span>
          </>
        }
        subtitle="Somos especialistas en posicionar negocios locales en Internet. Trabajamos la presencia online de forma integral y sin dejar nada al azar."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-ink/10 bg-paper px-8 py-14 text-center shadow-sm md:py-20">
            <p className="font-serif text-8xl font-semibold leading-none tracking-tight text-violet-600 sm:text-9xl">
              +50
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink">
              Clientes recurrentes
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              La recurrencia habla por nosotros: los negocios que empiezan a
              trabajar con Scalix se quedan porque ven resultados en su
              presencia online.
            </p>
            <div className="mt-6 flex items-center justify-center gap-1 text-gold">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Experiencia
              </span>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustValues.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <Reveal key={value.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-ink/10 bg-paper p-6 transition-colors hover:border-violet-300">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
              Próximamente
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Casos, resultados y opiniones reales
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Estamos preparando estos espacios con contenido real de nuestros
              clientes. Mientras tanto, puedes ver el resto de la propuesta y
              reservar una llamada.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reservedSlots.map((slot, i) => (
              <Reveal key={slot} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-dashed border-violet-300 bg-mist/50 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                      {slot}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Espacio reservado para contenido real, sin inventar.
                    </p>
                  </div>
                  <p className="mt-6 font-serif text-sm italic text-muted/60">
                    Próximamente
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}