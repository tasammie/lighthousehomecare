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
      <div className="max-w-7xl mx-auto px-6 md:px-0">
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
                src="/images/specialist-dementia-support.webp"
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
              <h1 className="text-4xl md:text-[42px] font-bold text-[#000000] mb-4 md:w-[60%]">
                Specialist Dementia Support{" "}
              </h1>
              <h2 className="text-xl font-semibold text-[#00269B] mb-6">
                Specialist In-Home Dementia Support for Your Loved Ones{" "}
              </h2>
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                At Lighthouse Homecare, we understand that familiar surroundings
                can make a world of difference for someone living with dementia.
                The comforting scent of a favourite meal, a cherished family
                photo, or simply knowing where the light switches are – these
                everyday experiences provide much-needed emotional support and
                help maintain dignity.
              </p>
              <p>
                Our highly trained Care Experts deliver compassionate and
                responsive dementia care in the comfort of your loved one’s own
                home, supporting not only their care needs but also their
                identity, preferences, and routine. Whether it&apos;s
                early-stage support or advanced live-in dementia care, our
                professional carers are here to help you and your family
                navigate this journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
