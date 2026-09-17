import { Helmet } from 'react-helmet-async';
import { CONTENT } from '../constants/content';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  const siteTitle = title ? `${title} | Vittor Madeira Hair` : 'Vitor Madeira Hair';
  const siteDescription = description || CONTENT.hero.description;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vitor Madeira Hair',
    url: 'https://vitor-madeira-hair.vercel.app/',
    jobTitle: 'Cabeleireiro',
    worksFor: {
      '@type': 'Organization',
      name: 'Vitor Madeira Hair',
    },
    description: siteDescription,
    image: CONTENT.hero.profileImage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sorocaba',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vitor Madeira Hair" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
