import { FormEvent, KeyboardEvent, ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Bot, X, Sparkles, Send } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";

interface LayoutProps {
  children: ReactNode;
}

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const WEBSITE_CONTEXT = {
  company: "TheCOdex Software Solutions",
  founder: "Veerendra Vishwakarma",
  location: "Bhopal, Madhya Pradesh, India",
  email: "thecodexofficial001@gmail.com",
  phone: "+91 8305223353",
  social: ["Instagram", "GitHub Community", "LinkedIn", "X / Twitter"],
  pages: [
    "Home",
    "Services",
    "Projects",
    "About",
    "Contact",
    "Privacy Policy",
    "Terms & Conditions",
  ],
  inquiryFlows: [
    "Buy a Service",
    "Ask Us What You Want",
    "Start Your Project",
    "Discuss Maintenance",
  ],
  featuredProjects: [
    "College Website",
    "Portfolio Website",
    "Modern Portfolio Website",
    "Raj Heights Global",
  ],
};

function hasAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function formatServiceSummary() {
  return SERVICE_CATEGORIES.map((service) => service.title).join(", ");
}

function getAssistantReply(message: string) {
  const normalized = message.toLowerCase().trim();
  const serviceTitles = SERVICE_CATEGORIES.map((service) => service.title.toLowerCase());
  const matchedService = SERVICE_CATEGORIES.find((service) =>
    normalized.includes(service.title.toLowerCase()) ||
    normalized.includes(service.slug.toLowerCase()) ||
    service.items.some((item) => normalized.includes(item.toLowerCase())) ||
    service.offerings.some((offering) => normalized.includes(offering.title.toLowerCase()))
  );

  if (hasAny(normalized, ["hello", "hi", "hey", "hii", "hlo", "helo", "hay"])) {
    return "Hey, welcome to TheCOdex. Tell me what you are planning to build, improve, or launch, and I will point you in the right direction.";
  }

  if (hasAny(normalized, ["who are you", "about", "company", "thecodex", "founder", "team"])) {
    return `${WEBSITE_CONTEXT.company} is based in ${WEBSITE_CONTEXT.location} and focuses on websites, applications, AI workflows, infrastructure, and growth support. The founder is ${WEBSITE_CONTEXT.founder}, and the site also highlights the company's mission, values, and long-term direction on the About page.`;
  }

  if (hasAny(normalized, ["page", "website", "site", "navigation", "menu"]) && !normalized.includes("website project")) {
    return `The website currently includes these main sections: ${WEBSITE_CONTEXT.pages.join(", ")}. If you want, ask me about any specific page and I will summarize it for you.`;
  }

  if (normalized.includes("service")) {
    return `The main service areas are ${formatServiceSummary()}. Inside them, the website covers website development, app development, redesigns, maintenance, AI integration, automation, network setups, server and storage systems, and growth support. Tell me your goal and I can narrow down the best fit.`;
  }

  if (normalized.includes("start") || normalized.includes("project")) {
    return "A good way to start is to share three things: what you want built, your rough budget, and your timeline. After that, the Start Project or Custom Request flow will make a lot more sense.";
  }

  if (normalized.includes("app") || normalized.includes("ai")) {
    return "Yes, definitely. We work on apps, internal business tools, and AI-powered workflows too. If you already have an idea, send me a short version of it and I will guide you from there.";
  }

  if (normalized.includes("contact") || normalized.includes("call") || normalized.includes("fast")) {
    return "The fastest route is WhatsApp on +91 8305223353. You can also email thecodexofficial001@gmail.com or use the Contact page if you want a more formal discussion.";
  }

  if (normalized.includes("price") || normalized.includes("cost") || normalized.includes("budget")) {
    return "Pricing depends on scope, features, and delivery speed, but the site already shows structured starting plans. Development starts at Rs 14,999, AI Integration & Automation starts at Rs 19,999, and Infrastructure plus Growth support start at Rs 29,999. If you tell me the kind of work you need, I can point you toward the closest category.";
  }

  if (hasAny(normalized, ["buy a service", "buy service", "custom request", "start project", "maintenance", "support flow", "inquiry"])) {
    return `The website has four main inquiry flows: ${WEBSITE_CONTEXT.inquiryFlows.join(", ")}. Use Buy a Service when you already know the service, Ask Us What You Want when the requirement is mixed or unclear, Start Your Project for structured product planning, and Discuss Maintenance for post-launch support.`;
  }

  if (hasAny(normalized, ["contact", "call", "email", "phone", "whatsapp", "reach", "location", "address", "social"])) {
    return `You can reach the team by email at ${WEBSITE_CONTEXT.email}, by phone or WhatsApp on ${WEBSITE_CONTEXT.phone}, and the location shown on the site is ${WEBSITE_CONTEXT.location}. The Contact page also links Instagram, GitHub Community, LinkedIn, and X / Twitter.`;
  }

  if (hasAny(normalized, ["project", "portfolio", "work sample", "example", "live preview"])) {
    return `The Projects page shows live previews of work such as ${WEBSITE_CONTEXT.featuredProjects.join(", ")}. Visitors can explore real deployed sites directly from the page instead of only seeing screenshots.`;
  }

  if (hasAny(normalized, ["privacy", "terms", "policy", "legal", "condition"])) {
    return "Yes, the website includes both Privacy Policy and Terms & Conditions pages. They cover company details, contact information, legal terms, privacy practices, founder information, signature, and the latest update date shown on the site.";
  }

  if (matchedService) {
    const planStart = matchedService.plans[0]?.price;
    return `${matchedService.title} is one of the main service categories on the site. It covers things like ${matchedService.items.slice(0, 3).join(", ")}. The starting visible plan in that category begins at ${planStart}, and the service page also explains deliverables, ideal use cases, and package tiers.`;
  }

  if ((normalized.includes("website") || normalized.includes("web")) && !serviceTitles.some((title) => normalized.includes(title))) {
    return "If it is a website project, I can help you figure out whether you need a simple business site, a custom web app, or something more advanced. Tell me what the website should do.";
  }

  if (normalized.length <= 12) {
    return "I am here with you. Ask me about services, pricing, projects, contact details, or just tell me what you want to build.";
  }

  return "Got it. Tell me a little more clearly what you want to know, and I will answer from the website's services, pricing, projects, contact details, or company info.";
}

