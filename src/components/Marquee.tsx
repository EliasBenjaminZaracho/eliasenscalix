import { cn } from "@/lib/cn";

const badges = [
  "Google Maps",
  "SEO",
  "GEO",
  "Top 3",
  "Página web",
  "Hosting",
  "Dominio",
];

export default function Marquee({ className }: { className?: string }) {
  const row = [...badges, ...badges];
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex w-max items-center gap-8 [animation:marquee_30s_linear_infinite]">
        {row.map((badge, i) => (
          <span
            key={i}
            aria-hidden={i >= badges.length}
            className="flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
