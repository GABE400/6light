import type { Metadata } from "next";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Contact Us | 6 Light Media",
  description:
    "Get in touch with 6 Light Media for all your printing and signage needs. Visit our branches in Lusaka or reach out through email and phone.",
  openGraph: {
    title: "Contact 6 Light Media",
    description:
      "Connect with 6 Light Media for innovative printing and signage solutions in Zambia.",
    images: [
      {
        url: "https://www.sixlightmedia.com/shops/contacthero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact 6 Light Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact 6 Light Media",
    description:
      "Connect with 6 Light Media for innovative printing and signage solutions in Zambia.",
    images: ["https://www.sixlightmedia.com/shops/contacthero.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact us"
        subtitle="Every client is unique, and so are their needs. Let's tailor a solution just for you! Send us an email  for a custom quote."
        backgroundImage="/shops/contacthero.jpg"
      />
      <Contact />
    </>
  );
}
