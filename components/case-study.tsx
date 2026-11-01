"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudyPage({ slug }: { slug: string }) {
  const { language, setLanguage, theme, setTheme } = useLanguage();

  const project = caseStudies.find((item) => item.slug === slug);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!project) {
    return (
      <main className="min-h-screen bg-[var(--bg)] px-6 py-32 text-[var(--paper)]">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link href="/" className="mt-8 inline-block underline">
          {language === "fr" ? "Retour au portfolio" : "Back to portfolio"}
        </Link>
      </main>
    );
  }

  const nextProject = caseStudies.find(
    (item) => item.slug === project.nextProject
  );

  const text = {
    fr: {
      back: "Retour au portfolio",
      project: "Étude de cas",
      overview: "Présentation",
      challenge: "Le défi",
      solution: "La solution",
      features: "Fonctionnalités",
      stack: "Environnement technique",
      next: "Projet suivant",
      visit: "Visiter le projet",
      role: "Mon rôle",
      year: "Année",
      category: "Catégorie",
      contact: "Discutons de votre projet",
      language: "Passer en anglais",
      theme: theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre",
    },
    en: {
      back: "Back to portfolio",
      project: "Case study",
      overview: "Overview",
      challenge: "The challenge",
      solution: "The solution",
      features: "Key features",
      stack: "Technology stack",
      next: "Next project",
      visit: "Visit project",
      role: "My role",
      year: "Year",
      category: "Category",
      contact: "Let's discuss your project",
      language: "Switch to French",
      theme: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    },
  }[language];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--paper)] transition-colors duration-300">
      {/* NAVIGATION */}
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="shrink-0 text-xl font-bold tracking-tight">
            YOHANE-WAGRA <span className="text-[#C5F467]"> ®</span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/"
              className="hidden items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] transition-colors hover:text-[#C5F467] sm:flex"
            >
              <ArrowLeft size={15} />
              {text.back}
            </Link>

            <button
              type="button"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              aria-label={text.language}
              className="border-l border-[var(--line)] pl-3 text-[10px] font-bold tracking-widest transition-colors hover:text-[#C5F467] sm:pl-5"
            >
              {language.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={text.theme}
              title={text.theme}
              className="theme-toggle"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-4 sm:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] transition-colors hover:text-[#C5F467]"
          >
            <ArrowLeft size={15} />
            {text.back}
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6">
        {/* HERO */}
        <section className="py-24 md:py-36">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C5F467]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {text.project} / {project.category}
            </span>
          </div>

          <h1 className="max-w-6xl text-5xl font-bold uppercase leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[10rem]">
            {project.name}
            <span className="text-[#C5F467]">.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-[var(--paper-muted)] md:text-xl">
            {project.description[language]}
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[var(--muted)]">
                {text.role}
              </span>
              <p className="mt-3 text-sm text-[var(--paper)]">
                {project.role[language]}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[var(--muted)]">
                {text.year}
              </span>
              <p className="mt-3 text-sm text-[var(--paper)]">
                {project.year}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[var(--muted)]">
                {text.category}
              </span>
              <p className="mt-3 text-sm text-[var(--paper)]">
                {project.category}
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT IMAGE */}
        <section className="relative overflow-hidden border border-[var(--line)] bg-[var(--panel)]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.image}
              alt={`Aperçu de ${project.name}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grid grid-cols-1 gap-10 border-b border-[var(--line)] py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8EBA43]">
            01 / {text.overview}
          </span>
          <p className="max-w-3xl text-2xl leading-relaxed text-[var(--paper)] md:text-4xl">
            {project.description[language]}
          </p>
        </section>

        {/* CHALLENGE */}
        <section className="grid grid-cols-1 gap-10 border-b border-[var(--line)] py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8EBA43]">
            02 / {text.challenge}
          </span>
          <p className="max-w-3xl text-lg leading-9 text-[var(--paper-muted)] md:text-xl">
            {project.challenge[language]}
          </p>
        </section>

        {/* SOLUTION */}
        <section className="grid grid-cols-1 gap-10 border-b border-[var(--line)] py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8EBA43]">
            03 / {text.solution}
          </span>
          <p className="max-w-3xl text-lg leading-9 text-[var(--paper-muted)] md:text-xl">
            {project.solution[language]}
          </p>
        </section>

        {/* FEATURES */}
        <section className="border-b border-[var(--line)] py-24 md:py-32">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8EBA43]">
                04 / {text.features}
              </span>
              <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight md:text-6xl">
                {text.features}<span className="text-[#C5F467]">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
              {project.name} — {project.category}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0 border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {project.features[language].map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-4 border-b border-[var(--line)] py-7 sm:px-5"
              >
                <span className="text-xs text-[#8EBA43]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[var(--paper)]">{feature}</span>
                <Check
                  size={15}
                  className="ml-auto shrink-0 text-[var(--muted)]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="border-b border-[var(--line)] py-24 md:py-32">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8EBA43]">
            05 / {text.stack}
          </span>

          <div className="mt-12 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-[var(--line)] px-5 py-4 text-sm text-[var(--paper)] transition-colors hover:border-[#C5F467] hover:bg-[#C5F467] hover:text-black"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.website !== "#" && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 bg-[#C5F467] px-7 py-5 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:-translate-y-1"
            >
              {text.visit}
              <ExternalLink size={16} />
            </a>
          )}
        </section>

        {/* NEXT PROJECT */}
        {nextProject && (
          <section className="py-24 md:py-36">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {text.next}
            </span>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group mt-10 flex flex-col justify-between gap-8 border-b border-[var(--line)] pb-8 transition-colors hover:border-[#C5F467] sm:flex-row sm:items-end"
            >
              <h2 className="text-4xl font-bold uppercase tracking-tight transition-colors group-hover:text-[#8EBA43] sm:text-6xl md:text-8xl">
                {nextProject.name}
                <span className="text-[#C5F467]">.</span>
              </h2>
              <ArrowRight
                size={35}
                className="transition-transform group-hover:translate-x-3"
              />
            </Link>
          </section>
        )}

        {/* CONTACT */}
        <section className="border-t border-[var(--line)] py-16">
          <Link
            href="/#contact"
            className="group flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
          >
            <span className="text-2xl font-bold uppercase md:text-4xl">
              {text.contact}
            </span>
            <ArrowUpRight
              size={30}
              className="text-[#C5F467] transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"
            />
          </Link>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[var(--line)] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[10px] uppercase tracking-widest text-[var(--muted)] sm:flex-row">
          <span>YOHANE® — Portfolio 2026</span>
          <span>Dakar · Pointe-Noire</span>
        </div>
      </footer>
    </main>
  );
}
