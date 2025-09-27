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
                src="/images/autism.png"
                // src="/images/autism-support.png"
                alt="Autism Support"
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
                Learning Difficulties & Autism{" "}
              </h1>
              {/* <h2 className="text-xl font-semibold text-[#00269B] mb-6">
                Specialist Care Rooted in Emotion & Kindness{" "}
              </h2> */}
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                
                Lighthouse Homecare provides personalised support for people with learning
                difficulties and autism, helping them live with dignity,
                independence, and inclusion. Guided by the principles of Right
                Care, Right Support, and Right Culture, our services focus on
                building communication, daily living skills, social interaction,
                and emotional well-being. We work closely with each individual
                and their families to create a safe, supportive environment
                where people can thrive.gnity, respect, and as little discomfort
                as possible
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
