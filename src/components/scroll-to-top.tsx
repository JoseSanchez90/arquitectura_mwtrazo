"use client";

import Link from "next/link";
import { CircleArrowUp } from "lucide-react";
import type { ReactNode } from "react";

function scrollToTop() {
  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname + window.location.search,
    );
  }
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
}

export function HomeLink({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="MW Trazo — Inicio"
      className={className}
      onClick={(event) => {
        if (
          window.location.pathname === "/" &&
          event.button === 0 &&
          !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
        ) {
          event.preventDefault();
          scrollToTop();
        }
      }}
    >
      {children}
    </Link>
  );
}

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      title="Volver arriba"
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <CircleArrowUp size={32} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
