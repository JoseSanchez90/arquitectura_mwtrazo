import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";
import {
  ButtonLink,
  CallToAction,
  container,
  Icon,
  Photo,
  SectionTitle,
} from "@/components/ui";
import { services, values } from "@/lib/content";

export const metadata: Metadata = { title: "Nuestros servicios" };
export default function Services() {
  return (
    <main id="contenido">
      <section className={`${container} pt-16 pb-24`}>
        <SectionTitle
          as="h1"
          eyebrow="Nuestros servicios"
          title="Ingeniería legal para tu propiedad"
        />
        <Reveal as="p" className="mb-16 max-w-2xl text-sm leading-7 sm:ml-21.5">
          Especialistas en el saneamiento físico legal de predios urbanos.
          Brindamos seguridad jurídica para que tu propiedad alcance su máximo
          potencial. Cada propiedad es única: analizamos tu caso a detalle para
          ofrecerte la ruta legal y técnica más rápida y segura.
        </Reveal>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.slug} className="group">
              <Photo
                src={s.image}
                alt={s.shortTitle}
                className="aspect-[1.55]"
                priority={i < 2}
              />
              <div className="px-2 pt-7 sm:px-6">
                <Reveal as="p" className="mb-3 text-[11px] tracking-widest text-neutral-500 uppercase">
                  0{i + 1} / {s.eyebrow}
                </Reveal>
                <Reveal as="h2" className="text-2xl leading-tight uppercase">{s.title}</Reveal>
                <Reveal as="p" className="mt-5 text-sm leading-7 text-neutral-600">
                  {s.description}
                </Reveal>
                <ButtonLink href={`/servicios/${s.slug}`} className="mt-6">
                  Explorar servicio
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-black py-20 text-white">
        <div className={`${container} grid gap-10 md:grid-cols-3`}>
          {values.map((v) => (
            <div key={v.title}>
              <Icon name="shield" />
              <Reveal as="h2" className="mt-6 mb-4 text-xl uppercase">{v.title}</Reveal>
              <Reveal as="p" className="text-sm leading-7 text-neutral-400">{v.text}</Reveal>
            </div>
          ))}
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
