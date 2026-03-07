import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/common/SectionHeading";
import contactImg from "@/assets/images/contact.jpg";
import { Phone, Globe, Mail, MapPin } from "lucide-react";

/** Contact section — dark background with contact details and photo */
const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" aria-label={t.nav.contact} className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading light>{t.contact.heading}</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact details */}
          <address className="not-italic space-y-5 font-sans">
            <div className="flex items-center gap-4">
              <Phone className="text-primary flex-shrink-0" size={20} aria-hidden="true" />
              <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                {t.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="text-primary flex-shrink-0" size={20} aria-hidden="true" />
              <a
                href={`https://${t.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {t.contact.website}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary flex-shrink-0" size={20} aria-hidden="true" />
              <a href={`mailto:${t.contact.email}`} className="hover:text-primary transition-colors">
                {t.contact.email}
              </a>
            </div>
            {t.contact.addresses.map((addr, i) => (
              <div key={i} className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                <span>{addr}</span>
              </div>
            ))}
          </address>

          {/* Photo */}
          <figure>
            <img
              src={contactImg}
              alt={t.alt.contact}
              className="w-full object-cover shadow-lg max-h-80 lg:max-h-none"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
