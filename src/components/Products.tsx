"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getProducts, type Product } from "@/sanity/lib/queries";

interface ProductsProps {
  itemsPerPage: number;
}

const Products: React.FC<ProductsProps> = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {currentItems.map((product, index) => (
          <motion.div
            key={product._id}
            className={`relative overflow-hidden cursor-pointer group
              ${getGridItemStyle(index)}
              bg-gray-100 dark:bg-gray-800 rounded-lg`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(indexOfFirstItem + index)}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16.67vw"
                priority={index < 4}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-800 transition-colors text-sm"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-800 transition-colors text-sm"
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
