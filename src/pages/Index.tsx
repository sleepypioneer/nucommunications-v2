import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AwardSection from "@/components/sections/AwardSection";
import ContactSection from "@/components/sections/ContactSection";

/** Main single-page layout for NU Communications website */
const Index = () => {
  return (
    <>
      {/* Skip to content for keyboard users */}
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <ProjectsSection />
        <AwardSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
