import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const SteelLaserCuttingPage = () => {
  const relatedServices = [
    {
      title: "Acrylics Laser Cutting",
      link: "/services/acrylics-laser-cutting",
      iconName: "Scissors",
    },
    { title: "CNC Routing", link: "/services/cnc-routing", iconName: "Cog" },
    { title: "Fabrication", link: "/services/fabrication", iconName: "Tool" },
  ];

  const features = [
    {
      title: "High Precision",
      description:
        "Achieve intricate designs and tight tolerances with our advanced laser cutting technology.",
    },
    {
      title: "Various Steel Types",
      description:
        "Cut a wide range of steel types including mild steel, stainless steel, and more.",
    },
    {
      title: "Thickness Range",
      description:
        "Capable of cutting steel sheets from thin gauges up to 25mm thick.",
    },
    {
      title: "Complex Shapes",
      description:
        "Create detailed and complex shapes that are difficult to achieve with traditional methods.",
    },
    {
      title: "Cost-Effective",
      description:
        "Reduce material waste and processing time for more economical production.",
    },
    {
      title: "Rapid Turnaround",
      description:
        "Fast and efficient cutting process for quick project completion.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Steel Laser Cutting"
        subtitle="Precision cutting for robust steel products"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Steel Laser Cutting"
        description="Harness the power of precision with our steel laser cutting services. We deliver accurate, clean cuts for a wide range of steel products, ensuring top-quality results for your industrial and commercial applications."
        iconName="Scissors"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default SteelLaserCuttingPage;
