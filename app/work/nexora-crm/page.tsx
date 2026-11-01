import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study";
import { caseStudies } from "@/lib/case-studies";

const project = caseStudies.find((item) => item.slug === "nexora-crm");

export function generateMetadata(): Metadata {
  if (!project) {
    return {
      title: "Nexora CRM",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = `/work/${project.slug}`;

  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: canonicalPath,
      type: "article",
      images: [
        {
          url: project.image,
          alt: `Aperçu du projet ${project.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
      images: [project.image],
    },
  };
}

export default function NexoraCRMPage() {
  return <CaseStudyPage slug="nexora-crm" />;
}
