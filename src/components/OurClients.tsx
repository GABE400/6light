"use client";

import { motion } from "motion/react";
import Image from "next/image";

const clients = [
  {
    name: "Zanaco",
    logo: "/logos/1.png",
  },
  {
    name: "FNB",
    logo: "/logos/2.png",
  },
  {
    name: "ZICB",
    logo: "/logos/3.jpg",
  },
  {
    name: "Coca-Cola",
    logo: "/logos/4.png",
  },
  {
    name: "Stanbic Bank",
    logo: "/logos/5.png",
  },
  {
    name: "Colgate",
    logo: "/logos/6.png",
  },
  {
    name: "Hitachi",
    logo: "/logos/7.png",
  },
  {
    name: "Supervalue",
    logo: "/logos/8.png",
  },
  {
    name: "Zambian Breweries",
    logo: "/logos/9.jpg",
  },
  {
    name: "USAID",
    logo: "/logos/10.png",
  },
  {
    name: "Garden City",
    logo: "/logos/11.png",
  },
  {
    name: "Buya Bamba",
    logo: "/logos/12.png",
  },
  {
    name: "CFAO Motors",
    logo: "/logos/13.png",
  },
  {
    name: "National Breweries",
    logo: "/logos/14.jpg",
  },
  {
    name: "Napoli Property",
    logo: "/logos/15.png",
  },
  {
    name: "JTI",
    logo: "/logos/16.png",
  },
  {
    name: "BSI",
    logo: "/logos/17.png",
  },
  {
    name: "Pick n Pay",
    logo: "/logos/18.png",
  },
];

const OurClients = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Our Trusted Clients
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full flex items-center justify-center"
            >
              <div className="relative w-[150px] h-[80px]">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
