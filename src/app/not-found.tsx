import { Reveal } from "@/components/reveal";
import { ButtonLink, container } from "@/components/ui";

export default function NotFound() {
  return (
    <main id="contenido" className={`${container} py-28 text-center`}>
      <Reveal as="p" className="text-8xl font-light text-neutral-300">404</Reveal>
      <Reveal as="h1" className="mt-8 text-3xl uppercase">Página no encontrada</Reveal>
      <Reveal as="p" className="mt-5 text-sm text-neutral-500">
        La página que buscas no está disponible. Puedes volver al inicio o
        explorar nuestros servicios.
      </Reveal>
      <ButtonLink href="/" className="mt-9">
        Volver al inicio
      </ButtonLink>
    </main>
  );
}
