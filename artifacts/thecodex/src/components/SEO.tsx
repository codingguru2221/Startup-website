import { useEffect } from "react";

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
  title = "TheCOdex Software Solutions | Custom Web App Development Company",
  description = "Expert web application development, SaaS products, and business automation by TheCOdex. We build scalable, high-performance web apps for startups and growing businesses.",
  keywords = "web app development, custom web application, SaaS development, business automation, TheCOdex, web application company, custom software development",
  canonicalUrl = "https://thecodex.com",
  ogImage = "/og-image.jpg",
  ogType = "website",
  schemaMarkup,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("canonical", canonicalUrl, "href");

    // Update Open Graph tags
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", ogImage, "property");
    updateMeta("og:url", canonicalUrl, "property");
    updateMeta("og:type", ogType, "property");

    // Update Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    // Add schema markup if provided
    if (schemaMarkup) {
      removeSchemaMarkup();
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
  name: "TheCOdex Software Solutions",
  alternateName: ["TheCOdex"],
  url: "https://thecodex.com",
  logo: "https://thecodex.com/codex.jpg",
  description:
    "Custom Web Application Development Company specializing in SaaS products, business automation, and web app management.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://x.com/TheCOdexOnBOrd",
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
