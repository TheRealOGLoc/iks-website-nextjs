"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  titleAndCompanyName: string;
  comment: string;
}

interface TestimonialsProps {
  componentData: {
    __component: string;
    card: Testimonial[];
  };
}

export default function TestimonialsPageSlider({ componentData }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = componentData.card;

  // Automatically switch to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [testimonials.length]);

  // Function to handle manual switching with smooth transition
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full my-20 py-8 sm:py-16"> {/* Adjust padding for mobile */}
      <div className="max-w-[900px] mx-auto text-center px-4"> {/* Add padding for mobile */}
        <div className="text-gray-600">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex} // Key changes with activeIndex for smooth animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-2xl font-semibold mb-1"> {/* Responsive text size */}
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-sm sm:text-base mb-2 sm:mb-4"> {/* Adjust margin for mobile */}
                {testimonials[activeIndex].titleAndCompanyName}
              </p>
              <p className="text-sm sm:text-lg italic max-w-[800px] mx-auto"> {/* Responsive text size */}
                {testimonials[activeIndex].comment}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center mt-4 sm:mt-6 space-x-1 sm:space-x-2"> {/* Adjust space for mobile */}
          {testimonials.map((_, index) => (
            <motion.span
              key={index}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full cursor-pointer ${
                index === activeIndex ? "bg-black" : "bg-slate-300"
              }`}
              onClick={() => goToSlide(index)}
              initial={{ scale: 1 }}
              animate={index === activeIndex ? { scale: 1.2 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            ></motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}



