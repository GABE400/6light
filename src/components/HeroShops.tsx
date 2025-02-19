"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  backgroundImage: string;
  images: string[];
}

interface HeroShopsProps {
  title: string;
  subtitle: string;
  slides: Slide[];
}

const HeroShops: React.FC<HeroShopsProps> = ({ title, subtitle, slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setDirection(1);
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  const backgroundVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
    }),
  };

  const contentVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`background-${currentSlideIndex}`}
          custom={direction}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={
              slides[currentSlideIndex].backgroundImage || "/placeholder.svg"
            }
            alt={`Shop Hero Background ${currentSlideIndex + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-2 text-center text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-center max-w-2xl px-4 mb-4 text-white"
        >
          {subtitle}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlideIndex}`}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl px-4 mt-8"
          >
            <div className="grid grid-cols-3 gap-4 h-[60vh]">
              {[0, 1, 2].map((index) => (
                <div
                  key={`${currentSlideIndex}-${index}`}
                  className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                    index === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <div
                    className="relative w-full h-full"
                    style={{ aspectRatio: index === 0 ? "16 / 9" : "1 / 1" }}
                  >
                    <Image
                      src={
                        slides[currentSlideIndex].images[index] ||
                        "/placeholder.svg"
                      }
                      alt={`Shop image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlideIndex ? 1 : -1);
              setCurrentSlideIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentSlideIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroShops;
