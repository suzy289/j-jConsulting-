"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

/** Viewport partagé : déclenchement au scroll, une seule fois, zone légèrement anticipée */
export const scrollRevealViewport = {
  once: true as const,
  amount: 0.18,
  margin: "0px 0px -80px 0px",
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function scrollRevealTransition(delay = 0): Transition {
  return { duration: 0.55, ease, delay };
}

type Direction = "up" | "down" | "left" | "right";

const hidden: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -36 },
  right: { x: 36 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Délai avant l’animation (s) */
  delay?: number;
  direction?: Direction;
};

/**
 * Fait apparaître le contenu au scroll (opacity + léger déplacement).
 * Respecte `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const h = hidden[direction];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...h }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={scrollRevealViewport}
      transition={scrollRevealTransition(delay)}
    >
      {children}
    </motion.div>
  );
}
