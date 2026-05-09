import { HeroSection } from "@/components/home/HeroSection";
import { ServicesAboutSection } from "@/components/home/ServicesAboutSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesAboutSection />
      <ValuesSection />
      <ProcessSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
