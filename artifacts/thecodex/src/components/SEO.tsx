import { useEffect } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GOOGLE_MAPS_URL,
  SITE_NAME,
  SITE_TWITTER,
  SITE_URL,
  SOCIAL_PROFILES,
  toAbsoluteUrl,
} from "@/lib/seo";

const BRAND_ALIASES = [
  "TheCOdex",
  "Thecodex",
  "The Codex",
  "Codex",
  "Codex Software Solutions",
  "TheCOdex Software Solutions",
  "Thecodex Software Solutions",
  "The Codex Software Solutions",
];

const GLOBAL_SEARCH_TERMS = [
  "software development firm",
  "software development company",
  "custom software development company",
  "web app development company",
  "website development company",
  "SaaS development company",
  "business automation company",
  "software company in Bhopal",
  "web development company in Bhopal",
  "software development firm in India",
  "custom web application development",
  "SaaS product development",
  "business automation services",
  "web app maintenance services",
];

const DEFAULT_KEYWORDS = [
  ...BRAND_ALIASES,
  ...GLOBAL_SEARCH_TERMS,
];

export const BRAND_SEARCH_KEYWORDS = DEFAULT_KEYWORDS.join(", ");

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  robots?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  tags?: string[];
  schemaMarkup?: object | object[];
}

export function SEO({
  title = `${SITE_NAME} | Web App Development, SaaS Development & Business Automation`,
  description = "TheCOdex Software Solutions builds custom web applications, SaaS products, and business automation systems for startups and growing businesses.",
  keywords = "web app development company, custom web application development, SaaS development company, business automation services, custom software development",
  canonicalUrl = SITE_URL,
  ogImage = "/opengraph.jpg",
  ogType = "website",
  robots = "index, follow, max-image-preview:large",
  publishedTime,
  modifiedTime,
  articleSection,
  tags,
  schemaMarkup,
}: SEOProps) {
  useEffect(() => {
    const absoluteCanonicalUrl = toAbsoluteUrl(canonicalUrl);
    const absoluteOgImage = toAbsoluteUrl(ogImage);
    const mergedKeywords = mergeKeywords(keywords);

    // Update document title
    document.title = title;

    // Update or create meta description
    updateMeta("description", description);
    updateMeta("keywords", mergedKeywords);
    updateMeta("robots", robots);
    updateMeta("googlebot", robots);
    updateMeta("author", SITE_NAME);
    updateMeta("publisher", SITE_NAME);
    updateMeta("theme-color", "#0b1220");
    updateMeta("format-detection", "telephone=no");
    updateCanonicalLink(absoluteCanonicalUrl);

    // Update Open Graph tags
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", absoluteOgImage, "property");
    updateMeta("og:image:alt", `${SITE_NAME} preview`, "property");
    updateMeta("og:url", absoluteCanonicalUrl, "property");
    updateMeta("og:site_name", SITE_NAME, "property");
    updateMeta("og:type", ogType, "property");
    updateMeta("og:locale", "en_IN", "property");

    if (publishedTime) {
      updateMeta("article:published_time", publishedTime, "property");
    }

    if (modifiedTime) {
      updateMeta("article:modified_time", modifiedTime, "property");
      updateMeta("og:updated_time", modifiedTime, "property");
    }

    // Update Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", absoluteOgImage);
    updateMeta("twitter:image:alt", `${SITE_NAME} preview`);
    updateMeta("twitter:url", absoluteCanonicalUrl);
    updateMeta("twitter:site", SITE_TWITTER);
    updateMeta("twitter:creator", SITE_TWITTER);

    removeSchemaMarkup();

    if (articleSection) {
      updateMeta("article:section", articleSection, "property");
    }

    if (tags?.length) {
      updateMeta("article:tag", tags.join(", "), "property");
    }

    // Add schema markup if provided
    if (schemaMarkup) {
      addSchemaMarkup(schemaMarkup);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, robots, publishedTime, modifiedTime, articleSection, tags, schemaMarkup]);

  return null;
}

function updateMeta(
  name: string,
  content: string,
  attributeName: string = "name"
) {
  let element = document.querySelector(`meta[${attributeName}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function mergeKeywords(pageKeywords: string) {
  const seen = new Set<string>();

  return [...pageKeywords.split(","), ...DEFAULT_KEYWORDS]
    .map((keyword) => keyword.trim())
    .filter((keyword) => {
      const normalized = keyword.toLowerCase();
      if (!keyword || seen.has(normalized)) {
        return false;
      }
      seen.add(normalized);
      return true;
    })
    .join(", ");
}

function updateCanonicalLink(url: string) {
  let element = document.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function addSchemaMarkup(schema: object | object[]) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo-schema", "true");
  script.text = JSON.stringify(
    Array.isArray(schema)
      ? { "@context": "https://schema.org", "@graph": schema.map(stripSchemaContext) }
      : schema
  );
  document.head.appendChild(script);
}

function stripSchemaContext(schema: object) {
  const rest = { ...(schema as Record<string, unknown>) };
  delete rest["@context"];
  return rest;
}

function removeSchemaMarkup() {
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"][data-seo-schema="true"]'
  );
  existingScripts.forEach((script) => script.remove());
}

// Default schema for the company
export const defaultSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_NAME,
  alternateName: BRAND_ALIASES,
  url: SITE_URL,
  logo: `${SITE_URL}/codex.jpg`,
  image: `${SITE_URL}/opengraph.jpg`,
  description:
    "TheCOdex Software Solutions is a software development company in Bhopal, India specializing in custom web application development, SaaS product development, business automation systems, Google Ads management, social media management, SEO services, and website development for startups and growing businesses.",
  keywords: BRAND_SEARCH_KEYWORDS,
  slogan: "Custom web applications, SaaS products, and business automation systems.",
  knowsAbout: GLOBAL_SEARCH_TERMS,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  hasMap: GOOGLE_MAPS_URL,
  sameAs: SOCIAL_PROFILES,
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: "50",
    ratingCount: "50",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Startup Client",
      },
      reviewBody: "TheCOdex built our SaaS MVP from scratch. Excellent communication, clean code, and delivered on time.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Business Owner",
      },
      reviewBody: "They automated our entire billing and inventory system. Our team saves 15+ hours per week now.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "TheCOdex Software Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Web Application Development",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Application Development",
              description: "Scalable web apps for SaaS products, internal tools, dashboards, and automation systems.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "Web Application Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Product Development",
              description: "End-to-end SaaS platforms with subscriptions, multi-tenant architecture, and billing.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "SaaS Development",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Business Automation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Automation Systems",
              description: "Workflow automation, tool integrations, inventory management, billing, and payment integration.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "Business Automation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web App Management & Maintenance",
              description: "Security updates, performance optimization, bug fixes, and ongoing support.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "Web App Maintenance",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Digital Marketing",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Ads Management",
              description: "Data-driven campaigns, keyword research, remarketing, and ROI optimization.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "Google Ads Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Management",
              description: "Content strategy, community management, paid campaigns, and analytics.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "Social Media Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services",
              description: "On-page SEO, technical audits, link building, content optimization, and local SEO.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "SEO Services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description: "Responsive websites, custom design, admin panels, blogs, and SEO.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
              serviceType: "Website Development",
            },
          },
        ],
      },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".gradient-text", "h1", "h2"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export function createWebPageSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const url = toAbsoluteUrl(path);

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function createFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    url: toAbsoluteUrl(path),
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: "IN",
    serviceType: name,
  };
}
