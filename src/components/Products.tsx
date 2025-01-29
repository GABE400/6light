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

  // Optimized pattern for full-width coverage
  const getGridItemStyle = (index: number) => {
    // Pattern repeats every 10 items for better space filling
    const patterns = {
      0: "md:col-span-2 md:row-span-2 aspect-square", // Large square
      1: "md:col-span-1 md:row-span-1 aspect-square", // Small square
      2: "md:col-span-1 md:row-span-1 aspect-square", // Small square
      3: "md:col-span-1 md:row-span-2 aspect-[1/2]", // Tall rectangle
      4: "md:col-span-1 md:row-span-1 aspect-square", // Small square
      5: "md:col-span-2 md:row-span-1 aspect-[2/1]", // Wide rectangle
      6: "md:col-span-1 md:row-span-1 aspect-square", // Small square
      7: "md:col-span-1 md:row-span-1 aspect-square", // Small square
      8: "md:col-span-2 md:row-span-2 aspect-square", // Large square
      9: "md:col-span-1 md:row-span-1 aspect-square", // Small square
    };

    return (
      patterns[(index % 10) as keyof typeof patterns] ||
      "col-span-1 row-span-1 aspect-square"
    );
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {currentItems.map((product, index) => (
          <motion.div
            key={product.id}
            className={`relative overflow-hidden cursor-pointer group
              ${getGridItemStyle(index)}
              bg-gray-100 rounded-lg`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(indexOfFirstItem + index)}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`Product ${product.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16.67vw"
                priority={index < 4}
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
              opacity-0 group-hover:opacity-100 transition-all duration-300
              flex flex-col justify-end p-3"
            >
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-base font-semibold">
                  View Image
                </h3>
                <p className="text-white/80 text-xs mt-1">Click to expand</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-gray-100 transition-colors text-sm"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`w-8 h-8 rounded-lg transition-all duration-200 text-sm
              ${
                currentPage === i + 1
                  ? "bg-red-800 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-gray-100 transition-colors text-sm"
        >
          Next
        </button>
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
