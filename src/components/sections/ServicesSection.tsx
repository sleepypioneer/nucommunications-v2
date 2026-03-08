import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import DecorativeDots from "@/components/common/DecorativeDots";
import DecorativeTriangle from "@/components/common/DecorativeTriangle";
import iconStrategy from "@/assets/images/icon_strategy.png";
import iconMedia from "@/assets/images/icon_media.png";
import iconContent from "@/assets/images/icon_content_and_storytelling.png";
import iconEvents from "@/assets/images/icon_events.png";

const serviceIcons = [iconStrategy, iconMedia, iconContent, iconEvents];

/** Services / Mein Angebot — 2x2 grid with icon images, matching PDF reference */
const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" aria-label={t.nav.services} className="py-12 sm:py-16 lg:min-h-screen lg:py-24 bg-background relative overflow-hidden flex flex-col justify-center">
      <DecorativeDots className="absolute top-24 left-6 hidden lg:grid" rows={4} cols={6} />
      <DecorativeDots className="absolute top-24 right-6 hidden lg:grid" rows={4} cols={6} />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading className="mx-auto">{t.services.heading}</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {t.services.items.map((item, i) => (
            <article key={i} className="flex gap-6 items-start">
              <img
                src={serviceIcons[i]}
                alt=""
                className="w-20 h-20 flex-shrink-0 object-contain"
                aria-hidden="true"
                loading="lazy"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="font-sans text-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DecorativeTriangle className="bottom-0 right-0" size={100} />
    </section>
  );
};

export default ServicesSection;
