"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <ImgComp
                src="/images/end-of-life-compassionate.webp"
                alt="Caregiver providing overnight care"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div>
              <h1 className="text-4xl md:text-[42px] font-bold text-[#000000] mb-4 ">
                Compassionate End-of-Life Care{" "}
              </h1>
              <h2 className="text-xl font-semibold text-[#00269B] mb-6">
                Gentle, Respectful Support for Life’s Final Chapter{" "}
              </h2>
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                At Lighthouse Care, we believe everyone deserves dignity,
                comfort, and compassion at the end of life. Our end-of-life care
                services are designed to provide expert support at home—where
                many feel most at peace. We work closely with individuals and
                families to ensure that each moment is spent with dignity,
                respect, and as little discomfort as possible.
              </p>
              <p>
                Whether your loved one is facing a terminal illness, a complex
                chronic condition, or is in need of palliative support, our
                experienced team offers emotional reassurance, clinical care,
                and companionship—allowing families to focus on what matters
                most: time together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
