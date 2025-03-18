"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  getPortfolioItems,
  getPortfolioCategories,
} from "@/sanity/lib/queries";
import type { PortfolioItem, PortfolioCategory } from "@/sanity/lib/queries";

const ITEMS_PER_PAGE = 12;

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<PortfolioCategory[]>([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsData, categoriesData] = await Promise.all([
          getPortfolioItems(),
          getPortfolioCategories(),
        ]);
        setPortfolioItems(itemsData);
        setCategories(categoriesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.id === filter);

  const allImages = filteredItems.flatMap((item) =>
    item.images.map((image) => ({
      src: image,
      title: item.title,
      category: item.category.name,
    }))
  );

  const totalPages = Math.ceil(allImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = allImages.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(startIndex + index);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="py-20">
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
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === "all"
                ? "bg-red-800 text-white"
                : "bg-black text-white hover:bg-red-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={`${image.title} - ${image.category}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    flex flex-col justify-end p-4"
                  >
                    <h3 className="text-white text-sm font-semibold">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-xs">{image.category}</p>
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

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={allImages.map((image) => ({ src: image.src }))}
          carousel={{ finite: allImages.length <= 1 }}
        />
      </div>
    </section>
  );
};

export default Portfolio;
