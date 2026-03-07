/** Bilingual translation data for NU Communications website */
export interface TranslationData {
  nav: {
    about: string;
    mission: string;
    services: string;
    projects: string;
    award: string;
    contact: string;
  };
  hero: {
    heading: string;
    bio: string[];
  };
  mission: {
    heading: string;
    quote: string;
  };
  services: {
    heading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  projects: {
    heading: string;
    items: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  award: {
    heading: string;
    title: string;
    paragraphs: string[];
  };
  contact: {
    heading: string;
    phone: string;
    website: string;
    email: string;
    addresses: string[];
  };
  alt: {
    portrait: string;
    mission: string;
    services: string;
    projects: string;
    award: string;
    contact: string;
  };
  langToggle: string;
}

export const translations: Record<"de" | "en", TranslationData> = {
  de: {
    nav: {
      about: "Über mich",
      mission: "Mission",
      services: "Angebot",
      projects: "Projekte",
      award: "Auszeichnung",
      contact: "Kontakt",
    },
    hero: {
      heading: "Über mich",
      bio: [
        "Nach einem Jahrzehnt in der Kommunikationsbranche habe ich mich Anfang 2023 für die Selbstständigkeit entschieden. In meiner Rolle als Pressesprecherin für Umwelt- und Landwirtschaftsminister Andrä Rupprechter sowie Bundeskanzlerin Brigitte Bierlein konnte ich nicht nur die Mechanismen der politischen Kommunikation hautnah erfahren, sondern auch umfassendes Fachwissen in den Bereichen Landwirtschaft, regionale Entwicklung und Umweltschutz erlangen.",
        'Als "Head of Communications" der Schwarzenegger Climate Initiative hatte ich die Gelegenheit, durch die Klimakonferenz von Arnold Schwarzenegger, dem AUSTRIAN WORLD SUMMIT, Millionen von Menschen weltweit für mein Herzensthema Umwelt- und Klimaschutz zu begeistern.',
        'Mit NU Communications unterstütze ich meine Kundinnen und Kunden mit meiner Expertise in Kommunikation, erzähle nachhaltige Geschichten und berate strategisch. Mein Erfolgsansatz basiert auf starken Kooperationen und meinem weitreichenden Netzwerk — denn wie ein Sprichwort sagt: "Wenn du schnell gehen willst, geh allein. Wenn du weit kommen willst, geh gemeinsam."',
      ],
    },
    mission: {
      heading: "Mission",
      quote:
        "Ich erschaffe Kommunikation, die berührt — authentisch, kraftvoll und mit einem besonderen Augenmerk auf Nachhaltigkeit. Mein Bestreben ist es, komplexe Themen in klare Botschaften zu verwandeln, Menschen zu erreichen und durch diese tiefen Verbindungen wahrhaftige Veränderungen zu bewirken.",
    },
    services: {
      heading: "Mein Angebot",
      items: [
        {
          title: "Strategie & Beratung",
          description:
            "Ich entwickle Kommunikationsstrategien, die auf Ihre Ziele abgestimmt sind, sorge für eine optimale Positionierung von Marken, Unternehmen oder Personen und stehe Ihnen in Krisenzeiten mit professioneller Krisenkommunikation und Issues Management zur Seite.",
        },
        {
          title: "Klassische Medienarbeit",
          description:
            "Benötigen Sie klassische Medienarbeit? Ich erstelle überzeugende Pressemitteilungen, baue Medienkontakte auf, organisiere Pressekonferenzen und Interviews und beobachte relevante Entwicklungen in der Medienlandschaft.",
        },
        {
          title: "Content & Storytelling",
          description:
            "Ich bin der kreative Kopf hinter fesselnden Artikeln, Blogbeiträgen und Social-Media-Inhalten. Mit lebendigem Storytelling bringe ich frischen Wind in die Content-Welt und sorge dafür, dass Ihre Botschaften strahlen.",
        },
        {
          title: "Events & Öffentlichkeitsarbeit",
          description:
            "Ich plane und organisiere herausragende Presse Events, die von Dialogveranstaltungen bis hin zu Betriebsführungen mit Journalisten reichen. Darüber hinaus sorge ich für spannende Redner und koordiniere Sponsoring- und Kooperationsprojekte.",
        },
      ],
    },
    projects: {
      heading: "Referenzprojekte",
      items: [
        {
          title: "Special Fundraising Dinner for Climate Action",
          subtitle: "Schwarzenegger Climate Initiative",
          description:
            'Gesamte Kommunikation für das Event "Special Fundraising Dinner for Climate Action 2023" der Schwarzenegger Climate Initiative im Stanglwirt.',
        },
        {
          title: "Austrian World Summit 2023 & 2024",
          subtitle: "Schwarzenegger Climate Initiative",
          description:
            "Hauptverantwortliche für die Kommunikation und Öffentlichkeitsarbeit bei der Klimakonferenz, dem AUSTRIAN WORLD SUMMIT der Schwarzenegger Climate Initiative, in der Wiener Hofburg.",
        },
        {
          title: "EU-Organics Award 2023 & 2024",
          subtitle: "biologon GmbH",
          description:
            "Begleitung des Tiroler Familienunternehmens biologon bei der EU-weiten Öffentlichkeitsarbeit für ihre Nominierung bei den EU Organic Awards.",
        },
      ],
    },
    award: {
      heading: "Auszeichnung",
      title: "Erfolg beim Agrar-Kommunikationswettbewerb der EU-Kommission 2014",
      paragraphs: [
        'Die Informationskampagne „Lebenswert. Österreich. Die neue Ländliche Entwicklung 2020" des Bundesministeriums für Land- und Forstwirtschaft, Umwelt und Wasserwirtschaft (BMLFUW), an der ich maßgeblich mitwirken durfte, hat 2014 in Brüssel beim Kommunikationspreis zur Gemeinsamen Agrarpolitik gleich zwei erste Plätze gewonnen.',
        'Unsere Kampagne überzeugte sowohl in der Kategorie „Kommunikation mit Interessensvertretern" als auch beim kategorieübergreifenden Online-Publikumsvoting.',
        "Mit diesem Doppelerfolg konnte sich Österreich 2014 gegen etwa 150 eingereichte Projekte aus 28 EU-Mitgliedstaaten durchsetzen.",
      ],
    },
    contact: {
      heading: "Mein Kontakt",
      phone: "+43 6648267897",
      website: "www.nucommunications.at",
      email: "natascha@nucommunications.at",
      addresses: [
        "Schottenring 28/1/5, 1010 Wien",
        "Ing.-Hochmuthstraße 217/10, 6314 Niederau",
      ],
    },
    alt: {
      portrait: "Natascha Unger — Gründerin von NU Communications",
      mission: "Natascha Unger im Interview mit Jane Goodall",
      services: "Strategieberatung und Kommunikation",
      projects: "Referenzprojekte von NU Communications",
      award: "EU-Kommunikationspreis 2014",
      contact: "Kontaktfotos NU Communications",
    },
    langToggle: "EN",
  },
  en: {
    nav: {
      about: "About Me",
      mission: "Mission",
      services: "Services",
      projects: "Projects",
      award: "Award",
      contact: "Contact",
    },
    hero: {
      heading: "About Me",
      bio: [
        "After a decade in the communications industry, I decided to go freelance in early 2023. In my role as press spokesperson for Environment and Agriculture Minister Andrä Rupprechter and Chancellor Brigitte Bierlein, I gained first-hand experience in the mechanisms of political communication and developed extensive expertise in agriculture, regional development, and environmental protection.",
        'As "Head of Communications" for the Schwarzenegger Climate Initiative, I had the opportunity to inspire millions of people worldwide for my passion — environmental and climate protection — through Arnold Schwarzenegger\'s climate conference, the AUSTRIAN WORLD SUMMIT.',
        'With NU Communications, I support my clients with my expertise in communications, tell sustainable stories, and provide strategic advice. My approach to success is built on strong collaborations and my extensive network — because as the saying goes: "If you want to go fast, go alone. If you want to go far, go together."',
      ],
    },
    mission: {
      heading: "Mission",
      quote:
        "I create communication that moves people — authentic, powerful, and with a special focus on sustainability. My aspiration is to transform complex topics into clear messages, reach people, and through these deep connections bring about genuine change.",
    },
    services: {
      heading: "My Services",
      items: [
        {
          title: "Strategy & Consulting",
          description:
            "I develop communication strategies tailored to your goals, ensure optimal positioning of brands, companies, or individuals, and support you in times of crisis with professional crisis communication and issues management.",
        },
        {
          title: "Classic Media Relations",
          description:
            "Need classic media relations? I create compelling press releases, build media contacts, organize press conferences and interviews, and monitor relevant developments in the media landscape.",
        },
        {
          title: "Content & Storytelling",
          description:
            "I am the creative mind behind captivating articles, blog posts, and social media content. With vivid storytelling, I bring fresh energy to the content world and ensure your messages shine.",
        },
        {
          title: "Events & Public Relations",
          description:
            "I plan and organize outstanding press events ranging from dialogue events to company tours with journalists. I also arrange exciting speakers and coordinate sponsorship and cooperation projects.",
        },
      ],
    },
    projects: {
      heading: "Reference Projects",
      items: [
        {
          title: "Special Fundraising Dinner for Climate Action",
          subtitle: "Schwarzenegger Climate Initiative",
          description:
            'Full communications for the "Special Fundraising Dinner for Climate Action 2023" event of the Schwarzenegger Climate Initiative at the Stanglwirt.',
        },
        {
          title: "Austrian World Summit 2023 & 2024",
          subtitle: "Schwarzenegger Climate Initiative",
          description:
            "Lead communicator for the climate conference, the AUSTRIAN WORLD SUMMIT by the Schwarzenegger Climate Initiative, at the Vienna Hofburg.",
        },
        {
          title: "EU-Organics Award 2023 & 2024",
          subtitle: "biologon GmbH",
          description:
            "Supported the Tyrolean family company biologon with EU-wide public relations for their nomination at the EU Organic Awards.",
        },
      ],
    },
    award: {
      heading: "Award",
      title: "Success at the EU Commission's Agricultural Communication Competition 2014",
      paragraphs: [
        'The information campaign "Lebenswert. Österreich. Die neue Ländliche Entwicklung 2020" by the Federal Ministry of Agriculture, Forestry, Environment, and Water Management (BMLFUW), to which I contributed significantly, won two first places in Brussels in 2014 at the Common Agricultural Policy Communication Prize.',
        'Our campaign excelled both in the "Stakeholder Communication" category and in the cross-category online public vote.',
        "With this double success, Austria prevailed in 2014 against approximately 150 submitted projects from 28 EU member states.",
      ],
    },
    contact: {
      heading: "Contact",
      phone: "+43 6648267897",
      website: "www.nucommunications.at",
      email: "natascha@nucommunications.at",
      addresses: [
        "Schottenring 28/1/5, 1010 Vienna",
        "Ing.-Hochmuthstraße 217/10, 6314 Niederau",
      ],
    },
    alt: {
      portrait: "Natascha Unger — Founder of NU Communications",
      mission: "Natascha Unger interviewing Jane Goodall",
      services: "Strategy consulting and communication",
      projects: "Reference projects by NU Communications",
      award: "EU Communication Prize 2014",
      contact: "Contact photos NU Communications",
    },
    langToggle: "DE",
  },
};
