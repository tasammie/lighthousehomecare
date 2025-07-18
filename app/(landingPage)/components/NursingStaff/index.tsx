"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NursingStaff() {
  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background halves behind all content */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-white z-0" />
      {/* replace color background with image */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0">
        <Image
          src="/images/blue-bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <motion.div
        className="relative z-10"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <div className="text-center pt-16 pb-8">
          <p className="text-blue-600 text-lg font-medium mb-4">
            Meet The Team
          </p>
          <h1 className="text-[44px] font-[700] text-[#001967] mb-12">
            Nursing Staff
          </h1>
        </div>

        {/* Team Cards Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-0 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/team1.png"
                  alt="Paul Matney"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Paul Matney
              </h3>
              <p className="text-gray-600 text-sm">Nursing Staff</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/team2.png"
                  alt="Paul Matney"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Paul Matney
              </h3>
              <p className="text-gray-600 text-sm">Nursing Staff</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/team3.png"
                  alt="Paul Matney"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Paul Matney
              </h3>
              <p className="text-gray-600 text-sm">Nursing Staff</p>
            </div>
          </div>
        </div>

        {/* Hiring Section */}
        <div className="text-center pt-5 pb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            We&apos;re hiring!
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Unemployed looking for a caregiver job, feel free to reach out, we
            have amazing jobs waiting for you.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
