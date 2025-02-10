import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const AcrylicsLaserCuttingPage = () => {
  const relatedServices = [
    { title: "3D Signs", link: "/services/3d-signs", iconName: "CuboidIcon" },
    {
      title: "Steel Laser Cutting",
      link: "/services/steel-laser-cutting",
      iconName: "Scissors",
    },
    {
      title: "Custom Design",
      link: "/services/custom-design",
      iconName: "Palette",
    },
  ];

  const features = [
    {
      title: "Precision Cutting",
      description:
        "High-accuracy laser cutting for intricate designs and clean edges.",
    },
    {
      title: "Various Thicknesses",
      description:
        "Capability to cut acrylic sheets of different thicknesses to suit your project needs.",
    },
    {
      title: "Custom Shapes",
      description:
        "Create unique shapes and designs for signage, displays, and decorative elements.",
    },
    {
      title: "Color Options",
      description:
        "Work with a wide range of colored and clear acrylic materials.",
    },
    {
      title: "Polished Edges",
      description:
        "Laser cutting provides a smooth, polished edge, reducing the need for post-processing.",
    },
    {
      title: "Rapid Prototyping",
      description: "Quick turnaround for prototypes and small production runs.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Acrylics Laser Cutting"
        subtitle="Precision cutting for stunning acrylic creations"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Acrylics Laser Cutting"
        description="Elevate your projects with our precision acrylic laser cutting services. From sleek signage to intricate displays, we deliver high-quality, custom-cut acrylic pieces that bring your designs to life with crisp edges and stunning clarity."
        iconName="Scissors"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default AcrylicsLaserCuttingPage;
