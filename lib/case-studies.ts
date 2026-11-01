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
    website: "https://crm-pgrknamtx-yohane-wagramale.vercel.app",
    seo: {
      title: "Nexora CRM : logiciel de gestion commerciale multi-organisation | Yohane Wagramale",
      description:
        "Découvrez Nexora CRM, une application de gestion commerciale développée avec Next.js, TypeScript et Supabase. Centralisation des clients, prospects, ventes, factures et paiements dans un espace multi-organisations.",
      keywords: [
        "Nexora CRM",
        "logiciel CRM",
        "application de gestion commerciale",
        "CRM multi-organisations",
        "gestion des clients",
        "suivi des prospects",
        "gestion des ventes",
        "facturation et paiements",
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "développeur Full-Stack",
      ],
    },

    role: {
      fr: "Conception et développement Full-Stack",
      en: "Full-Stack Design & Development",
    },

    description: {
      fr: "Nexora CRM est une application web de gestion commerciale destinée aux entreprises qui souhaitent centraliser leurs clients, prospects, ventes, factures et paiements. Elle repose sur une architecture multi-organisations : chaque utilisateur est rattaché à une organisation et ses accès sont définis selon son rôle.",
      en: "Nexora CRM is a business management web application for companies that want to centralize customers, prospects, sales, invoices and payments. It uses a multi-organization architecture: each user belongs to an organization and access is defined by their role.",
    },

    challenge: {
      fr: "Les entreprises ont besoin de regrouper leurs informations commerciales et de contrôler l'accès aux données selon les responsabilités de chaque collaborateur. Une application multi-organisations doit également isoler les données de chaque structure et protéger les opérations sensibles.",
      en: "Businesses need to bring their commercial information together and control data access according to each team member's responsibilities. A multi-organization application must also isolate each organization's data and protect sensitive operations.",
    },

    solution: {
      fr: "Concevoir une plateforme centralisée autour d'un tableau de bord, de modules clients, prospects, ventes, factures et paiements, ainsi que d'un espace équipe et organisation. L'authentification Supabase et les politiques Row Level Security (RLS) participent à la gestion des accès et à l'isolation des données. Certains modules, notamment les activités, les rapports et le parcours complet d'invitation, restent en cours de développement.",
      en: "Build a centralized platform with a dashboard, customer, prospect, sales, invoice and payment modules, alongside team and organization management. Supabase authentication and Row Level Security (RLS) policies support access management and data isolation. Some areas, including activities, reports and the complete invitation flow, are still under development.",
    },

    features: {
      fr: [
        "Tableau de bord et indicateurs de gestion commerciale",
        "Gestion des clients",
        "Suivi des prospects",
        "Gestion des ventes",
        "Gestion des factures et de leurs éléments",
        "Suivi des paiements",
        "Architecture multi-organisations",
        "Gestion des membres et des rôles : administrateur, commercial et comptable",
        "Paramètres du profil, de l'organisation et de la sécurité",
        "Préférences de thème et de langue enregistrées localement",
      ],
      en: [
        "Dashboard and business management indicators",
        "Customer management",
        "Prospect tracking",
        "Sales management",
        "Invoice and invoice item management",
        "Payment tracking",
        "Multi-organization architecture",
        "Member and role management: admin, sales and accountant",
        "Profile, organization and security settings",
        "Theme and language preferences stored locally",
      ],
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Row Level Security (RLS)",
      "Lucide React",
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
    category: "Business Intelligence & Data Analysis",
    year: "2026",
    image: "/projects/sales-insights.png",
    website: "https://sales-insights-three.vercel.app/",
    seo: {
      title: "Sales Insights : analyse des ventes à partir de fichiers CSV | Yohane Wagramale",
      description:
        "Découvrez Sales Insights, une application web d'analyse commerciale qui importe des fichiers CSV, nettoie les données de ventes et permet de filtrer les résultats par période, catégorie et ville.",
      keywords: [
        "Sales Insights",
        "analyse des ventes",
        "analyse commerciale",
        "importation CSV",
        "analyse de données CSV",
        "nettoyage de données",
        "Business Intelligence",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
    },

    role: {
      fr: "Conception et développement d'une application d'analyse commerciale",
      en: "Design and Development of a Business Analytics Application",
    },

    description: {
      fr: "Sales Insights est une application web d'analyse commerciale qui permet d'explorer des données de ventes à partir d'un fichier CSV. Elle nettoie les données importées et propose des filtres pour examiner les performances selon plusieurs critères, directement dans le navigateur.",
      en: "Sales Insights is a web-based business analytics application that lets users explore sales data from a CSV file. It cleans imported data and provides filters to examine performance across several criteria, directly in the browser.",
    },

    challenge: {
      fr: "Rendre les données de ventes plus faciles à consulter et à analyser, même lorsqu'elles proviennent d'un fichier CSV qui peut contenir des doublons ou des erreurs.",
      en: "Make sales data easier to explore and analyze, even when it comes from a CSV file that may contain duplicates or data errors.",
    },

    solution: {
      fr: "Développer une application web qui importe les fichiers CSV, traite les données importées, puis permet de les explorer à l'aide de filtres par période, catégorie et ville. Les données restent dans le navigateur tant qu'elles ne sont pas enregistrées.",
      en: "Build a web application that imports CSV files, processes the imported data, and lets users explore it with date-range, category and city filters. The data remains in the browser unless it is explicitly saved.",
    },

    features: {
      fr: [
        "Importation de fichiers CSV contenant des données de ventes",
        "Chargement de données de démonstration pour découvrir l'application",
        "Suppression des doublons et traitement des erreurs dans les données importées",
        "Filtrage des ventes par période",
        "Filtrage par catégorie de produit et par ville",
        "Consultation des données directement dans le navigateur",
        "Prise en charge des noms de colonnes en français et en anglais",
      ],
      en: [
        "Import sales data from CSV files",
        "Load sample data to explore the application",
        "Remove duplicates and handle errors in imported data",
        "Filter sales by date range",
        "Filter by product category and city",
        "View data directly in the browser",
        "Support for French and English column names",
      ],
    },

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

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
    category: "Agency Website & Digital Services",
    year: "2026",
    image: "/projects/atlantic.png",
    website: "https://atlanticwebstudio.vercel.app/",
    seo: {
      title: "Atlantic Web Studio : site web d'agence digitale à Pointe-Noire | Yohane Wagramale",
      description:
        "Découvrez le site vitrine d'Atlantic Web Studio, agence basée à Pointe-Noire qui propose des outils de gestion pour PME, des applications sur mesure et des sites web, avec formation et assistance.",
      keywords: [
        "Atlantic Web Studio",
        "agence web Pointe-Noire",
        "développement web Congo",
        "outils de gestion pour PME",
        "applications web sur mesure",
        "création de site web",
        "HTML",
        "CSS",
        "JavaScript",
        "assistant virtuel",
      ],
    },

    role: {
      fr: "Conception et développement du site web",
      en: "Website Design & Development",
    },

    description: {
      fr: "Atlantic Web Studio est le site vitrine d'une agence basée à Pointe-Noire, en République du Congo. L'agence accompagne les PME avec des outils de gestion pour les ventes, les stocks, les factures et les dettes, ainsi qu'avec des applications sur mesure et des sites web. Elle propose également de la formation et une assistance mensuelle.",
      en: "Atlantic Web Studio is the showcase website of an agency based in Pointe-Noire, Republic of the Congo. The agency supports small and medium-sized businesses with management tools for sales, inventory, invoices and debts, as well as custom applications and websites. It also offers training and monthly support.",
    },

    challenge: {
      fr: "Présenter clairement les services, les offres, les tarifs indicatifs et le processus de collaboration d'une agence numérique, tout en permettant aux visiteurs de demander facilement un devis depuis leur téléphone.",
      en: "Clearly present a digital agency's services, packages, indicative prices and collaboration process, while making it easy for visitors to request a quote from their phone.",
    },

    solution: {
      fr: "Réaliser un site vitrine statique multi-pages, responsive et sans serveur ni base de données. Le site organise les informations sur les services et les offres, puis oriente les demandes de devis vers WhatsApp grâce à un formulaire qui prépare un message à envoyer par le visiteur.",
      en: "Build a responsive, multi-page static showcase website with no server or database. The site organizes information about services and packages, then directs quote requests to WhatsApp through a form that prepares a message for the visitor to send.",
    },

    features: {
      fr: [
        "Site multi-pages avec présentation, services, offres, méthode de travail, partenaires et contact",
        "Interface responsive adaptée au téléphone, à la tablette et à l'ordinateur",
        "Navigation fixe et menu mobile",
        "Mode sombre automatique selon les préférences de l'appareil",
        "Formulaire de demande de devis qui prépare un message WhatsApp",
        "Boutons de demande de pack avec présélection de l'offre dans le formulaire",
        "Assistant virtuel à base de mots-clés pour répondre aux questions sur les services, prix, délais et assistance",
        "Conversation de l'assistant conservée entre les pages pendant la session avec sessionStorage",
        "Mesures d'accessibilité de base : navigation clavier, libellés, contrastes et réduction des animations",
      ],
      en: [
        "Multi-page website covering the agency, services, packages, workflow, partners and contact",
        "Responsive interface for phones, tablets and desktop computers",
        "Fixed navigation bar and mobile menu",
        "Automatic dark mode based on device preferences",
        "Quote request form that prepares a WhatsApp message",
        "Package request buttons that preselect the chosen offer in the form",
        "Keyword-based virtual assistant answering questions about services, prices, timelines and support",
        "Assistant conversation preserved across pages during the session with sessionStorage",
        "Basic accessibility support: keyboard navigation, field labels, contrast and reduced-motion preferences",
      ],
    },

    technologies: ["HTML", "CSS", "JavaScript"],

    nextProject: "nexora-crm",
  },
];
