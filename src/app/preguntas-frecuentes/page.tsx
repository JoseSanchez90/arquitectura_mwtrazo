import type { Metadata } from "next";
import { Faq } from "@/components/faq";
import { CallToAction, container, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Preguntas frecuentes" };
export default function FaqPage() {
  return (
    <main id="contenido">
      <section className={`${container} pt-16 pb-24`}>
        <SectionTitle
          as="h1"
          eyebrow="Preguntas frecuentes"
          title="Encuentra respuestas a tus preguntas"
        />
        <Faq />
      </section>
      <CallToAction />
    </main>
  );
}
