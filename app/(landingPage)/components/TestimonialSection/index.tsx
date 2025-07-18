"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Name Surname",
      location: "Patient, United Kingdom.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Name Surname",
      location: "Patient, United Kingdom.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Name Surname",
      location: "Patient, United Kingdom.",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Name Surname",
      location: "Patient, United Kingdom.",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Name Surname",
      location: "Patient, United Kingdom.",
    },
  ];

  const scrollToIndex = (index: number) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % testimonials.length;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(prev);
  };

  useEffect(() => {
    const iv = setInterval(nextSlide, 5000);
    return () => clearInterval(iv);
  }, [currentSlide]);

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-orange-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );

  return (
    <motion.div
      className="bg-gray-50 py-16 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="max-w-7xl mx-auto md:ml-[20rem]"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-start mb-12">
          <p className="text-[#00269B] text-sm mb-2">
            Read convincing testimonies from some of our care patients
          </p>
          <h2 className="text-[44px] font-[700] text-[#001967]">
            What our Clients say
          </h2>
        </div>

        {/* Carousel */}
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div ref={carouselRef} className="flex overflow-hidden mb-8">
            {testimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <StarRating />
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <motion.div
            className="flex items-center justify-between"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentSlide ? "bg-primaryColor" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2 mr-14">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-primaryColor text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-primaryColor text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSection;
