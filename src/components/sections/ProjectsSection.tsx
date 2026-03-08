import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import fundraisingImg from "@/assets/images/fundraising_for_climate_actions_2023_2024.png";
import summitImg from "@/assets/images/austrian_world_summit_2023_and_2024.png";
import organicsImg from "@/assets/images/eu_organics_award.png";

const projectImages = [fundraisingImg, summitImg, organicsImg];

/** Reference Projects — 3-column card layout */
const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" aria-label={t.nav.projects} className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading>{t.projects.heading}</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {t.projects.items.map((project, i) => (
            <article key={i} className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={projectImages[i]}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="font-sans text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                {project.subtitle}
              </p>
              <h3 className="font-serif text-lg font-bold text-secondary mb-2">{project.title}</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
