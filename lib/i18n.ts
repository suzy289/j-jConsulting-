export type Locale = "fr" | "en";

export const LOCALE_COOKIE = "jj_locale";
export const DEFAULT_LOCALE: Locale = "fr";

type Messages = Record<string, string>;

export const MESSAGES: Record<Locale, Messages> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.services": "Nos Services",
    "nav.references": "Références",
    "nav.contact": "Contact",
    "nav.quote": "Devis gratuit",
    "nav.allServices": "Voir tous les services →",
    "nav.serviceAxes": "Axes d’expertise",
    "nav.servicesDetail": "Fiches par filière",
    "nav.hubMobile.domaines.sub": "Périmètres comptables, fiscaux et pilotage.",
    "nav.hubMobile.conseil.sub": "Stratégie, structuration, financement.",
    "nav.hubMobile.accompagnement.sub": "Business plans, prévisionnels, indicateurs.",
    "nav.hubMobile.assistance.sub": "Dossiers courants, conformité, production.",
    "nav.hubMobile.formations.sub": "Ateliers et montée en compétences.",

    "footer.contactCard.title": "Prise de contact",
    "footer.contactCard.heading": "Une question sur la gestion de votre activité",
    "footer.contactCard.copy":
      "Écrivez-nous : nous revenons vers vous sous 24h avec des options adaptées à votre situation.",
    "footer.contactCard.form": "Formulaire",
    "footer.services": "Nos Services",
    "footer.serviceHub.domaines": "Domaines d'intervention",
    "footer.serviceHub.conseil": "Conseil",
    "footer.serviceHub.accompagnementOp": "Accompagnement opérationnel",
    "footer.serviceHub.assistanceOp": "Assistance opérationnelle",
    "footer.serviceHub.formations": "Formations",
    "footer.seeAll": "Voir tous →",
    "footer.servicesLanding": "Vue générale — tous nos services →",

    "hub.placeholder.photo":
      "Emplacement photo — glissez ici une image de mission, d’équipe ou de bureau (recommandé 1200×800 px).",
    "hub.placeholder.wide":
      "Zone visuelle large — idéal pour une photo de séminaire, livrable ou illustration métier.",
    "hub.placeholder.square":
      "Bloc carré — screenshot logiciel, infographie ou portrait équipe.",
    "hub.formations.softwareDevicesAlt":
      "Interfaces logiciel de gestion sur ordinateur, tablette et smartphone — démonstration pédagogique.",
    "hub.formations.workshopHeroVideoAria":
      "Vidéo d’illustration — séminaire, formation ou mission encadrée par le cabinet.",
    "hub.formations.missionMarqueeAlt1":
      "Équipe et participants — moment de formation ou de remise de certificats.",
    "hub.formations.missionMarqueeAlt2":
      "Groupe en séminaire — accompagnement et transmission.",
    "hub.domaines.heroLoopVideoAria":
      "Fond vidéo en boucle derrière l’illustration des interfaces logiciel sur multi-supports.",
    "hub.domaines.asideImageAlt":
      "Photo d’illustration — missions, équipe ou contexte d’accompagnement du cabinet.",
    "hub.magazine.wideVideoAria":
      "Vidéo d’illustration en boucle — séminaire, mission ou contexte projet.",
    "hub.focusCards.pilotageDiagramAlt":
      "Schéma du pilotage d’entreprise : vision stratégique, suivi opérationnel et apprentissage organisationnel.",
    "footer.firm": "Le Cabinet",
    "footer.legal": "Mentions Légales",
    "footer.rights": "Tous droits réservés.",
    "footer.madeIn": "Site conçu avec rigueur et passion — Yaoundé, Cameroun",

    "contact.hero.kicker": "Contact",
    "contact.hero.title": "Parlons de votre projet",
    "contact.hero.subtitle":
      "Dites-nous ce dont vous avez besoin. Nous vous répondons rapidement avec une proposition claire et adaptée.",
    "contact.hero.ctaWhatsapp": "WhatsApp",
    "contact.hero.ctaEmail": "Envoyer un email",
    "contact.hero.statResponse": "Réponse",
    "contact.hero.statMeeting": "RDV",
    "contact.hero.statQuote": "Devis",
    "contact.hero.responseValue": "< 24h",
    "contact.hero.meetingValue": "Sur place / visio",
    "contact.hero.quoteValue": "Gratuit",
    "contact.hero.ctaCalendly": "Planifier un RDV",
    "contact.hero.calendlyAria": "Ouvrir Calendly pour réserver un rendez-vous, en présentiel ou en visioconférence",
    "contact.hero.calendlyFallbackAria": "Aller au formulaire de contact pour demander un rendez-vous",
    "contact.hero.dualCta":
      "Pour un message détaillé ou une demande par écrit, utilisez le formulaire ci-dessous — réponse par email.",

    "contact.section.infoTitle": "Informations de contact",
    "contact.label.address": "Adresse",
    "contact.label.phones": "Téléphones / WhatsApp",
    "contact.label.email": "Email",
    "contact.label.hours": "Horaires",
    "contact.hours.week": "Lun – Ven : 8h00 – 18h00",
    "contact.hours.sat": "Sam : 9h00 – 13h00",
    "contact.cta.whatsappFooter": "Discuter sur WhatsApp",
    "contact.section.formTitle": "Formulaire de devis",
    "contact.form.name": "Nom & Prénom *",
    "contact.form.company": "Entreprise / Organisation",
    "contact.form.email": "Email *",
    "contact.form.whatsapp": "Numéro WhatsApp *",
    "contact.form.service": "Type de service *",
    "contact.form.servicePlaceholder": "Sélectionnez...",
    "contact.form.message": "Description de votre besoin *",
    "contact.form.whatsappCheckbox": "Je souhaite être contacté via WhatsApp",
    "contact.form.submit": "Envoyer ma demande",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success":
      "Votre message a bien été envoyé. Nous vous recontacterons rapidement.",
    "contact.form.error":
      "Une erreur est survenue. Vous pouvez nous contacter directement sur WhatsApp.",
    "contact.map.title": "Nous trouver",
    "contact.map.directions": "Voir l'itinéraire sur Google Maps →",
    "contact.map.iframeTitle": "Localisation J & J Consulting - Yaoundé",

    "common.whatsappAria": "Discutons sur WhatsApp",
    "lang.label": "Langue",
    "lang.fr": "Français",
    "lang.en": "English",

    "home.hero.kicker": "Cabinet d'audit & de conseil — Yaoundé, Cameroun",
    "home.hero.title.a": "L'expertise au services de la gestion de votre structure",
    "home.hero.title.b": "",
    "home.hero.title.c": "",
    "home.hero.subtitle":
      "J & J Consulting SARL accompagne les entreprises, PME, startups et institutions dans la maîtrise de leurs obligations comptables, fiscales et financières. Avec rigueur, intégrité et une vision profondément humaine du conseil.",
    "home.hero.cta.meeting": "Prendre rendez-vous",
    "home.hero.cta.services": "Découvrir nos services",
    "home.hero.float1.k": "Conformité",
    "home.hero.float1.v": "Pilotage fiscal continu",
    "home.hero.float2.k": "Performance",
    "home.hero.float2.v": "KPI et reporting mensuel",
    "home.hero.stats.kicker": "Chiffres clés",
    "home.hero.stat1": "Années d'expérience",
    "home.hero.stat2": "Domaines d'expertise",
    "home.hero.stat3": "Engagement confidentialité",
    "home.hero.stat4": "Vision long terme",
    "home.hero.marquee": "INTÉGRITÉ · CONFIDENTIALITÉ · RIGUEUR · EXCELLENCE · TRANSPARENCE · AUDIT · COMPTABILITÉ · FISCALITÉ · FINANCE",

    "home.about.badge": "Qui sommes-nous",
    "home.about.title.a": "Une histoire née de la",
    "home.about.title.b": "passion",
    "home.about.title.c": "et de l'amour",
    "home.about.subtitle": "J & J Consulting SARL : L'Excellence au Service de votre Croissance",
    "home.about.p1":
      "Fondé par Dongmo Djeutebing, expert doté d'un Master en Audit et Contrôle de Gestion, le cabinet J & J Consulting SARL s'appuie sur une solide expérience acquise sur le terrain. Son parcours professionnel, forgé au sein de nombreux cabinets, lui a permis de développer une vision stratégique et opérationnelle.",
    "home.about.p2":
      "Derrière chaque mission, une conviction : la rigueur et l'humilité se complètent",
    "home.about.cta.wa": "Nous écrire sur WhatsApp",
    "home.about.cta.services": "Nos services",
    "home.about.card.badge": "Parcours & vision",
    "home.about.card.title": "Master Audit & Comptabilité",
    "home.about.card.subtitle": "Du terrain aux missions les plus exigeantes",
    "home.about.card.expK": "Expérience terrain",
    "home.about.card.expUnit": "ans",
    "home.about.card.expFoot": "cabinets & entreprises",
    "home.about.cta.more": "En savoir plus sur le cabinet",
    "home.about.link.more": "Lire notre histoire complète",
    "home.about.waConsult":
      "Bonjour, je souhaite un rendez-vous ou des informations sur vos services comptables et fiscaux. Merci.",
    "home.about.waMission":
      "Bonjour, je souhaite en savoir plus sur J & J Consulting et votre accompagnement. Merci.",
    "home.about.heroImageAlt": "Expertise comptable et accompagnement J & J Consulting",

    "home.services.badge": "DOMAINES D'INTERVENTION",
    "home.services.intro":
      "J & J Consulting SARL vous propose une gamme complète de services en audit, comptabilité, fiscalité et conseil",
    "home.services.prev": "Services précédents",
    "home.services.next": "Services suivants",
    "home.services.goTo": "Aller au service {n}",
    "home.services.waMsg": "Bonjour, je souhaite des informations sur : {service}.",
    "home.services.cta.wa": "Discuter sur WhatsApp",
    "home.services.link.all": "Voir la fiche détaillée de tous nos services",

    "home.values.kicker": "Nos valeurs",
    "home.values.title": "L'expertise au service de votre performance financière",
    "home.values.framework": "Notre cadre d'action :",
    "home.values.point1.a": "Intégrité & confidentialité",
    "home.values.point1.b": "au cœur de chaque dossier, comme l'exige un",
    "home.values.point1.c": "cabinet d'audit",
    "home.values.point2.a": "Rigueur, transparence",
    "home.values.point2.b": "et",
    "home.values.point2.c": "excellence",
    "home.values.point2.d": "pour sécuriser vos décisions financières et fiscales.",
    "home.values.point3": "Un accompagnement humain des PME, startups et institutions, avec la même exigence sur chaque mission.",
    "home.values.cta": "Découvrir",
    "home.values.team1.name": "Direction J & J Consulting",
    "home.values.team1.role": "Pilotage stratégique & qualité de mission",
    "home.values.team1.org": "J & J Consulting SARL",
    "home.values.team2.name": "Équipe experts",
    "home.values.team2.role": "Audit, comptabilité & fiscalité",
    "home.values.team2.org": "Yaoundé, Cameroun",
    "home.values.circleAlt": "J & J Consulting — accompagnement professionnel",
    "home.values.ribbon": "Accompagnement",
    "home.values.badgeTrust": "Partenaire de confiance",
    "home.values.badgeFirm": "Cabinet d'audit & de conseil",
    "home.values.appt": "Rendez-vous",
    "home.values.apptSub": "Planification sur mesure",
    "home.values.hours": "Lun. — Ven.",

    "home.process.kicker": "Pourquoi nous choisir ?",
    "home.process.title": "Une exécution rigoureuse avec une vision humaine et stratégique",
    "home.process.p":
      "De la structuration de vos obligations comptables et fiscales à l'optimisation de votre pilotage financier, nous déployons une approche claire, mesurable et adaptée à votre réalité de terrain. Chaque mission vise un résultat concret : vous faire gagner en sécurité, en performance et en confiance.",
    "home.process.cta": "decouvrir notre mode de travail",
    "home.process.alt1": "Formation J & J Consulting",
    "home.process.alt2": "Remise de certification",
    "home.process.alt3": "Photo d'équipe formation",
    "home.process.alt4": "Photo de certification",

    "home.partners.kicker": "Ils nous font confiance",
    "home.partners.title": "Références & partenaires",
    "home.partners.subtitle": "Des entreprises et institutions qui comptent sur notre expertise.",
    "home.partners.fallback": "Partenaire de confiance",
    "home.partners.cta": "Découvrir toutes les références",

    "home.testimonials.kicker": "Témoignages",
    "home.testimonials.title": "Ils nous font déjà confiance",
    "home.testimonials.altClient": "Client satisfait",
    "home.testimonials.prev": "Précédent",
    "home.testimonials.next": "Suivant",

    "home.faq.kicker": "F.A.Q",
    "home.faq.title": "Questions fréquemment posées",

    "services.hero.kicker": "Nos domaines d'intervention",
    "services.hero.title": "J & J Consulting SARL est votre partenaire pour une gestion d'entreprise performante.",
    "services.hero.subtitle":
      "Spécialistes en Audit, Comptabilité et Conseil Fiscal, nous transformons vos défis financiers en opportunités de croissance.",
    "services.hero.cta": "Commencez dès maintenant",
    "services.hero.call": "Appelez-nous au +237 620 275 758",
    "services.hero.callSub": "Pour toute question ou préoccupation",
    "services.hero.alt1": "Immeuble d'entreprise de nuit",
    "services.hero.alt2": "Vue aérienne de quartier d'affaires",
    "services.stats.years": "Années d'expérience",
    "services.stats.satisfaction": "Taux de satisfaction visé",
    "services.stats.expertise": "Domaines d'expertise",
    "services.stats.fees": "Frais cachés",
    "services.section.kicker": "Nos domaines d'intervention",
    "services.section.title":
      "J & J Consulting SARL accompagne les entreprises dans la gestion, le conseil, l'assistance et la formation.",
    "services.section.subtitle": "Avec des solutions sur mesure pour optimiser la performance et la rentabilité.",
    "services.card.more": "En savoir plus →",
    "services.waDetail": "Bonjour, je souhaite des informations détaillées sur le service {service}. Merci de m'expliquer les modalités et le déroulement.",
    "services.cta.title": "Prêt à transformer votre gestion financière ?",
    "services.cta.subtitle":
      "Nos experts analysent votre situation et vous proposent les solutions les plus adaptées à votre entreprise.",
    "services.cta.button": "Contacter un expert maintenant",


    "legal.title": "Mentions légales",
    "legal.section.publisher": "Éditeur du site",
    "legal.section.ids": "Identifiants légaux",
    "legal.section.hosting": "Hébergement",
    "legal.section.ip": "Propriété intellectuelle",
    "legal.section.privacy": "Données personnelles",
    "legal.section.credits": "Crédits",
    "legal.publisher.address": "Adresse : {v}",
    "legal.publisher.phones": "Téléphones : {v}",
    "legal.publisher.email": "Email : {v}",
    "legal.ids.niu": "NIU : {v}",
    "legal.ids.rccm": "RCCM : {v}",
    "legal.hosting.p": "Le site est hébergé par Vercel Inc.",
    "legal.ip.p":
      "L'ensemble du contenu de ce site (textes, images, logos, etc.) est protégé par le droit d'auteur. Toute reproduction ou utilisation sans autorisation préalable est interdite.",
    "legal.privacy.p":
      "Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont pas cédées à des tiers. Conformément à la réglementation en vigueur, vous pouvez exercer votre droit d'accès, de rectification ou de suppression en nous contactant.",
    "legal.credits.p": "Site conçu pour {name} — Yaoundé, Cameroun.",
    "meta.home.title": "J & J Consulting SARL | Cabinet d'Audit, Comptabilité & Conseil Fiscal — Yaoundé",
    "meta.home.desc":
      "J & J Consulting SARL est votre cabinet d'audit, comptabilité, conseil fiscal et finance à Yaoundé, Cameroun. Devis gratuit. 10+ ans d'expérience.",
    "meta.about.title": "À Propos | J & J Consulting SARL — L'histoire d'un cabinet",
    "meta.about.desc":
      "Découvrez l'histoire de J & J Consulting SARL et de son fondateur. Un cabinet né de la passion et de l'amour, construit sur l'excellence.",
    "meta.services.title": "Nos Services | J & J Consulting SARL — Domaines d'intervention",
    "meta.services.desc":
      "Découvrez nos domaines d'intervention : création d'entreprise, assistance comptable, fiscalité, analyse financière, business plan, contrôle de gestion et plus.",
    "meta.references.title": "Références | J & J Consulting SARL — Ils nous font confiance",
    "meta.references.desc":
      "Découvrez les entreprises et institutions qui ont choisi J & J Consulting comme partenaire financier. Témoignages et références clients.",
    "meta.legal.title": "Mentions Légales | J & J Consulting SARL",
    "meta.legal.desc": "Mentions légales et informations juridiques du site J & J Consulting SARL.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.references": "References",
    "nav.contact": "Contact",
    "nav.quote": "Free quote",
    "nav.allServices": "View all services →",
    "nav.serviceAxes": "Practice pillars",
    "nav.servicesDetail": "Service sheets",
    "nav.hubMobile.domaines.sub": "Accounting, tax and steering scope.",
    "nav.hubMobile.conseil.sub": "Strategy, structuring and funding.",
    "nav.hubMobile.accompagnement.sub": "Plans, forecasts and KPIs.",
    "nav.hubMobile.assistance.sub": "Day-to-day files, compliance, delivery.",
    "nav.hubMobile.formations.sub": "Workshops and skills uplift.",

    "footer.contactCard.title": "Get in touch",
    "footer.contactCard.heading": "Questions about your finances?",
    "footer.contactCard.copy":
      "Write to us: we’ll get back to you within 24 hours with options tailored to your situation.",
    "footer.contactCard.form": "Form",
    "footer.services": "Services",
    "footer.serviceHub.domaines": "Areas of intervention",
    "footer.serviceHub.conseil": "Advisory",
    "footer.serviceHub.accompagnementOp": "Operational support",
    "footer.serviceHub.assistanceOp": "Operational assistance",
    "footer.serviceHub.formations": "Training",
    "footer.seeAll": "View all →",
    "footer.servicesLanding": "Full services overview →",

    "hub.placeholder.photo":
      "Photo slot — add a mission, team or office image (suggested 1200×800 px).",
    "hub.placeholder.wide":
      "Wide visual — seminar, deliverable or sector illustration.",
    "hub.placeholder.square":
      "Square block — software screenshot, infographic or team portrait.",
    "hub.formations.softwareDevicesAlt":
      "Management software interfaces on laptop, tablet and smartphone — training illustration.",
    "hub.formations.workshopHeroVideoAria":
      "Illustrative video — seminar, training or mission led by the firm.",
    "hub.formations.missionMarqueeAlt1":
      "Team and participants — training session or certificate moment.",
    "hub.formations.missionMarqueeAlt2":
      "Seminar group — advisory and knowledge transfer.",
    "hub.domaines.heroLoopVideoAria":
      "Looping video background behind the multi-device software interface illustration.",
    "hub.domaines.asideImageAlt":
      "Illustration photo — missions, team or advisory context for the firm.",
    "hub.magazine.wideVideoAria":
      "Looping illustrative video — seminar, mission or project context.",
    "hub.focusCards.pilotageDiagramAlt":
      "Business steering diagram: strategic vision, operational monitoring and organizational learning.",
    "footer.firm": "The firm",
    "footer.legal": "Legal notice",
    "footer.rights": "All rights reserved.",
    "footer.madeIn": "Built with rigor and passion — Yaoundé, Cameroon",

    "contact.hero.kicker": "Contact",
    "contact.hero.title": "Let’s talk about your project",
    "contact.hero.subtitle":
      "Tell us what you need. We respond quickly with a clear and tailored proposal.",
    "contact.hero.ctaWhatsapp": "WhatsApp",
    "contact.hero.ctaEmail": "Send an email",
    "contact.hero.statResponse": "Reply",
    "contact.hero.statMeeting": "Meeting",
    "contact.hero.statQuote": "Quote",
    "contact.hero.responseValue": "< 24h",
    "contact.hero.meetingValue": "On-site / video",
    "contact.hero.quoteValue": "Free",
    "contact.hero.ctaCalendly": "Schedule a meeting",
    "contact.hero.calendlyAria": "Open Calendly to book a meeting, on-site or by video call",
    "contact.hero.calendlyFallbackAria": "Go to the contact form to request a meeting",
    "contact.hero.dualCta":
      "For a detailed written request, use the form below — we reply by email.",

    "contact.section.infoTitle": "Contact details",
    "contact.label.address": "Address",
    "contact.label.phones": "Phones / WhatsApp",
    "contact.label.email": "Email",
    "contact.label.hours": "Opening hours",
    "contact.hours.week": "Mon – Fri: 8:00 a.m. – 6:00 p.m.",
    "contact.hours.sat": "Sat: 9:00 a.m. – 1:00 p.m.",
    "contact.cta.whatsappFooter": "Chat on WhatsApp",
    "contact.section.formTitle": "Quote request form",
    "contact.form.name": "Full name *",
    "contact.form.company": "Company / organization",
    "contact.form.email": "Email *",
    "contact.form.whatsapp": "WhatsApp number *",
    "contact.form.service": "Type of service *",
    "contact.form.servicePlaceholder": "Select…",
    "contact.form.message": "Describe your needs *",
    "contact.form.whatsappCheckbox": "I would like to be contacted via WhatsApp",
    "contact.form.submit": "Send my request",
    "contact.form.sending": "Sending…",
    "contact.form.success":
      "Your message has been sent. We will get back to you shortly.",
    "contact.form.error":
      "Something went wrong. You can reach us directly on WhatsApp.",
    "contact.map.title": "Find us",
    "contact.map.directions": "Open directions in Google Maps →",
    "contact.map.iframeTitle": "J & J Consulting location — Yaoundé",

    "common.whatsappAria": "Chat with us on WhatsApp",
    "lang.label": "Language",
    "lang.fr": "Français",
    "lang.en": "English",

    "home.hero.kicker": "Audit & advisory firm — Yaoundé, Cameroon",
    "home.hero.title.a": "Expertise in service of your",
    "home.hero.title.b": "financial",
    "home.hero.title.c": "performance.",
    "home.hero.subtitle":
      "J & J Consulting SARL supports companies, SMEs, startups and institutions in managing their accounting, tax and financial obligations—with rigor, integrity and a deeply human approach to advisory.",
    "home.hero.cta.meeting": "Book a meeting",
    "home.hero.cta.services": "Explore our services",
    "home.hero.float1.k": "Compliance",
    "home.hero.float1.v": "Ongoing tax monitoring",
    "home.hero.float2.k": "Performance",
    "home.hero.float2.v": "KPIs & monthly reporting",
    "home.hero.stats.kicker": "Key figures",
    "home.hero.stat1": "Years of experience",
    "home.hero.stat2": "Areas of expertise",
    "home.hero.stat3": "Confidentiality commitment",
    "home.hero.stat4": "Long-term vision",
    "home.hero.marquee": "INTEGRITY · CONFIDENTIALITY · RIGOR · EXCELLENCE · TRANSPARENCY · AUDIT · ACCOUNTING · TAX · FINANCE",

    "home.about.badge": "Who we are",
    "home.about.title.a": "A story born from",
    "home.about.title.b": "passion",
    "home.about.title.c": "and love",
    "home.about.subtitle": "{name} — rigor, proximity and high standards",
    "home.about.p1":
      "Born on January 15, 1994 in Yaoundé, Darlain built his expertise through more than a decade of hands-on experience. With a Master's degree in Audit and Management Accounting, he rose through leading firms before founding {name}, a firm whose name bears the imprint of his twins—his greatest pride.",
    "home.about.p2":
      "Behind every engagement lies a conviction: rigor and humanity complement each other—they are not opposites.",
    "home.about.cta.wa": "Message us on WhatsApp",
    "home.about.cta.services": "Our services",
    "home.about.card.badge": "Journey & vision",
    "home.about.card.title": "Master’s in Audit & Accounting",
    "home.about.card.subtitle": "From the field to the most demanding engagements",
    "home.about.card.expK": "Field experience",
    "home.about.card.expUnit": "yrs",
    "home.about.card.expFoot": "firms & companies",
    "home.about.cta.more": "Learn more about the firm",
    "home.about.link.more": "Read our full story",
    "home.about.waConsult":
      "Hello, I would like an appointment or information about your accounting and tax services. Thank you.",
    "home.about.waMission":
      "Hello, I would like to learn more about J & J Consulting and your support. Thank you.",
    "home.about.heroImageAlt": "Accounting expertise and support — J & J Consulting",

    "home.services.badge": "AREAS OF PRACTICE",
    "home.services.intro":
      "J & J Consulting SARL offers a complete range of audit, accounting, tax and advisory services—to secure your obligations and support better decisions.",
    "home.services.prev": "Previous services",
    "home.services.next": "Next services",
    "home.services.goTo": "Go to service {n}",
    "home.services.waMsg": "Hello, I’d like information about: {service}.",
    "home.services.cta.wa": "Chat on WhatsApp",
    "home.services.link.all": "See the detailed page for all our services",

    "home.values.kicker": "Our values",
    "home.values.title": "Expertise in service of your financial performance",
    "home.values.framework": "Our operating framework:",
    "home.values.point1.a": "Integrity & confidentiality",
    "home.values.point1.b": "at the heart of every file, as required from an",
    "home.values.point1.c": "audit firm",
    "home.values.point2.a": "Rigor, transparency",
    "home.values.point2.b": "and",
    "home.values.point2.c": "excellence",
    "home.values.point2.d": "to secure your financial and tax decisions.",
    "home.values.point3": "A human, hands-on support for SMEs, startups and institutions—with the same standards on every engagement.",
    "home.values.cta": "Discover",
    "home.values.team1.name": "J & J Consulting Management",
    "home.values.team1.role": "Strategic leadership & engagement quality",
    "home.values.team1.org": "J & J Consulting SARL",
    "home.values.team2.name": "Expert team",
    "home.values.team2.role": "Audit, accounting & tax",
    "home.values.team2.org": "Yaoundé, Cameroon",
    "home.values.circleAlt": "J & J Consulting — professional support",
    "home.values.ribbon": "Support",
    "home.values.badgeTrust": "Trusted partner",
    "home.values.badgeFirm": "Audit & advisory firm",
    "home.values.appt": "Appointment",
    "home.values.apptSub": "Tailored scheduling",
    "home.values.hours": "Mon — Fri",

    "home.process.kicker": "Why choose us?",
    "home.process.title": "Rigorous execution with a human and strategic vision",
    "home.process.p":
      "From structuring your accounting and tax obligations to optimizing your financial steering, we deploy a clear, measurable approach tailored to your reality. Each engagement targets a concrete outcome: more security, more performance, and more confidence.",
    "home.process.cta": "DISCOVER HOW WE WORK",
    "home.process.alt1": "J & J Consulting training",
    "home.process.alt2": "Certification ceremony",
    "home.process.alt3": "Team training photo",
    "home.process.alt4": "Certification photo",

    "home.partners.kicker": "They trust us",
    "home.partners.title": "References & partners",
    "home.partners.subtitle": "Companies and institutions that rely on our expertise.",
    "home.partners.fallback": "Trusted partner",
    "home.partners.cta": "View all references",

    "home.testimonials.kicker": "Testimonials",
    "home.testimonials.title": "They already trust us",
    "home.testimonials.altClient": "Happy client",
    "home.testimonials.prev": "Previous",
    "home.testimonials.next": "Next",

    "home.faq.kicker": "F.A.Q",
    "home.faq.title": "Frequently asked questions",

    "services.hero.kicker": "Areas of practice",
    "services.hero.title": "J & J Consulting SARL is your partner for high-performing business management.",
    "services.hero.subtitle":
      "Specialists in audit, accounting and tax advisory, we turn financial challenges into growth opportunities.",
    "services.hero.cta": "Get started now",
    "services.hero.call": "Call us at +237 620 275 758",
    "services.hero.callSub": "For any question or concern",
    "services.hero.alt1": "Office building at night",
    "services.hero.alt2": "Aerial view of a business district",
    "services.stats.years": "Years of experience",
    "services.stats.satisfaction": "Target satisfaction rate",
    "services.stats.expertise": "Areas of expertise",
    "services.stats.fees": "Hidden fees",
    "services.section.kicker": "Areas of practice",
    "services.section.title":
      "J & J Consulting SARL supports businesses with management, advisory, assistance and training.",
    "services.section.subtitle": "With tailored solutions to optimize performance and profitability.",
    "services.card.more": "Learn more →",
    "services.waDetail": "Hello, I would like detailed information about the service {service}. Please explain the process and terms.",
    "services.cta.title": "Ready to transform your financial management?",
    "services.cta.subtitle":
      "Our experts analyze your situation and propose the most suitable solutions for your business.",
    "services.cta.button": "Contact an expert now",


    "legal.title": "Legal notice",
    "legal.section.publisher": "Website publisher",
    "legal.section.ids": "Legal identifiers",
    "legal.section.hosting": "Hosting",
    "legal.section.ip": "Intellectual property",
    "legal.section.privacy": "Personal data",
    "legal.section.credits": "Credits",
    "legal.publisher.address": "Address: {v}",
    "legal.publisher.phones": "Phones: {v}",
    "legal.publisher.email": "Email: {v}",
    "legal.ids.niu": "Tax ID (NIU): {v}",
    "legal.ids.rccm": "RCCM: {v}",
    "legal.hosting.p": "This website is hosted by Vercel Inc.",
    "legal.ip.p":
      "All content on this website (texts, images, logos, etc.) is protected by copyright. Any reproduction or use without prior authorization is prohibited.",
    "legal.privacy.p":
      "Information collected via the contact form is used only to respond to your requests and is not shared with third parties. In accordance with applicable regulations, you may exercise your right of access, rectification, or deletion by contacting us.",
    "legal.credits.p": "Website designed for {name} — Yaoundé, Cameroon.",
    "meta.home.title": "J & J Consulting SARL | Audit, Accounting & Tax Advisory — Yaoundé",
    "meta.home.desc":
      "J & J Consulting SARL is your audit, accounting, tax and finance advisory firm in Yaoundé, Cameroon. Free quote. 10+ years of experience.",
    "meta.about.title": "About | J & J Consulting SARL — The story of a firm",
    "meta.about.desc":
      "Discover the story of J & J Consulting SARL and its founder. A firm born from passion and love, built on excellence.",
    "meta.services.title": "Services | J & J Consulting SARL — Areas of practice",
    "meta.services.desc":
      "Explore our areas of practice: business creation, accounting support, tax, financial analysis, business plans, management control, and more.",
    "meta.references.title": "References | J & J Consulting SARL — They trust us",
    "meta.references.desc":
      "Discover the companies and institutions that chose J & J Consulting as their financial partner. Client references and testimonials.",
    "meta.legal.title": "Legal notice | J & J Consulting SARL",
    "meta.legal.desc": "Legal notice and legal information for the J & J Consulting SARL website.",
  },
};

export function normalizeLocale(value: string | null | undefined): Locale {
  return value === "en" ? "en" : "fr";
}

export function t(locale: Locale, key: string): string {
  return MESSAGES[locale][key] ?? MESSAGES[DEFAULT_LOCALE][key] ?? key;
}

