"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

const slides = [
  {
    image: "/images/lima/portada-lima.webp",
    eyebrow: "Saneamiento físico legal",
    title: "Seguridad jurídica para tu propiedad",
    href: "/servicios",
    cta: "Nuestros servicios",
  },
  {
    image: "/images/lima/portada-departamentos.webp",
    eyebrow: "Independización SUNARP",
    title: "Cada espacio, un futuro independiente",
    href: "/servicios/independizacion",
    cta: "Conoce el servicio",
  },
  {
    image: "/images/lima/portada-patrimonio.webp",
    eyebrow: "Formalización predial",
    title: "Tu patrimonio en manos de expertos",
    href: "/proyectos",
    cta: "Casos de formalización",
  },
  {
    image: "/images/lima/portada-verificacion.webp",
    eyebrow: "Verificadores acreditados",
    title: "Tu tranquilidad comienza aquí",
    href: "/verificador-sunarp",
    cta: "Conoce a MW Trazo",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    if (
      paused ||
      hovered ||
      focused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      7000,
    );
    return () => clearInterval(timer);
  }, [paused, hovered, focused]);
  return (
    <section
      aria-label="Presentación de MW Trazo"
      aria-roledescription="carrusel"
      className="relative flex h-dvh w-full flex-col justify-center bg-black text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.image}
            aria-hidden={active !== i}
            className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${active === i ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.image}
              alt="Imagen referencial generada de una vivienda urbana inspirada en Lima, Perú"
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>
        ))}
      </div>
      <div className="relative mx-auto w-full max-w-300 px-6 pt-25 pb-24 sm:px-3.75 sm:pt-30.5 sm:pb-24 [@media(max-height:500px)]:pt-20 [@media(max-height:500px)]:pb-16">
        <div className="w-full max-w-147.5 sm:pr-20 lg:pr-0">
          <p className="mb-7 text-xs uppercase sm:mb-8 sm:text-lg [@media(max-height:500px)]:mb-3 [@media(max-height:500px)]:text-xs">
            {slides[active].eyebrow}
          </p>
          <h1 className="max-w-147.5 text-[32px] leading-[1.12] font-normal uppercase sm:text-[42px] lg:text-[48px] [@media(max-height:500px)]:text-2xl">
            {slides[active].title}
          </h1>
          <Link
            href={slides[active].href}
            className="mt-8 inline-flex min-h-13 items-center border-2 border-white/60 px-6 py-3 text-xs uppercase transition-colors hover:bg-white hover:text-black sm:text-lg lg:mt-9 [@media(max-height:500px)]:mt-4 [@media(max-height:500px)]:min-h-11 [@media(max-height:500px)]:py-2 [@media(max-height:500px)]:text-xs"
          >
            {slides[active].cta}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 flex gap-3 sm:top-1/2 sm:right-[max(40px,calc((100%-1200px)/2+40px))] sm:bottom-auto sm:left-auto sm:w-15 sm:-translate-y-1/2 sm:flex-col sm:gap-0">
        {slides.map((s, i) => (
          <button
            key={s.image}
            onClick={() => {
              setActive(i);
              setPaused(true);
            }}
            aria-label={`Diapositiva ${i + 1}: ${s.eyebrow}`}
            aria-pressed={active === i}
            className={`h-11 w-10 cursor-pointer border-t text-right text-[13px] transition-colors sm:w-full ${active === i ? "border-white text-white" : "border-white/25 text-white/45 hover:text-white"}`}
          >
            0{i + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? "Reanudar presentación" : "Pausar presentación"}
        title={paused ? "Reanudar presentación" : "Pausar presentación"}
        className="absolute right-6 bottom-6 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:bg-white/30"
      >
        {paused ? (
          <Play
            size={18}
            strokeWidth={1.75}
            className="ml-0.5"
            aria-hidden="true"
          />
        ) : (
          <Pause size={18} strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>
    </section>
  );
}
