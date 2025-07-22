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
                src="/images/24-hrs.webp"
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
                24-Hour Live-In Support{" "}
              </h1>
              <h2 className="text-xl font-semibold text-[#00269B] mb-6">
                Consistent, Round-the-Clock Care in the Comfort of Home{" "}
              </h2>
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                24-Hour Live-In Support provides continuous, round-the-clock
                care for those who prefer to remain at home rather than move
                into residential care. Our trained staff live on-site, offering
                personalised support with daily tasks, medication, and
                companionship—ensuring comfort, safety, and peace of mind day
                and night.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
