export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

export type LocalizedTestimonials = Record<"fr" | "en", Testimonial[]>;

export const testimonialsByLocale: LocalizedTestimonials = {
  fr: [
    {
      id: 1,
      quote:
        "J & J Consulting nous a permis de régulariser notre situation fiscale en un temps record. Professionnalisme, discrétion et résultats concrets.",
      author: "Direction Générale",
      role: "Directeur",
      company: "Entreprise Partenaire",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Le Cabinet de M. Darlain a transformé notre gestion comptable. Enfin des chiffres clairs et une équipe disponible quand on en a besoin.",
      author: "Fondatrice",
      role: "Fondatrice",
      company: "Startup Partenaire",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Grâce à leur accompagnement, nous avons optimisé notre fiscalité et dégagé des marges que nous ne soupçonnions pas. Merci !",
      author: "Gérant",
      role: "Gérant",
      company: "PME Partenaire",
      rating: 5,
    },
  ],
  en: [
    {
      id: 1,
      quote:
        "J & J Consulting helped us regularize our tax situation in record time. Professionalism, discretion, and tangible results.",
      author: "Executive Management",
      role: "Director",
      company: "Partner company",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Mr. Darlain’s firm transformed our bookkeeping. Clear numbers at last—and a team available when we need them.",
      author: "Founder",
      role: "Founder",
      company: "Partner startup",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "With their support, we optimized our taxation and unlocked margins we didn’t expect. Thank you!",
      author: "Managing partner",
      role: "Manager",
      company: "Partner SME",
      rating: 5,
    },
  ],
};

export const testimonials: Testimonial[] = testimonialsByLocale.fr;
