import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { MapPinIcon, PhoneIcon } from "@/components/icons";
import { navigation, site, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Posicionamiento y crecimiento online de negocios. Ayudamos a
              negocios locales a conseguir más visibilidad y clientes en
              Google.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-cream/90">
              <MapPinIcon className="h-4 w-4 text-gold" />
              +50 clientes recurrentes
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
              Web
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
              Servicios
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/servicios"
                    className="text-sm text-cream/75 transition-colors hover:text-white"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={site.tel(phone)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="/contacto" variant="gold" size="sm" className="mt-5">
              Agendar llamada
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Scalix · Todos los derechos reservados</p>
          <p>Posicionamiento · SEO · GEO · Páginas web</p>
        </div>
      </div>
    </footer>
  );
}