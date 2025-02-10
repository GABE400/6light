import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const CanvasPrintingFramingPage = () => {
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
    {
      title: "Photos and Passport Printing",
      link: "/services/photo-passport-printing",
      iconName: "Camera",
    },
  ];

  const features = [
    {
      title: "High-Quality Canvas",
      description:
        "Premium canvas materials for vibrant and long-lasting prints.",
    },
    {
      title: "Custom Sizes",
      description:
        "Flexible sizing options to fit your specific needs and space requirements.",
    },
    {
      title: "Professional Framing",
      description:
        "Expert framing services with a variety of frame styles and colors.",
    },
    {
      title: "Gallery-Wrapped Options",
      description:
        "Sleek gallery-wrapped canvases for a modern, frameless look.",
    },
    {
      title: "Photo Enhancement",
      description:
        "Professional editing and enhancement to ensure the best possible print quality.",
    },
    {
      title: "Quick Turnaround",
      description:
        "Efficient production and framing process for timely delivery.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Canvas Printing and Framing"
        subtitle="Transform your photos into beautiful canvas prints"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Canvas Printing and Framing"
        description="Transform your photos and artwork into beautiful canvas prints, complete with professional framing. Our high-quality canvas printing services bring your images to life with vibrant colors and expert finishing."
        iconName="Image"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default CanvasPrintingFramingPage;
