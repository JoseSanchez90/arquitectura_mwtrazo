import { Reveal } from "@/components/reveal";
import { AnimatedArrow } from "@/components/animated-arrow";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ButtonLink,
  CallToAction,
  CheckList,
  container,
  Photo,
  SectionTitle,
} from "@/components/ui";
import { contact, services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s?.title ?? "Servicio no encontrado",
    description: s?.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <main id="contenido">
      <div className={`${container} py-12 md:py-16`}>
        <Link
          href="/servicios"
          className="group/arrow mb-8 inline-block text-xs uppercase tracking-wide text-neutral-500 hover:text-black"
        >
          <AnimatedArrow direction="left" /> Todos los servicios
        </Link>
        <div className="grid gap-12 lg:grid-cols-[2.1fr_1fr]">
          <article>
            <Photo
              src={s.image}
              alt={s.title}
              className="aspect-square"
              priority
            />
            <Reveal as="p" className="mt-8 text-xs tracking-widest text-neutral-500 uppercase">
              {s.eyebrow}
            </Reveal>
            <Reveal as="h1" className="mt-4 text-[30px] leading-tight font-normal uppercase sm:text-[40px]">
              {s.title}
            </Reveal>
            <Reveal as="p" className="mt-6 border-b border-neutral-200 pb-8 text-lg leading-8">
              {s.description}
            </Reveal>
            <Reveal as="h2" className="mt-10 mb-5 text-2xl font-medium">{s.question}</Reveal>
            {s.paragraphs.map((p) => (
              <Reveal as="p" key={p} className="mb-5 text-sm leading-7 text-neutral-600">
                {p}
              </Reveal>
            ))}
            {s.includes && (
              <section className="mt-12">
                <Reveal as="h2" className="mb-6 text-2xl">
                  ¿Qué incluye nuestro servicio integral?
                </Reveal>
                <CheckList items={s.includes} />
              </section>
            )}
            {slug === "subdivision" && (
              <section className="mt-12">
                <Reveal as="h2" className="mb-7 text-2xl uppercase">Rutas de gestión</Reveal>
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Vía municipal",
                      items: [
                        "Solicitud dirigida al alcalde",
                        "Copia literal y DNI del titular",
                        "Planos del predio y lotes resultantes",
                        "Memoria descriptiva y FUHU",
                        "Pago de trámite municipal",
                      ],
                    },
                    {
                      title: "Vía SUNARP directo",
                      items: [
                        "Mediante verificador inscrito (Ley 27157)",
                        "Formulario registral y solicitud",
                        "Planos de ubicación y distribución",
                        "Plano de subdivisión especializado",
                        "Informe técnico y memoria descriptiva",
                        "Declaración jurada y pago de tasa",
                      ],
                    },
                  ].map((r) => (
                    <div
                      key={r.title}
                      className="border border-neutral-200 p-6"
                    >
                      <Reveal as="h3" className="mb-5 font-semibold">{r.title}</Reveal>
                      <CheckList items={r.items} />
                    </div>
                  ))}
                </div>
              </section>
            )}
            {s.requirements && (
              <section className="mt-12">
                <Reveal as="h2" className="mb-6 text-2xl">
                  {slug === "subdivision"
                    ? "Documentación técnica requerida"
                    : "Requisitos principales"}
                </Reveal>
                <Reveal as="p" className="mb-6 text-sm leading-7 text-neutral-600">
                  Nuestros verificadores evaluarán la documentación de tu
                  propiedad para definir el trámite correspondiente.
                </Reveal>
                <div className="grid gap-5 sm:grid-cols-2">
                  {s.requirements.map(([title, text]) => (
                    <div
                      className="border-t border-neutral-300 pt-5"
                      key={title}
                    >
                      <Reveal as="h3" className="text-sm font-semibold uppercase">
                        {title}
                      </Reveal>
                      <Reveal as="p" className="mt-2 text-sm leading-6 text-neutral-600">
                        {text}
                      </Reveal>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {s.closing && (
              <section className="mt-12 border-l-2 border-black bg-neutral-50 p-7">
                <Reveal as="h2" className="mb-4 text-xl">{s.closing.title}</Reveal>
                <Reveal as="p" className="text-sm leading-7">{s.closing.text}</Reveal>
              </section>
            )}
          </article>
          <aside className="space-y-10">
            <div className="border border-neutral-200 p-7">
              <Reveal as="h2" className="mb-7 text-lg font-semibold uppercase">
                Beneficios clave
              </Reveal>
              <CheckList items={s.benefits} />
              <ButtonLink
                href={`${contact.whatsapp}?text=${encodeURIComponent(`Hola, quisiera consultar sobre ${s.title.toLowerCase()}.`)}`}
                className="group/arrow mt-8 w-full"
              >
                Consultar mi caso <AnimatedArrow direction="diagonal" />
              </ButtonLink>
            </div>
            <div>
              <Reveal as="h2" className="mb-5 text-lg font-semibold uppercase">
                Nuestros servicios
              </Reveal>
              {services.map((other) => (
                <Link
                  key={other.slug}
                  href={`/servicios/${other.slug}`}
                  aria-current={other.slug === slug ? "page" : undefined}
                  className={`group/arrow flex items-center justify-between gap-3 border-b border-neutral-200 py-5 text-sm ${other.slug === slug ? "font-semibold" : "text-neutral-500 hover:text-black"}`}
                >
                  {other.shortTitle}
                  <AnimatedArrow />
                </Link>
              ))}
            </div>
            <div className="bg-black p-7 text-white">
              <Reveal as="h2" className="mb-4 text-xl uppercase">
                Tu propiedad,
                <br />
                nuestra experiencia
              </Reveal>
              <Reveal as="p" className="text-sm leading-7 text-neutral-400">
                Profesionales inscritos en SUNARP. Gestión técnica y legal con
                total transparencia.
              </Reveal>
              <Link
                href="/verificador-sunarp"
                className="group/arrow mt-7 inline-block border-b pb-2 text-xs uppercase"
              >
                Conoce más <AnimatedArrow />
              </Link>
            </div>
          </aside>
        </div>
      </div>
      {slug === "independizacion" && (
        <section className={`${container} pt-8 pb-24`}>
          <SectionTitle
            eyebrow="Planes de inversión"
            title="Un plan para tu propiedad"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {[
              ["Económico", "5"],
              ["Pro", "6"],
              ["Premium", "8"],
            ].map(([name, price], i) => (
              <article
                key={name}
                className={`border p-10 text-center ${i === 1 ? "border-[#159dc6] bg-[#159dc6] text-white" : "border-neutral-300"}`}
              >
                <Reveal as="h3" className="text-sm font-bold uppercase">Plan {name}</Reveal>
                <Reveal as="p" className="my-7 text-5xl font-semibold">S/. {price}</Reveal>
                <Reveal as="p" className="text-sm">por m² de área techada</Reveal>
                <div className="my-8 h-px bg-current opacity-20" />
                <Reveal as="p" className="text-sm leading-7">
                  Consulta el alcance del plan para tu inmueble con nuestros
                  especialistas.
                </Reveal>
                <ButtonLink
                  href={`${contact.whatsapp}?text=${encodeURIComponent(`Hola, quiero cotizar el plan ${name} de independización a S/. ${price} por m².`)}`}
                  className="mt-8"
                >
                  Cotizar mi predio
                </ButtonLink>
              </article>
            ))}
          </div>
          <Reveal as="p" className="mt-7 text-center text-xs text-neutral-500">
            Facilidades de pago en cuotas sin intereses. Confirma el alcance y
            la cotización de tu caso con el equipo.
          </Reveal>
        </section>
      )}
      <CallToAction />
    </main>
  );
}
