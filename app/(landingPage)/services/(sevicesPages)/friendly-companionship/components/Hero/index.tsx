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
                src="/images/friendly-companion-service.webp"
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
                Friendly Companion Service{" "}
              </h1>
              <h2 className="text-xl font-semibold text-[#00269B] mb-6">
                A Warm Presence, A Brighter Day{" "}
              </h2>
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Everyone deserves a bit of companionship — a listening ear, a
                shared story, or simply someone to brighten the day. Whether
                it’s helping with daily routines, enjoying a conversation over
                tea, or easing the feeling of loneliness, Lighthouse’s Friendly
                Companion service is here to bring meaningful human connection
                into the lives of those we support.
              </p>
              <p>
                At Lighthouse, we believe that companionship is more than just
                presence — it&apos;s about fostering comfort, confidence, and
                emotional well-being. Our companions provide reassurance and joy
                in small everyday moments that make a big difference.
              </p>
              <p>
                👉 Discover how our companionship care can help your loved one
                feel more connected, supported, and truly seen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
