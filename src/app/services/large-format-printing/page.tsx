import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const LargeFormatPrintingPage = () => {
  const relatedServices = [
    { title: "3D Signs", link: "/services/3d-signs", iconName: "CuboidIcon" },
    {
      title: "Vehicle Wraps",
      link: "/services/vehicle-wraps",
      iconName: "Car",
    },
    {
      title: "Custom Design",
      link: "/services/custom-design",
      iconName: "Palette",
    },
  ];

  const features = [
    {
      title: "High-Quality Printing",
      description:
        "State-of-the-art printers for vibrant, long-lasting results on various materials.",
    },
    {
      title: "Wide Format Options",
      description:
        "Capable of printing up to 5 meters wide for impressive large-scale displays.",
    },
    {
      title: "Diverse Applications",
      description:
        "Suitable for banners, posters, billboards, trade show displays, and more.",
    },
    {
      title: "Durable Materials",
      description:
        "Weather-resistant options for both indoor and outdoor applications.",
    },
    {
      title: "Quick Turnaround",
      description:
        "Fast production times to meet your deadlines without compromising quality.",
    },
    {
      title: "Expert Installation",
      description:
        "Professional installation services available for large-scale projects.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Large Format Printing"
        subtitle="High-quality, large-scale printing solutions for your business"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Large Format Printing"
        description="Transform your brand visibility with our high-quality, large-scale printing solutions. From eye-catching banners to impressive billboards, we deliver exceptional results that make your message stand out in any environment."
        iconName="Printer"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default LargeFormatPrintingPage;
