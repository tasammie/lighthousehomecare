"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceItem {
  id: number;
  text: string;
}

const serviceItems: ServiceItem[] = [
  { id: 1, text: "Morning routines: getting out of bed and ready for the day" },
  { id: 2, text: "Personal care: washing, dressing, and appearance" },
  { id: 3, text: "Toileting and continence support" },
  { id: 4, text: "Preparing meals and drinks, and help with eating" },
  { id: 5, text: "Medication reminders and prescription pickups" },
  { id: 6, text: "Light health tasks, coordinated with medical professionals" },
  { id: 7, text: "Shopping, paying bills, or collecting pensions" },
  { id: 8, text: "Outings and social connections" },
  { id: 9, text: "Companionship and emotional support" },
  { id: 10, text: "Evening routines and getting ready for bed" },
];

export default function HowToHelp() {
  return (
    <motion.section
      className="py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blue-bg.webp"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - Title */}
          <motion.div
            className="lg:col-span-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-t-4 border-white pt-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                How Can Daily Home Assistance Help?
              </h2>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="lg:col-span-2"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Description */}
              <p className="text-[#FFFFFF] text-lg leading-relaxed font-[400] text-[24px]">
                Our compassionate carers provide practical support that helps
                you stay independent, safe, and comfortable at home. Here&apos;s
                what we can assist with:
              </p>

              {/* Service List */}
              <ul className="space-y-4">
                {serviceItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="flex items-start space-x-3 font-[400]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-3"></span>
                    <span className="text-white/90 leading-relaxed">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        {/* Bottom Description */}
        <motion.p
          className="text-[#FFFFFF] text-lg leading-relaxed font-[400] text-[24px] pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Daily Home Assistance is a flexible, cost-effective alternative to
          residential care. It brings peace of mind not just to you, but to your
          family — knowing you&apos;re supported where you feel most
          comfortable: at home.
        </motion.p>
      </div>
    </motion.section>
  );
}
