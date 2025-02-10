import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const CNCRoutingPage = () => {
  const relatedServices = [
    {
      title: "Acrylics Laser Cutting",
      link: "/services/acrylics-laser-cutting",
      iconName: "Scissors",
    },
    {
      title: "Steel Laser Cutting",
      link: "/services/steel-laser-cutting",
      iconName: "Scissors",
    },
    { title: "Fabrication", link: "/services/fabrication", iconName: "Tool" },
  ];

  const features = [
    {
      title: "Versatile Material Handling",
      description:
        "Process a wide range of materials including wood, plastics, composites, and soft metals.",
    },
    {
      title: "3D Carving Capability",
      description:
        "Create three-dimensional designs and reliefs for unique signage and displays.",
    },
    {
      title: "High Precision",
      description:
        "Achieve tight tolerances and intricate details with computer-controlled accuracy.",
    },
    {
      title: "Large Format Options",
      description:
        "Handle large sheets and panels for seamless, large-scale projects.",
    },
    {
      title: "Efficient Production",
      description:
        "Streamlined process for cost-effective production of both prototypes and large runs.",
    },
    {
      title: "Custom Tooling",
      description:
        "Utilize various cutting tools for different finishes and material-specific applications.",
    },
  ];

  return (
    <>
      <HeroSection
        title="CNC Routing"
        subtitle="Precision cutting and shaping for various materials"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="CNC Routing"
        description="Unlock limitless possibilities with our CNC routing services. From intricate signage to custom furniture components, our computer-controlled cutting delivers precise, high-quality results across a wide range of materials."
        iconName="Cog"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default CNCRoutingPage;
