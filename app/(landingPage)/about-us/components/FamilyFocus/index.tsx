"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface Promise {
  id: number;
  text: string;
}

interface StandForItem {
  id: number;
  text: string;
}

const promises: Promise[] = [
  {
    id: 1,
    text: "Like a lighthouse guiding ships through rough seas, we are here to provide steady, reliable care—tailored to your needs and delivered with heart.",
  },
];

const standForItems: StandForItem[] = [
  { id: 1, text: "Kindness in every interaction" },
  { id: 2, text: "Safety and peace of mind" },
  { id: 3, text: "Respect for your choices and dignity" },
  { id: 4, text: "Reliable care you can count on" },
  { id: 5, text: "Helping your loved one live independently with confidence" },
];

export default function FamilyFocus() {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6">
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
            {/* Blue decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#00269B] rounded-lg -z-10"></div>

            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <ImgComp
                src="/images/caregiver-reading.webp"
                alt="Caregiver reading with elderly patient"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div>
              <p className="text-[#00269B] text-sm font-medium mb-2">
                Welcome to Lighthouse Homecare
              </p>
              <h2 className="text-[44px] font-[700] text-[#001967] mb-6">
                Family-Focused Version (for clients and families)
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Lighthouse, we understand that home is more than a place—
                it&apos;s where you should feel safe, respected, and truly cared
                for. Our team is here to guide your loved ones with warmth,
                compassion, and unwavering support.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start justify-start">
              {/* Our Promise */}
              <div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Promise to You
                  </h3>
                  {promises.map((promise) => (
                    <p
                      key={promise.id}
                      className="text-gray-700 leading-relaxed"
                    >
                      {promise.text}
                    </p>
                  ))}
                </div>

                {/* What We Stand For */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What We Stand For
                  </h3>
                  <ul className="space-y-3">
                    {standForItems.map((item) => (
                      <li key={item.id} className="flex items-start">
                        <span className="text-[#00269B] mr-2">•</span>
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call-to-Action Card */}
              <motion.div
                className=" bg-[#2B4CB8] w-full rounded-2xl p-8 text-center relative overflow-hidden "
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                    <Phone className="w-8 h-8 text-[#2B4CB8]" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Clarify your queries call us now
                  </h3>

                  <motion.a
                    href="tel:666123499800"
                    className="inline-block bg-white text-[#2B4CB8] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    07397 029 192
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
