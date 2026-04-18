import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO } from "@/components/SEO";

const BLOG_POSTS = [
  {
    title: "How Much Does Custom Web App Development Cost in 2026?",
    excerpt: "A comprehensive breakdown of web application development costs, from simple MVPs to enterprise platforms. Learn what factors influence pricing.",
    category: "Development",
    date: "Apr 15, 2026",
    readTime: "8 min read",
    slug: "web-app-development-cost-2026",
  },
  {
    title: "Top 10 Features Every SaaS Product Needs",
    excerpt: "Essential features that make SaaS products successful, from user onboarding to analytics. Build a product that users love and keep them engaged.",
    category: "SaaS",
    date: "Apr 10, 2026",
    readTime: "6 min read",
    slug: "essential-saas-features",
  },
  {
    title: "Web App vs Website: What Does Your Business Need?",
    excerpt: "Understanding the difference between web applications and websites, and how to choose the right solution for your business goals.",
    category: "Strategy",
    date: "Apr 5, 2026",
    readTime: "5 min read",
    slug: "web-app-vs-website",
  },
  {
    title: "How to Choose the Right Tech Stack for Your Web Application",
    excerpt: "A practical guide to selecting the best technologies for your web app project, considering scalability, performance, and team expertise.",
    category: "Development",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    slug: "choose-tech-stack-web-app",
  },
  {
    title: "5 Signs Your Business Needs a Custom Web Application",
    excerpt: "Is your business outgrowing off-the-shelf solutions? Learn the warning signs that indicate it's time to invest in custom software.",
    category: "Business",
    date: "Mar 20, 2026",
    readTime: "4 min read",
    slug: "signs-need-custom-web-app",
  },
  {
    title: "Web App Development Process: Step-by-Step Guide",
    excerpt: "From initial concept to launch, understand every stage of the web application development process and what to expect.",
    category: "Development",
    date: "Mar 15, 2026",
    readTime: "10 min read",
    slug: "web-app-development-process",
  },
  {
    title: "SaaS Development Best Practices for Startups",
    excerpt: "Key strategies for building successful SaaS products as a startup, from MVP planning to scaling your architecture.",
    category: "SaaS",
    date: "Mar 8, 2026",
    readTime: "6 min read",
    slug: "saas-development-best-practices",
  },
  {
    title: "How Business Automation Saves Time and Money",
    excerpt: "Real-world examples of how automation transforms business operations, reduces costs, and improves team productivity.",
    category: "Automation",
    date: "Mar 1, 2026",
    readTime: "5 min read",
    slug: "business-automation-benefits",
  },
  {
    title: "React vs Next.js: Which is Better for Your Web App?",
    excerpt: "Comparing React and Next.js for web application development. Learn when to use each framework and make the right choice.",
    category: "Development",
    date: "Feb 22, 2026",
    readTime: "7 min read",
    slug: "react-vs-nextjs",
  },
  {
    title: "Web App Maintenance: Why It Matters and What It Costs",
    excerpt: "The importance of ongoing web application maintenance, what it includes, and how to budget for long-term support.",
    category: "Maintenance",
    date: "Feb 15, 2026",
    readTime: "6 min read",
    slug: "web-app-maintenance-guide",
  },
];

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Blog - Web App Development Insights & Tips | TheCOdex"
        description="Expert insights on web application development, SaaS products, business automation, and technology trends. Learn from our experienced development team."
        keywords="web app development blog, SaaS development tips, business automation, software development insights, tech blog"
        canonicalUrl="https://thecodex.com/blog"
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
            TheCOdex <span className="gradient-text">Blog</span>
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
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/6" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
            Stay Updated with Expert Insights
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Subscribe to our newsletter for the latest web development tips, SaaS strategies, and automation insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-card border border-border focus:border-primary focus:outline-none text-foreground"
            />
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
