import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const SuperSized3DPage = () => {
  const relatedServices = [
    { title: "3D Signs", link: "/services/3d-signs", iconName: "CuboidIcon" },
    { title: "Fabrication", link: "/services/fabrication", iconName: "Tool" },
    {
      title: "Installation",
      link: "/services/installation",
      iconName: "Wrench",
    },
  ];

  const features = [
    {
      title: "Massive Scale",
      description:
        "Create larger-than-life 3D structures that command attention and awe.",
    },
    {
      title: "Custom Designs",
      description:
        "Tailored designs to match your brand identity and event themes.",
    },
    {
      title: "Diverse Materials",
      description:
        "Utilize a range of materials including foam, metal, and composites for the perfect look and durability.",
    },
    {
      title: "Indoor and Outdoor Options",
      description:
        "Suitable for both interior spaces and weather-resistant outdoor installations.",
    },
    {
      title: "Lighting Integration",
      description:
        "Incorporate dramatic lighting effects to enhance visibility and impact.",
    },
    {
      title: "Modular Construction",
      description:
        "Designed for easy transport, assembly, and potential reconfiguration for future use.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Super Sized 3D"
        subtitle="Make a massive impact with larger-than-life creations"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Super Sized 3D"
        description="Create unforgettable experiences with our super sized 3D creations. Perfect for events, exhibitions, and landmark installations, our large-scale 3D designs make a massive impact, drawing attention and leaving lasting impressions on your audience."
        iconName="Maximize2"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default SuperSized3DPage;
