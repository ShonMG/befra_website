import { Helmet } from "react-helmet-async";

interface SEOProps {
  title:       string;
  description: string;
  keywords?:   string;
  canonical?:  string;
  image?:      string;
}

const SITE_NAME = "Befra Engineering Services Limited";
const BASE_URL  = "https://befraengineering.com"; // update to real domain

export function SEO({ title, description, keywords, canonical, image }: SEOProps) {
  const fullTitle    = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const ogImage      = image ?? `${BASE_URL}/og-default.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description"        content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical"           href={canonicalUrl} />

      {/* Open Graph — controls how the link looks when shared on WhatsApp, LinkedIn etc. */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:site_name"   content={SITE_NAME} />

      {/* Twitter/X card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}