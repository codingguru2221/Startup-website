import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "This Privacy Policy describes how TheCOdex Software Solutions (\"Company\") collects, uses, and protects the information of its clients, users, and associated individuals.",
      "By using our services, website, or working with us, you agree to the terms outlined in this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: ["We may collect the following types of information:"],
    groups: [
      {
        label: "a) Personal Information",
        bullets: ["Name", "Email address", "Phone number", "Business details"],
      },
      {
        label: "b) Technical Information",
        bullets: ["IP address", "Browser type", "Device information", "Website usage data"],
      },
      {
        label: "c) Business & Project Data",
        bullets: ["Client requirements", "Project files", "Login credentials (if provided for services)"],
      },
    ],
  },
  {
    title: "3. How We Use Information",
    body: ["We use collected information for the following purposes:"],
    bullets: [
      "To provide and manage our services (web development, apps, marketing, etc.)",
      "To communicate with clients and team members",
      "To improve our services and user experience",
      "To run marketing campaigns (Google Ads, Meta Ads, etc.)",
      "For internal record keeping and analytics",
    ],
  },
  {
    title: "4. Data Sharing & Third Parties",
    bullets: [
      "We do not sell personal data to any third party.",
      "We may share data with trusted third-party services such as hosting providers, analytics tools (e.g., Google Analytics), and advertising platforms (Google Ads, Meta Ads).",
      "Data is only shared when necessary for service delivery.",
    ],
  },
  {
    title: "5. Data Security",
    body: ["We take appropriate measures to protect your data:"],
    bullets: [
      "Secure servers and systems",
      "Limited access to sensitive data",
      "Regular monitoring and updates",
      "However, no system is 100% secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Confidentiality (For Clients & Team Members)",
    bullets: [
      "All client data, project details, and internal information are treated as strictly confidential.",
      "Team members and associates are not allowed to share or misuse any data.",
    ],
  },
  {
    title: "7. Cookies Policy",
    bullets: [
      "Our website may use cookies to improve user experience.",
      "Cookies help us understand user behavior and improve website performance.",
      "Users can disable cookies through browser settings.",
    ],
  },
  {
    title: "8. User Rights",
    body: ["Users have the right to:"],
    bullets: [
      "Request access to their data",
      "Request correction of incorrect data",
      "Request deletion of their data",
      "Requests can be made by contacting us directly.",
    ],
  },
  {
    title: "9. Data Retention",
    bullets: [
      "We retain data only as long as necessary for service delivery and legal and business purposes.",
      "After that, data may be deleted or anonymized.",
    ],
  },
  {
    title: "10. Third-Party Links",
    body: [
      "Our website or services may contain links to third-party websites.",
      "We are not responsible for the privacy practices of those websites.",
    ],
  },
  {
    title: "11. Policy Updates",
    bullets: [
      "The Company reserves the right to update this Privacy Policy at any time.",
      "Changes will be reflected with an updated date.",
      "Continued use of services means acceptance of updated policy.",
    ],
  },
  {
    title: "12. Contact Information",
    body: ["For any questions or concerns regarding this Privacy Policy, you can contact:"],
    contact: [
      "TheCOdex Software Solutions",
      "Veerendra Vishwakarma",
      "Email: thecodexofficial001@gmail.com",
      "Phone: 8305223353",
    ],
  },
  {
    title: "13. Consent",
    body: [
      "By using our services or working with us, you consent to this Privacy Policy and agree to its terms.",
    ],
  },
];

export default function Privacy() {
  return (
    <Layout>
      <section className="pt-32 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-primary/20 bg-card/80 text-primary text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-4">TheCOdex Software Solutions</h1>
            <p className="text-base md:text-lg text-muted-foreground">Last Updated: April 15, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card/85 p-6 md:p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <h2 className="text-2xl font-bold mb-3">{section.title}</h2>

                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}

                  {section.groups?.map((group) => (
                    <div key={group.label} className="mt-4">
                      <h3 className="text-lg font-semibold mb-3">{group.label}</h3>
                      <div className="space-y-3">
                        {group.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3">
                            <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {section.bullets ? (
                    <div className="space-y-3">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.contact ? (
                    <div className="mt-4 space-y-2">
                      {section.contact.map((line) => (
                        <p key={line} className="text-muted-foreground leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </motion.article>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="pt-8 border-t border-border"
              >
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Company Name</p>
                    <p className="text-lg font-semibold">TheCOdex Software Solutions</p>
                    <p className="text-sm text-muted-foreground mt-2">Veerendra Vishwakarma, Founder</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Authorized Signature</p>
                    <div className="inline-flex items-center rounded-lg border border-border bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                      <img
                        src={`${import.meta.env.BASE_URL}sign.png`}
                        alt="Authorized signature"
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="text-lg font-semibold">April 15, 2026</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
