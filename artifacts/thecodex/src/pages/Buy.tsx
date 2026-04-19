import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ClipboardList, Headphones, Layers3, Rocket, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { useToast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/form-submission";

export type InquiryMode = "buy-service" | "custom-request" | "start-project" | "maintenance-support";

interface BuyProps {
  mode?: InquiryMode;
}

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  packageType: string;
  budget: string;
  timeline: string;
  projectType: string;
  stage: string;
  challenge: string;
  goals: string;
  description: string;
  website: string;
  currentSystem: string;
  urgency: string;
  supportPlan: string;
}

const INITIAL_FORM: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  packageType: "",
  budget: "",
  timeline: "",
  projectType: "",
  stage: "",
  challenge: "",
  goals: "",
  description: "",
  website: "",
  currentSystem: "",
  urgency: "",
  supportPlan: "",
};

const SERVICE_OPTIONS = [
  "Website Development",
  "App Development",
  "Web App Maintenance",
  "Website or App Redesign",
  "AI Integration and Automation",
  "Network and Infrastructure Setup",
  "Marketing and Growth Support",
];

const PROJECT_TYPES = [
  "Business Website",
  "Web Application",
  "Mobile Application",
  "Internal Business System",
  "AI Automation Project",
  "Infrastructure Setup",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2 to 3 months",
  "Still planning",
];

const BUDGET_OPTIONS = [
  "Below Rs 25,000",
  "Rs 25,000 - Rs 75,000",
  "Rs 75,000 - Rs 1,50,000",
  "Rs 1,50,000 - Rs 3,00,000",
  "Above Rs 3,00,000",
  "Need guidance first",
];

const FORM_CONFIGS = {
  "buy-service": {
    title: "Buy a Service",
    subtitle: "Choose a service with clear commercial details so we can recommend the right package and scope.",
    icon: ShoppingBag,
    type: "buy-service",
    submitLabel: "Submit Service Request",
    highlights: [
      "Best for clients who already know the service they need",
      "Helps us recommend the right package and budget range",
      "Ideal for website, app, AI, or infrastructure purchases",
    ],
  },
  "custom-request": {
    title: "Ask Us What You Want",
    subtitle: "Share your idea, problem, or requirement in your own words and we will shape the right solution for you.",
    icon: ClipboardList,
    type: "custom-request",
    submitLabel: "Send Custom Request",
    highlights: [
      "Best when you know the outcome but not the exact service",
      "Useful for unique or mixed requirements",
      "We review your need and guide you to the best path",
    ],
  },
  "start-project": {
    title: "Start Your Project",
    subtitle: "Tell us about the product you want to launch so we can evaluate scope, goals, timeline, and execution needs.",
    icon: Rocket,
    type: "start-project",
    submitLabel: "Start Project Inquiry",
    highlights: [
      "Best for founders, startups, and serious project planning",
      "Focused on project scope, goals, features, and launch timeline",
      "Designed for structured project discussions",
    ],
  },
  "maintenance-support": {
    title: "Discuss Maintenance",
    subtitle: "Tell us about your current system, the support you need, and how urgent it is so we can plan continuity properly.",
    icon: Headphones,
    type: "maintenance-support",
    submitLabel: "Request Maintenance Support",
    highlights: [
      "Best for post-launch support and system continuity",
      "Useful for bug fixes, upgrades, and regular maintenance",
      "Helps us understand urgency and support expectations",
    ],
  },
} as const;

