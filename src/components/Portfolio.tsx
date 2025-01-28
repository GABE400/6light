"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    category: "signage",
    image: "/3D signage/1.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 2,
    category: "signage",
    image: "/3D signage/2.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 3,
    category: "signage",
    image: "/3D signage/3.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 4,
    category: "signage",
    image: "/3D signage/4.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 5,
    category: "signage",
    image: "/3D signage/5.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 6,
    category: "signage",
    image: "/3D signage/6.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 7,
    category: "signage",
    image: "/3D signage/7.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 8,
    category: "signage",
    image: "/3D signage/8.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 9,
    category: "signage",
    image: "/3D signage/9.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 10,
    category: "signage",
    image: "/3D signage/10.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 11,
    category: "signage",
    image: "/3D signage/11.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 12,
    category: "signage",
    image: "/3D signage/12.jpg",
    title: "Corporate 3D Signage",
  },
  {
    id: 13,
    category: "acrylics",
    image: "/acrylics laser cutting/1.jpg",
    title: "Acrylic Display Stand",
  },
  {
    id: 14,
    category: "acrylics",
    image: "/acrylics laser cutting/2.jpg",
    title: "Acrylic Display Stand",
  },
  {
    id: 15,
    category: "acrylics",
    image: "/acrylics laser cutting/3.jpg",
    title: "Acrylic Display Stand",
  },
  {
    id: 16,
    category: "acrylics",
    image: "/acrylics laser cutting/4.jpg",
    title: "Acrylic Display Stand",
  },
  {
    id: 17,
    category: "acrylics",
    image: "/acrylics laser cutting/5.jpg",
    title: "Acrylic Display Stand",
  },
  {
    id: 18,
    category: "acrylics",
    image: "/acrylics laser cutting/6.jpg",
    title: "Acrylic Display Stand",
  },
  {
    id: 19,
    category: "cnc",
    image: "/cnc routing/1.jpg",
    title: "CNC Routed Logo",
  },
  {
    id: 20,
    category: "cnc",
    image: "/cnc routing/2.jpg",
    title: "CNC Routed Logo",
  },
  {
    id: 21,
    category: "cnc",
    image: "/cnc routing/3.jpg",
    title: "CNC Routed Logo",
  },
  {
    id: 22,
    category: "cnc",
    image: "/cnc routing/4.jpg",
    title: "CNC Routed Logo",
  },
  {
    id: 23,
    category: "cnc",
    image: "/cnc routing/5.jpg",
    title: "CNC Routed Logo",
  },
  {
    id: 24,
    category: "cnc",
    image: "/cnc routing/6.jpg",
    title: "CNC Routed Logo",
  },
  {
    id: 25,
    category: "fabrication",
    image: "/fabrication/1.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 26,
    category: "fabrication",
    image: "/fabrication/2.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 27,
    category: "fabrication",
    image: "/fabrication/3.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 28,
    category: "fabrication",
    image: "/fabrication/4.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 29,
    category: "fabrication",
    image: "/fabrication/5.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 30,
    category: "fabrication",
    image: "/fabrication/6.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 31,
    category: "fabrication",
    image: "/fabrication/7.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 32,
    category: "fabrication",
    image: "/fabrication/8.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 33,
    category: "fabrication",
    image: "/fabrication/9.jpg",
    title: "Custom Metal Fabrication",
  },
  {
    id: 34,
    category: "printing",
    image: "/large format printing/1.jpg",
    title: "Large Format Banner",
  },
  {
    id: 35,
    category: "printing",
    image: "/large format printing/2.jpg",
    title: "Large Format Banner",
  },
  {
    id: 36,
    category: "printing",
    image: "/large format printing/3.jpg",
    title: "Large Format Banner",
  },
  {
    id: 37,
    category: "printing",
    image: "/large format printing/4.jpg",
    title: "Large Format Banner",
  },
  {
    id: 38,
    category: "printing",
    image: "/large format printing/5.jpg",
    title: "Large Format Banner",
  },
  {
    id: 39,
    category: "printing",
    image: "/large format printing/6.jpg",
    title: "Large Format Banner",
  },
  {
    id: 40,
    category: "printing",
    image: "/large format printing/7.jpg",
    title: "Large Format Banner",
  },
  {
    id: 41,
    category: "printing",
    image: "/large format printing/8.jpg",
    title: "Large Format Banner",
  },
  {
    id: 42,
    category: "printing",
    image: "/large format printing/9.jpg",
    title: "Large Format Banner",
  },
  {
    id: 43,
    category: "cutting",
    image: "/steel laser cutting/1.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 44,
    category: "cutting",
    image: "/steel laser cutting/2.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 45,
    category: "cutting",
    image: "/steel laser cutting/3.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 46,
    category: "cutting",
    image: "/steel laser cutting/4.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 47,
    category: "cutting",
    image: "/steel laser cutting/5.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 48,
    category: "cutting",
    image: "/steel laser cutting/6.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 49,
    category: "cutting",
    image: "/steel laser cutting/7.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 50,
    category: "cutting",
    image: "/steel laser cutting/8.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 51,
    category: "cutting",
    image: "/steel laser cutting/9.jpg",
    title: "Laser Cut Signage",
  },
  {
    id: 52,
    category: "3d",
    image: "/super sized 3D/1.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 53,
    category: "3d",
    image: "/super sized 3D/2.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 54,
    category: "3d",
    image: "/super sized 3D/3.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 55,
    category: "3d",
    image: "/super sized 3D/4.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 56,
    category: "3d",
    image: "/super sized 3D/5.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 57,
    category: "3d",
    image: "/super sized 3D/6.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 58,
    category: "3d",
    image: "/super sized 3D/7.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 59,
    category: "3d",
    image: "/super sized 3D/8.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 60,
    category: "3d",
    image: "/super sized 3D/9.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 61,
    category: "3d",
    image: "/super sized 3D/10.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 62,
    category: "3d",
    image: "/super sized 3D/11.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 63,
    category: "3d",
    image: "/super sized 3D/12.jpg",
    title: "Super Sized 3D Logo",
  },
  {
    id: 64,
    category: "branding",
    image: "/vehicle branding/1.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 65,
    category: "branding",
    image: "/vehicle branding/2.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 66,
    category: "branding",
    image: "/vehicle branding/3.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 67,
    category: "branding",
    image: "/vehicle branding/4.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 68,
    category: "branding",
    image: "/vehicle branding/5.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 69,
    category: "branding",
    image: "/vehicle branding/6.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 70,
    category: "branding",
    image: "/vehicle branding/7.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 71,
    category: "branding",
    image: "/vehicle branding/8.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 72,
    category: "branding",
    image: "/vehicle branding/9.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 73,
    category: "branding",
    image: "/vehicle branding/10.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 74,
    category: "branding",
    image: "/vehicle branding/11.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 75,
    category: "branding",
    image: "/vehicle branding/12.jpg",
    title: "Vehicle Wrap Design",
  },
  {
    id: 76,
    category: "signage",
    image: "/3D signage/13.JPG",
    title: "Corporate 3D Signage",
  },
  {
    id: 77,
    category: "signage",
    image: "/3D signage/14.JPG",
    title: "Corporate 3D Signage",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "signage", name: "3D Signage" },
  { id: "acrylics", name: "Acrylics Laser Cutting" },
  { id: "cnc", name: "CNC Routing" },
  { id: "fabrication", name: "Fabrication" },
  { id: "printing", name: "Large Format Printing" },
  { id: "cutting", name: "Steel Laser Cutting" },
  { id: "3d", name: "Super Sized 3D" },
  { id: "branding", name: "Vehicle Branding" },
];

const ITEMS_PER_PAGE = 12;

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const openLightbox = (index: number) => {
    setLightboxIndex(startIndex + index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="portfolio" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Our Portfolio
        </motion.h2>
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category.id
                  ? "bg-red-800 text-white"
                  : "bg-black text-white hover:bg-red-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 opacity-0"
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 capitalize">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center space-x-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50"
                >
                  <ChevronLeft size={24} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-full ${
                        currentPage === page
                          ? "bg-red-800 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        slides={filteredItems.map((item) => ({ src: item.image }))}
        index={lightboxIndex}
      />
    </section>
  );
};

export default Portfolio;