export function Layout({ children }: LayoutProps) {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  function handleAssistantSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = chatInput.trim();
    if (!message || isThinking) {
      return;
    }

    const timestamp = Date.now();
    const userMessage: ChatMessage = {
      id: `${timestamp}-user`,
      role: "user",
      text: message,
    };

    setMessages((current) => [...current, userMessage]);
    setChatInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `${timestamp}-assistant`,
        role: "assistant",
        text: getAssistantReply(message),
      };

      setMessages((current) => [...current, assistantMessage]);
      setIsThinking(false);
    }, 650);
  }

  function handleAssistantKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const form = event.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-primary/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/8 rounded-full blur-[120px] opacity-70 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/8 rounded-full blur-[120px] opacity-60 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-[0.03]" />

      <Navbar />
      
      <main className="flex-grow relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
        {isAssistantOpen ? (
          <div className="ai-assistant-scroll max-h-[calc(100vh-11rem)] w-[min(18rem,calc(100vw-1rem))] overflow-y-auto rounded-lg border border-border bg-card/95 p-3 shadow-[0_22px_60px_rgba(15,23,42,0.22)] backdrop-blur-md">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-2 py-1 text-xs font-semibold text-primary mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Assistant
                </div>
                <h3 className="text-sm font-bold">Talk to TheCOdex AI</h3>
                <p className="text-xs text-muted-foreground">
                  I can guide visitors toward the right service, project flow, or direct contact.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close AI assistant"
                onClick={() => setIsAssistantOpen(false)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {messages.length === 0 ? (
                <div className="rounded-lg border border-dashed border-border bg-background/60 p-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Start the conversation naturally. Ask about a website, app, AI workflow, pricing, or how to begin.
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={
                      message.role === "assistant"
                        ? "rounded-lg border border-primary/15 bg-primary/8 p-2.5"
                        : "rounded-lg border border-border bg-background/70 p-2.5"
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                      {message.role === "assistant" ? "AI Reply" : "Visitor"}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{message.text}</p>
                  </div>
                ))
              )}

              {isThinking ? (
                <div className="rounded-lg border border-primary/15 bg-primary/8 p-2.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">AI Reply</p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary/70 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-primary/70 animate-pulse [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-primary/70 animate-pulse [animation-delay:300ms]" />
                  </div>
                </div>
              ) : null}
            </div>

            <form onSubmit={handleAssistantSubmit} className="mt-2.5">
              <div className="flex items-center gap-2">
                <textarea
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  onKeyDown={handleAssistantKeyDown}
                  placeholder="Type your message..."
                  rows={2}
                  className="min-h-[4.25rem] flex-1 resize-none rounded-lg border border-border bg-background/80 px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/35"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={isThinking}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(59,130,246,0.32)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setIsAssistantOpen((open) => !open)}
          aria-label="Open TheCOdex AI assistant"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_22px_46px_rgba(59,130,246,0.45)]"
        >
          <Bot className="w-7 h-7" />
        </button>
      </div>

      <a
        href="https://wa.me/918305223353"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_22px_46px_rgba(37,211,102,0.45)] transition-all duration-300"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
      
      <Footer />
    </div>
  );
}
