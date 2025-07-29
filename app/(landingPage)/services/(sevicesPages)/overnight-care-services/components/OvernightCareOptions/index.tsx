"use client";
import CustomButton from "@/components/CustomButton";
import { motion } from "framer-motion";

interface CareOption {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor: string;
}

const careOptions: CareOption[] = [
  {
    id: 1,
    title: "Waking Night Support",
    subtitle: "Attentive care throughout the night",
    description:
      "Waking Night Support is ideal for individuals who require close monitoring and hands-on assistance overnight. A dedicated Lighthouse carer remains fully awake, alert, and ready to respond to any needs as they arise.",
    features: [
      "Support with mobility, repositioning, toileting, or moving safely around the home",
      "Emotional reassurance and a calming presence throughout the night",
      "Immediate response to any unexpected needs or concerns",
    ],
    bgColor: "bg-[#B5E5E0]",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "Sleeping Night Support",
    subtitle: "Peace of mind with light-touch reassurance",
    description:
      "Sleeping Night Support is perfect for those who sleep through the night but feel more secure knowing someone is nearby. Your Lighthouse carer stays at the property and is on hand to assist if needed.",
    features: [
      "Ongoing care guided by a personalised overnight plan",
      "Reduced fall risks or emergencies by having someone present",
      "Mobility help if needed during the night",
    ],
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
];

export default function OvernightCareOptions() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-[44px] font-bold text-[#001967] mb-6">
            Overnight Care Options
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p className="text-[18px]">
              At Lighthouse Homecare, we know that comfort and safety don’t stop
              when night falls. That’s why our overnight care services offer
              dependable, around-the-clock peace of mind — whether you need
              someone awake and alert all night, or simply present for
              reassurance while you rest.
            </p>
            <p>
              We offer two types of overnight care to suit different needs and
              routines:
            </p>
          </div>
        </motion.div>

        {/* Care Options Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-20 mb-16">
          {careOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className={`
                ${option.bgColor}
                rounded-2xl p-8 shadow-lg relative overflow-hidden
                transition-all duration-500 ease-in-out transform
                hover:bg-gradient-to-br hover:from-[#96ECE9] hover:to-teal-300
                hover:scale-105 hover:shadow-xl
                md:h-[580px] flex flex-col justify-between
                cursor-pointer group h-[v]
              `}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* decorative circles */}
              <div className="absolute bottom-0 right-0 w-44 h-44 bg-[#F3F0F0] rounded-full transform translate-x-12 translate-y-12" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E4DFDF] rounded-full transform translate-x-6 translate-y-6" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Title */}
                <motion.h3
                  className={`text-2xl font-bold ${option.textColor} mb-2 
                           group-hover:text-gray-900 transition-colors duration-300`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {option.title}
                </motion.h3>

                {/* Subtitle */}
                <p
                  className={`font-medium ${option.textColor} mb-4 opacity-90 
                             group-hover:text-gray-800 transition-colors duration-300`}
                >
                  {option.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`${option.textColor} leading-relaxed mb-6 opacity-90 
                             group-hover:text-gray-700 transition-colors duration-300`}
                >
                  {option.description}
                </p>

                {/* Service includes */}
                <div className="mb-6">
                  <h4
                    className={`font-semibold ${option.textColor} mb-3 
                               group-hover:text-gray-800 transition-colors duration-300`}
                  >
                    This service includes:
                  </h4>
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className={`flex items-start space-x-3 ${option.textColor} opacity-90 
                                 group-hover:text-gray-700 transition-colors duration-300`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 * featureIndex,
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-2 h-2 bg-current rounded-full mt-2 
                                       group-hover:scale-125 transition-transform duration-300"
                        ></span>
                        <span className="leading-relaxed text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom text */}
                <motion.div
                  className=""
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {option.id === 1 && (
                    <p
                      className={`${option.textColor} text-sm leading-relaxed opacity-90 
                                 group-hover:text-gray-700 transition-colors duration-300`}
                    >
                      With Lighthouse Homecare, your loved one receives full
                      attention, while you gain peace of mind knowing they are
                      safe and supported at all times.
                    </p>
                  )}

                  {option.id === 2 && (
                    <p
                      className={`${option.textColor} text-sm leading-relaxed opacity-90 
                                 group-hover:text-gray-700 transition-colors duration-300`}
                    >
                      Whether recovering from illness or simply seeking peace of
                      mind, our carers provide calm, compassionate support to
                      help you sleep easy — knowing someone is always close by.
                    </p>
                  )}
                </motion.div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-[24px] font-bold text-[#001967] mb-4">
            Let&apos;s find the right overnight solution for your family.
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We’ll work with you to build a tailored overnight care plan that
            fits your unique needs — ensuring trusted support for both your
            loved one and your peace of mind.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CustomButton
              text="Get Started Today"
              className="bg-[#00269B] hover:bg-blue-700 text-white px-8 py-3  font-semibold 
                       transition-all duration-300 shadow-lg hover:shadow-xl"
              link="contact"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
