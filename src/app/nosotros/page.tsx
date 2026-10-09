import type { Metadata } from "next";
import {
  ButtonLink,
  CallToAction,
  container,
  Icon,
  Photo,
  SectionTitle,
  Stats,
} from "@/components/ui";
import { values } from "@/lib/content";

export const metadata: Metadata = { title: "Nosotros" };

export default function About() {
  return (
    <main id="contenido">
      <section className={`${container} pt-16 pb-20`}>
        <SectionTitle
          as="h1"
          eyebrow="Sobre nosotros"
          title="Tu patrimonio, nuestro legado"
        />
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Photo
            src="/images/office.jpg"
            alt="Espacios de trabajo y arquitectura"
            className="aspect-[1.1]"
            priority
          />
          <div>
            <h2 className="mb-6 text-2xl leading-snug font-normal">
              Especialistas en saneamiento físico legal y formalización predial.
            </h2>
            <p className="text-sm leading-7">
              En MWTRAZO nacimos con la vocación de ordenar el crecimiento
              urbano y darte paz mental. Nuestro propósito no es solo entregar
              documentos: es ayudar a las familias a asegurar su futuro.
            </p>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Creemos que la formalidad es la base del desarrollo. Nuestro
              objetivo es ayudar a las personas y familias a regularizar
              legalmente sus propiedades, brindando seguridad jurídica y
              contribuyendo al desarrollo personal, familiar y profesional de
              cada uno de nuestros clientes.
            </p>
            <ButtonLink href="/verificador-sunarp" className="mt-8 ">
              Nuestros verificadores
            </ButtonLink>
          </div>
        </div>
        <div className="mt-20">
          <Stats />
        </div>
      </section>
      <section className="bg-black py-20 text-white">
        <div className={container}>
          <SectionTitle
            eyebrow="Nuestra esencia"
            title="Lo que nos caracteriza"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {values.map((v, i) => (
              <article key={v.title} className="border border-white/25 p-8">
                <Icon
                  name={i === 0 ? "plan" : i === 1 ? "shield" : "building"}
                />
                <h3 className="mt-7 mb-5 text-xl uppercase">{v.title}</h3>
                <p className="text-sm leading-7 text-neutral-400">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
