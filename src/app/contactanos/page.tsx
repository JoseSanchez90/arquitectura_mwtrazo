import { Reveal } from "@/components/reveal";
import { AnimatedArrow } from "@/components/animated-arrow";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CheckList, container, SectionTitle } from "@/components/ui";
import { contact } from "@/lib/content";
import { SiGooglemaps } from "react-icons/si";

export const metadata: Metadata = { title: "Contáctanos" };
export default function Contact() {
  return (
    <main id="contenido">
      <section className={`${container} pt-16 pb-24`}>
        <SectionTitle
          as="h1"
          eyebrow="Contáctanos"
          title="Iniciemos el saneamiento de tu propiedad"
        />
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
          <aside>
            <Reveal as="h2" className="mb-8 text-3xl font-semibold">Conversemos</Reveal>
            <div className="space-y-7 text-sm">
              <div>
                <Reveal as="p" className="mb-2 text-[11px] tracking-widest text-neutral-500 uppercase">
                  Ubicación
                </Reveal>
                <a
                  href={contact.map}
                  target="_blank"
                  rel="noreferrer"
                  className="group/arrow  hover:underline"
                >
                  {contact.location} <AnimatedArrow direction="diagonal" />
                </a>
              </div>
              <div>
                <Reveal as="p" className="mb-2 text-[11px] tracking-widest text-neutral-500 uppercase">
                  Mensaje directo
                </Reveal>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group/arrow hover:underline"
                >
                  WhatsApp <AnimatedArrow direction="diagonal" />
                </a>
              </div>
              <div>
                <Reveal as="p" className="mb-2 text-[11px] tracking-widest text-neutral-500 uppercase">
                  Correo electrónico
                </Reveal>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="mt-10 border-t border-neutral-200 pt-8">
              <Reveal as="h3" className="mb-5 text-sm font-semibold uppercase">
                Nuestro compromiso
              </Reveal>
              <CheckList
                items={[
                  "Garantía de devolución de 45 días",
                  "Ingreso de títulos en aproximadamente una semana",
                  "Verificadores acreditados SUNARP",
                ]}
              />
            </div>
          </aside>
          <ContactForm />
        </div>
        <blockquote className="mt-16 border-t border-neutral-200 pt-8 text-sm leading-7 text-neutral-500">
          “En MWTRAZO, antes de iniciar cualquier servicio revisamos toda la
          documentación para evitar inconvenientes futuros.”
        </blockquote>
      </section>
      <section className="bg-neutral-100 w-full px-6 py-14 text-center flex flex-col items-center">
        <Reveal as="p" className="text-xs tracking-widest uppercase">
          Lima y Callao · Perú
        </Reveal>
        <Reveal as="h2" className="mt-5 text-2xl font-light uppercase">
          Cerca de ti y de tu propiedad
        </Reveal>
        <a
          className="group/arrow w-fit mt-6 flex justify-center items-center border-b border-neutral-500 gap-2 pb-1 text-xs uppercase"
          href={contact.map}
          target="_blank"
          rel="noreferrer"
        >
          <Reveal as="p">Ver ubicación en Google Maps</Reveal>{" "}
          <SiGooglemaps className="w-4 h-4" />{" "}
          <AnimatedArrow direction="diagonal" />
        </a>
      </section>
    </main>
  );
}
