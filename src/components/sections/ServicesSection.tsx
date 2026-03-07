import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import DecorativeDots from "@/components/common/DecorativeDots";
import { Lightbulb, Newspaper, PenTool, CalendarDays } from "lucide-react";

const icons = [Lightbulb, Newspaper, PenTool, CalendarDays];

/** Services / Mein Angebot — 2x2 grid with icons */
const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" aria-label={t.nav.services} className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading className="mx-auto">{t.services.heading}</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article
                key={i}
                className="bg-background p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary"
              >
                <Icon className="text-primary mb-4" size={36} aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="font-sans text-foreground leading-relaxed text-sm">{item.description}</p>
              </article>
            );
          })}
          <DecorativeDots className="absolute -bottom-10 right-0 hidden lg:grid" rows={3} cols={8} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
