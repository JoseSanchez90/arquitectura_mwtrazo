"use client";

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
      <p className="sr-only" aria-live="polite">
        {filtered.length} proyectos
      </p>
      <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            className="group block"
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
                <h2 className="text-[15px] leading-6">
                  Familia {p.family} · {p.location}
                </h2>
                <p className="mt-1 text-[10px] tracking-wider text-neutral-500 uppercase">
                  {p.category} / {p.year}
                </p>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
            <p className="mt-3 text-xs leading-5 text-neutral-500">{p.title}</p>
          </Link>
        ))}
      </div>
      <p className="mt-10 text-[11px] text-neutral-500">
        Fotografías referenciales. La información de los casos corresponde al
        registro de proyectos de MWTRAZO.
      </p>
    </>
  );
}
