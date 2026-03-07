import { useLanguage } from "@/context/LanguageContext";
import missionImg from "@/assets/images/mission.jpg";

/** Mission section — full-width image with quote overlay */
const MissionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="mission"
      aria-label={t.nav.mission}
      className="relative min-h-[60vh] flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={missionImg}
          alt={t.alt.mission}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      {/* Quote box */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-2xl bg-secondary/90 p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t.mission.heading}
          </h2>
          <blockquote className="relative">
            <span className="text-primary text-6xl font-serif absolute -top-4 -left-2 leading-none" aria-hidden="true">
              &ldquo;
            </span>
            <p className="font-sans text-primary-foreground/90 leading-relaxed text-lg pl-6">
              {t.mission.quote}
            </p>
            <span className="text-primary text-6xl font-serif leading-none" aria-hidden="true">
              &rdquo;
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
