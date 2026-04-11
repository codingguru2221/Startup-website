import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LAMBDA_URL = "https://r2wuqhpjovygficsf43loa32sa0mxdze.lambda-url.us-east-1.on.aws/";

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
    href: "https://www.google.com/maps/search/?api=1&query=Bhopal%2C+Madhya+Pradesh%2C+India",
  },
];

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
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/veerendra-vishwakarma-041584393/",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    href: "https://x.com/TheCodexOnBOrd",
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
      const response = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, type: "contact" }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

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
              className="lg:col-span-2"
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
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
