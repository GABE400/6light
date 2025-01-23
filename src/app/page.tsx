"use client";
import { useState, useEffect } from "react";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { ChevronUp } from "lucide-react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AboutUs from "@/components/AboutUs";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <Image
            src="/moon.jpg"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <Hero />
          <AboutUs />
          <Services />
          <Portfolio />
          <OurClients />
          <Testimonials />
          <Contact />
        </div>
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 z-50"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        <ChatBot className="right-4 bottom-28 z-50" />
      </main>
    </>
  );
}
