import { useEffect } from "react";
import { SITE_NAME, SITE_URL, toAbsoluteUrl } from "@/lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaMarkup?: object;
}

export function SEO({
  title = `${SITE_NAME} | Web App Development, SaaS Development & Business Automation`,
  description = "TheCodex Software Solutions builds custom web applications, SaaS products, and business automation systems for startups and growing businesses.",
  keywords = "web app development company, custom web application development, SaaS development company, business automation services, custom software development",
  canonicalUrl = SITE_URL,
  ogImage = "/opengraph.jpg",
  ogType = "website",
  schemaMarkup,
}: SEOProps) {
  useEffect(() => {
    const absoluteCanonicalUrl = toAbsoluteUrl(canonicalUrl);
    const absoluteOgImage = toAbsoluteUrl(ogImage);

    // Update document title
    document.title = title;

    // Update or create meta description
    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("robots", "index, follow");
    updateCanonicalLink(absoluteCanonicalUrl);

    // Update Open Graph tags
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", absoluteOgImage, "property");
    updateMeta("og:url", absoluteCanonicalUrl, "property");
    updateMeta("og:site_name", SITE_NAME, "property");
    updateMeta("og:type", ogType, "property");

    // Update Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", absoluteOgImage);

    removeSchemaMarkup();

    // Add schema markup if provided
    if (schemaMarkup) {
      addSchemaMarkup(schemaMarkup);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaMarkup]);

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

function updateCanonicalLink(url: string) {
  let element = document.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function addSchemaMarkup(schema: object) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

function removeSchemaMarkup() {
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"]'
  );
  existingScripts.forEach((script) => script.remove());
}

// Default schema for the company
export const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: ["TheCodex"],
  url: SITE_URL,
  logo: `${SITE_URL}/codex.jpg`,
  description:
    "Custom web application development company specializing in SaaS products, business automation, and web app management.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "thecodexofficial001@gmail.com",
    telephone: "+91 8305223353",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://x.com/TheCodexOnBOrd",
    "https://github.com/The-Codex-Official",
    "https://www.linkedin.com/company/thecodex-software-solutions/?viewAsMember=true",
    "https://www.instagram.com/the_codex_official_",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Web Application Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "SaaS Product Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Business Automation Systems",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web App Management & Maintenance",
      },
    },
  ],
};
