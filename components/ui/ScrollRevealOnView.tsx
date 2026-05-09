"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  "#app-content section h1",
  "#app-content section h2",
  "#app-content section h3",
  "#app-content section h4",
  "#app-content section p",
  "#app-content section li",
  "#app-content section img",
  "#app-content section video",
  "#app-content section blockquote",
  "#app-content section .group",
  "#app-content section .jj-surface-hover",
].join(", ");

const EXCLUDED_ANCESTOR_SELECTOR = [
  ".navbar-contact-strip",
  ".navbar-contact-ticker",
  ".service-chips-marquee",
  ".service-chips-marquee-x",
  ".animate-vision-images-marquee",
].join(", ");

export function ScrollRevealOnView() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (node) => !node.closest(EXCLUDED_ANCESTOR_SELECTOR)
    );

    const sectionCount = new WeakMap<HTMLElement, number>();

    nodes.forEach((node) => {
      const section = node.closest("section") as HTMLElement | null;
      const index = section ? sectionCount.get(section) ?? 0 : 0;
      if (section) sectionCount.set(section, index + 1);

      node.classList.add("sr-init");
      node.style.setProperty("--sr-delay", `${Math.min(index * 90, 720)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add("sr-in");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      nodes.forEach((node) => {
        node.classList.remove("sr-init", "sr-in");
        node.style.removeProperty("--sr-delay");
      });
    };
  }, []);

  return null;
}
