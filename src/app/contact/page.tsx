import Contact from "@/components/Contact";
import HeroShops from "@/components/HeroShops";

export default function ContactPage() {
  return (
    <>
      <HeroShops
        title="Contact us"
        subtitle="Get in touch with 6 Light Media"
        backgroundImage="/shops/contacthero.jpg"
      />
      <Contact />
    </>
  );
}
