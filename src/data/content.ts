export type ContentType = {
  ui: {
    nav: { about: string; skills: string; experience: string; projects: string; contact: string; };
    hero: { viewProjects: string; contactMe: string; greeting: string; };
    sections: {
      skills: { title1: string; title2: string; subtitle: string; };
      experience: { title1: string; title2: string; };
      education: { title1: string; title2: string; };
      projects: { title1: string; title2: string; };
      contact: { title1: string; title2: string; description: string; getInTouch: string; };
      tutoring: { navTitle: string; title1: string; title2: string; description: string; cta: string; };
    };
  };
  personal: {
    name: string;
    role: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    bio: string;
  };
  skills: string[];
  languages: { name: string; level: string; }[];
  experience: { role: string; company: string; location: string; period: string; achievements: string[]; }[];
  education: { degree: string; institution: string; location: string; period: string; details: string[]; }[];
  projects: { title: string; period: string; location: string; details: string[]; longDescription?: string; }[];
  extracurricular: { role: string; organization: string; location: string; period: string; details: string; }[];
  tutoring: { role: string; organization: string; period: string; details: string[]; }[];
  hobbies: string[];
};

export const contentDe: ContentType = {
  ui: {
    nav: { about: "Über mich", skills: "Fähigkeiten", experience: "Erfahrung", projects: "Projekte", contact: "Kontakt" },
    hero: { viewProjects: "Projekte ansehen", contactMe: "Kontakt aufnehmen", greeting: "Hallo, ich bin" },
    sections: {
      skills: { title1: "Kern-", title2: "Fähigkeiten", subtitle: "Fachwissen, das durch fundierte akademische Ausbildung und praktische Branchenerfahrung geschärft wurde." },
      experience: { title1: "Berufliche ", title2: "Erfahrung" },
      education: { title1: "Akademische ", title2: "Ausbildung" },
      projects: { title1: "Ausgewählte ", title2: "Projekte" },
      contact: { title1: "Lass uns ins ", title2: "Gespräch kommen", description: "Ich bin offen für neue Herausforderungen und Möglichkeiten. Zögere nicht, mich zu kontaktieren.", getInTouch: "Kontakt aufnehmen" },
      tutoring: { navTitle: "Nachhilfe", title1: "Nachhilfe & ", title2: "Mentoring", description: "Meine Reise vom ehrenamtlichen Mentor zur Gründung meiner eigenen Nachhilfeplattform.", cta: "PadMath besuchen" }
    }
  },
  personal: {
    name: "Praveen Skanda Rupan",
    role: "Data Analyst & AI Consultant",
    location: "Hamburg, Deutschland",
    phone: "+49 176 32409527",
    email: "s.praveen@hotmail.de",
    linkedin: "https://www.linkedin.com/in/praveen-skanda-rupan-499ab8149/",
    bio: "Datenanalyse-Experte mit starkem technischen Hintergrund und Erfahrung in der geduldigen Vermittlung komplexer Inhalte. Motiviert, analytische Fähigkeiten in einer innovativen Umgebung einzusetzen.",
  },
  skills: [
    "Analytisches Denken",
    "Problem-solving Fähigkeiten",
    "Innovationsfähigkeit",
    "Technische Expertise im Umgang mit KI-Tools",
    "Teamarbeit und Kollaboration",
    "Vermittlung komplexer Konzepte an diverse Zielgruppen",
    "Interkulturelle Kommunikationsfähigkeiten",
  ],
  languages: [
    { name: "Deutsch", level: "Muttersprachler" },
    { name: "Tamil", level: "Muttersprachler" },
    { name: "Englisch", level: "Sehr gute Kenntnisse" },
  ],
  experience: [
    {
      role: "Data Analyst/Scientist",
      company: "HanseMerkur Versicherungsgruppe",
      location: "Hamburg",
      period: "Mär 2023 — Heute",
      achievements: [
        "Tätig in der Abteilung Organisationsentwicklung bei der HanseMerkur",
        "Erfolgreich implementierte Zeitreihenmodelle, was zu einer Verbesserung der Prognosegenauigkeit führte",
        "Implementierung von Tools wie Git, CI/CD (Continuous Integration/Continuous Deployment) und Apache Airflow zur Optimierung und Effizienzsteigerung von Prozessen",
        "Unterstützung bei der Entwicklung und Umsetzung von Maßnahmen zur kontinuierlichen Verbesserung der Unternehmensabläufe",
      ],
    },
    {
      role: "Data Analyst",
      company: "Kale&Me GmbH",
      location: "Hamburg",
      period: "Feb 2022 — Mär 2023",
      achievements: [
        "Analyse großer Datensätze und Erstellung von Berichten und Dashboards zur Unterstützung verschiedener Teams bei Geschäftsentscheidungen",
        "Überwachung wichtiger Leistungskennzahlen wie Umsatz und Lagerbestände",
        "Identifizierung von Trends und Mustern im Kaufverhalten der Kunden",
        "Anwendung von Zeitreihenmodellen zur Prognose der Verkaufszahlen einzelner Produkte",
      ],
    },
  ],
  education: [
    {
      degree: "Technische Systeme der Informatik",
      institution: "Hochschule für Angewandte Wissenschaften Hamburg",
      location: "Hamburg",
      period: "Okt 2020 — Feb 2023",
      details: [
        "Eingeschrieben im Studiengang Technische Systeme der Informatik an der HAW Hamburg",
        "Entscheidung für diesen Studiengang als Reaktion auf die Covid-19-Pandemie, um neue Fähigkeiten im Bereich der Informatik zu erlangen",
        "Abbruch des Studiums nach dem fünften Semester, um praktische Erfahrungen in der Branche zu sammeln.",
      ],
    },
    {
      degree: "Master of Science, Produktentwicklung, Materialien und Produktion",
      institution: "Technische Universität Hamburg",
      location: "Hamburg",
      period: "Mär 2017 — Okt 2020",
      details: [
        "Masterarbeit am Karlsruher Institut für Technologie (KIT) verfasst",
        "Thema: 'Probabilistische Analyse der Umformmechanismen in endlosen faser-verstärkten Verbundstrukturen unter Verwendung der Nasspressentechnologie'",
        "Forschungsschwerpunkt auf dem Verständnis des Verhaltens von faser-verstärkten Verbundstrukturen während des Umformprozesses unter Verwendung probabilistischer Methoden",
      ],
    },
    {
      degree: "Bachelor of Science, Maschinenbau",
      institution: "Technische Universität Hamburg",
      location: "Hamburg",
      period: "Okt 2011 — Mär 2017",
      details: [
        "Vertiefung: Produktentwicklung, Werkstoffe und Produktion",
        "Bachelorarbeit am Institut für Kontinuumsmechanik und Materialmechanik verfasst",
        "Thema: 'Automatic Microstructure Generation for Voxel-Based Finite Element Analysis of Nanoporous Materials.'",
      ],
    },
  ],
  projects: [
    {
      title: "Automatisierte Finanzdatenpipeline und Visualisierung",
      period: "Okt 2023 — Jun 2024",
      location: "Hamburg",
      details: [
        "Extraktion von Finanzdaten von Yahoo Finance für ausgewählte Aktien",
        "Entwicklung einer Datenpipelin zur Verarbeitung und Beladung der Daten in die lokale Datenbank",
        "Verwendete Technologien: Docker zur Containerisierung, Apache Airflow zur Automatisierung der Datenverarbeitung, dbt zur Datenmodellierung und Transformation",
        "Visualisierung der Daten mithilfe von Metabase",
        "Sicherstellung der Aktualität und Genauigkeit der Finanzdaten für Entscheidungsfindung und Berichterstattung",
      ],
      longDescription: "In diesem Projekt habe ich eine vollautomatisierte End-to-End Datenpipeline aufgebaut. Mittels Python werden historische und aktuelle Finanzdaten ausgewählter Aktien von Yahoo Finance extrahiert. Diese Rohdaten werden in eine Container-Umgebung (Docker) geladen. Apache Airflow orchestriert dabei den gesamten Prozess und stellt sicher, dass die Daten regelmäßig aktualisiert werden. Anschließend erfolgt die Transformation und Modellierung der Daten mit dbt (data build tool), bevor sie abschließend in Metabase durch interaktive Dashboards für fundierte Berichterstattungen und Entscheidungsfindungen visualisiert werden.",
    },
    {
      title: "Embedded System Engineering",
      period: "Apr 2022 — Okt 2023",
      location: "Hamburg",
      details: [
        "Programmierung eines Förderbandes zum Aussortieren bestimmter Werkstücke",
        "Umfassende Begleitung des Softwareentwicklungszyklus, einschließlich Anforderungsanalyse, Systemdesign, Implementierung, Testing und Dokumentation, unter Anwendung von Jira für das Sprint-Management und kontinuierliche Projektverbesserung durch wöchentliche Reviews.",
        "Teamorientierte Softwareentwicklung",
      ],
      longDescription: "Als Teil eines agilen Teams habe ich die Software für ein vollautomatisches Förderbandsystem entwickelt, das Werkstücke anhand spezifischer Parameter erkennt und aussortiert. Die Entwicklung umfasste den kompletten Software Lifecycle: Von der detaillierten Anforderungsanalyse über das Systemdesign und die Implementierung bis hin zum automatisierten Testing. Durch wöchentliche Sprints in Jira und kontinuierliche Reviews wurde eine hohe Code-Qualität und Projektagilität sichergestellt.",
    },
    {
      title: "Echtzeit Maskenerkennung",
      period: "Mär 2022 — Okt 2022",
      location: "Hamburg",
      details: [
        "Erzeugen und labeln von Trainingsdaten: Bilder mit Maske und ohne Maske",
        "Training von CNN Modells in Keras",
      ],
      longDescription: "Ein Computer Vision Projekt zur Erkennung von Gesichtsmasken in Echtzeit. Herzstück der Anwendung ist ein Convolutional Neural Network (CNN), das mit Keras und TensorFlow trainiert wurde. CNNs sind besonders leistungsstark in der Bildverarbeitung, da sie durch Filter (Convolutional Layers) wichtige visuelle Merkmale – wie die Kanten einer Maske – extrahieren können. Das Modell wurde mit einem selbst erstellten und annotierten Datensatz aus Bildern mit und ohne Masken trainiert und erzielt hohe Genauigkeitsraten bei der Live-Klassifizierung über Video-Feeds.",
    },
    {
      title: "Football Analytics",
      period: "Okt 2022 — Jan 2023",
      location: "Hamburg",
      details: [
        "Reverse Engineering von Webtechnologien zur Bereitstellung von Daten",
        "Auswertung und Interpretation von Daten, um Einblicke in die Sportbranche zu gewinnen, einschließlich Spielerleistungen, Teamstrategien und Ligatrends",
      ],
      longDescription: "Dieses Projekt fokussiert sich auf fortgeschrittene Fußball-Metriken, insbesondere das Expected Goals (xG) Modell. Das xG-Modell bewertet die Wahrscheinlichkeit, dass ein Schuss zu einem Tor führt, basierend auf historischen Daten (z.B. Schussposition, Winkel). Um die Vorhersagegenauigkeit weiter zu verbessern, habe ich das Modell so erweitert, dass es die individuelle Leistungsfähigkeit der Spieler miteinbezieht – da ein Schuss von einem hochkarätigen Stürmer eine signifikant höhere Erfolgschance hat als von einem Verteidiger aus derselben Position. Die zugrundeliegenden Daten wurden durch Reverse Engineering von Sportdaten-Websites extrahiert.",
    },
  ],
  extracurricular: [
    {
      role: "Mentor",
      organization: "Verikom-Verbund f. Interkult. Kommunikation und Bildung",
      location: "Hamburg",
      period: "Jan 2013 — Jan 2020",
      details: "Bei Verikom e.V. im Projekt 'Junge Vorbilder' habe ich ehrenamtlich Mathematik unterrichtet und Jugendliche zu Studien- und Karrierewegen beraten. Diese Erfahrung stärkte meine Fähigkeiten in der Wissensvermittlung und Beratung, besonders in der Arbeit mit vielfältigen Gruppen.",
    }
  ],
  tutoring: [
    {
      role: "Gründer & Mathematik-Tutor",
      organization: "PadMath (padmath.de)",
      period: "Heute",
      details: [
        "Gründung und Aufbau von padmath.de, einer Plattform für maßgeschneiderte Mathematik-Nachhilfe mit Fokus auf individuellen Lernerfolg",
        "Entwicklung innovativer Lehrmethoden, die analytisches Denken fördern und Schülern helfen, ihre mathematischen Fähigkeiten nachhaltig zu verbessern"
      ]
    },
    {
      role: "Ehrenamtlicher Mentor",
      organization: "Verikom e.V. (Projekt 'Junge Vorbilder')",
      period: "Jan 2013 — Jan 2020",
      details: [
        "Mehr als 7 Jahre Erfahrung in der ehrenamtlichen Vermittlung von Mathematik an Jugendliche",
        "Erfolgreiche Beratung und Begleitung von zahlreichen Schülern auf ihren Studien- und Karrierewegen"
      ]
    }
  ],
  hobbies: ["Fußball", "Kraftsport", "Reisen", "Schach"]
};

