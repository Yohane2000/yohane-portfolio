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
    category: "Management Application",
    year: "2026",
    image: "/projects/gestion-services.png",
    website: "https://gestion-services-ten.vercel.app/login",
    seo: {
      title: "Gestion Services : application web de gestion | Yohane Wagramale",
      description:
        "Découvrez Gestion Services, une application web conçue pour organiser les activités et informations liées à la gestion de services, développée avec Next.js et TypeScript.",
      keywords: [
        "Gestion Services",
        "application de gestion",
        "gestion des services",
        "organisation des activités",
        "application web",
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
      fr: "Gestion Services est une application web orientée vers la gestion et l'organisation des activités de service.",
      en: "Gestion Services is a web application focused on managing and organizing service activities.",
    },

    challenge: {
      fr: "Structurer les opérations et proposer une interface permettant de retrouver plus facilement les informations utiles à la gestion.",
      en: "Structure operations and provide an interface that makes management information easier to access.",
    },

    solution: {
      fr: "Développer une application web avec une interface dédiée à la gestion des activités.",
      en: "Develop a web application with an interface dedicated to activity management.",
    },

    features: {
      fr: [
        "Interface de gestion",
        "Organisation des informations",
        "Accès à l'application",
      ],
      en: [
        "Management interface",
        "Information organization",
        "Application access",
      ],
    },

    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],

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
