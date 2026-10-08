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
          eyebrow="Nuestros proyectos"
          title="Conoce nuestros casos de éxito"
        />
        <p className="mb-14 max-w-2xl text-sm leading-7 sm:ml-21.5">
          Explora nuestro historial de formalización predial. Más de 250
          proyectos completados respaldan nuestra capacidad técnica para
          resolver los casos más complejos ante SUNARP.
        </p>
        <ProjectGallery />
        <div className="mt-20">
          <Stats />
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
