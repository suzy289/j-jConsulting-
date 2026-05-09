"use client";

import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";

/**
 * Bloc unique Services + À propos (ancre #services conservée).
 */
export function ServicesAboutSection() {
  return (
    <>
      <ServicesSection />
      <AboutSection />
    </>
  );
}
