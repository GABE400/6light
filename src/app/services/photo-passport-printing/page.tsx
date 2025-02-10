import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const PhotoPassportPrintingPage = () => {
  const relatedServices = [
    {
      title: "Printing, Photocopying, Scanning",
      link: "/services/printing-photocopying-scanning",
      iconName: "Printer",
    },
    {
      title: "Canvas Printing and Framing",
      link: "/services/canvas-printing-framing",
      iconName: "Image",
    },
    { title: "Design", link: "/services/design", iconName: "Palette" },
  ];

  const features = [
    {
      title: "High-Quality Photo Printing",
      description:
        "State-of-the-art printers for vibrant and long-lasting photo prints.",
    },
    {
      title: "Passport Photo Compliance",
      description:
        "Ensure your passport photos meet all official requirements and specifications.",
    },
    {
      title: "Quick Service",
      description:
        "Fast turnaround times for both regular photo prints and passport photos.",
    },
    {
      title: "Various Print Sizes",
      description:
        "Flexible print size options to suit your needs, from wallet-size to large formats.",
    },
    {
      title: "Professional Editing",
      description:
        "Touch-up and enhancement services available for your photos.",
    },
    {
      title: "Multiple Copy Options",
      description:
        "Easy ordering of multiple copies for sharing with friends and family.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Photos and Passport Printing"
        subtitle="Professional photo printing and passport services"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Photos and Passport Printing"
        description="We offer quick and professional photo printing services, including passport photos that meet official requirements. Our high-quality prints ensure your memories are preserved beautifully, and our passport photos comply with international standards."
        iconName="Camera"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default PhotoPassportPrintingPage;