function buildMessage(mode: InquiryMode, values: FormValues) {
  const common = [
    `Name: ${values.name}`,
    `Company: ${values.company || "Not provided"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
  ];

  const modeSpecific: Record<InquiryMode, string[]> = {
    "buy-service": [
      `Requested service: ${values.service}`,
      `Package preference: ${values.packageType || "Not provided"}`,
      `Budget range: ${values.budget || "Not provided"}`,
      `Preferred timeline: ${values.timeline || "Not provided"}`,
      `Scope notes: ${values.description}`,
    ],
    "custom-request": [
      `What they need: ${values.goals}`,
      `Main challenge: ${values.challenge}`,
      `Expected outcome: ${values.description}`,
      `Budget range: ${values.budget || "Not provided"}`,
      `Preferred timeline: ${values.timeline || "Not provided"}`,
    ],
    "start-project": [
      `Project type: ${values.projectType}`,
      `Project stage: ${values.stage}`,
      `Business goals: ${values.goals}`,
      `Required features or modules: ${values.description}`,
      `Budget range: ${values.budget || "Not provided"}`,
      `Preferred timeline: ${values.timeline || "Not provided"}`,
    ],
    "maintenance-support": [
      `Current website or system: ${values.website || "Not provided"}`,
      `Current setup details: ${values.currentSystem}`,
      `Support needed: ${values.description}`,
      `Urgency: ${values.urgency}`,
      `Support preference: ${values.supportPlan || "Not provided"}`,
    ],
  };

  return [...common, ...modeSpecific[mode]].join("\n");
}

function validateForm(mode: InquiryMode, values: FormValues) {
  if (!values.name || !values.email) {
    return "Name and email are required.";
  }

  if (mode === "buy-service" && (!values.service || !values.description)) {
    return "Please select a service and describe what you need.";
  }

  if (mode === "custom-request" && (!values.goals || !values.description)) {
    return "Please describe what you want and the outcome you expect.";
  }

  if (mode === "start-project" && (!values.projectType || !values.stage || !values.goals || !values.description)) {
    return "Please complete the project planning fields before submitting.";
  }

  if (mode === "maintenance-support" && (!values.currentSystem || !values.description || !values.urgency)) {
    return "Please provide current system details, support needs, and urgency.";
  }

  return null;
}

export default function Buy({ mode = "buy-service" }: BuyProps) {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormValues>(() => {
    if (typeof window === "undefined") {
      return INITIAL_FORM;
    }

    const params = new URLSearchParams(window.location.search);
    const selectedService = params.get("service") ?? "";
    const selectedPlan = params.get("plan") ?? "";
    const selectedBudget = params.get("budget") ?? "";

    return {
      ...INITIAL_FORM,
      service: selectedService,
      packageType: selectedPlan,
      budget: selectedBudget,
      description:
        selectedService && selectedPlan
          ? `Selected plan: ${selectedPlan} (${selectedBudget}) for ${selectedService}.`
          : "",
    };
  });

  const config = useMemo(() => FORM_CONFIGS[mode], [mode]);
  const FormIcon = config.icon;

  const updateField = (key: keyof FormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm(mode, formData);
    if (validationError) {
      toast({
        title: "Validation error",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitForm({
        name: formData.name,
        email: formData.email,
        service: formData.service || formData.projectType || mode,
        budget: formData.budget,
        type: config.type,
        message: buildMessage(mode, formData),
      });

      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
      toast({
        title: "Request submitted",
        description: "Our team will review your request and get back to you shortly.",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Unable to submit request.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-28 pb-24 relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-12 w-80 h-80 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {!isSubmitted && (
            <button
              onClick={() => setLocation("/")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          )}

          <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/8 text-primary text-sm font-semibold"
              >
                <FormIcon className="w-4 h-4" />
                Professional Inquiry Flow
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-6xl font-display font-black leading-tight"
              >
                {config.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {config.subtitle}
              </motion.p>

              <div className="glass-card rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Layers3 className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Why this form exists</h2>
                </div>
                <div className="space-y-4">
                  {config.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-[90px] pointer-events-none" />
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex flex-col items-center justify-center text-center min-h-[520px]"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Request Submitted</h2>
                  <p className="text-muted-foreground max-w-md mb-8">
                    Your inquiry has been recorded successfully. A TheCodex representative will review it and respond with the next step.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <NeonButton variant="outline" onClick={() => setLocation("/")}>
                      Return Home
                    </NeonButton>
                    <NeonButton onClick={() => setIsSubmitted(false)}>
                      Submit Another Request
                    </NeonButton>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Contact Details</h2>
                    <p className="text-sm text-muted-foreground">Share the basic information we need to respond professionally.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <input
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company / Organization</label>
                      <input
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <input
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {mode === "buy-service" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-1">Service Purchase Details</h3>
                        <p className="text-sm text-muted-foreground">Select the service and tell us the scope you want to buy.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Service Needed *</label>
                          <select
                            value={formData.service}
                            onChange={(e) => updateField("service", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select a service</option>
                            {formData.service && !SERVICE_OPTIONS.includes(formData.service) && (
                              <option value={formData.service}>{formData.service}</option>
                            )}
                            {SERVICE_OPTIONS.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Package Preference</label>
                          <input
                            value={formData.packageType}
                            onChange={(e) => updateField("packageType", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="Basic, standard, premium, or custom"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Budget Range</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => updateField("budget", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select budget range</option>
                            {formData.budget && !BUDGET_OPTIONS.includes(formData.budget) && (
                              <option value={formData.budget}>{formData.budget}</option>
                            )}
                            {BUDGET_OPTIONS.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Preferred Timeline</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => updateField("timeline", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select timeline</option>
                            {TIMELINE_OPTIONS.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">What exactly do you need? *</label>
                        <textarea
                          rows={5}
                          value={formData.description}
                          onChange={(e) => updateField("description", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="Explain what you want us to build or deliver."
                        />
                      </div>
                    </div>
                  )}

                  {mode === "custom-request" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-1">Custom Requirement Details</h3>
                        <p className="text-sm text-muted-foreground">Describe the problem, requirement, or desired outcome in your own words.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">What do you want help with? *</label>
                          <input
                            value={formData.goals}
                            onChange={(e) => updateField("goals", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="Example: Build an online platform for my business"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Preferred Timeline</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => updateField("timeline", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select timeline</option>
                            {TIMELINE_OPTIONS.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Current Challenge</label>
                        <textarea
                          rows={4}
                          value={formData.challenge}
                          onChange={(e) => updateField("challenge", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="What problem are you facing right now?"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Expected Outcome *</label>
                        <textarea
                          rows={5}
                          value={formData.description}
                          onChange={(e) => updateField("description", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="Describe the result or solution you want from us."
                        />
                      </div>
                    </div>
                  )}
                  {mode === "start-project" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-1">Project Planning Details</h3>
                        <p className="text-sm text-muted-foreground">Help us understand what you are building so we can approach it seriously from day one.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Project Type *</label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => updateField("projectType", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select project type</option>
                            {PROJECT_TYPES.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Current Stage *</label>
                          <input
                            value={formData.stage}
                            onChange={(e) => updateField("stage", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="Idea, planning, design, existing product, etc."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Budget Range</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => updateField("budget", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select budget range</option>
                            {BUDGET_OPTIONS.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Target Timeline</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => updateField("timeline", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select timeline</option>
                            {TIMELINE_OPTIONS.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Business Goals *</label>
                        <textarea
                          rows={4}
                          value={formData.goals}
                          onChange={(e) => updateField("goals", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="What should this project achieve for your business?"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Features or Scope Needed *</label>
                        <textarea
                          rows={5}
                          value={formData.description}
                          onChange={(e) => updateField("description", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="List the key features, modules, or requirements."
                        />
                      </div>
                    </div>
                  )}

                  {mode === "maintenance-support" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-1">Maintenance Requirement Details</h3>
                        <p className="text-sm text-muted-foreground">Tell us what exists already and what kind of support or continuity you need.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Website or Product Link</label>
                          <input
                            value={formData.website}
                            onChange={(e) => updateField("website", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="https://yourwebsite.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Urgency Level *</label>
                          <select
                            value={formData.urgency}
                            onChange={(e) => updateField("urgency", e.target.value)}
                            className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                          >
                            <option value="">Select urgency</option>
                            <option value="Immediate">Immediate</option>
                            <option value="This week">This week</option>
                            <option value="This month">This month</option>
                            <option value="Ongoing planning">Ongoing planning</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Current System Details *</label>
                        <textarea
                          rows={4}
                          value={formData.currentSystem}
                          onChange={(e) => updateField("currentSystem", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="Tell us what tech stack, platform, or setup you currently use."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Support Needed *</label>
                        <textarea
                          rows={5}
                          value={formData.description}
                          onChange={(e) => updateField("description", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="Explain the bug fixes, upgrades, or maintenance help you need."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Support Preference</label>
                        <input
                          value={formData.supportPlan}
                          onChange={(e) => updateField("supportPlan", e.target.value)}
                          className="w-full bg-input border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                          placeholder="One-time fix, monthly support, long-term maintenance, etc."
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <NeonButton type="submit" fullWidth disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : config.submitLabel}
                    </NeonButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
