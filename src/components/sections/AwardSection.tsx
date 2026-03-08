import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import DecorativeDots from "@/components/common/DecorativeDots";
import awardImg from "@/assets/images/photo_eu_commission_2014.png";

/** Award section — split layout with photos and description */
const AwardSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="award" aria-label={t.nav.award} className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <figure>
              <img
                src={awardImg}
                alt={t.alt.award}
                className="w-full object-cover shadow-lg"
                loading="lazy"
              />
            </figure>
            <DecorativeDots className="absolute -top-6 -left-4 hidden lg:grid" rows={4} cols={4} />
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
    </section>
  );
};

export default AwardSection;
