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
                src="/images/overnight-care-main.webp"
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
                Daily Home Assistance{" "}
              </h1>
              <h2 className="text-xl font-semibold text-[#00269B] mb-6">
                Flexible help with everyday tasks, routines, and personal needs.{" "}
              </h2>
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                When everyday activities become more difficult — from getting
                dressed to preparing meals — our Daily Home Assistance service
                provides the extra support needed to stay safe and independent
                at home.
              </p>
              <p>
                Whether it’s help with household chores, personal hygiene,
                medication reminders, or companionship, our compassionate carers
                are here to make life easier. We tailor every visit to fit your
                routine and preferences, always with dignity, respect, and a
                smile.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
