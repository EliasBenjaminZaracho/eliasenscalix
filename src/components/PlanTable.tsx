import { CheckIcon, DashIcon } from "@/components/icons";
import { comparisonColumns, comparisonRows, plans } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function PlanTable() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-ink/10 bg-paper shadow-sm">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="px-6 py-5 text-sm font-semibold text-muted md:px-8">
              Característica
            </th>
            {plans.map((plan, i) => (
              <th
                key={plan.index}
                className={cn(
                  "px-4 py-5 text-center",
                  i === 1 && "bg-violet-50/70",
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700">
                  Plan {plan.index}
                </span>
                <span
                  className={cn(
                    "mt-1 block font-serif text-lg font-semibold text-ink",
                    i === 1 && "text-violet-700",
                  )}
                >
                  {comparisonColumns[i]}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, ri) => (
            <tr
              key={row.label}
              className={cn(
                "border-b border-ink/5 last:border-0",
                ri % 2 === 1 && "bg-cream/60",
              )}
            >
              <td className="px-6 py-4 text-sm font-medium text-ink md:px-8">
                {row.label}
              </td>
              {[row.plan1, row.plan2, row.plan3].map((value, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-4 py-4 text-center",
                    ci === 1 && "bg-violet-50/70",
                  )}
                >
                  {value ? (
                    <CheckIcon className="mx-auto h-5 w-5 text-violet-600" />
                  ) : (
                    <DashIcon className="mx-auto h-5 w-5 text-ink/25" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}