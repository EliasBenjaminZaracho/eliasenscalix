import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ServiceTile } from "@/components/ServiceCard";
import CtaFinal from "@/components/CtaFinal";
import { CheckIcon } from "@/components/icons";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Google Maps, SEO, GEO, páginas web profesionales, hosting y dominio. Conoce todos los servicios de Scalix para posicionar tu negocio online.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        kicker="Servicios"
        title={
          <>
            Tu presencia online,{" "}
            <span className="text-violet-600">al completo</span>
          </>
        }
        subtitle="Trabajamos todos los frentes para que tu negocio aparezca donde tus clientes buscan: en Google Maps, en los buscadores y en las nuevas búsquedas con inteligencia artificial."
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="space-y-20 md:space-y-28">
          {services.map((service, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    reverse && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div>
                    <ServiceTile icon={service.icon} className="h-14 w-14 rounded-2xl" />
                    <h2 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-ink/10 bg-paper p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                      Qué incluye
                    </p>
                    <ul className="mt-5 space-y-3.5">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm text-ink/85 sm:text-base"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaFinal />
    </>
  );
}