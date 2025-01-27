"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  type LucideIcon,
} from "lucide-react";

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface Location {
  name: string;
  address: string;
}

const contactInfo: ContactInfo[] = [
  { icon: Mail, label: "Email", value: "marketing@sixlightmedia.com" },
  { icon: Phone, label: "Phone", value: "+260 971 782 375" },
  { icon: Mail, label: "Email", value: "shop@sixlightmedia.com" },
  { icon: Phone, label: "Phone", value: "+260 971 781 907" },
  { icon: Mail, label: "Email", value: "pinnacle@sixlightmedia.com" },
  { icon: Phone, label: "Phone", value: "+260 974 594 572" },
];

const locations: Location[] = [
  {
    name: "Headquarters",
    address: "1265 Fulwe Close, Rhodespark Lusaka, Zambia",
  },
  { name: "Branch Office", address: "Shop No. 91, EastPark Mall" },
  {
    name: "Branch Office",
    address: "Pinnacle mall",
  },
];

interface CopyableInfoProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const CopyableInfo: React.FC<CopyableInfoProps> = ({
  icon: Icon,
  label,
  value,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-black rounded-lg">
      <div className="flex items-center">
        <Icon className="text-primary mr-4" />
        <div>
          <p className="font-medium">{label}</p>
          <p>{value}</p>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="p-2 text-gray-500 hover:text-primary transition-colors duration-200 relative group"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="text-green-500" /> : <Copy />}
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {copied ? "Copied!" : "Copy to clipboard"}
        </span>
      </button>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-black dark:text-gray-200 mb-12"
        >
          Contact Us
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Click on the copy icon next to any email or phone number to copy it to
          your clipboard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-red-700">
              Get in Touch
            </h3>
            {contactInfo.map((info, index) => (
              <CopyableInfo key={index} {...info} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-red-700">
              Our Locations
            </h3>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <CopyableInfo
                  key={index}
                  icon={MapPin}
                  label={location.name}
                  value={location.address}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
