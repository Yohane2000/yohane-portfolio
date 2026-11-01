"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { copy, type Language } from "@/lib/translations";

type Theme = "dark" | "light";
type ContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (typeof copy)[Language];
};

const LanguageContext = createContext<ContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("yohane-language");
    const savedTheme = localStorage.getItem("yohane-theme");
    if (savedLanguage === "fr" || savedLanguage === "en") setLanguage(savedLanguage);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("yohane-language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("yohane-theme", theme);
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, theme, setTheme, t: copy[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
