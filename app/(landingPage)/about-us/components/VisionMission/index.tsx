"use client";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Our Vision */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-[44px] font-bold text-[#001967] mb-8">
            Our Vision
          </h2>
          <p className="text-xl md:text-[32px] font-[200]  leading-relaxed max-w-4xl mx-auto text-[#000000]">
            To be a beacon of hope and trust in homecare—illuminating the path
            to compassionate, personalised, and dignified care where every
            individual feels safe, valued, and at home.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex justify-center mb-16"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-[#00269B] to-[#8092CD] rounded-full"></div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl md:text-[44px] font-bold text-[#001967] mb-8">
            Our Mission
          </h2>
          <p className="text-xl md:text-[32px] font-[200]  leading-relaxed max-w-5xl mx-auto text-[#000000]">
            At Lighthouse Homecare, our mission is to guide every individual we
            serve with the same unwavering light of a lighthouse offers to those
            at sea: steady, safe, and always present. We provide exceptional,
            person-centred care that empowers independence, nurtures dignity,
            and fosters meaningful connections making every home a sanctuary of
            support and compassion.
          </p>
        </motion.div>

        {/* Optional decorative elements */}
        <motion.div
          className="flex justify-center mt-16 space-x-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.6 }}
        ></motion.div>
      </div>
    </motion.section>
  );
}
