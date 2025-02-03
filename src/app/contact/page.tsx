import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact us"
        subtitle="Every client is unique, and so are their needs. Let's tailor a solution just for you! Send us an email  for a custom quote."
        backgroundImage="/shops/contacthero.jpg"
      />
      <Contact />
    </>
  );
}
