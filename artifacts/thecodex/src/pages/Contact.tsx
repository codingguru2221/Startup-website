import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { SEO, createBreadcrumbSchema, createWebPageSchema } from "@/components/SEO";
import { ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/form-submission";
import { SITE_URL } from "@/lib/seo";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "thecodexofficial001@gmail.com",
    href: "mailto:thecodexofficial001@gmail.com",
  },
  {
    icon: Phone,
    title: "Mobile Number",
    value: "+91 8305223353",
    href: "tel:+918305223353",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bhopal, Madhya Pradesh, India",
    href: "https://maps.app.goo.gl/BuiqcDyTSQyZg1Hu9",
  },
];

const googleMapsListingUrl = "https://maps.app.goo.gl/BuiqcDyTSQyZg1Hu9";
const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=TheCOdex%20software%20solutions%2C%20Bhopal&ll=23.0515653,77.5517024&z=16&output=embed";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/the_codex_official_?igsh=MXR6Ymxwc3J3NG43ZA==",
  },
  {
    icon: Github,
    label: "GitHub Community",
    href: "https://github.com/The-Codex-Official",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@The_COdex-Official",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/thecodex-software-solutions/?viewAsMember=true",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    href: "https://x.com/TheCOdexOnBOrd",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitForm({ name, email, message, type: "contact" });

      alert("Submitted successfully");
      toast({
        title: "Message received",
        description: "We'll be in contact shortly.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Something went wrong");
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Unexpected error",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact TheCOdex | Web App Development and SaaS Consultation"
        description="Contact TheCOdex Software Solutions to discuss custom web application development, SaaS product delivery, maintenance, and business automation projects."
        keywords="contact web app development company, SaaS consultation, automation software consultation"
        canonicalUrl={`${SITE_URL}/contact`}
        schemaMarkup={[
          createWebPageSchema({
            path: "/contact",
            name: "Contact TheCOdex | Web App Development and SaaS Consultation",
            description:
              "Contact TheCOdex Software Solutions to discuss custom web application development, SaaS product delivery, maintenance, and business automation projects.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@type": "ContactPage",
            name: "Contact TheCOdex Software Solutions",
            url: `${SITE_URL}/contact`,
            mainEntity: {
              "@type": "Organization",
              name: "TheCOdex Software Solutions",
              email: "thecodexofficial001@gmail.com",
              telephone: "+91 8305223353",
              hasMap: googleMapsListingUrl,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhopal",
                addressRegion: "Madhya Pradesh",
                addressCountry: "IN",
              },
            },
          },
        ]}
      />

      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-black mb-6"
            >
              Let&apos;s <span className="text-primary text-glow">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Reach out directly by phone, email, or social platforms for collaborations, project discussions, and general inquiries.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {contactDetails.map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">{item.title}</h4>
                    <a
                      href={item.href}
                      target={item.title === "Location" ? "_blank" : undefined}
                      rel={item.title === "Location" ? "noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors break-words"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-foreground font-semibold mb-4">Social Contacts</h4>
                <div className="space-y-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm break-all">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name / Designation</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <select className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Technical Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Detail your requirements..."
                    ></textarea>
                  </div>

                  <NeonButton
                    type="submit"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </NeonButton>
                </form>
              </div>

              <div className="glass-card rounded-2xl p-4 overflow-hidden">
                <div className="relative h-80 overflow-hidden rounded-xl border border-border bg-muted/30 md:h-96">
                  <iframe
                    title="TheCOdex Software Solutions location on Google Maps"
                    src={googleMapsEmbedUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h4 className="text-foreground font-semibold">Google Maps Preview</h4>
                    <p className="text-sm text-muted-foreground">TheCOdex Software Solutions, Bhopal</p>
                  </div>
                  <a
                    href={googleMapsListingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary/50 hover:bg-primary/15"
                  >
                    Open Larger Map
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
