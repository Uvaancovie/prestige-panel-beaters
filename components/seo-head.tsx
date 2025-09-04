import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function SEOHead({
  title = "Prestige Panel Beaters Durban – Insurance-Approved | Free Photo Estimates",
  description = "Accident repair, chassis straightening, OEM paint – Briardene. Upload photos for a 60-minute estimate. We work with Hollard, Santam, MiWay, Old Mutual and more.",
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("Prestige Panel Beaters") ? title : `${title} - Prestige Panel Beaters`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="geo.region" content="ZA-KZN" />
      <meta name="geo.placename" content="Durban" />
      <meta name="geo.position" content="-29.7123456;31.0123456" />
      <meta name="ICBM" content="-29.7123456, 31.0123456" />
    </Head>
  )
}
