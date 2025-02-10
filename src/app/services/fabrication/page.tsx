import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const FabricationPage = () => {
  const relatedServices = [
    { title: "3D Signs", link: "/services/3d-signs", iconName: "CuboidIcon" },
    {
      title: "Steel Laser Cutting",
      link: "/services/steel-laser-cutting",
      iconName: "Scissors",
    },
    { title: "CNC Routing", link: "/services/cnc-routing", iconName: "Cog" },
  ];

  const features = [
    {
      title: "Custom Solutions",
      description:
        "Tailor-made fabrication to meet your specific project requirements and specifications.",
    },
    {
      title: "Multi-Material Expertise",
      description:
        "Work with various materials including metals, plastics, wood, and composites.",
    },
    {
      title: "Advanced Technology",
      description:
        "Utilize state-of-the-art equipment for precise cutting, welding, and assembly.",
    },
    {
      title: "Quality Control",
      description:
        "Rigorous quality checks throughout the fabrication process to ensure superior results.",
    },
    {
      title: "Prototyping Services",
      description:
        "Rapid prototyping capabilities to bring your concepts to life quickly.",
    },
    {
      title: "Large-Scale Production",
      description:
        "Capacity to handle both small custom projects and large production runs efficiently.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Fabrication"
        subtitle="Custom fabrication solutions for unique projects"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Fabrication"
        description="Bring your ideas to life with our custom fabrication services. We combine skilled craftsmanship with cutting-edge technology to create bespoke solutions for any industry, from concept to completion."
        iconName="Tool"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default FabricationPage;
