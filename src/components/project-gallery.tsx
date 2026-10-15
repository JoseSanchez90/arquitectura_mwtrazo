"use client";

import { Reveal } from "@/components/reveal";
import { AnimatedArrow } from "@/components/animated-arrow";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/content";
import { Photo } from "./ui";

export function ProjectGallery() {
  const [filter, setFilter] = useState("Todos");
  const filtered = projects.filter(
    (p) => filter === "Todos" || p.category === filter,
  );
  return (
    <>
      <div
        className="mb-10 flex flex-wrap gap-x-8 gap-y-3"
        role="group"
        aria-label="Filtrar proyectos"
      >
        {["Todos", "Residencial", "Ampliación", "Técnico"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`cursor-pointer border-b py-2 text-xs tracking-wider uppercase transition-colors ${filter === f ? "border-black text-black" : "border-transparent text-neutral-500 hover:text-black"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <Reveal as="p" className="sr-only" aria-live="polite">
        {filtered.length} proyectos
      </Reveal>
      <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            className="group/arrow group block"
            key={p.slug}
            href={`/proyectos/${p.slug}`}
          >
            <Photo
              src={p.image}
              alt={`Imagen referencial — ${p.title}`}
              className="aspect-[.88]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <Reveal as="h2" className="text-[15px] leading-6">
                  Familia {p.family} · {p.location}
                </Reveal>
                <Reveal as="p" className="mt-1 text-[10px] tracking-wider text-neutral-500 uppercase">
                  {p.category} / {p.year}
                </Reveal>
              </div>
              <AnimatedArrow direction="diagonal" className="size-5" />
            </div>
            <Reveal as="p" className="mt-3 text-xs leading-5 text-neutral-500">{p.title}</Reveal>
          </Link>
        ))}
      </div>
      <Reveal as="p" className="mt-10 text-[11px] text-neutral-500">
        Imágenes generadas con IA e inspiradas en viviendas de Lima. Ilustran
        nuestros servicios; no muestran los inmuebles de los clientes ni obras
        construidas por MW Trazo.
      </Reveal>
    </>
  );
}
