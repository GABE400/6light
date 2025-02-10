import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const EngravingPage = () => {
  const relatedServices = [
    {
      title: "Acrylics Laser Cutting",
      link: "/services/acrylics-laser-cutting",
      iconName: "Scissors",
    },
    {
      title: "Custom Design",
      link: "/services/custom-design",
      iconName: "Palette",
    },
    { title: "CNC Routing", link: "/services/cnc-routing", iconName: "Cog" },
  ];

  const features = [
    {
      title: "Multiple Materials",
      description:
        "Engrave on various materials including metals, wood, glass, and plastics.",
    },
    {
      title: "Precision Detailing",
      description:
        "Achieve intricate designs and fine text with high-precision engraving technology.",
    },
    {
      title: "Customization Options",
      description:
        "Offer personalized engraving for gifts, awards, and promotional items.",
    },
    {
      title: "3D Engraving",
      description:
        "Create depth and texture with advanced 3D engraving capabilities.",
    },
    {
      title: "Bulk Production",
      description:
        "Handle large volume orders efficiently without compromising quality.",
    },
    {
      title: "Diverse Applications",
      description:
        "Suitable for signage, industrial marking, jewelry, and more.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Engraving"
        subtitle="Precision engraving for personalized items"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Engraving"
        description="Add a personal touch to your products with our high-quality engraving services. From delicate jewelry to industrial components, our precision technology ensures crisp, detailed results on a wide range of materials."
        iconName="PenTool"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default EngravingPage;
