"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroShopsProps {
  title: string;
  subtitle: string;
  images: string[];
}

const HeroShops: React.FC<HeroShopsProps> = ({ title, subtitle, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`Shop Hero Background ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-center max-w-2xl px-4"
        >
          {subtitle}
        </motion.p>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroShops;
