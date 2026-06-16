"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { contentDe, contentEn, ContentType } from "@/data/content";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  // Optional: Speichern der Präferenz im localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage") as Language;
    if (savedLang === "de" || savedLang === "en") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "de" ? "en" : "de";
      localStorage.setItem("preferredLanguage", newLang);
      return newLang;
    });
  };

  const content = language === "de" ? contentDe : contentEn;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
