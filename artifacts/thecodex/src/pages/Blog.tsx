import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Calendar, Clock, MessageSquareText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO, createBreadcrumbSchema, createWebPageSchema, websiteSchema } from "@/components/SEO";
import { BLOG_POSTS } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/seo";

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Blogs - Web App Development Insights & Tips | TheCOdex"
        description="Expert insights on web application development, SaaS products, business automation, and technology trends. Learn from our experienced development team."
        keywords="web app development blog, SaaS development tips, business automation, software development insights, tech blog"
        canonicalUrl={`${SITE_URL}/blog`}
        ogType="blog"
        schemaMarkup={[
          createWebPageSchema({
            path: "/blog",
            name: "Blogs - Web App Development Insights & Tips | TheCOdex",
            description:
              "Expert insights on web application development, SaaS products, business automation, and technology trends. Learn from our experienced development team.",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blog" },
          ]),
          websiteSchema,
          {
            "@type": "Blog",
            name: "TheCOdex Blogs",
            url: `${SITE_URL}/blog`,
            blogPost: BLOG_POSTS.map((post) => ({
              "@type": "BlogPosting",
              url: `${SITE_URL}/blog/${post.slug}`,
              mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
              headline: post.title,
              description: post.excerpt,
              datePublished: post.isoDate,
              dateModified: post.isoDate,
              articleSection: post.category,
              keywords: post.takeaways.join(", "),
              author: {
                "@type": "Organization",
                name: "TheCOdex Software Solutions",
              },
              publisher: {
                "@id": `${SITE_URL}/#organization`,
              },
            })),
          },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-primary/15 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black mb-6"
          >
            TheCOdex <span className="gradient-text">Blogs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Expert insights, guides, and best practices on web application development, SaaS products, and business automation.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <GlassCard className="h-full flex flex-col cursor-pointer hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-primary font-semibold text-sm group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GlassCard hoverEffect={false} className="border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-10 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                  Turn Insight Into Action
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-black mb-5">
                  Need help applying these ideas to your business?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  If any of these blog topics match what you are planning, TheCOdex can help
                  you shape the right web app, SaaS product, or automation workflow without
                  overbuilding the first version.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-muted/30 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <MessageSquareText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">Get clarity first</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        We help convert rough ideas into a practical feature plan, timeline, and build path.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-muted/30 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">Build for real business use</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        From client portals to SaaS dashboards, we focus on systems people can actually operate and grow with.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    Discuss Your Project
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}
