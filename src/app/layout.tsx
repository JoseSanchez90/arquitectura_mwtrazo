import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/montserrat.woff2",
  variable: "--font-montserrat",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "MW Trazo | Arquitectura y formalización predial",
    template: "%s | MW Trazo",
  },
  description:
    "Especialistas en saneamiento físico legal, declaratoria de fábrica, independización y subdivisión de predios en Lima y Callao. Verificadores SUNARP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} scroll-smooth scrollbar-gutter-stable motion-reduce:scroll-auto`}
    >
      <body
        id="top"
        className="bg-white font-sans text-neutral-800 antialiased selection:bg-neutral-800 selection:text-white"
      >
        <a
          href="#contenido"
          className="fixed top-2 left-2 z-100 -translate-y-24 bg-white px-5 py-3 text-black focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <Header>
          {children}
          <Footer />
        </Header>
      </body>
    </html>
  );
}
