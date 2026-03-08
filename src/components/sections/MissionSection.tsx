import { useLanguage } from "@/context/LanguageContext";
import DecorativeDots from "@/components/common/DecorativeDots";
import DecorativeTriangle from "@/components/common/DecorativeTriangle";
import missionBanner from "@/assets/images/mission_banner.png";

/** Mission section — banner image with quote box below */
const MissionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" aria-label={t.nav.mission} className="relative">
      {/* Banner image */}
      <div className="w-full">
        <img
          src={missionBanner}
          alt={t.alt.mission}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      {/* Quote box */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto flex items-start gap-6 md:gap-10">
            {/* Opening quote mark */}
            <span className="text-primary text-7xl md:text-8xl font-serif leading-none flex-shrink-0 -mt-2" aria-hidden="true">
              &ldquo;
            </span>

            {/* Quote text */}
            <p className="font-serif italic text-primary-foreground text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
              {t.mission.quote}
            </p>

            {/* Closing quote mark */}
            <span className="text-primary text-7xl md:text-8xl font-serif leading-none flex-shrink-0 self-end -mb-2" aria-hidden="true">
              &rdquo;
            </span>
          </div>
        </div>
      </div>

      {/* Decorative dots bottom-left */}
      <DecorativeDots className="absolute -bottom-8 left-4 hidden lg:grid" rows={5} cols={8} />
    </section>
  );
};

export default MissionSection;
