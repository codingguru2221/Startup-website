export const SITE_URL = "https://thecodexss.in";
export const SITE_NAME = "TheCOdex Software Solutions";
export const SITE_TWITTER = "@TheCOdexOnBOrd";
export const CONTACT_EMAIL = "thecodexofficial001@gmail.com";
export const CONTACT_PHONE = "+91 8305223353";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/BuiqcDyTSQyZg1Hu9";
export const SOCIAL_PROFILES = [
  "https://x.com/TheCOdexOnBOrd",
  "https://github.com/The-Codex-Official",
  "https://www.linkedin.com/company/thecodex-software-solutions/?viewAsMember=true",
  "https://www.instagram.com/the_codex_official_",
  "https://www.youtube.com/@The_COdex-Official",
];

export function toAbsoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
}
