"use client";

import { useEffect, useRef } from "react";

export function CountUp({ value }: { value: string }) {
  const element = useRef<HTMLSpanElement>(null);
  const output = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = element.current;
    const match = value.match(/^(\d+)(.*)$/);
    if (!node || !match) return;
    const text = output.current?.firstChild;
    if (!text) return;
    const setDisplay = (next: string) => {
      if (text.nodeValue !== next) text.nodeValue = next;
    };
    const target = Number(match[1]);
    const suffix = match[2];
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;

    let frame = 0;
    let started = false;
    let startTime: number | null = null;
    setDisplay(`0${suffix}`);

    const tick = (time: number) => {
      startTime ??= time + 250;
      const progress = Math.min(Math.max((time - startTime) / 1800, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setDisplay(progress === 1 ? value : `${Math.floor(target * eased)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (started) return;
      started = true;
      observer.disconnect();
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) start();
    }, { rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.22)}px 0px` });
    observer.observe(node);

    const onPreferenceChange = () => {
      if (!preference.matches) return;
      observer.disconnect();
      cancelAnimationFrame(frame);
      setDisplay(value);
    };
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", onPreferenceChange);
      setDisplay(value);
    };
  }, [value]);

  return (
    <span ref={element} className="inline-grid tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">{value}</span>
      <span ref={output} aria-hidden="true" className="col-start-1 row-start-1">{value}</span>
    </span>
  );
}
