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

const products = [
  { id: 1, image: "/shops/1.jpg" },
  { id: 2, image: "/shops/2.jpg" },
  { id: 3, image: "/shops/3.jpg" },
  { id: 4, image: "/shops/4.jpg" },
  { id: 5, image: "/shops/5.jpg" },
  { id: 6, image: "/shops/6.jpg" },
  { id: 7, image: "/shops/7.jpg" },
  { id: 8, image: "/shops/8.jpg" },
  { id: 9, image: "/shops/9.jpg" },
  { id: 10, image: "/shops/10.jpg" },
  { id: 11, image: "/shops/11.jpg" },
  { id: 12, image: "/shops/12.jpg" },
  { id: 13, image: "/shops/13.jpg" },
  { id: 14, image: "/shops/14.jpg" },
  { id: 15, image: "/shops/15.jpg" },
  { id: 16, image: "/shops/16.jpg" },
  { id: 17, image: "/shops/17.jpg" },
  { id: 18, image: "/shops/18.jpg" },
  { id: 19, image: "/shops/19.jpg" },
  { id: 20, image: "/shops/20.jpg" },
  { id: 21, image: "/shops/21.jpg" },
  { id: 22, image: "/shops/22.jpg" },
  { id: 23, image: "/shops/23.jpg" },
  { id: 24, image: "/shops/24.jpg" },
  { id: 25, image: "/shops/25.jpg" },
  { id: 26, image: "/shops/26.jpg" },
  { id: 27, image: "/shops/27.jpg" },
  { id: 28, image: "/shops/28.jpg" },
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

  const heroBackgroundImage = "/slides/2.jpg";
  const heroSlides = [
    {
      images: ["/slides/AA.jpg", "/slides/BB.jpg", "/slides/CC.jpg"],
    },
    {
      images: ["/slides/DD.jpg", "/slides/EE.jpg", "/slides/FF.jpg"],
    },
    // Add more slides as needed
  ];

  const gridSlides = [
    {
      topImages: [
        {
          src: "/slides/01.jpg",
          alt: "3D Signage Example 1",
          title: "",
        },
        {
          src: "/slides/02.jpg",
          alt: "3D Signage Example 2",
          title: "",
        },
        {
          src: "/slides/03.jpg",
          alt: "3D Signage Example 3",
          title: "",
        },
      ],
      bottomImages: [
        {
          src: "/slides/04.jpg",
          alt: "Print Example 1",
          title: "",
        },
        {
          src: "/slides/05.jpg",
          alt: "Print Example 2",
          title: "",
        },
        {
          src: "/slides/06.jpg",
          alt: "Print Example 3",
          title: "",
        },
      ],
    },
    {
      topImages: [
        {
          src: "/slides/00.jpg",
          alt: "Fabrication Example 1",
          title: "Metal Fabrication",
        },
        {
          src: "/slides/001.jpg",
          alt: "Fabrication Example 2",
          title: "Custom Structures",
        },
        {
          src: "/slides/002.jpg",
          alt: "Fabrication Example 3",
          title: "Architectural Elements",
        },
      ],
      bottomImages: [
        {
          src: "/slides/003.jpg",
          alt: "Design Example 1",
          title: "Brand Identity",
        },
        {
          src: "/slides/004.jpg",
          alt: "Design Example 2",
          title: "Marketing Materials",
        },
        {
          src: "/slides/005.jpg",
          alt: "Design Example 3",
          title: "Environmental Graphics",
        },
      ],
    },
  ];

  useEffect(() => {
    if (selectedShop) {
      setIsMapExpanded(true);
    }
  }, [selectedShop]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <HeroShops
        title="Our Shops"
        subtitle="Visit us at one of our convenient locations in Lusaka"
        backgroundImage={heroBackgroundImage}
        slides={heroSlides}
      />
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
          <GridSlideshow slides={gridSlides} />
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
          <Products products={products} itemsPerPage={12} />
        </motion.div>
      </div>
    </div>
  );
}
