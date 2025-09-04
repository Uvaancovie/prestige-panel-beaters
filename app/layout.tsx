import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Prestige Panel Beaters Durban – Insurance-Approved | Free Photo Estimates",
  description:
    "Accident repair, chassis straightening, OEM paint – Briardene. Upload photos for a 60-minute estimate. We work with Hollard, Santam, MiWay, Old Mutual and more.",
  generator: "v0.app",
  keywords: [
    "panel beaters durban",
    "accident repair briardene",
    "insurance approved panel beaters",
    "chassis straightening durban",
    "spray booth durban",
    "vehicle repairs durban north",
    "collision repair durban",
    "OEM paint matching",
  ],
  authors: [{ name: "Prestige Panel Beaters" }],
  creator: "Prestige Panel Beaters",
  publisher: "Prestige Panel Beaters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prestigepanelbeaters.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prestige Panel Beaters Durban – Insurance-Approved | Free Photo Estimates",
    description:
      "Accident repair, chassis straightening, OEM paint – Briardene. Upload photos for a 60-minute estimate. We work with Hollard, Santam, MiWay, Old Mutual and more.",
    url: "https://prestigepanelbeaters.co.za",
    siteName: "Prestige Panel Beaters",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prestige Panel Beaters - Insurance-Approved Auto Body Repairs in Durban",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Panel Beaters Durban – Insurance-Approved | Free Photo Estimates",
    description:
      "Accident repair, chassis straightening, OEM paint – Briardene. Upload photos for a 60-minute estimate.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBodyShop",
              name: "Prestige Panel Beaters",
              description:
                "Insurance-approved panel beaters specializing in accident repair, chassis straightening, and OEM paint matching in Briardene, Durban.",
              url: "https://prestigepanelbeaters.co.za",
              telephone: "+27796908176",
              email: "info@prestigepanelbeaters.co.za",
              address: {
                "@type": "PostalAddress",
                streetAddress: "850 North Coast Rd",
                addressLocality: "Briardene",
                addressRegion: "KwaZulu-Natal",
                postalCode: "4057",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -29.7123456,
                longitude: 31.0123456,
              },
              openingHours: ["Mo-Fr 07:30-17:00", "Sa 08:00-13:00"],
              priceRange: "$$",
              paymentAccepted: ["Cash", "Credit Card", "Insurance Claims"],
              currenciesAccepted: "ZAR",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -29.7123456,
                  longitude: 31.0123456,
                },
                geoRadius: "50000",
              },
              serviceArea: {
                "@type": "City",
                name: "Durban",
                addressRegion: "KwaZulu-Natal",
                addressCountry: "ZA",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Auto Body Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Accident Repair & Chassis Straightening",
                      description: "Complete collision repair using Celette chassis straightening bench",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Spray Booth & OEM Paint Matching",
                      description: "Professional spray booth with computerized paint matching system",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Scratch & Dent Repair",
                      description: "Fast turnaround for minor damage repairs and quick resprays",
                    },
                  },
                ],
              },
              sameAs: ["https://www.instagram.com/prestigepanelbeaters", "https://wa.me/27796908176"],
              logo: {
                "@type": "ImageObject",
                url: "https://prestigepanelbeaters.co.za/logo.png",
                width: 300,
                height: 100,
              },
              image: {
                "@type": "ImageObject",
                url: "https://prestigepanelbeaters.co.za/og-image.jpg",
                width: 1200,
                height: 630,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${oswald.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
