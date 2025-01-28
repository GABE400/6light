import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact us"
        subtitle="Get in touch with 6 Light Media"
        backgroundImage="/shops/contacthero.jpg"
      />
      <Contact />
    </>
  );
}
