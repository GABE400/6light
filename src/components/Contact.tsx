"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Send,
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

const branches = [
  { id: "main", name: "Main Branch" },
  { id: "eastpark", name: "East Park Branch" },
  { id: "pinnacle", name: "Pinnacle Branch" },
];

const mainBranchServices = [
  "3D Signage",
  "Large Format Printing",
  "Vehicle Wraps",
  "Custom Fabrication",
  "Laser Cutting",
  "Others",
];

const shopBranchServices = [
  "Printing, photocopying, scanning",
  "Fabric printing",
  "Engraving",
  "Canvas printing and framing",
  "Photos and passport printing",
  "Design",
  "Others",
];

const branchEmails = {
  main:
    process.env.NEXT_PUBLIC_MAIN_BRANCH_EMAIL || "marketing@sixlightmedia.com",
  eastpark:
    process.env.NEXT_PUBLIC_EASTPARK_BRANCH_EMAIL || "shop@sixlightmedia.com",
  pinnacle:
    process.env.NEXT_PUBLIC_PINNACLE_BRANCH_EMAIL ||
    "pinnacle@sixlightmedia.com",
};

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
    <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
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

interface FormData {
  name: string;
  email: string;
  phone: string;
  branch: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const watchBranch = watch("branch", "main");

  const onSubmit = async (data: FormData) => {
    try {
      const branchEmail =
        branchEmails[data.branch as keyof typeof branchEmails];
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          subject: `New Quotation Request for ${
            branches.find((b) => b.id === data.branch)?.name
          }`,
          recipient: branchEmail,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-red-700 dark:text-red-400">
              Get in Touch
            </h3>
            {contactInfo.map((info, index) => (
              <CopyableInfo key={index} {...info} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-red-700 dark:text-red-400">
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-red-700 dark:text-red-400">
              Request a Quotation
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="branch"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Branch
                </label>
                <select
                  id="branch"
                  {...register("branch", { required: "Branch is required" })}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  {branches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
                </select>
                {errors.branch && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.branch.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Service
                </label>
                <select
                  id="service"
                  {...register("service", { required: "Service is required" })}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select a service</option>
                  {watchBranch === "main"
                    ? mainBranchServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))
                    : shopBranchServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.service.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Request
                  </>
                )}
              </button>
              {submitStatus === "success" && (
                <p className="mt-2 text-sm text-green-600">
                  Your message has been sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-2 text-sm text-red-600">
                  An error occurred. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
