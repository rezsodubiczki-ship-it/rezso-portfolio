"use client";

import { Fragment, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Globe2,
  Mail,
  MapPin,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";

type Language = "en" | "hu";
type Theme = "dark" | "light";

const copy = {
  en: {
    navExperience: "Experience",
    navSkills: "Expertise",
    navContact: "Contact",
    available: "Open to the right opportunity",
    eyebrow: "SENIOR FRONT-END DEVELOPER",
    headline: ["Building digital", "experiences that", "feel effortless."],
    intro:
      "I’m Rezso — a front-end developer with 10+ years of experience creating responsive websites, customer-facing platforms and complex business applications.",
    contact: "Get in touch",
    download: "Download CV",
    location: "Brisbane, Queensland, Australia",
    citizen: "Australian citizen",
    years: "10+ years",
    yearsLabel: "in front-end development",
    focus: "Craft",
    focusLabel: "clean, maintainable interfaces",
    industries: "Across",
    industriesLabel: "insurance, healthcare, rail & more",
    sectionLabel: "CAREER PATH",
    experienceTitle: "Experience built",
    experienceTitle2: "across industries.",
    experienceIntro:
      "From high-traffic brand websites to specialist monitoring and healthcare platforms, I focus on thoughtful interfaces and dependable delivery.",
    present: "Present",
    skillsLabel: "WHAT I BRING",
    skillsTitle: "Tools are only the start.",
    skillsIntro:
      "A practical mix of modern front-end engineering, integration experience and a user-first mindset.",
    skillGroups: [
      { title: "Front-end", items: "JavaScript · TypeScript · React · Next.js · App Router · Tailwind CSS · HTML5 · CSS3" },
      { title: "Platforms & APIs", items: "Node.js · REST APIs · Headless CMS · Prismic · Umbraco" },
      { title: "Delivery", items: "Vercel · Netlify · Railway · Cloudinary · Git · GitHub · Azure DevOps" },
      { title: "Ways of working", items: "Accessibility · Performance · Responsive UI · Figma · Jira · Agile" },
    ],
    contactLabel: "LET’S CONNECT",
    contactTitle: "Have a good project",
    contactTitle2: "in mind?",
    contactText:
      "If you’re building something useful and care about the details, I’d be happy to hear from you.",
    email: "Email me",
  },
  hu: {
    navExperience: "Tapasztalat",
    navSkills: "Szaktudás",
    navContact: "Kapcsolat",
    available: "Nyitott vagyok a megfelelő lehetőségre",
    eyebrow: "SENIOR FRONT-END FEJLESZTŐ",
    headline: ["Olyan digitális", "élményeket alkotok,", "amelyek használata", "magától értetődő."],
    intro:
      "Rezso vagyok — több mint 10 éves front-end fejlesztői tapasztalattal reszponzív weboldalakon, ügyfélplatformokon és összetett üzleti alkalmazásokon dolgozom.",
    contact: "Kapcsolatfelvétel",
    download: "Önéletrajz letöltése",
    location: "Brisbane, Queensland, Ausztrália",
    citizen: "Ausztrál állampolgár",
    years: "10+ év",
    yearsLabel: "front-end fejlesztésben",
    focus: "Fókusz",
    focusLabel: "tiszta, fenntartható felületek",
    industries: "Területek",
    industriesLabel: "biztosítás, egészségügy, vasút és mások",
    sectionLabel: "SZAKMAI ÚT",
    experienceTitle: "Tapasztalat",
    experienceTitle2: "különböző iparágakból.",
    experienceIntro:
      "Nagy forgalmú márkaweboldalaktól a speciális monitoring- és egészségügyi platformokig átgondolt felületeken és megbízható megvalósításon dolgozom.",
    present: "Jelenleg",
    skillsLabel: "AMIT HOZOK",
    skillsTitle: "A technológia csak a kezdet.",
    skillsIntro:
      "Modern front-end fejlesztés, integrációs tapasztalat és felhasználóközpontú szemlélet ötvözete.",
    skillGroups: [
      { title: "Front-end", items: "JavaScript · TypeScript · React · Next.js · App Router · Tailwind CSS · HTML5 · CSS3" },
      { title: "Platformok és API-k", items: "Node.js · REST API-k · Headless CMS · Prismic · Umbraco" },
      { title: "Fejlesztés és kiadás", items: "Vercel · Netlify · Railway · Cloudinary · Git · GitHub · Azure DevOps" },
      { title: "Munkamódszerek", items: "Akadálymentesség · Teljesítmény · Reszponzív UI · Figma · Jira · Agile" },
    ],
    contactLabel: "KAPCSOLÓDJUNK",
    contactTitle: "Van egy jó projekted",
    contactTitle2: "a számomra?",
    contactText:
      "Ha hasznos digitális terméken dolgozol, és fontosak a részletek, örömmel hallok róla.",
    email: "Írj e-mailt",
  },
};

const experience = [
  {
    company: "Dreamworld",
    role: { en: "Front-End Developer", hu: "Front-End fejlesztő" },
    date: "Jun 2022 — Present",
    dateHu: "2022. június — jelenleg",
    detail: {
      en: [
        "Developed and maintained websites for Dreamworld, SkyPoint, DWF and NightMarket.",
        "Built modern front-end experiences using Next.js and Tailwind CSS.",
        "Used Netlify for deployment and Azure DevOps to support delivery workflows.",
      ],
      hu: [
        "A Dreamworld, SkyPoint, DWF és NightMarket weboldalainak fejlesztése és karbantartása.",
        "Modern front-end felületek készítése Next.js és Tailwind CSS használatával.",
        "Netlify-alapú publikálás és Azure DevOps fejlesztési munkafolyamatok támogatása.",
      ],
    },
    current: true,
  },
  {
    company: "Compare the Market",
    role: { en: "Front-End Developer", hu: "Front-End fejlesztő" },
    date: "Jun 2021 — Jun 2022",
    dateHu: "2021. június — 2022. június",
    detail: {
      en: [
        "Contributed to Everest, a digital platform for car and home insurance.",
        "Developed front-end functionality with React for customer-facing insurance journeys.",
      ],
      hu: [
        "Közreműködés az Everest autó- és lakásbiztosítási digitális platform fejlesztésében.",
        "React-alapú front-end funkciók fejlesztése ügyféloldali biztosítási folyamatokhoz.",
      ],
    },
  },
  {
    company: "Levaux",
    role: { en: "Senior Front-End Developer", hu: "Senior Front-End fejlesztő" },
    date: "Dec 2019 — Jun 2021",
    dateHu: "2019. december — 2021. június",
    detail: {
      en: [
        "Designed and developed Sense Agent, a testing and commissioning application for building-management sensors.",
        "Built interfaces with Vue.js, Bootstrap 4 and Sass, alongside Node.js services.",
      ],
      hu: [
        "A Sense Agent tesztelési és üzembe helyezési alkalmazás tervezése és fejlesztése épületfelügyeleti szenzorokhoz.",
        "Felületek fejlesztése Vue.js, Bootstrap 4 és Sass használatával, Node.js szolgáltatásokkal együttműködve.",
      ],
    },
  },
  {
    company: "Allianz",
    role: { en: "Front-End Developer", hu: "Front-End fejlesztő" },
    date: "Mar 2019 — Dec 2019",
    dateHu: "2019. március — 2019. december",
    detail: {
      en: [
        "Developed insurance websites for brands including Westpac, ANZ, NAB and Citi.",
        "Implemented responsive interfaces with Angular and Sass, integrating with APIs and Umbraco CMS.",
      ],
      hu: [
        "Biztosítási weboldalak fejlesztése többek között a Westpac, ANZ, NAB és Citi márkák számára.",
        "Reszponzív felületek készítése Angular és Sass használatával, API- és Umbraco CMS-integrációval.",
      ],
    },
  },
  {
    company: "inControl",
    role: { en: "Senior Front-End Developer", hu: "Senior Front-End fejlesztő" },
    date: "Apr 2018 — Mar 2019",
    dateHu: "2018. április — 2019. március",
    detail: {
      en: [
        "Developed Carps, a task-management system used by hospitals, aged-care facilities and universities.",
        "Integrated responsive web interfaces with .NET REST APIs and SQL-backed systems.",
      ],
      hu: [
        "A Carps feladatkezelő rendszer fejlesztése kórházak, idősellátó intézmények és egyetemek számára.",
        "Reszponzív webes felületek integrálása .NET REST API-kkal és SQL-alapú rendszerekkel.",
      ],
    },
  },
  {
    company: "MRD Rail Technologies",
    role: { en: "Senior Front-End Developer", hu: "Senior Front-End fejlesztő" },
    date: "May 2016 — Apr 2018",
    dateHu: "2016. május — 2018. április",
    detail: {
      en: [
        "Led front-end development for TrackSense Cloud Server, a rail-infrastructure monitoring and data-logging platform.",
        "Built interfaces for infrastructure monitoring and real-time sensor measurements to support maintenance decisions.",
      ],
      hu: [
        "A TrackSense Cloud Server front-end fejlesztésének irányítása, vasúti infrastruktúra-monitoring és adatnaplózó platformon.",
        "Felületek készítése infrastruktúra-figyeléshez és valós idejű szenzoradatok megjelenítéséhez, a karbantartási döntések támogatására.",
      ],
    },
  },
];

const iconStyle = { width: 16, height: 16, strokeWidth: 1.8 };

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const savedLanguage = window.localStorage.getItem("portfolio-language") as Language | null;
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    if (savedLanguage === "en" || savedLanguage === "hu") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-theme", theme);
    window.localStorage.setItem("portfolio-language", language);
  }, [theme, language]);

  const toggleLanguage = () => setLanguage((current) => (current === "en" ? "hu" : "en"));
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Rezso Dubiczki home">
          <span className="wordmark-mark">R<span>.</span></span>
          <span className="wordmark-name">REZSO DUBICZKI</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          <a href="#experience" onClick={() => setMenuOpen(false)}>{t.navExperience}</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>{t.navSkills}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.navContact}</a>
        </nav>

        <div className="top-actions">
          <button className="text-toggle" onClick={toggleLanguage} aria-label="Switch language">
            <Globe2 {...iconStyle} />
            <span>{language === "en" ? "EN" : "HU"}</span>
            <span className="toggle-divider">/</span>
            <span className="muted">{language === "en" ? "HU" : "EN"}</span>
          </button>
          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle light and dark mode">
            {theme === "dark" ? <Sun {...iconStyle} /> : <Moon {...iconStyle} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />{t.available}</div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className={t.headline.length > 3 ? "headline-compact" : undefined}>
            {t.headline.map((line, index) => (
              <Fragment key={line}>
                {index === t.headline.length - 1 ? <span>{line}</span> : line}
                {index < t.headline.length - 1 && <br />}
              </Fragment>
            ))}
          </h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">{t.contact}<ArrowUpRight {...iconStyle} /></a>
            <a className="button button-secondary" href="/Rezso_CV.pdf" download>{t.download}<Download {...iconStyle} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin {...iconStyle} />{t.location}</span>
            <span><Check {...iconStyle} />{t.citizen}</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="portrait-stage">
            <div className="portrait-frame">
              <img className="portrait-photo" src="/portrait.png" alt="Rezso Dubiczki" width={250} height={250} />
              <div className="portrait-caption">
                <div><span className="caption-kicker">BASED IN</span><strong>Brisbane, AU</strong></div>
                <div className="caption-symbol"><ArrowDownRight size={14} /></div>
              </div>
            </div>
            <div className="floating-card card-years">
              <span className="floating-icon"><Code2 size={17} /></span>
              <strong>10<span>+</span></strong>
              <small>{t.yearsLabel}</small>
            </div>
            <div className="floating-card card-focus">
              <Sparkles size={16} />
              <div><strong>{t.focus}</strong><small>{t.focusLabel}</small></div>
            </div>
          </div>
          <div className="visual-index">01 <span>—</span> 04</div>
        </div>
      </section>

      <section className="stats-strip section-wrap" aria-label="Career highlights">
        <div className="stat-item"><span className="stat-number">10<span>+</span></span><span className="stat-label">{t.yearsLabel}</span></div>
        <div className="stat-item"><span className="stat-number">06</span><span className="stat-label">{language === "en" ? "Career chapters" : "Szakmai állomás"}</span></div>
        <div className="stat-item"><span className="stat-number">04</span><span className="stat-label">{language === "en" ? "Core skill areas" : "Fő szakterület"}</span></div>
        <div className="stat-note"><span className="stat-note-line" />{t.industriesLabel}</div>
      </section>

      <section className="experience-section section-wrap section-block" id="experience">
        <div className="section-heading">
          <div><p className="eyebrow">{t.sectionLabel}</p><h2>{t.experienceTitle}<br /><span>{t.experienceTitle2}</span></h2></div>
          <p className="section-description">{t.experienceIntro}</p>
        </div>

        <div className="experience-list">
          {experience.map((job, index) => (
            <article className="experience-row" key={job.company}>
              <div className="experience-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="experience-main">
                <div className="experience-title-row">
                  <h3>{job.company}</h3>
                  {job.current && <span className="current-badge"><span />{t.present}</span>}
                </div>
                <p className="experience-role">{job.role[language]}</p>
                <ul>{job.detail[language].map((line) => <li key={line}>{line}</li>)}</ul>
              </div>
              <div className="experience-date">{language === "en" ? job.date : job.dateHu}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section section-wrap section-block" id="expertise">
        <div className="section-heading">
          <div><p className="eyebrow">{t.skillsLabel}</p><h2>{t.skillsTitle}</h2></div>
          <p className="section-description">{t.skillsIntro}</p>
        </div>
        <div className="skills-grid">
          {t.skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-orb" />
        <div className="contact-content">
          <p className="eyebrow">{t.contactLabel}</p>
          <h2>{t.contactTitle}<br /><span>{t.contactTitle2}</span></h2>
          <p className="contact-copy">{t.contactText}</p>
          <a className="button button-primary" href="mailto:rezso.dubiczki@gmail.com">{t.email}<Mail {...iconStyle} /></a>
        </div>
        <div className="contact-details">
          <a href="mailto:rezso.dubiczki@gmail.com"><Mail {...iconStyle} />rezso.dubiczki@gmail.com<ArrowUpRight {...iconStyle} /></a>
          <a href="https://rezsodubiczki.com" target="_blank" rel="noreferrer"><Globe2 {...iconStyle} />rezsodubiczki.com<ArrowUpRight {...iconStyle} /></a>
          <span><MapPin {...iconStyle} />Brisbane, Queensland, Australia</span>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#top"><span className="wordmark-mark">R<span>.</span></span><span className="wordmark-name">REZSO DUBICZKI</span></a>
        <a className="back-top" href="#top">{language === "en" ? "Back to top" : "Vissza a tetejére"}<ArrowUpRight {...iconStyle} /></a>
      </footer>
    </main>
  );
}
