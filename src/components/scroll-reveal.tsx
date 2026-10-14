"use client";

import { useEffect } from "react";

// Animate content rather than section backgrounds or entire, potentially tall cards.
const targets = "h1, h2, h3, p, blockquote, li, label, main a, main button, [data-reveal]";
const excluded = '[aria-busy="true"], [aria-hidden="true"], [data-reveal="off"], .sr-only';

export function ScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new WeakSet<Element>();
    const pending = new Set<HTMLElement>();
    const animations = new Map<HTMLElement, Animation>();

    const finish = (element: HTMLElement) => {
      animations.get(element)?.cancel();
      animations.delete(element);
      pending.delete(element);
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver((entries) => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        pending.delete(element);
        if (preference.matches || element.contains(document.activeElement)) {
          finish(element);
          continue;
        }

        const animation = animations.get(element);
        animation?.effect?.updateTiming({ delay: Math.min(order++ * 70, 210) });
        animation?.play();
      }
    }, {
      threshold: 0,
      rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.22)}px 0px`,
    });

    // The last items cannot reach the trigger line once the page ends.
    const revealAtPageEnd = () => {
      if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 2) return;
      for (const element of pending) {
        if (element.getBoundingClientRect().top >= window.innerHeight) continue;
        observer.unobserve(element);
        pending.delete(element);
        animations.get(element)?.play();
      }
    };

    const scan = () => {
      for (const element of pending) {
        if (!element.isConnected) finish(element);
      }
      for (const element of animations.keys()) {
        if (!element.isConnected) finish(element);
      }
      document.querySelectorAll<HTMLElement>("main, footer").forEach((root) => {
        root.querySelectorAll<HTMLElement>(targets).forEach((element) => {
          if (seen.has(element) || element.closest(excluded)) return;
          // Avoid animating nested text twice (e.g. paragraphs inside list items).
          const ancestor = element.parentElement?.closest(targets);
          if (ancestor && root.contains(ancestor)) return;
          seen.add(element);
          if (preference.matches) return;
          // Prepare the hidden starting frame before observing. Previously the
          // content was already visible, so the entrance was barely noticeable.
          // Keep content above the restored scroll position visible.
          if (element.getBoundingClientRect().bottom <= 0) return;
          const animation = element.animate(
            [{ translate: "0 24px", opacity: 0 }, { translate: "0 0", opacity: 1 }],
            {
              duration: 950,
              easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
              fill: "both",
            },
          );
          animation.pause();
          animation.currentTime = 0;
          animation.onfinish = () => finish(element);
          animations.set(element, animation);
          pending.add(element);
          observer.observe(element);
        });
      });
    };

    // Streaming routes, FAQ answers and filtered projects can arrive after mount.
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });
    const onPreferenceChange = () => {
      if (preference.matches) {
        for (const element of [...pending, ...animations.keys()]) finish(element);
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      for (const element of [...pending, ...animations.keys()]) {
        if (element.contains(event.target)) finish(element);
      }
    };
    scan();
    window.addEventListener("scroll", revealAtPageEnd, { passive: true });
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealAtPageEnd);
      mutations.disconnect();
      for (const animation of animations.values()) animation.cancel();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}
