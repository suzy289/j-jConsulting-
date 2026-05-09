"use client";

import { useEffect } from "react";

const TARGET_SELECTOR = [
  "#app-content div",
  "#app-content h1",
  "#app-content h2",
  "#app-content h3",
  "#app-content h4",
  "#app-content h5",
  "#app-content h6",
  "#app-content p",
  "#app-content li",
  "#app-content img",
  "#app-content video",
  "#app-content figure",
  "#app-content blockquote",
  "#app-content .jj-surface-hover",
].join(", ");

export function GlobalScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(TARGET_SELECTOR)).filter(
      (node) => {
        const style = window.getComputedStyle(node);
        const overflowX = style.overflowX;
        const overflowY = style.overflowY;
        const isScrollable =
          overflowX === "auto" ||
          overflowX === "scroll" ||
          overflowY === "auto" ||
          overflowY === "scroll";

        // Avoid animating scroll containers to prevent scrollbar artifacts.
        return !isScrollable;
      }
    );

    nodes.forEach((node, index) => {
      node.classList.add("scroll-reveal-init");
      node.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 350)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-in");
          } else {
            entry.target.classList.remove("scroll-reveal-in");
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      nodes.forEach((node) => {
        node.classList.remove("scroll-reveal-init", "scroll-reveal-in");
        node.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