export const contentEn: ContentType = {
  ui: {
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: { viewProjects: "View Projects", contactMe: "Contact Me", greeting: "Hi, I'm" },
    sections: {
      skills: { title1: "Core ", title2: "Skills", subtitle: "Expertise honed through rigorous academic training and practical industry experience." },
      experience: { title1: "Professional ", title2: "Experience" },
      education: { title1: "Academic ", title2: "Education" },
      projects: { title1: "Featured ", title2: "Projects" },
      contact: { title1: "Let's Get In ", title2: "Touch", description: "I'm always open to new challenges and opportunities. Feel free to reach out to me.", getInTouch: "Get in Touch" },
      tutoring: { navTitle: "Tutoring", title1: "Mentoring & ", title2: "Tutoring", description: "My journey from a volunteer mentor to founding my own tutoring platform.", cta: "Visit PadMath" }
    }
  },
  personal: {
    name: "Praveen Skanda Rupan",
    role: "Data Analyst & AI Consultant",
    location: "Hamburg, Germany",
    phone: "+49 176 32409527",
    email: "s.praveen@hotmail.de",
    linkedin: "https://www.linkedin.com/in/praveen-skanda-rupan-499ab8149/",
    bio: "Data analysis expert with a strong technical background and experience in patiently conveying complex content. Motivated to apply analytical skills in an innovative environment.",
  },
  skills: [
    "Analytical Thinking",
    "Problem-Solving Skills",
    "Innovation Capability",
    "Technical Expertise in AI Tools",
    "Teamwork and Collaboration",
    "Communicating Complex Concepts to Diverse Audiences",
    "Intercultural Communication Skills",
  ],
  languages: [
    { name: "German", level: "Native Speaker" },
    { name: "Tamil", level: "Native Speaker" },
    { name: "English", level: "Very Good" },
  ],
  experience: [
    {
      role: "Data Analyst/Scientist",
      company: "HanseMerkur Versicherungsgruppe",
      location: "Hamburg",
      period: "Mar 2023 — Present",
      achievements: [
        "Working in the Organizational Development department at HanseMerkur",
        "Successfully implemented time series models, leading to improved forecasting accuracy",
        "Implementation of tools like Git, CI/CD, and Apache Airflow to optimize processes and increase efficiency",
        "Supporting the development and implementation of measures for continuous improvement of business operations",
      ],
    },
    {
      role: "Data Analyst",
      company: "Kale&Me GmbH",
      location: "Hamburg",
      period: "Feb 2022 — Mar 2023",
      achievements: [
        "Analyzing large datasets and creating reports and dashboards to support various teams in business decisions",
        "Monitoring key performance indicators such as revenue and inventory levels",
        "Identifying trends and patterns in customer purchasing behavior",
        "Applying time series models to forecast sales figures for individual products",
      ],
    },
  ],
  education: [
    {
      degree: "Computer Science Technical Systems",
      institution: "Hamburg University of Applied Sciences",
      location: "Hamburg",
      period: "Oct 2020 — Feb 2023",
      details: [
        "Enrolled in the Computer Science Technical Systems program at HAW Hamburg",
        "Chose this program in response to the Covid-19 pandemic to acquire new skills in computer science",
        "Left the program after the fifth semester to gain practical industry experience.",
      ],
    },
    {
      degree: "Master of Science, Product Development, Materials and Production",
      institution: "Hamburg University of Technology",
      location: "Hamburg",
      period: "Mar 2017 — Oct 2020",
      details: [
        "Master's thesis written at the Karlsruhe Institute of Technology (KIT)",
        "Topic: 'Probabilistic Analysis of Forming Mechanisms in Continuous Fiber-Reinforced Composite Structures Using Wet Pressing Technology'",
        "Research focus on understanding the behavior of fiber-reinforced composite structures during the forming process using probabilistic methods",
      ],
    },
    {
      degree: "Bachelor of Science, Mechanical Engineering",
      institution: "Hamburg University of Technology",
      location: "Hamburg",
      period: "Oct 2011 — Mar 2017",
      details: [
        "Specialization: Product Development, Materials and Production",
        "Bachelor's thesis written at the Institute of Continuum and Material Mechanics",
        "Topic: 'Automatic Microstructure Generation for Voxel-Based Finite Element Analysis of Nanoporous Materials.'",
      ],
    },
  ],
  projects: [
    {
      title: "Automated Financial Data Pipeline and Visualization",
      period: "Oct 2023 — Jun 2024",
      location: "Hamburg",
      details: [
        "Extraction of financial data from Yahoo Finance for selected stocks",
        "Development of a data pipeline for processing and loading data into the local database",
        "Technologies used: Docker for containerization, Apache Airflow for data processing automation, dbt for data modeling and transformation",
        "Data visualization using Metabase",
        "Ensuring the timeliness and accuracy of financial data for decision-making and reporting",
      ],
      longDescription: "In this project, I built a fully automated end-to-end data pipeline. Python is used to extract historical and current financial data of selected stocks from Yahoo Finance. This raw data is loaded into a containerized environment (Docker). Apache Airflow orchestrates the entire process and ensures that the data is updated regularly. This is followed by data transformation and modeling using dbt (data build tool) before it is finally visualized in Metabase through interactive dashboards for informed reporting and decision-making.",
    },
    {
      title: "Embedded System Engineering",
      period: "Apr 2022 — Oct 2023",
      location: "Hamburg",
      details: [
        "Programming a conveyor belt for sorting specific workpieces",
        "Comprehensive support of the software development lifecycle, including requirements analysis, system design, implementation, testing, and documentation, using Jira for sprint management and continuous project improvement through weekly reviews.",
        "Team-oriented software development",
      ],
      longDescription: "As part of an agile team, I developed the software for a fully automated conveyor belt system that detects and sorts workpieces based on specific parameters. The development covered the complete software lifecycle: From detailed requirements analysis, system design, and implementation to automated testing. Through weekly sprints in Jira and continuous reviews, high code quality and project agility were ensured.",
    },
    {
      title: "Real-time Mask Detection",
      period: "Mar 2022 — Oct 2022",
      location: "Hamburg",
      details: [
        "Generating and labeling training data: images with and without masks",
        "Training CNN models in Keras",
      ],
      longDescription: "A Computer Vision project for detecting face masks in real-time. The core of the application is a Convolutional Neural Network (CNN) trained with Keras and TensorFlow. CNNs are particularly powerful in image processing because they can extract important visual features – like the edges of a mask – through filters (Convolutional Layers). The model was trained with a self-created and annotated dataset of images with and without masks and achieves high accuracy rates in live classification via video feeds.",
    },
    {
      title: "Football Analytics",
      period: "Oct 2022 — Jan 2023",
      location: "Hamburg",
      details: [
        "Reverse engineering of web technologies for data provision",
        "Analyzing and interpreting data to gain insights into the sports industry, including player performances, team strategies, and league trends",
      ],
      longDescription: "This project focuses on advanced football metrics, specifically the Expected Goals (xG) model. The xG model evaluates the probability of a shot resulting in a goal based on historical data (e.g., shot position, angle). To further improve prediction accuracy, I extended the model to include the individual performance of the players – since a shot from a top striker has a significantly higher chance of success than one from a defender in the same position. The underlying data was extracted through reverse engineering of sports data websites.",
    },
  ],
  extracurricular: [
    {
      role: "Mentor",
      organization: "Verikom - Association for Intercultural Communication and Education",
      location: "Hamburg",
      period: "Jan 2013 — Jan 2020",
      details: "Volunteered to teach mathematics and advised teenagers on study and career paths in the 'Young Role Models' project at Verikom e.V. This experience strengthened my skills in knowledge transfer and advising, especially in working with diverse groups.",
    }
  ],
  tutoring: [
    {
      role: "Founder & Mathematics Tutor",
      organization: "PadMath (padmath.de)",
      period: "Present",
      details: [
        "Founded and built padmath.de, a platform for tailored mathematics tutoring focusing on individual learning success",
        "Developed innovative teaching methods that promote analytical thinking and help students sustainably improve their mathematical skills"
      ]
    },
    {
      role: "Volunteer Mentor",
      organization: "Verikom e.V. ('Young Role Models' Project)",
      period: "Jan 2013 — Jan 2020",
      details: [
        "Over 7 years of experience in volunteering to teach mathematics to teenagers",
        "Successfully advised and mentored numerous students on their academic and career paths"
      ]
    }
  ],
  hobbies: ["Football", "Strength Training", "Traveling", "Chess"]
};
