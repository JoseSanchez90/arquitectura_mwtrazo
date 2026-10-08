import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, CallToAction, container, Photo } from "@/components/ui";
import { contact, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p ? `Familia ${p.family} — ${p.location}` : "Proyecto no encontrado",
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main id="contenido">
      <section className={`${container} py-14`}>
        <Link
          href="/proyectos"
          className="mb-8 inline-block text-xs tracking-wide uppercase"
        >
          ← Todos los proyectos
        </Link>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <Photo
              src={p.image}
              alt={`Imagen referencial — ${p.title}`}
              className="aspect-[1.25]"
              priority
            />
            <p className="mt-3 text-[10px] text-neutral-500">
              Fotografía referencial.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest">
              {p.category} / {p.year}
            </p>
            <h1 className="text-3xl leading-tight uppercase">{p.title}</h1>
            <dl className="mt-8 space-y-5 border-y border-neutral-200 py-7">
              {[
                ["Cliente", `Familia ${p.family}`],
                ["Ubicación", `${p.location}, Lima`],
                ["Año", p.year],
                ["Tipo de proyecto", p.category],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs text-neutral-500 uppercase">{k}</dt>
                  <dd className="mt-1 text-sm">{v}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-7 text-xl">
              ¿Tu propiedad necesita formalización?
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Evaluamos tu documentación y te acompañamos durante la gestión
              técnica y legal de tu inmueble.
            </p>
            <ButtonLink href={contact.whatsapp} className="mt-7">
              Consultar con un experto
            </ButtonLink>
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
