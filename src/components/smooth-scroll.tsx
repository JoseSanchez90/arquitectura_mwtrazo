"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export function SmoothScroll({ paused }: { paused: boolean }) {
  const instance = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });
    instance.current = lenis;

    return () => {
      lenis.destroy();
      instance.current = null;
    };
  }, []);

  useEffect(() => {
    if (paused) instance.current?.stop();
    else instance.current?.start();
  }, [paused]);

  return null;
}
