import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Scalix — Posicionamiento y crecimiento online de negocios",
    template: "%s · Scalix",
  },
  description:
    "Posicionamos y hacemos crecer negocios locales en Internet: Google Maps, SEO, GEO, páginas web profesionales, hosting y dominio. Planes desde 49 €/mes.",
};

export const viewport: Viewport = {
  themeColor: "#1d1133",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${manrope.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}