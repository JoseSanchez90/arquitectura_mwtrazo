"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { contact, services } from "@/lib/content";

export function Header({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 50);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  function close() {
    dialog.current?.close();
    setOpen(false);
    document.body.style.overflow = "";
    trigger.current?.focus({ preventScroll: true });
  }
  function show() {
    dialog.current?.showModal();
    setOpen(true);
    document.body.style.overflow = "hidden";
  }
  const activeLine =
    "after:pointer-events-none after:absolute after:top-1/2 after:left-0 after:h-px after:w-[150px] after:bg-white/80";
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const navLink = (href: string) =>
    `relative block py-[15px] text-[17px] uppercase transition-colors hover:text-neutral-400 ${isActive(href) ? activeLine : ""}`;
  const currentPage = (href: string) =>
    pathname === href ? ("page" as const) : undefined;
  return (
    <div className="overflow-x-clip">
      <header
        data-scrolled={scrolled}
        className={`fixed inset-x-0 top-0 z-30 text-white transition-[background-color,translate] duration-300 ease-in-out motion-reduce:transition-none ${scrolled ? "bg-black/75 backdrop-blur-sm" : pathname === "/" ? "bg-transparent" : "bg-black"} ${open ? "-translate-x-[min(320px,90vw)]" : "translate-x-0"}`}
      >
        <div
          className={`mx-auto flex max-w-300 items-center justify-between px-6 transition-[height] duration-300 ease-in-out motion-reduce:transition-none sm:px-10 xl:px-7.5 ${scrolled ? "h-17.5" : "h-25 sm:h-30.5"}`}
        >
          <Link
            href="/"
            aria-label="MW Trazo — Inicio"
            className="text-[25px] font-normal tracking-tight"
          >
            MW<span className="font-semibold">TRAZO</span>
          </Link>
          <button
            ref={trigger}
            onClick={show}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="navigation-drawer"
            className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-1.25 text-white hover:text-neutral-300"
          >
            <Menu size={30} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </header>
      <div
        data-menu-open={open}
        className={`relative transition-transform duration-300 ease-in-out motion-reduce:transition-none ${open ? "-translate-x-[min(320px,90vw)]" : "translate-x-0"}`}
      >
        {pathname !== "/" && (
          <div aria-hidden="true" className="h-25 sm:h-30.5" />
        )}
        {children}
      </div>
      <dialog
        ref={dialog}
        id="navigation-drawer"
        aria-label="Menú principal"
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[320px] max-w-[90vw] translate-x-full bg-black p-0 text-white transition-[translate,display,overlay] transition-discrete duration-300 ease-in-out open:translate-x-0 starting:open:translate-x-full backdrop:bg-black/60 backdrop:opacity-0 backdrop:transition-opacity backdrop:duration-300 open:backdrop:opacity-100 starting:open:backdrop:opacity-0 motion-reduce:transition-none"
      >
        <div className="relative flex min-h-full flex-col px-7 pt-7 pb-9 sm:px-10">
          <button
            aria-label="Cerrar menú"
            onClick={close}
            className="absolute top-3 right-3 flex h-10 w-10 cursor-pointer items-center justify-center text-white transition-colors hover:text-neutral-400 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X size={22} strokeWidth={1.75} aria-hidden="true" />
          </button>
          <nav aria-label="Navegación principal">
            <Link
              onClick={close}
              href="/"
              aria-current={currentPage("/")}
              className={navLink("/")}
            >
              Inicio
            </Link>
            <Link
              onClick={close}
              href="/nosotros"
              aria-current={currentPage("/nosotros")}
              className={navLink("/nosotros")}
            >
              Nosotros
            </Link>
            <Link
              onClick={close}
              href="/proyectos"
              aria-current={currentPage("/proyectos")}
              className={navLink("/proyectos")}
            >
              Proyectos
            </Link>
            <details
              key={pathname}
              open={isActive("/servicios")}
              className="group"
            >
              <summary
                className={`relative flex cursor-pointer list-none items-center justify-between py-3.75 text-[17px] uppercase [&::-webkit-details-marker]:hidden ${isActive("/servicios") ? activeLine : ""}`}
              >
                Servicios{" "}
                <ChevronDown
                  size={22}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <div className="mb-4 border-l border-white/25 pl-4">
                <Link
                  onClick={close}
                  href="/servicios"
                  aria-current={currentPage("/servicios")}
                  className={`relative block py-2 text-sm hover:text-white ${pathname === "/servicios" ? `text-white ${activeLine}` : "text-neutral-300"}`}
                >
                  Todos los servicios
                </Link>
                {services.map((s) => (
                  <Link
                    onClick={close}
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    aria-current={currentPage(`/servicios/${s.slug}`)}
                    className={`relative block py-2 text-xs leading-5 hover:text-white ${pathname === `/servicios/${s.slug}` ? `text-white ${activeLine}` : "text-neutral-400"}`}
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              onClick={close}
              href="/verificador-sunarp"
              aria-current={currentPage("/verificador-sunarp")}
              className={navLink("/verificador-sunarp")}
            >
              Verificador SUNARP
            </Link>
            <Link
              onClick={close}
              href="/preguntas-frecuentes"
              aria-current={currentPage("/preguntas-frecuentes")}
              className={navLink("/preguntas-frecuentes")}
            >
              Preguntas frecuentes
            </Link>
            <Link
              onClick={close}
              href="/contactanos"
              aria-current={currentPage("/contactanos")}
              className={navLink("/contactanos")}
            >
              Contáctanos
            </Link>
          </nav>
          <div className="mt-auto pt-16 text-xs leading-7 text-neutral-400">
            <a href={contact.whatsapp}>{contact.phone}</a>
            <p>{contact.location}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
