"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface HelpItem {
  id: number;
  title: string;
  description: string;
}

const helpItems: HelpItem[] = [
  {
    id: 1,
    title: "Personalised Care & Hygiene",
    description:
      "From bathing and grooming to dressing and toileting, we assist with sensitive tasks in a way that prioritises comfort and dignity.",
  },
  {
    id: 2,
    title: "Meal Preparation",
    description:
      "We prepare healthy, tasty meals that match your preferences and dietary needs — supporting good nutrition and well-being.",
  },
  {
    id: 3,
    title: "Light Housekeeping",
    description:
      "A tidy space helps create a calmer life. Our carers assist with dusting, vacuuming, dishes, laundry, and general upkeep to keep your home comfortable and clean.",
  },
];

export default function DailyHome() {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#001967] mb-6">
                Daily Home Assistance
              </h1>
              <h2 className="text-xl font-semibold text-[#00269B] mb-6">
                Support with Everyday Routines, Right at Home
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                When daily tasks start feeling overwhelming, our Daily Home
                Assistance service steps in to offer the right help — with
                warmth, respect, and dignity. This support allows individuals to
                remain independent in the comfort of their own home while
                receiving flexible care tailored to their routine.
              </p>
              <p>
                Whether someone needs help once a day or throughout the week,
                our compassionate carers are here to lighten the load with a
                friendly, reliable presence.
              </p>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <ImgComp
                src="/images/daily-assistance-main.webp"
                alt="Caregiver helping with daily home assistance - cooking together"
                className="w-full h-auto rounded-lg shadow-lg md:h-[483px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* What We Can Help With */}
        <div>
          <h3 className="text-2xl font-bold text-[#001967] mb-6">
            What We Can Help With:
          </h3>
          <div className="space-y-6">
            {helpItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.id}. {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
