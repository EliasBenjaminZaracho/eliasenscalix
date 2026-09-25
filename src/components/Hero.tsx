import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import Marquee from "@/components/Marquee";
import AnimatedBars from "@/components/AnimatedBars";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  CalendarIcon,
  MapPinIcon,
  StarIcon,
  TrendIcon,
  UsersIcon,
  SparkIcon,
} from "@/components/icons";
import { site } from "@/lib/site";

const bars = [34, 48, 42, 58, 52, 74, 92];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-violet-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700 shadow-sm">
                <SparkIcon className="h-3.5 w-3.5" />
                Posicionamiento de negocio local en Google
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-serif text-[2rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]">
                Tu{" "}
                negocio,{" "}
                <Typewriter
                  words={[
                    "el Top 3 en Google Maps",
                    "más clientes",
                    "el nº 1 en tu zona",
                  ]}
                  className="bg-linear-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent"
                  typingSpeed={70}
                  deletingSpeed={40}
                />
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed text-ink sm:text-2xl">
                Si querés aparecer en el{" "}
                <span className="font-semibold text-violet-700">
                  Top 3 de Google
                </span>
                , tu negocio debe estar en{" "}
                <span className="font-semibold text-violet-700">
                  Google Maps
                </span>
                .
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Esa presencia la diseñamos, la posicionamos y la hacemos crecer
                por ti. Planes claros, sin sorpresas, desde{" "}
                <span className="font-semibold text-ink">49 €/mes</span>.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={site.tel(site.phones[0])}
                  variant="primary"
                  size="lg"
                >
                  Agendar llamada
                </Button>
                <Button href="/planes" variant="outline" size="lg" icon>
                  Ver planes
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-3">
                <span className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
                <p className="text-sm text-muted">
                  <span className="font-semibold text-ink">
                    +50 clientes recurrentes
                  </span>{" "}
                  confían su presencia online a Scalix.
                </p>
              </div>
            </Reveal>

            <Marquee className="mt-12" />
          </div>

          <Reveal delay={200} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-violet-200/60 to-fuchsia-200/40 blur-2xl" />

              <div className="rounded-3xl border border-ink/10 bg-paper p-7 shadow-2xl shadow-violet-900/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-violet-700 text-white shadow-md shadow-violet-700/25">
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-serif text-base font-semibold text-ink">
                        Salir en el top local
                      </p>
                      <p className="text-xs text-muted">
                        Google Maps · SEO · GEO
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700">
                    <TrendIcon className="h-3.5 w-3.5" />
                    Creciendo
                  </span>
                </div>

                <div className="mt-8">
                  <AnimatedBars bars={bars} className="h-36" />

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="font-medium text-ink">
                      Visibilidad online
                    </span>
                    <span className="text-muted">Meses</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2.5 rounded-2xl bg-mist px-4 py-3.5">
                  <UsersIcon className="h-5 w-5 shrink-0 text-violet-700" />
                  <p className="text-sm text-ink/85">
                    <span className="font-serif text-lg font-semibold text-violet-700">
                      +<AnimatedCounter to={50} />
                    </span>{" "}
                    clientes recurrentes ya trabajan con nosotros
                  </p>
                </div>
              </div>

              <div className="absolute -right-6 -top-5 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-xl">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Plan desde
                </p>
                <p className="font-serif text-2xl font-semibold text-ink">
                  49&nbsp;€<span className="text-sm font-medium text-muted">/mes</span>
                </p>
              </div>

              <div className="absolute -bottom-5 -left-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-white shadow-xl">
                <CalendarIcon className="h-4 w-4 text-gold" />
                <span className="text-sm font-semibold">Agendar llamada</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
