import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PlanCard from "@/components/PlanCard";
import PlanTable from "@/components/PlanTable";
import CtaFinal from "@/components/CtaFinal";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { CheckIcon } from "@/components/icons";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planes y precios",
  description:
    "Planes de posicionamiento desde 49 €/mes. Página web, hosting y dominio incluidos. SEO y GEO según el plan. Comparativa completa de cada plan.",
};

export default function PlanesPage() {
  return (
    <>
      <PageHeader
        kicker="Planes y precios"
        title={
          <>
            Precios claros,{" "}
            <span className="text-violet-600">sin letra pequeña</span>
          </>
        }
        subtitle="Hosting y dominio incluidos en todos los planes. Elige tu punto de partida; puedes crecer de plan más adelante."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.index} delay={i * 80}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-violet-600" />
            Página web incluida
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-violet-600" />
            Hosting incluido
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-violet-600" />
            Dominio incluido
          </span>
        </Reveal>

        <div className="mt-20">
          <SectionHeading
            kicker="Comparativa"
            title="Qué incluye cada plan"
            subtitle="Las diferencias entre los tres planes, de un vistazo."
          />
          <Reveal className="mt-12">
            <PlanTable />
          </Reveal>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}