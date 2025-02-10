import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const DesignPage = () => {
  const relatedServices = [
    {
      title: "Custom Design",
      link: "/services/custom-design",
      iconName: "Palette",
    },
    {
      title: "Large Format Printing",
      link: "/services/large-format-printing",
      iconName: "Printer",
    },
    {
      title: "Vehicle Wraps",
      link: "/services/vehicle-wraps",
      iconName: "Car",
    },
  ];

  const features = [
    {
      title: "Brand Identity Design",
      description:
        "Create cohesive brand identities including logos, color schemes, and typography.",
    },
    {
      title: "Print Design",
      description:
        "Design eye-catching marketing materials, brochures, flyers, and posters.",
    },
    {
      title: "Digital Design",
      description:
        "Craft engaging designs for websites, social media, and digital advertising.",
    },
    {
      title: "Packaging Design",
      description:
        "Develop attractive and functional packaging designs that stand out on shelves.",
    },
    {
      title: "Signage Design",
      description:
        "Create impactful designs for indoor and outdoor signage, including 3D elements.",
    },
    {
      title: "Consultation Services",
      description:
        "Expert advice and creative direction to elevate your design projects.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Design"
        subtitle="Bringing your ideas to life with creative solutions"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Design"
        description="Our professional design services help bring your ideas to life, from logos to marketing materials. Our experienced designers create stunning visuals that capture your brand's essence and communicate your message effectively."
        iconName="Palette"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default DesignPage;
