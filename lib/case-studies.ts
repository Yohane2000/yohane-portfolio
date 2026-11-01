export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  year: string;
  image: string;
  website: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  role: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  challenge: {
    fr: string;
    en: string;
  };
  solution: {
    fr: string;
    en: string;
  };
  features: {
    fr: string[];
    en: string[];
  };
  technologies: string[];
  nextProject: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nexora-crm",
    name: "Nexora CRM",
    category: "CRM & Business Management",
    year: "2026",
    image: "/projects/nexora.png",
    website: "#",
    seo: {
      title: "Nexora CRM : application de gestion commerciale | Yohane Wagramale",
      description:
        "Découvrez Nexora CRM, une application de gestion commerciale développée avec Next.js, TypeScript et Supabase pour centraliser clients, prospects, ventes et paiements.",
      keywords: [
        "Nexora CRM",
        "application CRM",
        "logiciel de gestion commerciale",
        "gestion clients",
        "gestion prospects",
        "Next.js",
        "Supabase",
        "développeur Full-Stack",
      ],
    },

    role: {
      fr: "Conception et développement Full-Stack",
      en: "Full-Stack Design & Development",
    },

    description: {
      fr: "Nexora CRM est une application web de gestion commerciale conçue pour centraliser les informations clients, suivre les prospects et organiser les opérations commerciales d'une entreprise.",
      en: "Nexora CRM is a business management web application designed to centralize customer information, track prospects and organize a company's commercial operations.",
    },

    challenge: {
      fr: "Les entreprises ont besoin d'une meilleure visibilité sur leurs clients, leurs prospects, leurs ventes et leurs paiements. La dispersion de ces informations peut compliquer le suivi des activités.",
      en: "Businesses need better visibility into their customers, prospects, sales and payments. Scattered information can make activity tracking more difficult.",
    },

    solution: {
      fr: "Développer une plateforme centralisée avec un tableau de bord, une gestion des clients et prospects, ainsi qu'un suivi des ventes, factures et paiements.",
      en: "Develop a centralized platform with a dashboard, customer and prospect management, and sales, invoice and payment tracking.",
    },

    features: {
      fr: [
        "Tableau de bord",
        "Gestion des clients",
        "Gestion des prospects",
        "Suivi des ventes",
        "Gestion des factures",
        "Suivi des paiements",
        "Gestion des organisations",
      ],
      en: [
        "Dashboard",
        "Customer management",
        "Prospect management",
        "Sales tracking",
        "Invoice management",
        "Payment tracking",
        "Organization management",
      ],
    },

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],

    nextProject: "outal",
  },

  {
    slug: "outal",
    name: "OUTAL",
    category: "Digital Platform",
    year: "2026",
    image: "/projects/outal.png",
    website: "https://outal.sn",
    seo: {
      title: "OUTAL : plateforme de location immobilière et automobile | Yohane Wagramale",
      description:
        "Découvrez OUTAL, une plateforme numérique de consultation d'offres de location immobilière et automobile, développée avec HTML, CSS, JavaScript, PHP et MySQL.",
      keywords: [
        "OUTAL",
        "plateforme de location",
        "location immobilière",
        "location automobile",
        "annonces de location",
        "PHP",
        "MySQL",
        "développement web",
      ],
    },

    role: {
      fr: "Développement Web",
      en: "Web Development",
    },

    description: {
      fr: "OUTAL est une plateforme numérique dédiée à la location immobilière et automobile, permettant de découvrir des offres et de faciliter la mise en relation entre utilisateurs.",
      en: "OUTAL is a digital platform dedicated to property and vehicle rentals, helping users discover listings and connect with providers.",
    },

    challenge: {
      fr: "Faciliter la découverte d'offres de location et rendre leur consultation plus accessible depuis une plateforme en ligne.",
      en: "Make rental listings easier to discover and access through an online platform.",
    },

    solution: {
      fr: "Concevoir une plateforme regroupant des annonces immobilières et automobiles dans une interface accessible.",
      en: "Build a platform bringing property and vehicle listings together in an accessible interface.",
    },

    features: {
      fr: [
        "Présentation des annonces",
        "Recherche de locations",
        "Consultation des offres",
        "Interface utilisateur",
      ],
      en: [
        "Listing presentation",
        "Rental search",
        "Offer browsing",
        "User interface",
      ],
    },

    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],

    nextProject: "sales-insights",
  },

  {
    slug: "sales-insights",
    name: "Sales Insights",
    category: "Business Intelligence",
    year: "2026",
    image: "/projects/sales-insights.png",
    website: "https://sales-insights-three.vercel.app/",
    seo: {
      title: "Sales Insights : tableau de bord d'analyse commerciale | Yohane Wagramale",
      description:
        "Explorez Sales Insights, un projet de visualisation de données commerciales et d'indicateurs de performance développé avec Next.js, TypeScript, React et Tailwind CSS.",
      keywords: [
        "Sales Insights",
        "analyse commerciale",
        "visualisation de données",
        "tableau de bord analytique",
        "indicateurs commerciaux",
        "Business Intelligence",
        "Next.js",
        "TypeScript",
      ],
    },

    role: {
      fr: "Développement d'application et visualisation de données",
      en: "Application Development & Data Visualization",
    },

    description: {
      fr: "Sales Insights est un projet d'analyse commerciale conçu pour présenter des indicateurs et faciliter la lecture des données liées aux performances commerciales.",
      en: "Sales Insights is a business analytics project designed to present indicators and make commercial performance data easier to understand.",
    },

    challenge: {
      fr: "Les données commerciales peuvent être difficiles à interpréter lorsqu'elles sont dispersées ou présentées sans organisation visuelle.",
      en: "Business data can be difficult to interpret when scattered or presented without clear visual organization.",
    },

    solution: {
      fr: "Créer une interface analytique qui organise les indicateurs et facilite leur consultation.",
      en: "Create an analytics interface that organizes indicators and makes them easier to explore.",
    },

    features: {
      fr: [
        "Tableau de bord analytique",
        "Indicateurs commerciaux",
        "Visualisation des données",
        "Présentation des performances",
      ],
      en: [
        "Analytics dashboard",
        "Business indicators",
        "Data visualization",
        "Performance overview",
      ],
    },

    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],

    nextProject: "gestion-services",
  },

  {
    slug: "gestion-services",
    name: "Gestion Services",
    category: "Service Business Management",
    year: "2026",
    image: "/projects/gestion-services.png",
    website: "https://gestion-services-ten.vercel.app/presentation",
    seo: {
      title: "Gestion Services : application de gestion pour entreprises de services | Yohane Wagramale",
      description:
        "Découvrez Gestion Services, une application web pour les entreprises de nettoyage, d'entretien, de baby-sitting et de gardiennage. Gestion des clients, équipes, réservations, factures et paiements avec Next.js et Supabase.",
      keywords: [
        "Gestion Services",
        "application de gestion pour entreprise de services",
        "gestion des clients",
        "gestion des réservations",
        "gestion des employés",
        "facturation",
        "suivi des paiements",
        "relance WhatsApp",
        "Next.js",
        "React",
        "Supabase",
        "PostgreSQL",
      ],
    },

    role: {
      fr: "Conception et développement de l'application web",
      en: "Web Application Design & Development",
    },

    description: {
      fr: "Gestion Services est une application web destinée aux entreprises de prestations de services, notamment dans le nettoyage, l'entretien, le baby-sitting et le gardiennage. Elle centralise la gestion des clients, des prestations, des employés, des réservations et de la facturation depuis une interface utilisable sur téléphone.",
      en: "Gestion Services is a web application for service businesses, including cleaning, maintenance, babysitting and security services. It centralizes customer, service, employee, booking and invoicing management in an interface that can be used from a phone.",
    },

    challenge: {
      fr: "Les entreprises de services doivent coordonner leurs clients, leur catalogue de prestations, leurs équipes et leurs réservations, tout en assurant le suivi des factures et des paiements. Lorsque ces informations sont dispersées, le pilotage quotidien et le suivi des sommes à encaisser deviennent plus difficiles.",
      en: "Service businesses need to coordinate customers, service catalogs, teams and bookings while keeping track of invoices and payments. When this information is scattered, daily operations and outstanding payment follow-up become more difficult.",
    },

    solution: {
      fr: "Développer une application centralisée avec un tableau de bord opérationnel, des modules de gestion des clients, services, employés et réservations, ainsi qu'un espace de facturation intégrant les paiements partiels et les relances WhatsApp. L'application comprend également une page publique de présentation.",
      en: "Develop a centralized application with an operational dashboard, customer, service, employee and booking management modules, and an invoicing area supporting partial payments and WhatsApp reminders. The application also includes a public presentation page.",
    },

    features: {
      fr: [
        "Authentification par e-mail et mot de passe avec Supabase Auth",
        "Tableau de bord : réservations du jour, encaissements et factures à suivre",
        "Gestion des clients particuliers et entreprises",
        "Catalogue des services avec catégories et tarifs au forfait, à l'heure, à la journée ou au mois",
        "Gestion des employés, de leurs postes et de leur statut",
        "Réservations avec affectation d'un client, d'un service et d'un employé",
        "Factures avec numérotation automatique et échéances",
        "Enregistrement des paiements partiels et suivi des statuts de facture",
        "Factures imprimables et exportables en PDF via l'impression",
        "Relances WhatsApp avec message prérempli et suivi de la dernière relance",
        "Page publique de présentation de l'entreprise",
      ],
      en: [
        "Email and password authentication with Supabase Auth",
        "Dashboard showing today's bookings, payments received and invoices to follow up",
        "Management of individual and business customers",
        "Service catalog with categories and flat-rate, hourly, daily or monthly pricing",
        "Employee management, including roles and active status",
        "Bookings linking customers, services and employees",
        "Invoices with automatic numbering and due dates",
        "Partial payment recording and invoice status tracking",
        "Printable invoices that can be saved as PDF",
        "WhatsApp reminders with pre-filled messages and last-reminder tracking",
        "Public company presentation page",
      ],
    },

    technologies: [
      "Next.js 14",
      "React 18",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "CSS",
      "Vercel",
    ],

    nextProject: "atlantic-web-studio",
  },

  {
    slug: "atlantic-web-studio",
    name: "Atlantic Web Studio",
    category: "Web Development",
    year: "2026",
    image: "/projects/atlantic.png",
    website: "https://atlanticwebstudio.vercel.app/",
    seo: {
      title: "Atlantic Web Studio : projet de développement web | Yohane Wagramale",
      description:
        "Découvrez Atlantic Web Studio, un projet de présence numérique et de présentation de services web réalisé avec Next.js, TypeScript et Tailwind CSS.",
      keywords: [
        "Atlantic Web Studio",
        "développement web",
        "services web",
        "présence numérique",
        "site web professionnel",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },

    role: {
      fr: "Conception et développement Web",
      en: "Web Design & Development",
    },

    description: {
      fr: "Atlantic Web Studio est un projet de présence numérique mettant en avant une approche moderne de la présentation de services web.",
      en: "Atlantic Web Studio is a digital presence project showcasing a modern approach to presenting web services.",
    },

    challenge: {
      fr: "Présenter une activité numérique avec une identité visuelle cohérente et une expérience de navigation claire.",
      en: "Present a digital business with a consistent visual identity and a clear browsing experience.",
    },

    solution: {
      fr: "Créer une interface web moderne mettant en valeur les services et l'identité du projet.",
      en: "Create a modern web interface highlighting the project's services and identity.",
    },

    features: {
      fr: [
        "Présentation des services",
        "Identité visuelle",
        "Navigation web",
      ],
      en: [
        "Service presentation",
        "Visual identity",
        "Web navigation",
      ],
    },

    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],

    nextProject: "nexora-crm",
  },
];
