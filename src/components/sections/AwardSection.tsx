import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import DecorativeDots from "@/components/common/DecorativeDots";
import DecorativeTriangle from "@/components/common/DecorativeTriangle";
import awardImg1 from "@/assets/images/photo_eu_commission_2014.png";
import awardImg2 from "@/assets/images/photo_eu_commission_2014_2.png";

/** Award section — two stacked photos left, text right, matching PDF reference */
const AwardSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="award" aria-label={t.nav.award} className="py-16 lg:py-24 relative overflow-hidden">
      <DecorativeDots className="absolute top-8 left-1/2 -translate-x-1/2 hidden lg:grid" rows={3} cols={10} />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Two stacked photos */}
          <div className="relative space-y-4">
            <img
              src={awardImg1}
              alt={t.alt.award}
              className="w-full object-cover shadow-lg"
              loading="lazy"
            />
            <img
              src={awardImg2}
              alt={t.alt.award}
              className="w-full object-cover shadow-lg"
              loading="lazy"
            />
            <DecorativeDots className="absolute -bottom-8 -left-4 hidden lg:grid" rows={5} cols={6} />
          </div>

          {/* Text */}
          <div>
            <SectionHeading>{t.award.heading}</SectionHeading>
            <h3 className="font-serif text-xl font-bold text-secondary mt-8 mb-4">{t.award.title}</h3>
            <div className="space-y-4 font-sans text-foreground leading-relaxed">
              {t.award.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DecorativeTriangle className="bottom-0 right-0" size={100} />
    </section>
  );
};

export default AwardSection;
