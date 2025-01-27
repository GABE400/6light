import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sixlightmedia.com"),
  title: {
    default: "6 Light Media | Innovative Printing & Signage Solutions",
    template: "%s | 6 Light Media",
  },
  description:
    "6 Light Media offers cutting-edge printing, signage, and branding solutions. Specializing in 3D signage, large format printing, vehicle wraps, and custom fabrication.",
  keywords: [
    "printing",
    "signage",
    "branding",
    "3D signage",
    "large format printing",
    "vehicle wraps",
    "custom fabrication",
    "Zambia",
  ],
  authors: [{ name: "6 Light Media" }],
  creator: "6 Light Media",
  publisher: "6 Light Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sixlightmedia.com",
    siteName: "6 Light Media",
    title: "6 Light Media | Innovative Printing & Signage Solutions",
    description:
      "Cutting-edge printing, signage, and branding solutions for businesses in Zambia and beyond.",
    images: [
      {
        url: "https://www.sixlightmedia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "6 Light Media - Illuminating Your Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6 Light Media | Innovative Printing & Signage Solutions",
    description:
      "Cutting-edge printing, signage, and branding solutions for businesses in Zambia and beyond.",
    images: ["https://www.sixlightmedia.com/twitter-image.jpg"],
    creator: "@6LightMedia",
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
  alternates: {
    canonical: "https://www.sixlightmedia.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "Business & Industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logobg.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "6 Light Media",
              "image": "https://www.6lightmedia.com/logo.png",
              "description": "6 Light Media offers cutting-edge printing, signage, and branding solutions. Specializing in 3D signage, large format printing, vehicle wraps, and custom fabrication.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1265 Fulwe Close, Rhodespark",
                "addressLocality": "Lusaka",
                "addressRegion": "Lusaka Province",
                "postalCode": "10101",
                "addressCountry": "ZM"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -15.3875,
                "longitude": 28.3228
              },
              "url": "https://www.6lightmedia.com",
              "telephone": "+260971782375",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/6LightMedia",
                "https://www.instagram.com/6lightmedia",
                "https://www.linkedin.com/company/6-light-media"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
