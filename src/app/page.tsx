import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import PlanCard from "@/components/PlanCard";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ArrowRightIcon, CalendarIcon, PhoneIcon } from "@/components/icons";
import { heroFaqs, plans, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-28">
        <SectionHeading
          kicker="Servicios"
          title={
            <>
              Todo lo que tu negocio necesita para{" "}
              <span className="text-violet-600">aparecer y crecer</span>
            </>
          }
          subtitle="Google Maps, SEO, GEO, una web profesional y todo lo técnico ya resuelto. Trabajamos tu presencia online de forma integral."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}

          <Reveal delay={160}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-7 text-cream">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold">
                  <CalendarIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight text-white">
                  ¿No sabes por dónde empezar?
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/70">
                  Cuéntanos tu negocio y te orientamos sobre la mejor estrategia,
                  sin compromiso.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2.5">
                <Button href="/contacto" variant="gold" size="md" className="w-full">
                  Hablar con nosotros
                </Button>
                <p className="text-center text-xs text-cream/50">
                  Sin permanencia · Respuesta directa
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-mist/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-28">
          <SectionHeading
            kicker="Proceso de trabajo"
            title="Un método claro, de la presencia a los resultados"
            subtitle="Sabemos qué hacer y en qué orden. Cuatro pasos para poner a tu negocio donde te buscan."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-28">
        <SectionHeading
          kicker="Planes y precios"
          title={
            <>
              Planes claros,{" "}
              <span className="text-violet-600">sin sorpresas</span>
            </>
          }
          subtitle="Hosting y dominio incluidos en todos los planes. Elige el punto de partida y crece con nosotros."
        />

        <div className="mt-16 grid items-stretch gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.index} plan={plan} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/planes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
          >
            Ver todos los planes y la comparativa completa
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal className="mt-6 text-center text-sm text-muted">
          ¿Prefieres hablar primero?{" "}
          <a
            href={site.tel(site.phones[0])}
            className="inline-flex items-center gap-1 font-semibold text-ink underline-offset-4 hover:text-violet-700 hover:underline"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.phones[0]}
          </a>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            kicker="FAQ"
            title="Preguntas frecuentes"
            subtitle="Las dudas más habituales antes de empezar a trabajar juntos."
          />
          <Reveal className="mt-12">
            <Faq items={heroFaqs} />
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
            >
              Ver todas las preguntas
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}