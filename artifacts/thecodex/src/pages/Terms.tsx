import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "These Terms & Conditions govern the working relationship between TheCodex Software Solutions (hereinafter referred to as \"Company\") and all individuals associated with it, including but not limited to developers, coders, marketing agents, HR personnel, callers, and other contributors.",
      "By working with the Company, you agree to comply with these terms.",
    ],
  },
  {
    title: "2. Nature of Engagement",
    bullets: [
      "All individuals associated with the Company may work on a freelance, contractual, or commission-based model, unless explicitly stated otherwise in writing.",
      "The Company reserves the right to assign roles and responsibilities based on business requirements.",
    ],
  },
  {
    title: "3. Roles & Responsibilities",
    bullets: [
      "Each individual (e.g., Coders, Developers, Marketing Agents, HR, Callers) will be assigned specific tasks based on their skill set.",
      "Employees/associates are expected to complete assigned work within deadlines.",
      "Employees/associates are expected to maintain professional communication.",
      "Employees/associates are expected to deliver quality output as per company standards.",
    ],
  },
  {
    title: "4. Compensation & Payment Structure",
    bullets: [
      "Salary, commission, or payout will vary based on skills, experience, and performance.",
      "Different roles will have different payout structures, including fixed payment, commission-based earnings, and performance-based incentives.",
      "Each individual's payout structure (fixed, commission-based, or hybrid) will be clearly defined in their respective agreement or contract with the Company.",
      "Payments will only be processed after successful completion of assigned work and approval by the Company.",
      "The Company reserves the right to hold or revise payments in case of incomplete, low-quality, or disputed work.",
    ],
  },
  {
    title: "5. Performance Evaluation",
    bullets: [
      "The Company may evaluate performance periodically.",
      "Continued association depends on work quality, consistency, and professional behavior.",
    ],
  },
  {
    title: "6. Confidentiality",
    bullets: [
      "All individuals must keep company data, client information, and internal processes strictly confidential.",
      "Sharing sensitive information without permission may result in immediate termination and legal action.",
    ],
  },
  {
    title: "7. Intellectual Property",
    bullets: [
      "Any work (code, design, content, strategy) created during association with the Company will be the sole property of TheCodex Software Solutions.",
      "Individuals cannot reuse, resell, or distribute company work without written permission.",
    ],
  },
  {
    title: "8. Code of Conduct",
    intro: "All associates must:",
    bullets: [
      "Maintain respectful and professional behavior.",
      "Avoid misuse of company resources.",
      "Not engage in any activity that harms the Company's reputation.",
    ],
  },
  {
    title: "9. Termination",
    bullets: [
      "The Company reserves the right to terminate any individual at any time if terms are violated, work quality is unsatisfactory, or misconduct is observed.",
      "Individuals may also leave the Company by providing prior notice (recommended: 7 to 15 days).",
    ],
  },
  {
    title: "10. Non-Compete & Conflict of Interest",
    bullets: [
      "Individuals should not engage in activities that directly compete with the Company while working with it.",
      "Any conflict of interest must be disclosed.",
    ],
  },
  {
    title: "11. Liability Limitation",
    bullets: [
      "The Company is not liable for personal losses incurred by individuals.",
      "The Company is not liable for miscommunication outside official channels.",
      "Individuals are responsible for their own actions and commitments.",
    ],
  },
  {
    title: "12. Modifications",
    bullets: [
      "The Company reserves the right to update or modify these Terms & Conditions at any time.",
      "Continued association implies acceptance of updated terms.",
    ],
  },
  {
    title: "13. Governing Law",
    bullets: [
      "These Terms & Conditions are governed by the laws of India.",
      "Any disputes shall be subject to the jurisdiction of the appropriate legal authorities.",
    ],
  },
  {
    title: "14. Acceptance",
    body: [
      "By working with TheCodex Software Solutions, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
    ],
  },
];

export default function Terms() {
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
              <FileText className="w-4 h-4" />
              Terms &amp; Conditions
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-4">TheCodex Software Solutions</h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Last Updated: April 15, 2026
            </p>
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

                  {section.intro ? (
                    <p className="text-muted-foreground leading-relaxed mb-3">{section.intro}</p>
                  ) : null}

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
                    <p className="text-lg font-semibold">TheCodex Software Solutions</p>
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
