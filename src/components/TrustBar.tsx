import Reveal from "@/components/Reveal";

const items = [
  {
    lead: "+50",
    label: "Clientes recurrentes",
  },
  {
    lead: "49 €/mes",
    label: "Desde, con todo incluido",
  },
  {
    lead: "Maps · SEO · GEO",
    label: "Presencia integral",
  },
  {
    lead: "Local",
    label: "Especialistas en negocios locales",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-mist/50">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="text-center lg:border-l lg:border-ink/10 lg:first:border-0">
                <p className="font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {item.lead}
                </p>
                <p className="mt-1.5 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}