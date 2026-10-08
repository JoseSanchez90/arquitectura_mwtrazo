import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CheckList, container, SectionTitle } from "@/components/ui";
import { contact } from "@/lib/content";

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
            <h2 className="mb-8 text-3xl font-semibold">Conversemos</h2>
            <div className="space-y-7 text-sm">
              <div>
                <p className="mb-2 text-[11px] tracking-widest text-neutral-500 uppercase">
                  Ubicación
                </p>
                <a
                  href={contact.map}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-7 hover:underline"
                >
                  {contact.location} ↗
                </a>
              </div>
              <div>
                <p className="mb-2 text-[11px] tracking-widest text-neutral-500 uppercase">
                  WhatsApp directo
                </p>
                <a href={contact.whatsapp} className="hover:underline">
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className="mb-2 text-[11px] tracking-widest text-neutral-500 uppercase">
                  Correo electrónico
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="mt-10 border-t border-neutral-200 pt-8">
              <h3 className="mb-5 text-sm font-semibold uppercase">
                Nuestro compromiso
              </h3>
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
      <section className="bg-neutral-100 px-6 py-14 text-center">
        <p className="text-xs tracking-widest uppercase">
          Lima y Callao · Perú
        </p>
        <h2 className="mt-5 text-2xl font-light uppercase">
          Cerca de ti y de tu propiedad
        </h2>
        <a
          className="mt-6 inline-block border-b border-neutral-500 pb-2 text-xs uppercase"
          href={contact.map}
          target="_blank"
          rel="noreferrer"
        >
          Ver ubicación en Google Maps ↗
        </a>
      </section>
    </main>
  );
}
