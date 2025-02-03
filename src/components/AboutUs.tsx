"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Slider from "react-slick";
import "../styles/slick.css";

const images = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.JPG",
  "/img/7.jpg",
  "/img/8.JPG",
  "/img/9.jpg",
  "/img/10.jpg",
  "/img/11.jpg",
  "/img/12.jpg",
  "/img/13.jpg",
  "/img/14.jpg",
  "/img/16.png",
  "/img/17.jpg",
  "/img/18.jpg",
  "/img/19.jpg",
  "/img/20.jpg",
  "/img/21.jpg",
  "/img/22.jpg",
  "/img/23.jpg",
  "/img/24.jpg",
  "/img/25.jpg",
  "/img/26.jpg",
  "/img/27.jpg",
  "/img/28.jpg",
  "/img/29.jpg",
];

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
            About 6 Light Media
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn about us
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
              {images.map((src, index) => (
                <div key={index} className="w-full h-[400px] relative">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`6 Light Media team ${index + 1}`}
                    layout="fill"
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
              We are a Creative Driven, Brand Focused and Design Led Large
              Format Printing and Signage company with a pioneering history in
              large format printing, 3D signage and laser cutting.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              In a market where consumers are talking to brands more than ever,
              attention spans shorter and the market more fragmented – WE WORK
              TO OFFER OUT OF THE BOX, POWERFULLY CREATIVE SIGNAGE IDEAS that
              demand the attention and interest of YOUR CLIENTS.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              How We Work
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our mission is always to be the PIONEER. We have a long
              established reputation for providing Cutting Edge products that
              are high quality and provided to you in a timely manner.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Innovation
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              We constantly invest in the latest technology to provide
              cutting-edge solutions for our clients.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Quality
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              We are committed to delivering the highest quality products that
              exceed industry standards.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Customer Focus
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Our clients&apos; success is our success. We work closely with
              each client to understand and meet their unique needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
