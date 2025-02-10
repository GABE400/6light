import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const ThreeDSignsPage = () => {
  const relatedServices = [
    {
      title: "Large Format Printing",
      link: "/services/large-format-printing",
      iconName: "Printer",
    },
    {
      title: "Custom Design",
      link: "/services/custom-design",
      iconName: "Palette",
    },
    { title: "Fabrication", link: "/services/fabrication", iconName: "Tool" },
  ];

  const features = [
    {
      title: "Custom Designs",
      description:
        "Tailored 3D sign designs to perfectly represent your brand and message.",
    },
    {
      title: "Various Materials",
      description:
        "Options including acrylic, metal, wood, and more for diverse aesthetic choices.",
    },
    {
      title: "Illuminated Options",
      description:
        "LED-backlit signs for enhanced visibility and impact, day and night.",
    },
    {
      title: "Durability",
      description:
        "Weather-resistant materials and construction for long-lasting outdoor use.",
    },
    {
      title: "Precision Fabrication",
      description:
        "State-of-the-art CNC and laser cutting for accurate, high-quality results.",
    },
    {
      title: "Professional Installation",
      description:
        "Expert installation services to ensure your 3D signs are securely and properly mounted.",
    },
  ];

  return (
    <>
      <HeroSection
        title="3D Signs"
        subtitle="Create a lasting impression with dimensional signage"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="3D Signs"
        description="Elevate your brand presence with our custom 3D signs. Our dimensional signage solutions bring your brand to life, creating eye-catching displays that capture attention and leave a lasting impression in any environment."
        iconName="CuboidIcon"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default ThreeDSignsPage;
