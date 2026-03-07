import { useLanguage } from "@/context/LanguageContext";

/** Site footer with copyright */
const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 text-center font-sans text-sm opacity-75">
        © {new Date().getFullYear()} NU Communications.{" "}
        {lang === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
      </div>
    </footer>
  );
};

export default Footer;
