import type { Service } from "@/lib/site";
import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  ArrowRightIcon,
  MapPinIcon,
  SearchIcon,
  SparkIcon,
  WebIcon,
  ServerIcon,
  TrendIcon,
} from "@/components/icons";

const iconComponents = {
  map: MapPinIcon,
  search: SearchIcon,
  spark: SparkIcon,
  web: WebIcon,
  server: ServerIcon,
  trend: TrendIcon,
} as const;

export function ServiceTile({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = iconComponents[icon];
  return (
    <span
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700",
        className,
      )}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <div className="group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-700/10">
      <div className="flex items-center justify-between">
        <ServiceTile icon={service.icon} />
        <span className="font-serif text-sm italic text-muted/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight text-ink">
        {service.name}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>
      {service.includedNote && (
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-deep">
          {service.includedNote}
        </span>
      )}
      <Link
        href="/servicios"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
      >
        Ver servicio
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}