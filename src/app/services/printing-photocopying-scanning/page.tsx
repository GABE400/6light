import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const PrintingPhotocopyScanningPage = () => {
  const relatedServices = [
    {
      title: "Large Format Printing",
      link: "/services/large-format-printing",
      iconName: "Printer",
    },
    {
      title: "Photos and Passport Printing",
      link: "/services/photo-passport-printing",
      iconName: "Camera",
    },
    { title: "Design", link: "/services/design", iconName: "Palette" },
  ];

  const features = [
    {
      title: "High-Quality Printing",
      description:
        "Produce crisp, clear documents with our advanced printing technology.",
    },
    {
      title: "Color and B&W Options",
      description:
        "Flexible printing options for both color and black & white documents.",
    },
    {
      title: "Large Volume Capacity",
      description:
        "Handle large print jobs efficiently with our high-capacity printers.",
    },
    {
      title: "Document Scanning",
      description:
        "Convert physical documents to digital formats with high-resolution scanning.",
    },
    {
      title: "Various Paper Types",
      description:
        "Print on a variety of paper stocks and sizes to suit your needs.",
    },
    {
      title: "Fast Turnaround",
      description:
        "Quick service for time-sensitive printing and copying needs.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Printing, Photocopying, Scanning"
        subtitle="Quick and efficient document services"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Printing, Photocopying, Scanning"
        description="Experience hassle-free document services with our state-of-the-art printing, photocopying, and scanning solutions. From high-quality color prints to bulk black and white copies, we deliver fast and reliable results for all your business needs."
        iconName="Printer"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default PrintingPhotocopyScanningPage;
