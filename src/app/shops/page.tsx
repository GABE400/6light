"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HeroShops from "@/components/HeroShops";
import Products from "@/components/Products";
import SlideShow from "@/components/SlideShow";

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
  //   {
  //     id: "headquarters",
  //     name: "6 Light Media Headquarters",
  //     address: "1265 Fulwe Close, Rhodespark, Lusaka, Zambia",
  //     phone: "+260 971 782 375",
  //     hours: "Monday - Friday: 8:00 AM - 5:00 PM",
  //     image: "/shops/headquarters.jpg",
  //     mapUrl: "https://goo.gl/maps/1234567890",
  //     coordinates: [-15.3875, 28.3228],
  //   },
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
];

export default function ShopsPage() {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  const heroImages = ["/slides/1.jpg", "/slides/2.jpg", "/slides/3.jpg"];

  const slideShowImages = [
    "/slides/01.jpg",
    "/slides/02.jpg",
    "/slides/03.jpg",
    "/slides/04.jpg",
    "/slides/05.jpg",
    "/slides/06.jpg",
  ];

  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      <HeroShops
        title="Our Shops"
        subtitle="Visit us at one of our convenient locations in Lusaka"
        images={heroImages}
      />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            {shops.map((shop) => (
              <motion.div
                key={shop.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-shadow duration-300 ${
                  selectedShop?.id === shop.id
                    ? "ring-2 ring-red-800"
                    : "hover:shadow-lg"
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
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {shop.name}
                    </h2>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">{shop.address}</p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-red-800 mr-2 flex-shrink-0" />
                        <p className="text-gray-600">{shop.phone}</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">{shop.hours}</p>
                      </div>
                    </div>
                    <a
                      href={shop.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-red-800 hover:text-red-700"
                    >
                      View on Google Maps
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px]">
            <Map shops={shops} selectedShop={selectedShop} />
          </div>
        </div>
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Printing, photocopying, scanning",
              "Fabric printing",
              "Engraving",
              "Canvas printing and framing",
              "Photos and passport printing",
              "Design",
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="bg-red-800 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Explore Our Work
        </h2>
        <SlideShow images={slideShowImages} />
        <Products products={products} itemsPerPage={6} />
      </div>
    </div>
  );
}
