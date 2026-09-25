"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { navigation, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [displayedPath, setDisplayedPath] = useState(pathname);

  if (displayedPath !== pathname) {
    setDisplayedPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-ink/10 bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-cream",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Link href="/" aria-label="Scalix — inicio" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-violet-100 text-violet-800"
                    : "text-muted hover:bg-ink/5 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.tel(site.phones[0])}
            className="hidden items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-violet-700 sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phones[0]}
          </a>
          <Button href="/contacto" size="sm" className="hidden sm:inline-flex">
            Agendar llamada
          </Button>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper text-ink lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2.5 text-base font-medium",
                    active ? "bg-violet-100 text-violet-800" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.tel(site.phones[0])}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink/15 text-sm font-semibold text-ink"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phones[0]}
            </a>
            <Button href="/contacto" size="md" className="w-full">
              Agendar llamada
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}