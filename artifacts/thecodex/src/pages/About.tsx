import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO, createBreadcrumbSchema, createWebPageSchema } from "@/components/SEO";
import * as Lucide from "lucide-react";
import { SITE_URL } from "@/lib/seo";

const { Target, Rocket, Sparkles, ShieldCheck, Cpu, Building2, Github, Linkedin, Mail, ExternalLink } = Lucide;

const TEAM = [
  {
    name: "Veerendra Vishwakarma",
    role: "Core Founder & CEO",
    spec: "Vision, Strategy, and Growth",
    image: "images/ceo.jpg",
  },
  {
    name: "Kajal Manjhi",
    role: "Build Lead & Developer",
    spec: "Frontend, Backend, and Delivery",
    image: "images/devloper.jpeg",
  },
  {
    name: "Vishal Vishwakarma",
    role: "Business Lead",
    spec: "Sales, Partnerships, and Growth",
    image: "images/busness lead.jpg",
  },
  {
    name: "Vicky Rajput",
    role: "Marketing Lead",
    spec: "Campaigns, Branding, and Outreach",
    image: "images/Marketing lead.jpg",
  },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

interface Hackathon {
  title: string;
  description: string;
  badge: string;
}

interface MemberDetail {
  fullName: string;
  tagline: string;
  bio: string;
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  about: { icon: string; text: string }[];
  skills: {
    languages: string[];
    systems: string[];
  };
  projects: Project[];
  hackathons?: Hackathon[];
}

const TEAM_DETAILS: MemberDetail[] = [
  {
    fullName: "Veerendra Vishwakarma",
    tagline: "Engineering Enthusiast | Innovator in the Making | Future Tech Trailblazer",
    bio: "Exploring Tech Field through Hackathons, TechFests & Conferences",
    socials: {
      github: "https://github.com/codingguru2221",
      linkedin: "https://www.linkedin.com/in/veerendra-vishwakarma-041584393/",
      email: "codexveer@gmail.com",
    },
    about: [
      { icon: "GraduationCap", text: "3rd Year Engineering Student" },
      { icon: "Brain", text: "Passionate about AI, Cybersecurity, and Building Tech Solutions" },
      { icon: "ShieldCheck", text: "Currently exploring Internet & Cyber Security" },
      { icon: "Terminal", text: "Currently working on 🔐 Cyber Projects" },
      { icon: "BookOpen", text: "Currently learning Java (Spring Boot)" },
    ],
    skills: {
      languages: ["Java", "Python", "C", "C++", "React", "Spring Boot"],
      systems: ["Linux", "Windows", "macOS"],
    },
    projects: [
      {
        title: "CryptoShield",
        description: "Pendrive-Based Password Manager providing responsible and portable password security. Accessible only when registered pendrive is connected.",
        tech: ["Python", "Cryptography", "Tkinter"],
        link: "https://github.com/codingguru2221",
      },
      {
        title: "AI-Powered Study Platform",
        description: "An educational web app designed to help students with AI-driven learning, including syllabus creation and smart exam prep.",
        tech: ["Flask", "Gemini API", "Python", "HTML/CSS/JS"],
        link: "https://github.com/codingguru2221",
      },
      {
        title: "College Event Hub",
        description: "A centralized platform to organize, manage, and promote college events, enabling students to register and stay updated easily.",
        tech: ["Java", "Spring Boot", "MySQL", "React"],
        link: "https://github.com/codingguru2221",
      },
    ],
    hackathons: [
      {
        badge: "🥇 Winner",
        title: "RNTU Tech-Fest Hackathon",
        description: "Secured Second Place in the flagship Tech-Fest Hackathon, demonstrating exceptional technical expertise and teamwork.",
      },
      {
        badge: "🏆 Active",
        title: "Navonmesh Hackathon",
        description: "University-level hackathon organized in collaboration with RNTU and SCOPE University.",
      },
      {
        badge: "💡 Creative",
        title: "HackPrix",
        description: "Innovative hackathon by Lord Institute, Hyderabad, focused on creativity and problem-solving.",
      },
      {
        badge: "🌿 Green Tech",
        title: "EcoCode Hackathon",
        description: "Organized by Bharati Vidyapeeth College of Engineering, Delhi, focusing on sustainable coding solutions.",
      },
    ],
  },
  {
    fullName: "Kajal Manjhi",
    tagline: "Aspiring Software Engineer | Backend Developer | Passionate Learner",
    bio: "Passionate about solving real-world problems and experimenting with new technologies.",
    socials: {
      github: "https://github.com/manjhicodecraft",
      linkedin: "https://www.linkedin.com/in/kajal-manjhi-455b8634a/",
      email: "kajalmanjhi0407@gmail.com",
    },
    about: [
      { icon: "GraduationCap", text: "3rd Year Computer Science Engineering student" },
      { icon: "Brain", text: "Passionate about solving real-world problems" },
      { icon: "Code2", text: "Strong foundation in C, C++, and full-stack development" },
      { icon: "Zap", text: "Always experimenting with new technologies" },
      { icon: "BookOpen", text: "Currently learning Java" },
      { icon: "Users", text: "Love collaborating on team-based projects" },
    ],
    skills: {
      languages: ["C", "C++", "Java", "Python", "HTML", "CSS", "React.js", "Spring Boot"],
      systems: ["Git", "GitHub", "Windows"],
    },
    projects: [
      {
        title: "College EventHub",
        description: "A centralized full-stack web application that brings all technical college events across India onto one unified platform, helping students discover and register for events easily.",
        tech: ["Java", "Spring Boot", "React.js", "Full-Stack Web Development"],
        link: "https://github.com/manjhicodecraft",
      },
      {
        title: "Personal Expense Tracker",
        description: "A simple and efficient application to track daily expenses, manage budgets, and analyze spending habits.",
        tech: ["Java", "Spring Boot", "React.js"],
        link: "https://github.com/manjhicodecraft",
      },
      {
        title: "Vani AI",
        description: "AI-powered voice assistant capable of executing commands & automating tasks dynamically.",
        tech: ["Python", "AI/ML"],
        link: "https://github.com/manjhicodecraft",
      },
      {
        title: "Inventory Management System",
        description: "Tracks, updates, and manages inventory stock efficiently using file handling mechanisms.",
        tech: ["C++"],
        link: "https://github.com/manjhicodecraft",
      },
      {
        title: "Hackathon Projects",
        description: "A collection of rapid prototype applications built under tight deadlines in multiple hackathon events.",
        tech: ["C", "C++", "HTML", "CSS"],
        link: "https://github.com/manjhicodecraft",
      },
    ],
    hackathons: [
      {
        badge: "🥇 Winner",
        title: "RNTU Tech-Fest Hackathon",
        description: "Showcased exceptional technical and teamwork skills in flagship Tech-Fest hackathon.",
      },
      {
        badge: "🏆 Active",
        title: "Navonmesh Hackathon",
        description: "Organized with RNTU & SCOPE University, focused on campus innovation.",
      },
      {
        badge: "💡 Creative",
        title: "HackPrix, Lord Institute Hyderabad",
        description: "Focused on creativity and real-world solutions to global challenges.",
      },
    ],
  },
  {
    fullName: "Vishal Vishwakarma",
    tagline: "Strategic Partnerships | Client Growth Specialist | Startup Catalyst",
    bio: "Bridging the gap between cutting-edge technology and business growth by building strong, trust-based relationships.",
    socials: {
      email: "codexveer@gmail.com",
    },
    about: [
      { icon: "TrendingUp", text: "Focused on identifying client needs and aligning technical solutions" },
      { icon: "Handshake", text: "Successfully expanded B2B partnerships with local enterprises and institutions" },
      { icon: "Users", text: "Dedicated to helping businesses transition seamlessly to digital workflows" },
    ],
    skills: {
      languages: ["Client Relations", "B2B Sales Strategy", "Market Analysis", "CRM Systems"],
      systems: ["Salesforce", "HubSpot", "Google Analytics", "Project Management"],
    },
    projects: [
      {
        title: "Enterprise Onboarding Campaign",
        description: "Onboarded multiple educational institutes and local businesses to adopt custom branding and IT solutions, resulting in 40% growth in efficiency.",
        tech: ["Client Acquisition", "CRM Analysis", "B2B Outreach"],
      },
    ],
  },
  {
    fullName: "Vicky Rajput",
    tagline: "Growth Hacker | Digital Brand Architect | Content Specialist",
    bio: "Crafting digital marketing strategies, SEO pipelines, and social outreach campaigns that turn modern software solutions into recognizable brands.",
    socials: {
      email: "codexveer@gmail.com",
    },
    about: [
      { icon: "Search", text: "Expertise in organic Search Engine Optimization (SEO) and keyword rankings" },
      { icon: "Share2", text: "Drives high-converting content marketing and brand storytelling campaigns" },
      { icon: "LineChart", text: "Leverages data analytics to optimize customer acquisition costs and funnel conversions" },
    ],
    skills: {
      languages: ["SEO & SEM", "Content Marketing", "Brand Positioning", "Email Campaigns"],
      systems: ["Google Analytics", "Google Search Console", "Figma", "Canva"],
    },
    projects: [
      {
        title: "TheCOdex Launch & SEO Domination",
        description: "Spearheaded the organic launch strategy, successfully ranking key landing pages on Google Page 1 and increasing organic traffic by 150%.",
        tech: ["SEO Audit", "Content Strategy", "Google Analytics"],
      },
    ],
  },
];

const MISSION_POINTS = [
  "Building websites, management systems, and digital infrastructure for schools",
  "Developing high-converting websites and applications for businesses",
  "Setting up computer labs and IT infrastructure from planning to execution",
  "Creating AI-powered solutions and automation tools that save time and cost",
  "Strengthening the online presence and branding of local businesses",
];

const VALUES = [
  "Quality over quantity",
  "Client growth first",
  "Innovation mindset",
  "Execution over ideas",
  "Trust and transparency",
];

const FUTURE_DIRECTIONS = [
  "Launching AI-powered SaaS products",
  "Building automated lead generation systems",
  "Developing cybersecurity-focused tools through initiatives like Trinetra",
  "Becoming a trusted technology partner for schools and businesses nationwide",
];

export default function About() {
  const [activeMember, setActiveMember] = useState<number | null>(0);

  const renderIcon = (name: string, className = "w-5 h-5") => {
    const IconComponent = (Lucide as any)[name];
    if (!IconComponent) return <Lucide.Sparkles className={className} />;
    return <IconComponent className={className} />;
  };

  const renderMemberDetails = (idx: number) => {
    return (
      <div className="relative overflow-hidden">
        {/* Decorative glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

        <div className="relative glass rounded-3xl p-6 md:p-10 border border-primary/20 bg-card/40 overflow-hidden shadow-2xl backdrop-blur-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/40" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 items-start">
            {/* Left Column: General Info & Bio */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/15 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  {TEAM[idx].role}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-2">
                  {TEAM_DETAILS[idx].fullName}
                </h3>
                <p className="text-accent font-semibold text-sm tracking-wide leading-relaxed">
                  {TEAM_DETAILS[idx].tagline}
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/30 pl-4 py-1 italic bg-primary/2">
                "{TEAM_DETAILS[idx].bio}"
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {TEAM_DETAILS[idx].socials.github && (
                  <a
                    href={TEAM_DETAILS[idx].socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-background/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {TEAM_DETAILS[idx].socials.linkedin && (
                  <a
                    href={TEAM_DETAILS[idx].socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-background/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {TEAM_DETAILS[idx].socials.email && (
                  <a
                    href={`mailto:${TEAM_DETAILS[idx].socials.email}`}
                    className="w-10 h-10 rounded-xl bg-background/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                    title="Email Contact"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* About Me Bullet Points */}
              <div className="space-y-3.5 pt-4 border-t border-border/80">
                <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">About the Architect</h5>
                <div className="space-y-3">
                  {TEAM_DETAILS[idx].about.map((item, idxx) => (
                    <div key={idxx} className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 w-7 h-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors duration-300 shrink-0">
                        {renderIcon(item.icon, "w-4 h-4")}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed pt-0.5">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Projects, Skills, Hackathons */}
            <div className="space-y-6 lg:border-l lg:border-border/80 lg:pl-10">
              {/* Skills & Tools Section */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Languages & Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {TEAM_DETAILS[idx].skills.languages.map((skill, idxx) => (
                    <span
                      key={idxx}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-primary/5 border border-primary/10 text-primary shadow-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {TEAM_DETAILS[idx].skills.systems.map((sys, idxx) => (
                    <span
                      key={idxx}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-accent/5 border border-accent/10 text-accent shadow-sm hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hackathons Section (Only if available) */}
              {TEAM_DETAILS[idx].hackathons && TEAM_DETAILS[idx].hackathons!.length > 0 && (
                <div className="space-y-3.5 pt-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hackathons & Achievements</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {TEAM_DETAILS[idx].hackathons!.map((hack, idxx) => (
                      <div
                        key={idxx}
                        className="p-3.5 rounded-2xl border border-border bg-background/30 hover:border-primary/20 hover:bg-primary/2 transition-all duration-300 group/hack"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                            {hack.badge}
                          </span>
                        </div>
                        <h6 className="font-bold text-sm text-foreground mb-1 group-hover/hack:text-primary transition-colors duration-300">{hack.title}</h6>
                        <p className="text-muted-foreground text-xs leading-relaxed">{hack.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured Projects Section */}
              <div className="space-y-3.5 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Featured Projects & Contributions</h5>
                <div className="space-y-3">
                  {TEAM_DETAILS[idx].projects.map((proj, idxx) => (
                    <div
                      key={idxx}
                      className="p-4 rounded-2xl border border-border/80 bg-background/20 hover:border-accent/20 hover:bg-accent/2 transition-all duration-300 group/proj relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover/proj:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="space-y-1.5 w-full">
                          <h6 className="font-bold text-sm text-foreground group-hover/proj:text-accent transition-colors duration-300 flex items-center gap-1.5 justify-between">
                            <span>{proj.title}</span>
                            {proj.link && (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent inline-flex transition-colors shrink-0"
                                title="View Repository"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </h6>
                          <p className="text-muted-foreground text-xs leading-relaxed max-w-xl">{proj.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {proj.tech.map((t, tIdx) => (
                              <span key={tIdx} className="text-[10px] font-semibold text-muted-foreground bg-muted/45 px-2 py-0.5 rounded-md border border-border/50">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <SEO
        title="About TheCOdex Software Solutions | Software Team for Web Apps and SaaS"
        description="Meet TheCOdex Software Solutions and learn about our mission, team, and approach to custom web applications, SaaS development, and business automation."
        keywords="about TheCOdex, web app development team, SaaS development company"
        canonicalUrl={`${SITE_URL}/about`}
        schemaMarkup={[
          createWebPageSchema({
            path: "/about",
            name: "About TheCOdex Software Solutions | Software Team for Web Apps and SaaS",
            description:
              "Meet TheCOdex Software Solutions and learn about our mission, team, and approach to custom web applications, SaaS development, and business automation.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-12 pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}images/about-bg.png`}
            alt="About Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/92" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="px-4 py-1.5 rounded-full border border-accent/20 bg-card/80 text-accent font-medium text-sm">
              MISSION_OBJECTIVE: 100_DAYS
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Built with <span className="text-accent text-glow-accent">focus.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            TheCOdex Software Solutions is a growing team focused on design quality, dependable software delivery, and practical support for businesses that want to build with confidence.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-panel p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/10 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/8 text-primary text-sm font-semibold mb-6">
                  <Building2 className="w-4 h-4" />
                  About Us
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-black leading-tight mb-5">
                  MISSION &amp; VISION
                  <span className="block text-accent text-glow-accent">TheCOdex Software Solutions</span>
                </h2>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  We are a software solutions company building practical, scalable, and easy-to-use digital systems for
                  schools, small businesses, and startups. Our focus is not just to build software, but to deliver
                  technology that creates real growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="glass-card rounded-2xl p-6 border border-primary/15">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our vision is to create a digital ecosystem where every school, small business, and startup can
                      adopt modern technology easily, without unnecessary complexity or cost.
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl p-6 border border-accent/20">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our mission is to deliver practical, result-driven technology solutions that directly strengthen
                      our clients' growth, efficiency, and digital presence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="glass-card rounded-2xl p-6 border border-border/80">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold">Simple Identity</h3>
                  </div>
                  <p className="text-2xl font-display font-bold leading-snug">
                    "We build technology that actually grows businesses."
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-border/80">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-bold">Long-Term Direction</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We aim to digitally empower the education sector, help small businesses grow online, and lead
                    digital transformation across India's tier-2 and tier-3 cities.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-border/80">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold">Core Belief</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To make even the smallest school or business strong in the digital world through smart systems and
                    dependable execution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <GlassCard delay={0.05} className="h-full">
              <h3 className="text-2xl font-bold mb-5">What We Do</h3>
              <div className="space-y-4">
                {MISSION_POINTS.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.1} className="h-full">
              <h3 className="text-2xl font-bold mb-5">Core Values</h3>
              <div className="space-y-4">
                {VALUES.map((value, index) => (
                  <div key={index} className="rounded-2xl border border-border/70 bg-background/60 px-4 py-3">
                    <p className="font-semibold mb-1">{value}</p>
                    <p className="text-sm text-muted-foreground">
                      {value === "Quality over quantity" && "Every project should be impactful, polished, and meaningful."}
                      {value === "Client growth first" && "Our work is successful only when our clients grow with it."}
                      {value === "Innovation mindset" && "Every solution should reflect smart thinking and a future-ready approach."}
                      {value === "Execution over ideas" && "Strong execution matters just as much as strong ideas."}
                      {value === "Trust and transparency" && "Long-term relationships are built through honesty, clarity, and reliable delivery."}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.15} className="h-full">
              <h3 className="text-2xl font-bold mb-5">Future Direction</h3>
              <div className="space-y-4">
                {FUTURE_DIRECTIONS.map((direction, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{direction}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 relative border-t border-border/80 bg-background/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The <span className="text-primary text-glow">Architects</span></h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-16">
            Hover over or tap any architect's card to explore their background, key achievements, technical expertise, and featured projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => {
              const isActive = activeMember === i;
              return (
                <Fragment key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveMember(i)}
                    onMouseEnter={() => setActiveMember(i)}
                    className="group relative cursor-pointer select-none"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent rounded-2xl transition-all duration-500 blur-xl ${isActive ? 'opacity-100 scale-105' : 'opacity-0 group-hover:opacity-100'}`} />
                    <div className={`relative glass-card rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col justify-between ${isActive ? 'border-primary shadow-[0_0_25px_rgba(59,130,246,0.2)] bg-primary/5' : 'border-border group-hover:border-primary/30'}`}>
                      <div>
                        <div className={`w-28 h-28 mx-auto rounded-full overflow-hidden bg-background border-2 mb-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ${isActive ? 'border-primary scale-105 ring-4 ring-primary/20' : 'border-primary/20 group-hover:border-primary/40'}`}>
                          <img
                            src={`${import.meta.env.BASE_URL}${member.image}`}
                            alt={`${member.role} at TheCOdex`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                        <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                        <p className="text-muted-foreground text-xs">{member.spec}</p>
                      </div>
                      
                      <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mt-6">
                        {isActive ? (
                          <span className="flex items-center gap-1 text-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                            Viewing Profile
                          </span>
                        ) : (
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground/70">
                            Inspect Profile
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Dynamic detailed panel right under the card on mobile/tablet */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden col-span-1 md:col-span-2 mt-4 text-left overflow-hidden w-full"
                      >
                        {renderMemberDetails(i)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Fragment>
              );
            })}
          </div>

          {/* Detailed Architect Showcase - Desktop Only */}
          <div className="hidden lg:block w-full">
            <AnimatePresence mode="wait">
              {activeMember !== null && (
                <motion.div
                  key={activeMember}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-16 text-left relative"
                >
                  {renderMemberDetails(activeMember)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
}
