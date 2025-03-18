"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import HeroShops from "@/components/HeroShops";
import Products from "@/components/Products";
import GridSlideshow from "@/components/GridSlideshow";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

interface Shop {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  mapUrl: string;
  coordinates: [number, number];
}

const shops: Shop[] = [
  {
    id: "eastpark",
    name: "EastPark Mall Branch",
    address: "Shop No. 91, EastPark Mall, Lusaka, Zambia",
    phone: "+260 971 781 907",
    hours:
      "Monday - Friday: 08:00 AM - 18:00 PM | Saturday - 09:00 AM to 13:00 PM | Sunday: Closed",
    image: "/shops/eastpark-mall.jpg",
    mapUrl: "https://maps.app.goo.gl/DayGVmNoSzL2Y9EA7",
    coordinates: [-15.4103, 28.3085],
  },
  {
    id: "pinnacle",
    name: "Pinnacle Mall Branch",
    address: "Pinnacle Mall, Lusaka, Zambia",
    phone: "+260 974 594 572",
    hours:
      "Monday - Friday: 08:00 AM - 18:00 PM, Saturday - Sunday: 09:00 AM - 13:00 PM",
    image: "/shops/pinnacle-mall.jpg",
    mapUrl: "https://maps.app.goo.gl/Xk7Q1tBhXfBGLnzL8",
    coordinates: [-15.3986, 28.3248],
  },
];

const services = [
  {
    name: "Printing, photocopying, scanning",
    description:
      "High-quality printing services for all your needs, from documents to large formats.",
    icon: "🖨️",
  },
  {
    name: "Fabric printing",
    description: "Custom fabric printing for fashion, home decor, and more.",
    icon: "🧵",
  },
  {
    name: "Engraving",
    description:
      "Precision engraving services for various materials and purposes.",
    icon: "✒️",
  },
  {
    name: "Canvas printing and framing",
    description:
      "Turn your photos and artwork into beautiful framed canvas prints.",
    icon: "🖼️",
  },
  {
    name: "Photos and passport printing",
    description:
      "Quick and professional photo printing, including passport photos.",
    icon: "📸",
  },
  {
    name: "Design",
    description:
      "Creative design services for branding, marketing materials, and more.",
    icon: "🎨",
  },
];

export default function ShopsPage() {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  useEffect(() => {
    if (selectedShop) {
      setIsMapExpanded(true);
    }
  }, [selectedShop]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <HeroShops />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="space-y-8">
            {shops.map((shop) => (
              <motion.div
                key={shop.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedShop?.id === shop.id
                    ? "ring-2 ring-red-800 dark:ring-red-500"
                    : "hover:shadow-lg hover:scale-105"
                }`}
                onClick={() => setSelectedShop(shop)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <Image
                      src={shop.image || "/placeholder.svg"}
                      alt={shop.name}
                      width={200}
                      height={200}
                      className="h-48 w-full object-cover md:w-48"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {shop.name}
                    </h2>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-red-800 dark:text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          {shop.address}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-red-800 dark:text-red-500 mr-2 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          {shop.phone}
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-red-800 dark:text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          {shop.hours}
                        </p>
                      </div>
                    </div>
                    <a
                      href={shop.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-red-800 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400"
                    >
                      View on Google Maps
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative">
            <motion.div
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                isMapExpanded ? "h-[600px]" : "h-80"
              }`}
            >
              <Map shops={shops} selectedShop={selectedShop} />
            </motion.div>
            <button
              onClick={() => setIsMapExpanded(!isMapExpanded)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <span>{isMapExpanded ? "Collapse Map" : "Expand Map"}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isMapExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Our Work
          </h2>
          <GridSlideshow />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Products
          </h2>
          <Products itemsPerPage={12} />
        </motion.div>
      </div>
    </div>
  );
}
