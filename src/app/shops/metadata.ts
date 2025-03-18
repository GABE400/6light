import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations | 6 Light Media",
  description:
    "Visit 6 Light Media at our convenient locations in Lusaka - EastPark Mall and Pinnacle Mall. Find our business hours, contact details, and available services.",
  openGraph: {
    title: "6 Light Media Locations",
    description:
      "Find 6 Light Media stores in Lusaka - EastPark Mall and Pinnacle Mall locations.",
    images: [
      {
        url: "https://www.sixlightmedia.com/shops/eastpark-mall.jpg",
        width: 1200,
        height: 630,
        alt: "6 Light Media Store Locations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6 Light Media Locations",
    description:
      "Find 6 Light Media stores in Lusaka - EastPark Mall and Pinnacle Mall locations.",
    images: ["https://www.sixlightmedia.com/shops/eastpark-mall.jpg"],
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
};
