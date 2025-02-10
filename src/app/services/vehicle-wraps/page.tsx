import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const VehicleWrapsPage = () => {
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
    { title: "Installation", link: "/services/installation", iconName: "Tool" },
  ];

  const features = [
    {
      title: "Custom Designs",
      description:
        "Tailored wrap designs that perfectly showcase your brand on any vehicle type.",
    },
    {
      title: "High-Quality Materials",
      description:
        "Premium vinyl wraps that are durable, weather-resistant, and long-lasting.",
    },
    {
      title: "Full and Partial Wraps",
      description:
        "Options for complete vehicle coverage or partial wraps to suit your budget and needs.",
    },
    {
      title: "Fleet Branding",
      description:
        "Consistent branding solutions for entire vehicle fleets, enhancing brand recognition.",
    },
    {
      title: "Professional Installation",
      description:
        "Expert application ensuring a smooth, bubble-free finish and proper adhesion.",
    },
    {
      title: "Removable and Changeable",
      description:
        "Wraps can be safely removed or updated, protecting the vehicle's original paint.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Vehicle Wraps"
        subtitle="Transform your vehicles into mobile billboards"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Vehicle Wraps"
        description="Turn heads and maximize your brand exposure with our high-quality vehicle wraps. We transform your vehicles into eye-catching mobile advertisements, ensuring your message travels far and wide with style and impact."
        iconName="Car"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default VehicleWrapsPage;
