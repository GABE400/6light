import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const CustomDesignPage = () => {
  const relatedServices = [
    {
      title: "Large Format Printing",
      link: "/services/large-format-printing",
      iconName: "Printer",
    },
    { title: "3D Signs", link: "/services/3d-signs", iconName: "CuboidIcon" },
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
        "Comprehensive brand identity development, including logos, color schemes, and typography.",
    },
    {
      title: "Print Design",
      description:
        "Creative designs for brochures, flyers, posters, and other marketing materials.",
    },
    {
      title: "Signage Design",
      description:
        "Eye-catching designs for indoor and outdoor signage, including 3D and illuminated options.",
    },
    {
      title: "Vehicle Wrap Design",
      description:
        "Custom designs that transform vehicles into mobile billboards for your brand.",
    },
    {
      title: "Digital Design",
      description:
        "Engaging designs for websites, social media, and digital advertising campaigns.",
    },
    {
      title: "Packaging Design",
      description:
        "Innovative and attractive packaging designs that stand out on the shelf.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Custom Design"
        subtitle="Bringing your vision to life with creative solutions"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Custom Design"
        description="Unleash the power of visual communication with our expert custom design services. Our creative team brings your vision to life, crafting stunning designs that perfectly capture your brand essence and resonate with your target audience."
        iconName="Palette"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default CustomDesignPage;
