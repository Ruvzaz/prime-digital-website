"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { th } from "@/locales/th";
import { en } from "@/locales/en";
import { TRANSITION_DURATION } from "@/lib/constants";

type Language = "th" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isTransitioning: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations imported from locale files
const translations = {
  th,
  en,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("th");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang && (savedLang === "th" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    // 1. Start Transition
    setIsTransitioning(true);
    
    // 2. Wait for transition overlay to cover screen
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem("language", lang);
      
      // 3. End Transition (allow overlay to fade out)
      setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, TRANSITION_DURATION);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[language][key as keyof typeof th] || key;
    
    // Replace parameters like {year} with actual values
    if (params) {
      Object.keys(params).forEach((param) => {
        text = text.replace(`{${param}}`, String(params[param]));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
