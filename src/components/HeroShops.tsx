"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getHeroShops } from "@/sanity/lib/queries";
import type { HeroShopsData } from "@/sanity/lib/queries";

const HeroShops: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [heroData, setHeroData] = useState<HeroShopsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHeroShops();
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero shops data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!heroData?.slides.length) return;

    const slideInterval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % heroData.slides.length
      );
    }, 10000); // Change slide every 10 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [heroData?.slides.length]);

  const contentVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
  };

  if (isLoading || !heroData) {
    return <div>Loading...</div>; // Consider adding a proper loading component
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroData.backgroundImage || "/placeholder.svg"}
          alt="Shop Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
          {heroData.title}
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl px-4 mb-4 text-white">
          {heroData.subtitle}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
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
                        heroData.slides[currentSlideIndex]?.images[index] ||
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
        {heroData.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlideIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="text-white cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <ChevronDown size={36} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroShops;
