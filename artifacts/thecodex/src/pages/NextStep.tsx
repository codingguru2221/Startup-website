import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  MessageSquare,
  Send,
  Sparkles,
  Globe,
  Server,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Layers,
  DollarSign,
  ArrowRight,
  Download,
  RefreshCw,
  Briefcase,
  ShieldAlert,
  ListChecks,
  Info,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO } from "@/components/SEO";

// Structured Domain & Hosting Data
const DOMAIN_DATA = [
  { ext: ".com", cost: "Rs. 999/yr", speed: "High", trust: "99%", bestFor: "Global brands & startups" },
  { ext: ".in", cost: "Rs. 599/yr", speed: "High", trust: "95%", bestFor: "Indian audience focus" },
  { ext: ".co", cost: "Rs. 1,299/yr", speed: "High", trust: "92%", bestFor: "Tech startups & modern apps" },
  { ext: ".ai", cost: "Rs. 5,999/yr", speed: "High", trust: "98%", bestFor: "AI products & tech businesses" },
];

const HOSTING_DATA = [
  {
    name: "Shared Hosting (Hostinger/Bluehost)",
    cost: "Rs. 149 - 399/mo",
    performance: "Basic / Shared",
    suitability: "Simple blogs, local bakery sites, landing pages",
    cons: "Slow load times, fails under high traffic, shared security risks",
    codexAlternative: "Development Solutions (Starting Rs. 14,999) - We package highly-optimized static frontend builds."
  },
  {
    name: "VPS Hosting (DigitalOcean/Vultr)",
    cost: "Rs. 499 - 1,999/mo",
    performance: "Moderate / Dedicated",
    suitability: "Custom apps, small SaaS portals, custom databases",
    cons: "Requires manual server setup, terminal configuration, complex backups",
    codexAlternative: "Infrastructure Setup (Starting Rs. 29,999) - We build & manage your automated cloud servers."
  },
  {
    name: "Cloud Server (AWS / GCP)",
    cost: "Rs. 1,200+/mo (Pay-as-you-use)",
    performance: "Enterprise / Auto-scale",
    suitability: "Growing SaaS, large eCommerce, critical database apps",
    cons: "Extremely complex billing, hidden data charges, advanced maintenance",
    codexAlternative: "SaaS Development - Full auto-scaling backend setups with professional uptime management."
  }
];

const COMPANY_PROFILE = {
  name: "TheCOdex Software Solutions",
  founder: "Veerendra Vishwakarma",
  founderRole: "Core Founder & CEO",
  buildLead: "Kajal Manjhi",
  businessLead: "Vishal Vishwakarma",
  marketingLead: "Vicky Rajput",
  email: "thecodexofficial001@gmail.com",
  phone: "+91 8305223353",
  location: "Bhopal, Madhya Pradesh, India",
};

const includesAny = (text: string, keywords: string[]) => keywords.some((keyword) => text.includes(keyword));

const stripMarkdown = (text: string) =>
  text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "- ")
    .replace(/[ \t]+\n/g, "\n")
    .trim();

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
  // Rich details for formatting
  pros?: string[];
  gaps?: string[];
  domains?: boolean;
  hosting?: boolean;
  pricingEstimate?: {
    domain: string;
    hosting: string;
    development: string;
    marketing: string;
    total: string;
  };
  recommendedService?: {
    name: string;
    desc: string;
    price: string;
    link: string;
  };
}

const renderInlineMarkdown = (text: string): ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-extrabold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
};

