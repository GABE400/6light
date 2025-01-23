"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Charles Michael Daka",
    company: "Marketing Manager CFAO",
    quote:
      "Six Light Media has been our preferred printing and 3D signage suppliers since 2022. And we have been impressed by them as they always deliver on time without compromising on the quality and have great customer care. Cfao Motors Zambia Ltd is happy to recommend them for your printing and branding works.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jim Whyte",
    company: "HITACHI",
    quote:
      "Six Light Media has been our printing, branding and signage suppliers for the past 3 years. We have been very happy with the level of service, timely delivery and quality of their work. We would recommend them to anyone for all your printing, branding and signage requirements.",
    rating: 5,
  },
  {
    id: 3,
    name: "John Doe",
    company: "CEO",
    quote:
      "Six light media is one of our trusted design and printing companies. We have been working with them since 2019 and have always found them to be reliable, efficient and professional.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Brown",
    company: "Tech Solutions",
    quote:
      "The quality of 6 Light Media's large format printing is outstanding. Our trade show booth was a huge success!",
    rating: 5,
  },
  {
    id: 5,
    name: "David Lee",
    company: "Retail Giants",
    quote:
      "6 Light Media's custom fabrication work exceeded our expectations. The storefront signs are simply amazing!",
    rating: 5,
  },
  {
    id: 6,
    name: "Sarah Wilson",
    company: "Marketing Pros",
    quote:
      "We've been using 6 Light Media for all our printing needs. Their consistency and reliability are unmatched.",
    rating: 4,
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-white dark:bg-red-800 p-6 rounded-lg shadow-md w-[300px] h-[300px] mx-4 flex flex-col justify-between flex-shrink-0">
    <div>
      <div className="flex items-center mb-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-6 mb-4">
        &quot;{testimonial.quote}&quot;
      </p>
    </div>
    <div>
      <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
        {testimonial.name}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-xs">
        {testimonial.company}
      </p>
    </div>
  </div>
);

interface InfiniteMovingCardsProps {
  items: Testimonial[];
  direction: "left" | "right";
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex overflow-hidden">
        {items.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        {items.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        {items.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.id}-duplicate`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="space-y-8">
          <InfiniteMovingCards items={testimonials} direction="left" />
          <InfiniteMovingCards
            items={testimonials.slice().reverse()}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
