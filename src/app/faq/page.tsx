import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import CtaFinal from "@/components/CtaFinal";
import { PhoneIcon } from "@/components/icons";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos tus dudas sobre los planes de Scalix: qué incluye cada plan, diferencias entre SEO y GEO, hosting, dominio y mantenimiento.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        kicker="FAQ"
        title={
          <>
            Preguntas <span className="text-violet-600">frecuentes</span>
          </>
        }
        subtitle="Si no encuentras tu duda aquí, llámanos y te la resolvemos al momento."
      />

      <section className="mx-auto max-w-3xl px-5 pb-16 md:px-8">
        <Reveal>
          <Faq items={faqs} />
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-ink/10 bg-paper p-8 text-center">
          <p className="font-serif text-xl font-semibold tracking-tight text-ink">
            ¿Tienes otra duda?
          </p>
          <p className="mt-2 text-sm text-muted">
            Llámanos y te la resolvemos sin compromiso.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {site.phones.map((phone) => (
              <a
                key={phone}
                href={site.tel(phone)}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink transition-colors hover:border-violet-600 hover:text-violet-700"
              >
                <PhoneIcon className="h-4 w-4" />
                {phone}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaFinal />
    </>
  );
}