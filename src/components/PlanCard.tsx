import type { Plan } from "@/lib/site";
import { cn } from "@/lib/cn";
import Button from "@/components/Button";
import { CheckIcon } from "@/components/icons";

export default function PlanCard({
  plan,
  href = "/contacto",
}: {
  plan: Plan;
  href?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-paper p-8 transition-all duration-300",
        plan.featured
          ? "border-violet-600 shadow-2xl shadow-violet-700/15"
          : "border-ink/10 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-700/10",
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-violet-700/30">
          {plan.badge}
        </span>
      )}
      {plan.badge && !plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow-md shadow-gold/30">
          {plan.badge}
        </span>
      )}

      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
        Plan {plan.index}
      </p>
      <h3 className="mt-1.5 font-serif text-2xl font-semibold tracking-tight text-ink">
        {plan.name}
      </h3>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="font-serif text-5xl font-semibold tracking-tight text-ink">
          {plan.price} €
        </span>
        <span className="text-sm font-medium text-muted">/mes</span>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <CheckIcon
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                plan.featured ? "text-violet-600" : "text-violet-500",
              )}
            />
            <span className="text-ink/85">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={href}
        variant={plan.featured ? "primary" : "outline"}
        size="md"
        className="mt-8 w-full"
      >
        Agendar llamada
      </Button>
    </div>
  );
}