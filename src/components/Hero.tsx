"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getMainHero } from "@/sanity/lib/queries";
import Link from "next/link";

type MainHero = {
  tagline: string;
  primaryButton: {
    text: string;
  };
  secondaryButton: {
    text: string;
  };
};

const Hero = () => {
  const [heroData, setHeroData] = useState<MainHero | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      const data = await getMainHero();
      setHeroData(data);
    };
    fetchHeroData();
  }, []);

  if (!heroData) return null;

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8"
        >
          {heroData.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="/services"
            className="bg-primary hover:bg-primary-dark bg-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            {heroData.primaryButton.text}
          </Link>
          <Link
            href="/contacts"
            className="bg-white hover:bg-gray-100 text-slate-900 text-primary px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            {heroData.secondaryButton.text}
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          className="text-white hover:text-gray-400 flex flex-col items-center cursor-pointer transition duration-300 hover:text-primary"
          aria-label="Scroll to services section"
        >
          <span className="mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
