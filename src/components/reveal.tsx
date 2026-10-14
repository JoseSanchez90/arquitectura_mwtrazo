"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";

const callbacks = new Map<Element, () => void>();
let observer: IntersectionObserver | undefined;

function watch(node: HTMLElement, show: () => void) {
  observer ??= new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      callbacks.get(entry.target)?.();
      callbacks.delete(entry.target);
      observer?.unobserve(entry.target);
    }
  }, { rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.18)}px 0px` });
  callbacks.set(node, show);
  observer.observe(node);
  return () => {
    callbacks.delete(node);
    observer?.unobserve(node);
    if (!callbacks.size) {
      observer?.disconnect();
      observer = undefined;
    }
  };
}

export function Reveal({
  as: Tag = "div", className = "", children, ...props
}: HTMLAttributes<HTMLElement> & { as?: "div" | "p" | "h1" | "h2" | "h3" }) {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<"initial" | "waiting" | "entering" | "done">("initial");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Above-the-fold content remains visible; only offscreen blocks are prepared.
    if (media.matches || node.closest("footer") || node.getBoundingClientRect().top < window.innerHeight * 0.82) return;
    setPhase("waiting");
    const stop = watch(node, () => setPhase("entering"));
    const onChange = () => { if (media.matches) { stop(); setPhase("done"); } };
    media.addEventListener("change", onChange);
    return () => { stop(); media.removeEventListener("change", onChange); };
  }, []);

  return (
    <Tag
      {...props}
      ref={ref as React.Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLDivElement>}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === "opacity") setPhase("done");
        props.onTransitionEnd?.(event);
      }}
      className={`${className} ${phase === "waiting" ? "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0" : phase === "entering" ? "opacity-100 translate-y-0 transition-[opacity,translate] duration-900 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none" : ""}`}
    >{children}</Tag>
  );
}
