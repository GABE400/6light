"use client";

import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          6 Light Media
        </motion.h1> */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8"
        >
          Illuminating Your Brand with Cutting-Edge Printing Solutions
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="#services"
            className="bg-primary hover:bg-primary-dark bg-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-slate-900 text-primary px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Get a Quote
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
          className="text-white flex flex-col items-center cursor-pointer transition duration-300 hover:text-primary"
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
