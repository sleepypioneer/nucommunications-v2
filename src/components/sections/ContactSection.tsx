import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import DecorativeDots from "@/components/common/DecorativeDots";
import DecorativeTriangle from "@/components/common/DecorativeTriangle";
import { Phone, Globe, Mail, MapPin } from "lucide-react";
import contactImg1 from "@/assets/images/contact_collage.png";
import contactImg2 from "@/assets/images/photo_schwarzenegger_foundation.png";
import contactImg3 from "@/assets/images/photo_natasha_and_jane_goodall.png";

/** Contact section — dark/white split with photo collage, matching PDF reference */
const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const contactItems = [
    { icon: Phone, value: t.contact.phone, href: `tel:${t.contact.phone.replace(/\s/g, "")}` },
    { icon: Globe, value: t.contact.website, href: `https://${t.contact.website}`, external: true },
    { icon: Mail, value: t.contact.email, href: `mailto:${t.contact.email}` },
  ];

  return (
    <section id="contact" aria-label={t.nav.contact} className="min-h-screen relative overflow-hidden flex items-center">
      {/* Split background — dark takes ~1/3 */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-[35%] bg-secondary" />
        <div className="hidden lg:block w-[65%] bg-background" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 items-center">
            {/* Contact details — dark side */}
            <div className="text-secondary-foreground lg:pl-4">
              <SectionHeading light>{t.contact.heading}</SectionHeading>

              <address className="not-italic space-y-6 font-sans mt-10">
                {contactItems.map(({ icon: Icon, value, href, external }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="text-primary-foreground" size={18} aria-hidden="true" />
                    </span>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <MapPin className="text-primary-foreground" size={18} aria-hidden="true" />
                  </span>
                  <div className="space-y-1">
                    {t.contact.addresses.map((addr, i) => (
                      <span key={i} className="block">{addr}</span>
                    ))}
                  </div>
                </div>
              </address>
            </div>

            {/* Photo collage — light side, larger photos */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={contactImg1}
                  alt={t.alt.contact}
                  className="col-span-2 w-full h-72 object-cover shadow-lg"
                  loading="lazy"
                />
                <img
                  src={contactImg2}
                  alt={t.alt.contact}
                  className="w-full h-60 object-cover shadow-lg"
                  loading="lazy"
                />
                <img
                  src={contactImg3}
                  alt={t.alt.contact}
                  className="w-full h-60 object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
              <DecorativeDots className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:grid" rows={6} cols={3} />
            </div>
          </div>
        </div>
      </div>

      <DecorativeTriangle className="bottom-0 right-0" size={100} />
    </section>
  );
};

export default ContactSection;
