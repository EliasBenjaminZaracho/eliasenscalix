import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/site";

export default function ProcessSteps() {
  return (
    <div className="relative grid gap-6 md:grid-cols-4">
      <div
        aria-hidden
        className="absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-transparent via-violet-300 to-transparent md:block"
      />
      {processSteps.map((step, i) => (
        <Reveal
          key={step.n}
          delay={i * 90}
          className="relative text-center md:px-3"
        >
          <div className="relative mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-violet-200 bg-paper font-serif text-2xl font-semibold text-violet-700 shadow-sm">
            {step.n}
            <span className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-violet-100 to-transparent" />
          </div>
          <h3 className="mt-5 font-serif text-lg font-semibold tracking-tight text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </Reveal>
      ))}
    </div>
  );
}