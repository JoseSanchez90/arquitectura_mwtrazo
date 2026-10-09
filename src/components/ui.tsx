import Image from "next/image";
import Link from "next/link";
import { CircleArrowUp } from "lucide-react";
import { contact, services, stats } from "@/lib/content";
import { FaWhatsapp } from "react-icons/fa";

export const container =
  "mx-auto w-full max-w-[1200px] px-6 sm:px-10 xl:px-[30px]";
export const button =
  "inline-flex min-h-13 items-center justify-center gap-3 border-2 border-current/45 px-6 py-3 text-[13px] font-normal uppercase tracking-wide transition-colors hover:bg-neutral-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500";

export function ButtonLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${button} ${className}`}>
      {children}
    </Link>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  as = "h2",
  className = "",
}: {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Heading = as;
  return (
    <div className={`mb-14 md:mb-16 ${className}`}>
      <p className="mb-7 flex items-center gap-4 text-sm font-bold uppercase sm:text-lg">
        <span className="h-px w-10 shrink-0 bg-current sm:w-17.5" />
        {eyebrow}
      </p>
      <Heading className="max-w-185 text-[30px] leading-[1.13] font-normal uppercase sm:ml-21.5 sm:text-[42px] lg:text-5xl">
        {title}
      </Heading>
    </div>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}

export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-14 w-14 ${className}`}
    >
      {name === "building" ? (
        <>
          <path d="M9 56h46M16 56V16h23v40M39 27h10v29M11 16l16-9 17 9M24 56V43h8v13" />
          <path d="M23 23h8m-8 8h8m-8 6h8m11-2h3m-3 8h3" />
        </>
      ) : name === "plan" ? (
        <>
          <path d="M8 9h48v46H8zM8 29h23V9M31 29v26M31 40h25M8 43h13M43 9v19h13" />
          <path d="M8 4h48M3 9v46M51 50h5" />
        </>
      ) : name === "land" ? (
        <>
          <path d="m6 23 25-14 27 14-26 15zM6 23v20l26 15 26-15V23M32 38v20M19 16l26 15v20M19 31l26-15M6 43l26-15 26 15" />
        </>
      ) : name === "arrow" ? (
        <>
          <path d="M12 32h39M37 18l14 14-14 14" />
        </>
      ) : (
        <>
          <path d="M32 5 53 14v18c0 12-10 21-21 27C21 53 11 44 11 32V14z" />
          <path d="m22 31 7 7 15-16" />
        </>
      )}
    </svg>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-10 border-y border-neutral-200 py-10 md:grid-cols-4">
      {stats.map(([n, t]) => (
        <div key={t}>
          <p className="text-4xl font-light md:text-5xl">{n}</p>
          <p className="mt-3 text-[10px] tracking-[.13em] uppercase sm:text-xs">
            {t}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <Link
          href={`/servicios/${s.slug}`}
          key={s.slug}
          className="group flex flex-col border border-white/25 p-7 transition-colors hover:border-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-white"
        >
          <Icon name={s.icon} />
          <h3 className="mt-7 mb-4 text-lg leading-7 uppercase">
            {s.shortTitle}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            {s.description}
          </p>
          <span className="mt-auto flex items-center gap-3 pt-7 text-xs uppercase tracking-wider text-white">
            Ver servicio{" "}
            <span className="transition-transform group-hover:translate-x-2">
              →
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-800 px-6 py-24 text-center md:py-32">
      <Image
        src="/images/contact-background.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <h2 className="mx-auto max-w-2xl text-[30px] leading-tight font-normal uppercase sm:text-[36px] text-white">
        Inicia tu formalización hoy
      </h2>
      <p className="mx-auto mt-8 max-w-150 text-sm leading-relaxed text-white">
        Conversemos sobre tu caso. Revisamos toda tu documentación
        preventivamente para asegurar el éxito de tu trámite, con rapidez y
        total transparencia en cada paso.
      </p>
      <ButtonLink
        href="/contactanos"
        className="mt-12 text-white hover:bg-white hover:text-zinc-950"
      >
        Contáctanos
      </ButtonLink>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div
        className={`${container} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.3fr_1fr]`}
      >
        <div>
          <Link href="/" className="text-2xl tracking-tight">
            MW<span className="font-semibold">TRAZO</span>
          </Link>
          <p className="mt-5 max-w-xs text-xs leading-6 text-neutral-400">
            Especialistas en saneamiento físico legal y formalización predial.
            Seguridad jurídica para tu patrimonio.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold tracking-widest uppercase">
            Empresa
          </p>
          <div className="flex flex-col gap-3 text-xs text-neutral-400">
            {[
              ["Nosotros", "/nosotros"],
              ["Casos de éxito", "/proyectos"],
              ["Verificador SUNARP", "/verificador-sunarp"],
              ["Preguntas frecuentes", "/preguntas-frecuentes"],
            ].map(([t, h]) => (
              <Link className="hover:text-white" key={h} href={h}>
                {t}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold tracking-widest uppercase">
            Servicios
          </p>
          <div className="flex flex-col gap-3 text-xs text-neutral-400">
            {services.map((s) => (
              <Link
                className="hover:text-white"
                key={s.slug}
                href={`/servicios/${s.slug}`}
              >
                {s.shortTitle}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold tracking-widest uppercase">
            Contacto
          </p>
          <div className="flex flex-col gap-3 text-xs text-neutral-400">
            <a
              href={contact.map}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              {contact.location}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-white">
              {contact.email}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-white"
            >
              <FaWhatsapp size={16} strokeWidth={2} aria-hidden="true" />
              Whatsapp
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${container} flex flex-wrap items-center justify-between gap-4 border-t border-white/15 py-7 text-[11px] text-neutral-400`}
      >
        <p>© 2026 MWTRAZO. Todos los derechos reservados.</p>
        <a
          href="#top"
          aria-label="Volver arriba"
          title="Volver arriba"
          className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <CircleArrowUp size={32} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((t) => (
        <li className="flex gap-3 text-sm leading-6" key={t}>
          <span aria-hidden="true" className="shrink-0">
            ✓
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}
