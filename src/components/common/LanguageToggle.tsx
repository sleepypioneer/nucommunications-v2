import { useLanguage } from "@/context/LanguageContext";

/** Accessible DE/EN language toggle button */
const LanguageToggle: React.FC = () => {
  const { t, toggleLanguage, lang } = useLanguage();

  return (
    <>
      <button
        onClick={toggleLanguage}
        className="px-3 py-1.5 text-sm font-sans font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
      >
        {t.langToggle}
      </button>
      {/* Live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {lang === "de" ? "Sprache: Deutsch" : "Language: English"}
      </div>
    </>
  );
};

export default LanguageToggle;
