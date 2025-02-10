"use client";

import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface ServicePageProps {
  title: string;
  description: string;
  iconName: string;
  relatedServices: Array<{ title: string; link: string; iconName: string }>;
  features: Array<{ title: string; description: string }>;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  iconName,
  relatedServices,
  features,
}) => {
  const IconComponent = (LucideIcons[iconName as keyof typeof LucideIcons] ||
    LucideIcons.HelpCircle) as React.ElementType;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <IconComponent
          className="w-20 h-20 mx-auto mb-6 text-red-800 dark:text-red-500"
          aria-hidden="true"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      {features && features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          Related Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => {
            const RelatedIconComponent = (LucideIcons[
              service.iconName as keyof typeof LucideIcons
            ] || LucideIcons.HelpCircle) as React.ElementType;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={service.link}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <RelatedIconComponent
                    className="w-8 h-8 mr-4 text-red-800 dark:text-red-500"
                    aria-hidden="true"
                  />
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicePage;
