import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/common/LanguageToggle";
import { Menu, X } from "lucide-react";

const navIds = ["about", "mission", "services", "projects", "award", "contact"] as const;

/** Fixed top navigation with mobile hamburger menu */
const Header: React.FC = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navLabels = t.nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo / Brand */}
        <a href="#about" className="font-serif text-xl font-bold text-secondary tracking-wider">
          <span className="text-primary">NU</span> Communications
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="font-sans text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {navLabels[id]}
                </a>
              </li>
            ))}
            <li>
              <LanguageToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile navigation" className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col py-4">
            {navIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 font-sans text-base font-semibold text-foreground hover:text-primary hover:bg-muted transition-colors"
                >
                  {navLabels[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
