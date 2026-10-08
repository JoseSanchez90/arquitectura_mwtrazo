import type { Metadata } from "next";
import {
  ButtonLink,
  CallToAction,
  container,
  Icon,
  Photo,
  SectionTitle,
} from "@/components/ui";
import { contact, verifierFunctions } from "@/lib/content";

export const metadata: Metadata = { title: "Verificador SUNARP acreditado" };
export default function Verifier() {
  return (
    <main id="contenido">
      <section className={`${container} pt-16 pb-24`}>
        <SectionTitle
          as="h1"
          eyebrow="Acreditación profesional"
          title="Verificador SUNARP acreditado"
        />
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Photo
            src="/images/plans.jpg"
            alt="Planos y trabajo técnico de arquitectura"
            className="aspect-[.95] grayscale"
            priority
          />
          <div>
            <h2 className="mb-6 text-2xl">
              El nexo entre tu propiedad y la seguridad jurídica.
            </h2>
            <p className="mb-5 text-sm leading-7">
              Contamos con profesionales autorizados para regularizar
              construcciones y gestionar trámites técnicos registrales bajo el
              amparo de la Ley 27157.
            </p>
            <h2 className="mt-8 mb-4 text-xl">
              ¿Qué es un verificador SUNARP?
            </h2>
            <p className="mb-5 text-sm leading-7 text-neutral-600">
              Es un profesional (arquitecto o ingeniero) especializado que
              cuenta con la autorización legal del Registro de Predios para
              validar la realidad física de un inmueble.
            </p>
            <p className="mb-5 text-sm leading-7 text-neutral-600">
              A diferencia de una gestión municipal convencional, el verificador
              tiene la facultad de realizar saneamientos directos, permitiendo
              que construcciones que no cumplen con parámetros urbanísticos
              rígidos puedan ser inscritas legalmente.
            </p>
            <p className="text-sm leading-7 text-neutral-600">
              En MWTRAZO, nuestros verificadores asumen la responsabilidad
              técnica del expediente, garantizando que tu propiedad esté
              conforme a ley.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black py-20 text-white">
        <div className={container}>
          <SectionTitle
            eyebrow="Alcance técnico y legal"
            title="Funciones del verificador"
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {verifierFunctions.map(([title, text], i) => (
              <article key={title} className="border border-white/25 p-8">
                <Icon name={["building", "plan", "shield", "land"][i % 4]} />
                <h3 className="mt-6 mb-4 text-lg uppercase">{title}</h3>
                <p className="text-sm leading-7 text-neutral-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={`${container} py-24`}>
        <SectionTitle
          eyebrow="Nuestra garantía"
          title="Tu patrimonio en buenas manos"
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Pagos según resultados",
              "Tu inversión está protegida por el avance real del proceso.",
            ],
            [
              "Gestión completa",
              "Nos encargamos de todo el papeleo. Tú solo firmas cuando corresponde.",
            ],
            [
              "Experiencia acreditada",
              "Nuestros verificadores están debidamente inscritos en el índice de la SUNARP.",
            ],
            [
              "Financiamiento directo",
              "Ofrecemos facilidades de pago en cuotas sin intereses.",
            ],
          ].map(([t, d], i) => (
            <div key={t}>
              <span className="text-4xl font-light text-neutral-400">
                0{i + 1}
              </span>
              <h3 className="mt-5 mb-4 text-base font-semibold uppercase">
                {t}
              </h3>
              <p className="text-sm leading-7 text-neutral-600">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="mb-6 text-sm">
            Analizamos la situación de tu predio antes de cualquier compromiso.
          </p>
          <ButtonLink href={contact.whatsapp}>
            Solicitar evaluación gratuita ↗
          </ButtonLink>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
