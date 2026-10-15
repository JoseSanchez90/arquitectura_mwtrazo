import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import { CallToAction, container, SectionTitle, Stats } from "@/components/ui";

export const metadata: Metadata = { title: "Proyectos y casos de éxito" };
export default function Projects() {
  return (
    <main id="contenido">
      <section className={`${container} pt-16 pb-24`}>
        <SectionTitle
          as="h1"
          eyebrow="Servicios realizados"
          title="Conoce nuestros casos de éxito"
        />
        <Reveal as="p" className="mb-14 max-w-2xl text-sm leading-7 sm:ml-21.5">
          Explora nuestro historial de formalización predial. Más de 250
          servicios completados respaldan nuestra capacidad técnica para
          gestionar trámites ante SUNARP. Estos casos corresponden a saneamiento
          físico legal, no a obras de construcción de MW Trazo.
        </Reveal>
        <ProjectGallery />
        <div className="mt-20">
          <Stats />
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
