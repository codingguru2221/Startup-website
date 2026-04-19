import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { formatFileSize, getUploadedProjects, type UploadedProject } from "@/lib/project-storage";
import { SITE_URL } from "@/lib/seo";

const PROJECTS = [
  {
    title: "College Website",
    liveUrl: "https://d3t4erohmwcby9.cloudfront.net",
    type: "Live Website",
    summary: "College landing page with admission flow, departments, faculty, facilities, gallery, and contact sections.",
    tags: ["College", "Admissions", "Responsive"],
  },
  {
    title: "Portfolio Website",
    liveUrl: "https://codingguru2221.github.io/Portfolio/",
    type: "Live Website",
    summary: "Personal portfolio website built to present skills, work, profile details, and contact information in one place.",
    tags: ["Portfolio", "Personal Brand", "GitHub Pages"],
  },
  {
    title: "Modern Portfolio Website",
    liveUrl: "https://new-portfolio-portfolio.vercel.app/",
    type: "Live Website",
    summary: "Modern personal portfolio deployed on Vercel with a polished layout for profile, work, and contact presentation.",
    tags: ["Portfolio", "Vercel", "Modern UI"],
  },
  {
    title: "Raj Heights Global",
    liveUrl: "https://raj-heights-global--veerendravishw1.replit.app/",
    type: "Live Website",
    summary: "Business website built for Raj Heights Global with a live deployed preview and professional web presence.",
    tags: ["Business Website", "Replit", "Responsive"],
  },
];

export default function Projects() {
  const [uploadedProjects, setUploadedProjects] = useState<UploadedProject[]>([]);
  const allProjectsCount = PROJECTS.length + uploadedProjects.length;

  useEffect(() => {
    const syncProjects = () => setUploadedProjects(getUploadedProjects());

    syncProjects();
    window.addEventListener("storage", syncProjects);
    window.addEventListener("thecodex-projects-updated", syncProjects);

    return () => {
      window.removeEventListener("storage", syncProjects);
      window.removeEventListener("thecodex-projects-updated", syncProjects);
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Projects and Work Samples | TheCodex Software Solutions"
        description="Browse selected projects and live work from TheCodex Software Solutions across websites, software systems, and digital product delivery."
        keywords="software development portfolio, web app projects, SaaS work samples"
        canonicalUrl={`${SITE_URL}/projects`}
      />

      <section className="pt-8 pb-20 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 rounded-[1.5rem] border border-border bg-card/85 px-5 py-6 md:px-8 md:py-7 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
              <div>
                <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-3">Live Portfolio</p>
                <h1 className="text-3xl md:text-5xl font-display font-black mb-3">
                  Projects
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                  Deployed websites shown as real live previews, so visitors can explore the work without leaving the page.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:min-w-[420px]">
                <div className="rounded-xl border border-border bg-background/70 p-4">
                  <p className="text-2xl font-black text-primary">{allProjectsCount}</p>
                  <p className="text-xs text-muted-foreground mt-1">Project</p>
                </div>
                <div className="rounded-xl border border-border bg-background/70 p-4">
                  <p className="text-2xl font-black text-primary">AWS</p>
                  <p className="text-xs text-muted-foreground mt-1">CloudFront</p>
                </div>
                <div className="rounded-xl border border-border bg-background/70 p-4 col-span-2 sm:col-span-1">
                  <p className="text-2xl font-black text-primary">Web</p>
                  <p className="text-xs text-muted-foreground mt-1">Live preview</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div>
              <p className="text-sm font-bold text-primary tracking-[0.18em] uppercase mb-3">Featured Project</p>
            </div>
          </div>

          <div className="space-y-12">
            {uploadedProjects.map((project) => (
              <article key={project.id} className="rounded-2xl border border-border bg-card/80 p-4 md:p-6 shadow-[0_22px_70px_rgba(15,23,42,0.1)]">
                <div className="mb-5 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-primary tracking-[0.18em] uppercase mb-2">Uploaded React App</p>
                    <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                    <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{project.summary}</p>
                    <p className="text-xs text-muted-foreground mt-3">
                      {project.fileName} - {formatFileSize(project.fileSize)}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant="outline">
                    <a href={project.downloadUrl} download={project.fileName}>
                      <Download className="w-4 h-4" />
                      Download ZIP
                    </a>
                  </Button>
                </div>

                {project.liveUrl ? (
                  <div className="overflow-hidden rounded-lg bg-[#0b111d] border border-border shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1724] border-b border-white/10">
                      <span className="block w-3 h-3 rounded-full bg-[#ff605c]" />
                      <span className="block w-3 h-3 rounded-full bg-[#ffbd44]" />
                      <span className="block w-3 h-3 rounded-full bg-[#00ca4e]" />
                    </div>

                    <div className="relative w-full h-[500px] md:h-[640px] overflow-hidden bg-[#050914]">
                      <iframe
                        src={project.liveUrl}
                        title={`${project.title} live preview`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full border-0 bg-background"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-border bg-background/70 p-6">
                    <p className="font-semibold">ZIP uploaded successfully.</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Live preview URL add karne ke baad yahan app preview dikhega.
                    </p>
                  </div>
                )}
              </article>
            ))}

            {PROJECTS.map((project) => (
              <article key={project.title} className="rounded-2xl border border-border bg-card/80 p-4 md:p-6 shadow-[0_22px_70px_rgba(15,23,42,0.1)]">
                <div className="mb-5">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                    <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg bg-[#0b111d] border border-border shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1724] border-b border-white/10">
                    <span className="block w-3 h-3 rounded-full bg-[#ff605c]" />
                    <span className="block w-3 h-3 rounded-full bg-[#ffbd44]" />
                    <span className="block w-3 h-3 rounded-full bg-[#00ca4e]" />
                  </div>

                  <div className="relative w-full h-[500px] md:h-[640px] overflow-hidden bg-[#050914]">
                    <iframe
                      src={project.liveUrl}
                      title={`${project.title} live preview`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full border-0 bg-background"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