const renderMessageText = (text: string) => {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const orderedItems: string[] = [];
    while (index < lines.length) {
      const match = lines[index].match(/^\s*\d+\.\s+(.+)$/);
      if (!match) break;
      orderedItems.push(match[1]);
      index += 1;
    }

    if (orderedItems.length > 0) {
      blocks.push(
        <ol key={`ol-${index}`} className="list-decimal space-y-1 pl-5">
          {orderedItems.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInlineMarkdown(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    const unorderedItems: string[] = [];
    while (index < lines.length) {
      const match = lines[index].match(/^\s*[-*]\s+(.+)$/);
      if (!match) break;
      unorderedItems.push(match[1]);
      index += 1;
    }

    if (unorderedItems.length > 0) {
      blocks.push(
        <ul key={`ul-${index}`} className="list-disc space-y-1 pl-5">
          {unorderedItems.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !/^\s*[-*]\s+/.test(lines[index])
    ) {
      paragraphLines.push(lines[index]);
      index += 1;
    }

    blocks.push(
      <p key={`p-${index}`} className="whitespace-pre-line">
        {renderInlineMarkdown(paragraphLines.join("\n"))}
      </p>
    );
  }

  return <div className="space-y-3">{blocks}</div>;
};

export default function NextStep() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I am **Next Step**, your AI Business Growth Advisor. I help businesses successfully transition online, analyze their scaling potential, evaluate domain/hosting costs, and identify operational gaps.\n\nTell me about your business idea or current challenge! Or select one of the quick options below to get started immediately.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatThreadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatThread = chatThreadRef.current;
    if (!chatThread) return;

    const animationFrame = window.requestAnimationFrame(() => {
      chatThread.scrollTo({
        top: chatThread.scrollHeight,
        behavior: messages.length === 1 ? "auto" : "smooth",
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [messages, isTyping]);

  const generateAIResponse = async (userText: string) => {
    setIsTyping(true);
    const normalized = userText.toLowerCase();

    // 1. Try to fetch from local server first as an experimental integration
    try {
      const response = await fetch("http://127.0.0.1:8008/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            id: `reply-${Date.now()}`,
            sender: "ai",
            text: data.reply,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
        return;
      }
    } catch (e) {
      // Local server not running or network issue, fail silently and use advanced heuristic engine
    }

    // 2. Advanced Interactive Heuristic Engine (Tailored Business Strategy Engine)
    setTimeout(() => {
      let replyText = "";
      let pros: string[] = [];
      let gaps: string[] = [];
      let includeDomains = false;
      let includeHosting = false;
      let pricingEstimate = undefined;
      let recommendedService = undefined;

      if (includesAny(normalized, ["founder", "owner", "awoner", "ceo", "boss", "kisne banaya", "who made", "who started", "your founder"])) {
        replyText = `**${COMPANY_PROFILE.name}** ke founder **${COMPANY_PROFILE.founder}** hain. Unka role **${COMPANY_PROFILE.founderRole}** hai.

Core team:
- **${COMPANY_PROFILE.buildLead}**: Build Lead & Developer
- **${COMPANY_PROFILE.businessLead}**: Business Lead
- **${COMPANY_PROFILE.marketingLead}**: Marketing Lead

TheCOdex ka focus practical software solutions, web apps, SaaS development, business automation, hosting/infrastructure setup, and growth support par hai.`;
      } else if (includesAny(normalized, ["team", "member", "developer", "kajal", "veerendra", "vishal", "vicky", "architect"])) {
        replyText = `TheCOdex team mein ye key members hain:

1. **${COMPANY_PROFILE.founder}**: ${COMPANY_PROFILE.founderRole}, vision, strategy, and growth.
2. **${COMPANY_PROFILE.buildLead}**: Build Lead & Developer, frontend/backend and delivery.
3. **${COMPANY_PROFILE.businessLead}**: Business Lead, sales, partnerships, and growth.
4. **${COMPANY_PROFILE.marketingLead}**: Marketing Lead, campaigns, branding, and outreach.

Team practical, scalable, and easy-to-use digital systems banane par focused hai.`;
      } else if (includesAny(normalized, ["contact", "phone", "number", "email", "mail", "address", "location", "call", "whatsapp"])) {
        replyText = `Aap TheCOdex Software Solutions se yahan contact kar sakte hain:

- **Email**: ${COMPANY_PROFILE.email}
- **Mobile**: ${COMPANY_PROFILE.phone}
- **Location**: ${COMPANY_PROFILE.location}

Project discussion, collaboration, technical consultation, ya general inquiry ke liye contact page se message bhi bhej sakte hain.`;
      } else if (includesAny(normalized, ["about", "company", "thecodex", "what do you do", "mission", "vision", "who are you"])) {
        replyText = `**${COMPANY_PROFILE.name}** ek software solutions company hai jo schools, small businesses, startups aur growing businesses ke liye practical digital systems banati hai.

What we do:
- Websites and custom web applications
- SaaS product development
- Business automation systems
- Hosting, domain, and cloud infrastructure guidance
- Digital growth and online presence support

Mission simple hai: technology ko unnecessary complexity ke bina business growth, efficiency, aur digital presence ke liye useful banana.`;
      } else if (includesAny(normalized, ["service", "services", "price", "pricing", "cost", "package", "offer"])) {
        replyText = `TheCOdex ke main services:

1. **Development Solutions**: Websites, landing pages, and custom web apps.
2. **SaaS Development**: MVP, dashboards, subscriptions, admin tools, and scalable product systems.
3. **Business Automation**: WhatsApp, Sheets, email, invoices, reports, and workflow automation.
4. **Infrastructure & Computation**: Domain, hosting, VPS/cloud setup, server security, and deployment.
5. **Growth, Marketing & Advisory**: SEO, content, ads, and business growth planning.

Aap apna business type batao, main exact recommended service aur rough launch budget suggest kar dunga.`;
        recommendedService = {
          name: "Start Your Project",
          desc: "Share your business type and goals so we can suggest the right TheCOdex service package.",
          price: "Free Consultation",
          link: "/start-project",
        };
      } else if (normalized.includes("hosting") || normalized.includes("domain") || normalized.includes("server") || normalized.includes("compare")) {
        replyText = "Here is a professional breakdown and comparison of hostings and domains. Choosing the wrong infrastructure is a **critical mistake** most new businesses make—they either overpay for enterprise AWS cloud without traffic, or lose sales on slow shared hosting.";
        includeDomains = true;
        includeHosting = true;
        recommendedService = {
          name: "Infrastructure & Computation",
          desc: "We plan, setup, and secure your cloud servers (AWS, DO, NAS) so your business never goes offline.",
          price: "Rs. 29,999",
          link: "/services/infrastructure-computation",
        };
      } else if (normalized.includes("bakery") || normalized.includes("cake") || normalized.includes("food") || normalized.includes("restaurant") || normalized.includes("cafe")) {
        replyText = "Taking a **bakery/cafe** online requires moving away from just Swiggy/Zomato (which charge 25-30% commissions) to building your own brand presence. Here is your custom scaling evaluation:";
        pros = [
          "High visual appeal - cupcakes, cakes, and artisan breads sell exceptionally well on Instagram.",
          "Repeat customer potential - local birthday, anniversary, and party bookings provide stable revenue."
        ];
        gaps = [
          "Zomato/Swiggy commissions eat up to 30% of your profit margin.",
          "Lack of a direct booking website with loyalty points means customers don't buy from you directly.",
          "Slow manual order taking on WhatsApp leads to order errors and lost time during peak hours."
        ];
        pricingEstimate = {
          domain: "Rs. 999/yr (.com)",
          hosting: "Rs. 299/mo (Hostinger Premium)",
          development: "Rs. 14,999 (One-time, Custom Site)",
          marketing: "Rs. 5,000/mo (Local SEO & Insta Ads)",
          total: "Rs. 21,500 (Initial Setup & Month 1)",
        };
        recommendedService = {
          name: "Development Solutions",
          desc: "We will build a high-speed direct ordering website for your bakery with custom menus and zero commissions.",
          price: "Rs. 14,999",
          link: "/services/development-solutions",
        };
      } else if (normalized.includes("saas") || normalized.includes("software") || normalized.includes("startup") || normalized.includes("app")) {
        replyText = "Launching a **SaaS startup** is highly scalable but highly competitive. Success requires a pristine user experience, clear landing page conversions, and stable database management. Here is your SaaS advisory audit:";
        pros = [
          "Recurrent revenue models (subscriptions) lead to predictable long-term scaling.",
          "Zero physical shipping or logistical friction means global audience reach."
        ];
        gaps = [
          "Generic templates make startups look unprofessional and fail to convert trial users.",
          "Poor user onboarding flows lead to 80%+ dropoff rate in the first 5 minutes.",
          "Insecure database architecture can expose user emails, leading to legal liabilities."
        ];
        pricingEstimate = {
          domain: "Rs. 1,299/yr (.co or .ai)",
          hosting: "Rs. 1,000/mo (DigitalOcean VPS)",
          development: "Rs. 29,999 (Advanced SaaS MVP)",
          marketing: "Rs. 15,000/mo (B2B Content & Ads)",
          total: "Rs. 47,200 (Launch Budget)",
        };
        recommendedService = {
          name: "SaaS Development",
          desc: "Complete multi-tenant SaaS architecture with integrated stripe billing, admin dashboard, and modern UX.",
          price: "Rs. 29,999",
          link: "/saas-development",
        };
      } else if (normalized.includes("automation") || normalized.includes("manual") || normalized.includes("save time") || normalized.includes("excel")) {
        replyText = "Operational bottlenecks are the **silent killers** of growing companies. If your employees are wasting hours manually copying leads from WhatsApp to Excel, sending PDF invoices manually, or double-booking appointments, automation will save you thousands of rupees and hours of work.";
        pros = [
          "Your team already understands their core workflow, making it easy to map out steps.",
          "High potential to cut active labor costs by automating boring, repetitive admin work."
        ];
        gaps = [
          "Human errors in copying client information lead to billing mistakes and angry customers.",
          "No auto-responders means customers wait hours for quotes, and buy from faster competitors.",
          "Information is locked in individual chats, meaning the business founder has no unified view of sales."
        ];
        pricingEstimate = {
          domain: "Rs. 0 (Not needed for internal bots)",
          hosting: "Rs. 499/mo (VPS for cron-job scripts)",
          development: "Rs. 19,999 (Custom Workflow Automation)",
          marketing: "Rs. 0 (Operational enhancement)",
          total: "Rs. 20,499 (Instant operational saving)",
        };
        recommendedService = {
          name: "Business Automation",
          desc: "We sync your WhatsApp, Google Sheets, email, and database to auto-generate invoices, reports, and alerts.",
          price: "Rs. 19,999",
          link: "/services/business-automation",
        };
      } else if (normalized.includes("marketing") || normalized.includes("ad") || normalized.includes("sales") || normalized.includes("traffic")) {
        replyText = "Even the most flawless website is useless if no one visits it. Online scaling requires a targeted strategy combining local search optimization, engaging social content, and low-cost conversion ads. Here is your growth blueprint:";
        pros = [
          "Digital ads allow precise targeting based on locations, interests, and age groups.",
          "Analytics track exactly how much sales you get per rupee of ad spend."
        ];
        gaps = [
          "Wasting budget on broad Facebook/Google ads without installing retargeting pixels.",
          "Inconsistent social posts make the business look inactive or closed to new clients.",
          "No customer testimonial database to show social proof and build fast trust."
        ];
        pricingEstimate = {
          domain: "Rs. 999/yr (.com)",
          hosting: "Rs. 299/mo (Fast landing page)",
          development: "Rs. 14,999 (High-converting Landing page)",
          marketing: "Rs. 10,000/mo (Full Ad & Brand management)",
          total: "Rs. 26,200 (Initial campaign budget)",
        };
        recommendedService = {
          name: "Growth, Marketing & Advisory",
          desc: "Full social media handling, active ad optimization, and business consultation to scale monthly leads.",
          price: "Rs. 29,999",
          link: "/services/growth-marketing-advisory",
        };
      } else {
        // Generic informative response addressing online scaling, domain, hosting, and TheCOdex services
        replyText = `Scaling a business online requires three essential building blocks:
        
1. **Credible Identity**: A fast, premium, mobile-friendly landing page or custom application.
2. **Robust Infrastructure**: Reliable hosting and a simple domain name that fits your brand.
3. **Targeted Growth**: Streamlining your internal operations (automation) and driving traffic (marketing).

To give you an exact analysis of your business:
- **What are you currently doing?** (e.g. "I sell organic soaps on Instagram" or "I run an offline consult clinic")
- **Where are you struggling?** (e.g. "Shared hosting is slow", "Managing client sheets manually is exhausting", or "No traffic")

Tell me your industry, and I will generate a **Pros & Gaps analysis**, calculate your **Domains & Hosting cost estimates**, and match you with our services.`;
        
        recommendedService = {
          name: "Start Your Project",
          desc: "Discuss your full scaling goals, timeline, features, and custom budget with our expert team.",
          price: "Free Consultation",
          link: "/start-project",
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `reply-${Date.now()}`,
          sender: "ai",
          text: replyText,
          timestamp: new Date(),
          pros: pros.length > 0 ? pros : undefined,
          gaps: gaps.length > 0 ? gaps : undefined,
          domains: includeDomains ? true : undefined,
          hosting: includeHosting ? true : undefined,
          pricingEstimate: pricingEstimate,
          recommendedService: recommendedService,
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    generateAIResponse(text);
  };

  const triggerPreset = (preset: string) => {
    handleSend(preset);
  };

  const handleExport = () => {
    let report = `NEXT STEP AI - BUSINESS SCALING REPORT\n`;
    report += `Generated on: ${new Date().toLocaleDateString()}\n`;
    report += `==================================================\n\n`;

    messages.forEach((msg) => {
      const senderName = msg.sender === "ai" ? "NEXT STEP AI" : "USER";
      report += `[${senderName}]: ${stripMarkdown(msg.text)}\n\n`;
      if (msg.pros) {
        report += `STRENGTHS / PROS:\n`;
        msg.pros.forEach((p) => (report += `- ${p}\n`));
        report += `\n`;
      }
      if (msg.gaps) {
        report += `GAPS / GHALATI (WHAT IS WRONG):\n`;
        msg.gaps.forEach((g) => (report += `- ${g}\n`));
        report += `\n`;
      }
      if (msg.pricingEstimate) {
        report += `ESTIMATED ONLINE SCALING EXPENSES:\n`;
        report += `- Domain: ${msg.pricingEstimate.domain}\n`;
        report += `- Hosting: ${msg.pricingEstimate.hosting}\n`;
        report += `- Tech Setup/Dev: ${msg.pricingEstimate.development}\n`;
        report += `- Launch Marketing: ${msg.pricingEstimate.marketing}\n`;
        report += `- TOTAL ESTIMATE: ${msg.pricingEstimate.total}\n\n`;
      }
      if (msg.recommendedService) {
        report += `RECOMMENDED THECODEX SERVICE:\n`;
        report += `- Service: ${msg.recommendedService.name}\n`;
        report += `- Details: ${msg.recommendedService.desc}\n`;
        report += `- Starting Cost: ${msg.recommendedService.price}\n\n`;
      }
      report += `--------------------------------------------------\n\n`;
    });

    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `NextStep_Business_Advisory_Report.txt`;
    link.click();
  };

  return (
    <Layout>
      <SEO
        title="Next Step AI | Online Business Strategy & Cost Advisor"
        description="Interact with Next Step, our intelligent AI Business Advisor. Evaluate hosting/domain costs, audit online business gaps (what is right vs wrong), and get custom scaling blueprints."
        keywords="ai business suggestions, domain comparison, hosting comparison, online business scale, startup advisory tool"
      />

      <section className="relative min-h-[85vh] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Preset Flows & Insights */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <GlassCard className="border-primary/20 bg-card/90" hoverEffect={false}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/25">
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                </div>
                <div>
                  <h2 className="font-display font-extrabold text-lg leading-tight">Next Step</h2>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">AI Business Advisor</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This dedicated AI evaluates your business model, audits your online readiness, calculates server/hosting expenses, and matches you to tailored solutions.
              </p>
              <NeonButton
                size="sm"
                fullWidth
                variant="outline"
                icon={<Download className="w-4 h-4" />}
                onClick={handleExport}
                className="text-xs"
              >
                Export Scaling Report
              </NeonButton>
            </GlassCard>

            <GlassCard className="border-border bg-card/60" hoverEffect={false}>
              <h3 className="font-display font-bold text-sm mb-3 uppercase tracking-wider text-foreground">Interactive Strategy Tools</h3>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Compare Hosting & Domain", prompt: "Explain and compare hosting and domain options and prices" },
                  { label: "Audit My Bakery/Restaurant", prompt: "Scale my local bakery business online. What are my gaps and costs?" },
                  { label: "SaaS Launch Roadmap", prompt: "I want to launch a SaaS startup. Outline the server setup and costs" },
                  { label: "Time-Saving Automation", prompt: "How can I automate my manual billing and WhatsApp lead tracking?" },
                  { label: "Boost Online Sales", prompt: "Analyze my online marketing strategy. How do I get more web traffic?" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => triggerPreset(item.prompt)}
                    className="text-left w-full px-3 py-2.5 rounded-lg text-xs font-medium bg-background/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary/60 group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Main Chat Hub */}
          <div className="lg:col-span-3 flex flex-col h-[75vh] min-h-[550px] relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="flex flex-col h-full rounded-2xl border border-primary/10 overflow-hidden bg-card/95 glass-card relative"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center border border-white/20 shadow-[0_4px_14px_rgba(59,130,246,0.3)]">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-card" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-foreground leading-none">Next Step AI</h3>
                    <span className="text-[10px] font-medium text-emerald-500 uppercase tracking-widest mt-1 block">Active Advisory Engine</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setMessages([
                      {
                        id: "welcome",
                        sender: "ai",
                        text: "Hello! I am **Next Step**, your AI Business Growth Advisor. I help businesses successfully transition online, analyze their scaling potential, evaluate domain/hosting costs, and identify operational gaps.\n\nTell me about your business idea or current challenge! Or select one of the quick options below to get started immediately.",
                        timestamp: new Date(),
                      }
                    ])}
                    className="p-2 rounded-lg bg-background border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                    title="Reset Chat"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Thread */}
              <div ref={chatThreadRef} className="flex-grow overflow-y-auto p-6 space-y-6 ai-assistant-scroll">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border font-bold text-xs ${
                          msg.sender === "user"
                            ? "bg-primary text-white border-primary/20"
                            : "bg-gradient-to-br from-primary/10 to-accent/15 text-primary border-primary/20"
                        }`}>
                          {msg.sender === "user" ? "U" : <Sparkles className="w-4 h-4" />}
                        </div>

                        {/* Content Card */}
                        <div className="space-y-4">
                          <div className={`p-4 rounded-2xl shadow-sm leading-relaxed text-sm ${
                            msg.sender === "user"
                              ? "bg-primary text-white rounded-tr-none font-medium"
                              : "bg-muted/40 border border-border rounded-tl-none text-foreground"
                          }`}>
                            {renderMessageText(msg.text)}
                          </div>

                          {/* 1. Dynamic Domains & Hosting Grid */}
                          {msg.sender === "ai" && (msg.domains || msg.hosting) && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.96 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="grid grid-cols-1 gap-4 mt-3"
                            >
                              {/* Domain Options */}
                              {msg.domains && (
                                <div className="p-4 rounded-xl border border-border bg-card shadow-sm">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Globe className="w-4.5 h-4.5 text-primary" />
                                    <h4 className="font-bold text-xs uppercase tracking-wider text-foreground">Domain Extensions Compare</h4>
                                  </div>
                                  <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-xs">
                                      <thead>
                                        <tr className="border-b border-border text-muted-foreground font-semibold">
                                          <th className="pb-2">Extension</th>
                                          <th className="pb-2">Avg. Cost</th>
                                          <th className="pb-2">Target Audience</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {DOMAIN_DATA.map((domain) => (
                                          <tr key={domain.ext} className="border-b border-border/40 hover:bg-muted/30">
                                            <td className="py-2 font-bold text-primary">{domain.ext}</td>
                                            <td className="py-2 text-foreground">{domain.cost}</td>
                                            <td className="py-2 text-muted-foreground">{domain.bestFor}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}

                              {/* Hosting Options */}
                              {msg.hosting && (
                                <div className="p-4 rounded-xl border border-border bg-card shadow-sm space-y-3">
                                  <div className="flex items-center gap-2">
                                    <Server className="w-4.5 h-4.5 text-primary" />
                                    <h4 className="font-bold text-xs uppercase tracking-wider text-foreground">Hosting Infrastructure Gaps & Pricing</h4>
                                  </div>
                                  <div className="space-y-3 text-xs">
                                    {HOSTING_DATA.map((host) => (
                                      <div key={host.name} className="p-3 rounded-lg bg-muted/40 border border-border/60">
                                        <div className="flex justify-between items-center mb-1">
                                          <span className="font-bold text-foreground">{host.name}</span>
                                          <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold">{host.cost}</span>
                                        </div>
                                        <p className="text-muted-foreground mb-2"><strong className="text-foreground">Suitable for:</strong> {host.suitability}</p>
                                        <div className="flex items-start gap-1.5 text-amber-600 dark:text-amber-400 mb-2">
                                          <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                                          <p><strong className="font-semibold">Hidden Gaps:</strong> {host.cons}</p>
                                        </div>
                                        <div className="p-2 rounded bg-card border border-primary/10 flex items-start gap-2">
                                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                          <p className="text-muted-foreground leading-normal"><strong className="text-emerald-500 font-bold">TheCOdex Edge:</strong> {host.codexAlternative}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}

                          {/* 2. Pros & Gaps Analysis Widget (What is Right vs What is Wrong) */}
                          {msg.sender === "ai" && (msg.pros || msg.gaps) && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3"
                            >
                              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] shadow-sm">
                                <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400">
                                  <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                                  <h4 className="font-bold text-xs uppercase tracking-wider">What You Are Doing Right (Sahi)</h4>
                                </div>
                                <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-4">
                                  {msg.pros?.map((pro, index) => (
                                    <li key={index} className="leading-relaxed">{pro}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/[0.02] shadow-sm">
                                <div className="flex items-center gap-2 mb-3 text-rose-600 dark:text-rose-400">
                                  <AlertTriangle className="w-4.5 h-4.5 shrink-0" />
                                  <h4 className="font-bold text-xs uppercase tracking-wider">Online Gaps & Mistakes (Galat)</h4>
                                </div>
                                <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-4">
                                  {msg.gaps?.map((gap, index) => (
                                    <li key={index} className="leading-relaxed">{gap}</li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}

                          {/* 3. Online Scaling Expense Calculation Widget */}
                          {msg.sender === "ai" && msg.pricingEstimate && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="p-4 rounded-xl border border-primary/20 bg-card shadow-sm mt-3"
                            >
                              <div className="flex items-center gap-2 mb-3 text-primary">
                                <DollarSign className="w-4.5 h-4.5" />
                                <h4 className="font-bold text-xs uppercase tracking-wider">Online Scaling Expense Breakdown</h4>
                              </div>
                              <div className="space-y-2 text-xs text-muted-foreground">
                                <div className="flex justify-between border-b border-border/40 pb-1">
                                  <span>Domain Name Cost (Annual)</span>
                                  <span className="font-bold text-foreground">{msg.pricingEstimate.domain}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/40 pb-1">
                                  <span>Cloud/Infrastructure Hosting (Monthly)</span>
                                  <span className="font-bold text-foreground">{msg.pricingEstimate.hosting}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/40 pb-1">
                                  <span>TheCOdex Web Development (One-time)</span>
                                  <span className="font-bold text-foreground">{msg.pricingEstimate.development}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/40 pb-1">
                                  <span>Targeted Local Marketing (Monthly setup)</span>
                                  <span className="font-bold text-foreground">{msg.pricingEstimate.marketing}</span>
                                </div>
                                <div className="flex justify-between pt-1.5 text-sm font-extrabold text-primary">
                                  <span>Total Scaling Launch Budget</span>
                                  <span>{msg.pricingEstimate.total}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* 4. Strategic TheCOdex Service Matches */}
                          {msg.sender === "ai" && msg.recommendedService && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/[0.03] to-accent/[0.03] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 mt-3"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wide">Recommended Solution</span>
                                  <span className="text-xs font-bold text-muted-foreground">Starting from {msg.recommendedService.price}</span>
                                </div>
                                <h4 className="font-display font-black text-sm text-foreground">{msg.recommendedService.name}</h4>
                                <p className="text-xs text-muted-foreground leading-normal max-w-lg">{msg.recommendedService.desc}</p>
                              </div>
                              <Link href="/buy-service">
                                <NeonButton size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                                  Select Service
                                </NeonButton>
                              </Link>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 animate-bounce">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <div className="px-4 py-3 rounded-2xl bg-muted/40 border border-border rounded-tl-none flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input Footer */}
              <div className="p-4 border-t border-border bg-muted/10 backdrop-blur-md">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Describe your offline shop or startup (e.g. 'I run a bakery', 'hosting price check')..."
                    className="flex-grow px-4 py-3 rounded-xl border border-border hover:border-primary/30 focus:border-primary focus:outline-none bg-background text-sm transition-all focus:ring-1 focus:ring-primary"
                  />
                  <NeonButton type="submit" size="md" icon={<Send className="w-4 h-4" />}>
                    Send
                  </NeonButton>
                </form>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Info className="w-3.5 h-3.5" />
                  <span>Ask about Domain & Hosting, Bakery scale-up costs, SaaS Startup launch, or Invoice Automation.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
