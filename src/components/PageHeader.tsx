import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function PageHeader({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-mist/80 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-full bg-dots opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
            {kicker}
          </span>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}