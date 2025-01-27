"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Product {
  id: number;
  image: string;
}

interface ProductsProps {
  products: Product[];
  itemsPerPage: number;
}

const Products: React.FC<ProductsProps> = ({ products, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Define grid layouts for different viewport sizes
  const gridLayouts = {
    small: "grid-cols-1",
    medium: "grid-cols-2",
    large: "grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`grid ${gridLayouts.small} md:${gridLayouts.medium} lg:${gridLayouts.large} gap-4 auto-rows-fr`}
      >
        {currentItems.map((product, index) => (
          <motion.div
            key={product.id}
            className={`relative rounded-lg shadow-lg cursor-pointer overflow-hidden
              ${index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""} 
              ${index % 7 === 0 ? "lg:col-span-2" : ""}
              aspect-[4/3]`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(indexOfFirstItem + index)}
          >
            <div className="absolute inset-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`Product ${product.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                priority={index < 4}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold text-center p-4">
                View Image
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 rounded-md transition-colors
              ${
                currentPage === i + 1
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={products.map((product) => ({ src: product.image }))}
        index={lightboxIndex}
      />
    </div>
  );
};

export default Products;
