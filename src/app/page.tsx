import Link from "next/link";
import { Hero } from "@/components/hero";
import { Faq } from "@/components/faq";
import {
  ButtonLink,
  CallToAction,
  container,
  Photo,
  SectionTitle,
  ServiceCards,
} from "@/components/ui";
import { projects } from "@/lib/content";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <section
        className={`${container} grid items-center gap-12 py-20 md:grid-cols-[1.05fr_1fr] md:gap-20 md:py-36`}
      >
        <div className="grid grid-cols-2 gap-5 sm:gap-7">
          <Photo
            src="/images/about-building.jpg"
            alt="Arquitectura de edificios"
            className="aspect-[.52] grayscale"
          />
          <Photo
            src="/images/about-interior.jpg"
            alt="Diseño de espacios y arquitectura interior"
            className="mt-16 aspect-[.52] grayscale"
          />
        </div>
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm uppercase before:h-px before:w-12 before:bg-current">
            Sobre nosotros
          </p>
          <h2 className="mb-6 text-[30px] leading-tight font-bold uppercase">
            Tu patrimonio,
            <br />
            nuestro legado
          </h2>
          <p className="mb-5 text-sm leading-7">
            En MWTRAZO somos especialistas en el saneamiento físico legal de
            predios urbanos y formalización predial. Nuestro objetivo es
            ayudarte a regularizar tu propiedad, brindándote la seguridad
            jurídica que tu familia y tu patrimonio merecen.
          </p>
          <p className="text-sm leading-7 text-neutral-600">
            Nos destacamos por nuestra estricta transparencia: todos los
            procesos son documentados, te entregamos el número de título de
            SUNARP para seguimiento directo, y te ofrecemos una garantía de
            devolución de dinero de hasta 45 días.
          </p>
          <ButtonLink href="/nosotros" className="mt-8">
            Conoce nuestra empresa
          </ButtonLink>
        </div>
      </section>
      <section className="bg-black py-20 text-white">
        <div className={container}>
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Soluciones integrales para tu propiedad"
          />
          <ServiceCards />
        </div>
      </section>
      <section
        aria-label="Especialidades"
        className="grid grid-cols-1 sm:grid-cols-3"
      >
        {[
          {
            image: "/images/portfolio-buildings.jpg",
            title: "Declaratoria de fábrica",
            href: "/servicios/declaratoria-de-fabrica",
          },
          {
            image: "/images/portfolio-house.jpg",
            title: "Independización de inmuebles",
            href: "/servicios/independizacion",
          },
          {
            image: "/images/portfolio-interior.jpg",
            title: "Subdivisión de predios",
            href: "/servicios/subdivision",
          },
        ].map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group relative block overflow-hidden bg-black text-white"
          >
            <Photo
              src={c.image}
              alt={c.title}
              className="aspect-[1.2] opacity-55 transition-opacity group-hover:opacity-85 sm:aspect-[.7]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <h2 className="absolute right-6 bottom-9 left-6 max-w-62.5 text-lg leading-7 uppercase sm:bottom-10 sm:left-8">
              {c.title}
            </h2>
          </Link>
        ))}
      </section>
      <section className={`${container} py-20 md:py-28`}>
        <SectionTitle
          eyebrow="Casos de éxito"
          title="Propiedades con un nuevo futuro"
        />
        <div className="grid gap-10 md:grid-cols-3">
          {[projects[0], projects[1], projects[5]].map((p) => (
            <article key={p.slug} className="group">
              <Link
                href={`/proyectos/${p.slug}`}
                aria-label={`Ver proyecto de la familia ${p.family}`}
              >
                <Photo
                  src={p.image}
                  alt={`Imagen referencial de vivienda en ${p.location}`}
                  className="aspect-[1.5]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-lg leading-6 font-semibold uppercase">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-500">
                  {p.location}, Lima · {p.year}
                </p>
                <p className="mt-6 text-sm leading-6">
                  Cliente: Familia {p.family}. Un caso de nuestro historial de
                  formalización predial y saneamiento físico legal.
                </p>
                <ButtonLink href={`/proyectos/${p.slug}`} className="mt-7">
                  Ver proyecto
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/proyectos"
            className="border-b border-neutral-400 pb-2 text-xs tracking-wider uppercase"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </section>
      <section id="faq" className="scroll-mt-8 bg-neutral-50 py-20">
        <div className={container}>
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Respuestas claras para tu tranquilidad"
          />
          <Faq />
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
