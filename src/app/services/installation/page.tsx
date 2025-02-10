import ServicePage from "@/components/ServicePage";
import HeroSection from "@/components/HeroSection";

const InstallationPage = () => {
  const relatedServices = [
    { title: "3D Signs", link: "/services/3d-signs", iconName: "CuboidIcon" },
    {
      title: "Vehicle Wraps",
      link: "/services/vehicle-wraps",
      iconName: "Car",
    },
    {
      title: "Super Sized 3D",
      link: "/services/super-sized-3d",
      iconName: "Maximize2",
    },
  ];

  const features = [
    {
      title: "Expert Team",
      description:
        "Highly skilled professionals with years of experience in signage and wrap installation.",
    },
    {
      title: "Comprehensive Services",
      description:
        "Installation for all types of signage, from small indoor signs to large outdoor displays and vehicle wraps.",
    },
    {
      title: "Safety First",
      description:
        "Adherence to strict safety protocols and regulations for all installation projects.",
    },
    {
      title: "Precision Equipment",
      description:
        "Use of advanced tools and equipment to ensure accurate and secure installations.",
    },
    {
      title: "Site Preparation",
      description:
        "Thorough assessment and preparation of installation sites for optimal results.",
    },
    {
      title: "Post-Installation Support",
      description:
        "Follow-up services to ensure long-term satisfaction and address any concerns.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Installation Services"
        subtitle="Professional installation for all your signage needs"
        backgroundImage="/Moon_REV.png"
      />
      <ServicePage
        title="Installation Services"
        description="Ensure your signage and prints make the right impact with our professional installation services. Our expert team handles everything from vehicle wraps to large-scale installations, guaranteeing a flawless finish for your project."
        iconName="Wrench"
        relatedServices={relatedServices}
        features={features}
      />
    </>
  );
};

export default InstallationPage;
