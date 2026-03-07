import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations, type TranslationData } from "@/data/translations";

type Language = "de" | "en";

interface LanguageContextValue {
  /** Current active language */
  lang: Language;
  /** All translated strings for the current language */
  t: TranslationData;
  /** Toggle between DE and EN */
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/** Provider that wraps the app and supplies bilingual translations */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("de");

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "de" ? "en" : "de"));
  }, []);

  // Update <html lang=""> attribute dynamically for a11y
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    t: translations[lang],
    toggleLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

/** Hook to access translations and language state */
export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
