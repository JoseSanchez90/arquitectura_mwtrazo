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
    const preparation = new Map<HTMLElement, Animation>();

    const clearPreparation = (element: HTMLElement) => {
      preparation.get(element)?.cancel();
      preparation.delete(element);
    };

    const finish = (element: HTMLElement) => {
      clearPreparation(element);
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

        play(element, Math.min(order++ * 70, 210));
      }
    }, {
      threshold: 0,
      rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.22)}px 0px`,
    });

    function play(element: HTMLElement, delay = 0) {
      clearPreparation(element);
      if (preference.matches) return;
      const animation = element.animate(
        [{ translate: "0 24px", opacity: 0 }, { translate: "0 0", opacity: 1 }],
        { duration: 950, delay, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)", fill: "backwards" },
      );
      animation.onfinish = () => finish(element);
      animations.set(element, animation);
    }

    // The last items cannot reach the trigger line once the page ends.
    const endObserver = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      for (const element of pending) {
        if (element.getBoundingClientRect().top >= window.innerHeight) continue;
        observer.unobserve(element);
        pending.delete(element);
        play(element);
      }
    });

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
          // A static Web Animation changes presentation, not React-owned HTML
          // attributes. This is safe even while a streamed boundary hydrates.
          const hidden = element.animate([{ opacity: 0 }, { opacity: 0 }], {
            duration: 1,
            fill: "both",
          });
          hidden.pause();
          hidden.currentTime = 0;
          preparation.set(element, hidden);
          pending.add(element);
          observer.observe(element);
        });
      });
    };

    // Streaming routes, FAQ answers and filtered projects can arrive after mount.
    const mutations = new MutationObserver((records) => {
      // Ignore text updates from counters; only discover newly inserted elements.
      if (records.some((record) => [...record.addedNodes].some((node) => node instanceof HTMLElement))) scan();
    });
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
    const footerEnd = document.querySelector("footer > :last-child");
    if (footerEnd) endObserver.observe(footerEnd);
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      endObserver.disconnect();
      mutations.disconnect();
      for (const animation of preparation.values()) animation.cancel();
      for (const animation of animations.values()) animation.cancel();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}
