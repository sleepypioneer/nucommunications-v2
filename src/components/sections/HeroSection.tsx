import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import DecorativeDots from "@/components/common/DecorativeDots";
import portraitImg from "@/assets/images/natasha_headshot.png";

/** Hero / About Me section — split layout with portrait and bio */
const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" aria-label={t.nav.about} className="pt-24 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative">
            <figure>
              <img
                src={portraitImg}
                alt={t.alt.portrait}
                className="w-full max-w-md mx-auto lg:mx-0 object-cover shadow-lg"
                loading="eager"
              />
            </figure>
            <DecorativeDots className="absolute -bottom-6 -right-4 hidden lg:grid" rows={5} cols={5} />
          </div>

          {/* Bio text */}
          <div>
            <SectionHeading>{t.hero.heading}</SectionHeading>
            <div className="mt-8 space-y-4 font-sans text-foreground leading-relaxed">
              {t.hero.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
