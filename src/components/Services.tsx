"use client";

import { motion } from "motion/react";
import {
  Printer,
  ImageIcon,
  CuboidIcon as Cube,
  Palette,
  Megaphone,
  Truck,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Printer size={48} />,
    title: "Heavy Printing",
    description:
      "High-quality, large-scale printing for all your business needs. From banners to posters, we deliver exceptional results.",
    link: "/services/heavy-printing",
  },
  {
    icon: <ImageIcon size={48} />,
    title: "Billboards",
    description:
      "Eye-catching billboard designs and printing that command attention and drive your message home.",
    link: "/services/billboards",
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
    icon: <Truck size={48} />,
    title: "Installation",
    description:
      "Professional installation services ensure your signage and prints are perfectly placed and secured.",
    link: "/services/installation",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-red-800">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <Link
                  href={service.link}
                  className="text-primary dark:text-primary-dark hover:underline font-medium"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
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
