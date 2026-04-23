import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { SEO, createBreadcrumbSchema, createWebPageSchema, websiteSchema } from "@/components/SEO";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/seo";

type BlogDetailProps = {
  slug: string;
};

export default function BlogDetail({ slug }: BlogDetailProps) {
  const post = getBlogPost(slug);
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary mb-4">Blog not found</p>
            <h1 className="text-4xl md:text-5xl font-display font-black mb-6">
              This article is not available
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog you are looking for may have moved or may no longer exist.
            </p>
            <Link href="/blog">
              <NeonButton variant="outline" icon={<ArrowLeft className="w-4 h-4" />}>
                Back to Blogs
              </NeonButton>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} | TheCOdex Blogs`}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, web app development, SaaS development, business automation, TheCOdex blogs`}
        canonicalUrl={`${SITE_URL}/blog/${post.slug}`}
        ogType="article"
        publishedTime={post.isoDate}
        modifiedTime={post.isoDate}
        articleSection={post.category}
        tags={post.takeaways}
        schemaMarkup={[
          websiteSchema,
          createWebPageSchema({
            path: `/blog/${post.slug}`,
            name: post.title,
            description: post.excerpt,
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.isoDate,
            dateModified: post.isoDate,
            articleSection: post.category,
            keywords: post.takeaways.join(", "),
            author: {
              "@id": `${SITE_URL}/#organization`,
            },
            publisher: {
              "@id": `${SITE_URL}/#organization`,
            },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            wordCount: post.sections.reduce(
              (count, section) =>
                count +
                section.body.reduce((sectionCount, paragraph) => sectionCount + paragraph.split(/\s+/).length, 0),
              0
            ),
          },
        ]}
      />

      <article>
        <section className="pt-32 pb-14 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 h-64 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-primary/15 blur-[150px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-black leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard hoverEffect={false} className="mb-10 border-primary/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                Our Opinion
              </p>
              <p className="text-lg leading-relaxed text-foreground">{post.opinion}</p>
            </GlassCard>

            <div className="space-y-12">
              {post.sections.map((section, index) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
                    {section.heading}
                  </h2>
                  <div className="space-y-5">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base md:text-lg leading-8 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            <GlassCard hoverEffect={false} className="mt-14">
              <h2 className="text-2xl font-display font-bold mb-6">Key Takeaways</h2>
              <div className="space-y-4">
                {post.takeaways.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/8 p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                Planning something similar?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                TheCOdex Software Solutions helps founders and growing businesses turn ideas,
                workflows, and automation needs into practical web apps and SaaS products.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <NeonButton>Discuss Your Project</NeonButton>
                </Link>
                <Link href="/services">
                  <NeonButton variant="outline">Explore Services</NeonButton>
                </Link>
              </div>
            </div>

            <section className="mt-16">
              <h2 className="text-2xl font-display font-bold mb-6">More from TheCOdex Blogs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedPosts.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="block h-full">
                    <GlassCard className="h-full">
                      <span className="text-xs font-semibold text-primary">{item.category}</span>
                      <h3 className="mt-3 text-base font-bold text-foreground line-clamp-3">
                        {item.title}
                      </h3>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </section>
      </article>
    </Layout>
  );
}
