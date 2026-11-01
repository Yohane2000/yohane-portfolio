import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const siteUrl = "https://yohane-portfolio.vercel.app";
const siteTitle = "Yohane Wagramale | Développeur Full-Stack";
const siteDescription =
  "Portfolio de Yohane Wagramale, développeur Full-Stack. Découvrez ses applications web, projets numériques et compétences en développement web.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Yohane Wagramale",
  },
  description: siteDescription,
  applicationName: "Yohane Wagramale Portfolio",
  authors: [{ name: "Yohane Wagramale" }],
  creator: "Yohane Wagramale",
  publisher: "Yohane Wagramale",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Yohane Wagramale Portfolio",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/projects/nexora.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Yohane Wagramale — Développeur Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/projects/nexora.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
