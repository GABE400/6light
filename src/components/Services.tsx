/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import {
  Printer,
  CuboidIcon as Cube,
  Palette,
  Megaphone,
  Truck,
  Maximize2,
  Scissors,
  Cog,
  PenToolIcon as Tool,
  Factory,
  Camera,
  Shirt,
  ImageIcon,
  FileImage,
  Stamp,
  PenTool,
} from "lucide-react";
import Link from "next/link";

const mainServices = [
  {
    icon: <Printer size={48} />,
    title: "Large Format Printing",
    description:
      "High-quality, Billboards, large-scale printing for all your business needs. From banners and billboards to posters, we deliver exceptional results.",
    link: "/services/large-format-printing",
  },
  {
    icon: <Cube size={48} />,
    title: "3D Signs",
    description:
      "Stand out from the crowd with our custom 3D signs. Create a lasting impression with dimensional signage.",
    link: "/services/3d-signs",
  },
  {
    icon: <Palette size={48} />,
    title: "Custom Design",
    description:
      "Our expert designers bring your vision to life, creating stunning visuals that represent your brand perfectly.",
    link: "/services/custom-design",
  },
  {
    icon: <Megaphone size={48} />,
    title: "Vehicle Wraps",
    description:
      "Transform your vehicles into mobile billboards with our high-quality, durable vehicle wraps.",
    link: "/services/vehicle-wraps",
  },
  {
    icon: <Maximize2 size={48} />,
    title: "Super Sized 3D",
    description:
      "Make a massive impact with our super sized 3D creations. Perfect for events, exhibitions, and landmark installations.",
    link: "/services/super-sized-3d",
  },
  {
    icon: <Truck size={48} />,
    title: "Installation",
    description:
      "Professional installation services ensure your signage and prints are perfectly placed and secured.",
    link: "/services/installation",
  },
  {
    icon: <Scissors size={48} />,
    title: "Acrylics Laser Cutting",
    description:
      "Precision laser cutting for acrylic materials, perfect for signage, displays, and custom projects.",
    link: "/services/acrylics-laser-cutting",
  },
  {
    icon: <Cog size={48} />,
    title: "Steel Laser Cutting",
    description:
      "High-precision steel laser cutting for industrial and commercial applications.",
    link: "/services/steel-laser-cutting",
  },
  {
    icon: <Tool size={48} />,
    title: "CNC Routing",
    description:
      "Computer-controlled cutting for a wide range of materials, offering precision and versatility.",
    link: "/services/cnc-routing",
  },
  {
    icon: <Factory size={48} />,
    title: "Fabrication",
    description:
      "Custom fabrication services for unique projects and specialized requirements.",
    link: "/services/fabrication",
  },
];

const shopServices = [
  {
    icon: <Printer size={48} />,
    title: "Printing, Photocopying, Scanning",
    description:
      "Quick and efficient printing, photocopying, and scanning services for all your document needs.",
  },
  {
    icon: <Shirt size={48} />,
    title: "Fabric Printing",
    description:
      "High-quality fabric printing for custom apparel, home decor, and more.",
  },
  {
    icon: <PenTool size={48} />,
    title: "Engraving",
    description:
      "Precision engraving services for a variety of materials, perfect for personalized gifts and professional items.",
  },
  {
    icon: <ImageIcon size={48} />,
    title: "Canvas Printing and Framing",
    description:
      "Turn your photos and artwork into beautiful canvas prints, complete with professional framing.",
  },
  {
    icon: <Camera size={48} />,
    title: "Photos and Passport Printing",
    description:
      "Quick and professional photo printing services, including passport photos that meet official requirements.",
  },
  {
    icon: <Palette size={48} />,
    title: "Design",
    description:
      "Professional design services to help bring your ideas to life, from logos to marketing materials.",
  },
];

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({
  service,
  isShopService = false,
}: {
  service: Service;
  isShopService?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="p-6">
      <div className="text-primary dark:text-primary-dark mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {service.description}
      </p>
      {/* {!isShopService && (
        <Link
          href={service.link}
          className="text-primary dark:text-primary-dark hover:underline font-medium"
        >
          Learn More
        </Link>
      )} */}
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-r from-gray-200 to-gray-50 dark:from-orange-400 dark:via-red-700 dark:to-red-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Elevate your brand with our cutting-edge printing solutions
          </p>
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          6 Light Media Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Shop Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {shopServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              isShopService={true}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark bg-red-800 dark:bg-yellow-400 text-white dark:text-black px-8 py-3 rounded-full text-lg font-semibold transition duration-300 inline-block transform hover:scale-105"
          >
            Get a Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
