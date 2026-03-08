import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import DecorativeDots from "@/components/common/DecorativeDots";
import DecorativeTriangle from "@/components/common/DecorativeTriangle";
import fundraisingImg from "@/assets/images/fundraising_for_climate_actions_2023_2024.png";
import summitImg from "@/assets/images/austrian_world_summit_2023_and_2024.png";
import organicsImg from "@/assets/images/eu_organics_award.png";

const projectImages = [fundraisingImg, summitImg, organicsImg];

/** Reference Projects — 3-column card layout matching PDF reference */
const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" aria-label={t.nav.projects} className="min-h-screen py-16 lg:py-24 relative overflow-hidden flex items-center">
      <DecorativeDots className="absolute top-24 left-6 hidden lg:grid" rows={4} cols={6} />
      <DecorativeDots className="absolute top-24 right-6 hidden lg:grid" rows={4} cols={6} />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <SectionHeading className="mx-auto">{t.projects.heading}</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {t.projects.items.map((project, i) => (
            <article key={i} className="group text-center">
              <div className="overflow-hidden mb-6">
                <img
                  src={projectImages[i]}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary mb-3">{project.title}</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>
      </div>

      <DecorativeTriangle className="bottom-0 right-0" size={100} />
    </section>
  );
};

export default ProjectsSection;
