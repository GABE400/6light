import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const FabricPrintingPage = () => {
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
      title: "Canvas Printing and Framing",
      link: "/services/canvas-printing-framing",
      iconName: "Image",
    },
  ];

  const features = [
    {
      title: "Wide Range of Fabrics",
      description:
        "Print on various fabric types including cotton, polyester, silk, and more.",
    },
    {
      title: "Vibrant Colors",
      description:
        "Achieve rich, long-lasting colors with our advanced printing technology.",
    },
    {
      title: "Custom Sizes",
      description:
        "Accommodate both small and large fabric printing projects with flexible sizing options.",
    },
    {
      title: "Eco-Friendly Options",
      description:
        "Offer environmentally friendly ink and fabric choices for sustainable printing.",
    },
    {
      title: "Pattern Repeats",
      description:
        "Create seamless pattern repeats for fashion and home decor applications.",
    },
    {
      title: "Sample Printing",
      description:
        "Provide sample prints to ensure color accuracy and design approval before full production.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Fabric Printing"
        subtitle="High-quality printing for custom apparel and more"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Fabric Printing"
        description="Transform your designs into wearable art and stunning home decor with our high-quality fabric printing services. Using state-of-the-art technology, we ensure vibrant, long-lasting prints on a variety of fabric types."
        iconName="Shirt"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default FabricPrintingPage;
