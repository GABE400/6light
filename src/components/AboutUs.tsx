"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Slider from "react-slick";
import "../styles/slick.css";
import { useEffect, useState } from "react";
import { getAboutUs } from "@/sanity/lib/queries";
import type { AboutUsData } from "@/sanity/lib/queries";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState<AboutUsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutUs();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about us data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (isLoading) {
    return <div>Loading...</div>; // Consider adding a proper loading component
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {aboutData?.title || "About 6 Light Media"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {aboutData?.subtitle || "Learn about us"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] relative"
          >
            <Slider {...settings}>
              {(aboutData?.images || []).map((src, index) => (
                <div key={index} className="w-full h-[400px] relative">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`6 Light Media team ${index + 1}`}
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {aboutData?.story}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {aboutData?.marketDescription}
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              How We Work
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {aboutData?.workDescription}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {(aboutData?.features || []).map((feature, index) => (
            <div key={index} className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
