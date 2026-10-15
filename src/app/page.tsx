import { Reveal } from "@/components/reveal";
import { AnimatedArrow } from "@/components/animated-arrow";
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
import { projects, services } from "@/lib/content";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <section
        className={`${container} grid items-center gap-12 py-20 md:grid-cols-[1.05fr_1fr] md:gap-20 md:py-36`}
      >
        <div className="grid grid-cols-2 gap-5 sm:gap-7">
          <Photo
            src="/images/lima/nosotros-ciudad.webp"
            alt="Imagen referencial generada de un edificio residencial de Lima"
            className="aspect-[.52] grayscale"
          />
          <Photo
            src="/images/lima/nosotros-barrio.webp"
            alt="Imagen referencial generada de una calle residencial inspirada en Barranco, Lima"
            className="mt-16 aspect-[.52] grayscale"
          />
        </div>
        <div>
          <Reveal as="p" className="mb-5 flex items-center gap-3 text-sm uppercase before:h-px before:w-12 before:bg-current">
            Sobre nosotros
          </Reveal>
          <Reveal as="h2" className="mb-6 text-[30px] leading-tight font-bold uppercase">
            Tu patrimonio,
            <br />
            nuestro legado
          </Reveal>
          <Reveal as="p" className="mb-5 text-sm leading-7">
            En MWTRAZO somos especialistas en el saneamiento físico legal de
            predios urbanos y formalización predial. Nuestro objetivo es
            ayudarte a regularizar tu propiedad, brindándote la seguridad
            jurídica que tu familia y tu patrimonio merecen.
          </Reveal>
          <Reveal as="p" className="text-sm leading-7 text-neutral-600">
            Nos destacamos por nuestra estricta transparencia: todos los
            procesos son documentados, te entregamos el número de título de
            SUNARP para seguimiento directo, y te ofrecemos una garantía de
            devolución de dinero de hasta 45 días.
          </Reveal>
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
        id="especialidades"
        aria-label="Especialidades"
        className="grid grid-cols-1 sm:grid-cols-3"
      >
        {services.slice(0, 3).map((c) => (
          <Link
            key={c.slug}
            href={`/servicios/${c.slug}`}
            className="group relative block overflow-hidden bg-black text-white"
          >
            <Photo
              src={c.image}
              alt={c.title}
              className="aspect-square opacity-70 transition-opacity group-hover:opacity-90 sm:aspect-[.7]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <Reveal as="h2" className="absolute right-6 bottom-9 left-6 max-w-62.5 text-lg leading-7 uppercase sm:bottom-10 sm:left-8">
              {c.title}
            </Reveal>
          </Link>
        ))}
      </section>
      <section className={`${container} py-20 md:py-28`}>
        <SectionTitle
          eyebrow="Casos de formalización"
          title="Propiedades con un nuevo futuro"
        />
        <p className="mb-8 max-w-2xl text-xs leading-6 text-neutral-500">
          Casos de servicios de saneamiento físico legal. Las imágenes son
          referenciales, generadas con IA; no corresponden a los inmuebles de
          los clientes ni a obras construidas por MW Trazo.
        </p>
        <div className="grid gap-10 md:grid-cols-3">
          {[projects[0], projects[1], projects[5]].map((p) => (
            <article key={p.slug} className="group">
              <Link
                href={`/proyectos/${p.slug}`}
                aria-label={`Ver proyecto de la familia ${p.family}`}
              >
                <Photo
                  src={p.image}
                  alt={`Vivienda limeña generada como referencia para el servicio de ${p.title.toLowerCase()}`}
                  className="aspect-[1.5]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="p-6">
                <Reveal as="h3" className="text-lg leading-6 font-semibold uppercase">
                  {p.title}
                </Reveal>
                <Reveal as="p" className="mt-2 text-xs text-neutral-500">
                  {p.location}, Lima · {p.year}
                </Reveal>
                <Reveal as="p" className="mt-6 text-sm leading-6">
                  Cliente: Familia {p.family}. Un caso de nuestro historial de
                  formalización predial y saneamiento físico legal.
                </Reveal>
                <ButtonLink href={`/proyectos/${p.slug}`} className="mt-7">
                  Ver caso
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/proyectos"
            className="group/arrow border-b border-neutral-400 pb-2 text-xs tracking-wider uppercase"
          >
            Ver todos los casos <AnimatedArrow />
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
