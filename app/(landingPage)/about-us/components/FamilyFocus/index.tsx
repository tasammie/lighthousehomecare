"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

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
    text: "Like a lighthouse guiding ships through stormy waters, we’re here to offer steady, dependable care — tailored to your unique needs and always delivered with heart.",
  },
];

const standForItems: StandForItem[] = [
  { id: 1, text: "Kindness in every interaction" },
  { id: 2, text: "Safety and peace of mind" },
  { id: 3, text: "Respect for your dignity and choices" },
  { id: 4, text: "Reliable care you can trust" },
  { id: 5, text: "Confidence to live independently at home" },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                src="/lighthouse-staff/family-focus.webp"
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
                Family-Focused Care
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Lighthouse Homecare, we know that home is far more than just
                a place — it’s where you should feel safe, respected, and
                genuinely cared for. Our team is here to support your loved ones
                with warmth, compassion, and unwavering commitment.
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
                  <ul className="space-y-3  ">
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
                className=" bg-[#2B4CB8] w-full rounded-2xl p-8 text-center relative overflow-hidden  md:w-[900px] md:h-[483px] flex flex-col items-center justify-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full"></div>

                <div className="relative z-10 w-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.4812 18.5919C32.4806 15.7968 31.3701 13.1164 29.3936 11.1399C27.4172 9.16351 24.7367 8.05291 21.9416 8.05236M39.7062 17.8544C39.7062 15.6399 39.27 13.447 38.4224 11.401C37.5749 9.35497 36.3326 7.49597 34.7666 5.93012C33.2005 4.36426 31.3414 3.12222 29.2953 2.27493C27.2492 1.42763 25.0562 0.99167 22.8416 0.991943M21.6062 37.3815C20.9812 37.0961 20.3583 36.8107 19.7354 36.4711C16.6798 34.7448 13.8729 32.6114 11.3916 30.1294C8.17638 27.1015 5.53465 23.5175 3.5937 19.5503C2.55539 17.4193 1.85399 15.1401 1.51454 12.794C1.05658 10.4235 1.31926 7.97012 2.2687 5.75028C2.85444 4.79608 3.56176 3.92208 4.37287 3.15028C4.70201 2.78202 5.10216 2.48406 5.5493 2.27427C5.99644 2.06448 6.48136 1.94719 6.97495 1.92944C8.00204 2.08361 8.93329 2.62111 9.57495 3.43569C10.9791 4.99611 12.4854 6.40028 13.9666 7.88153C14.55 8.38153 14.9145 9.08986 14.9812 9.85653C14.9562 10.5024 14.7083 11.1169 14.2791 11.5982C13.7854 12.2232 13.1875 12.794 12.6166 13.3899C12.2714 13.7223 12.0074 14.1297 11.8448 14.5806C11.6822 15.0314 11.6256 15.5136 11.6791 15.9899C12.0375 17.1044 12.652 18.1211 13.4729 18.9544C14.4577 20.2981 15.4896 21.6065 16.5666 22.8774C18.5754 25.1946 20.955 27.1624 23.6083 28.7003C23.9757 28.9777 24.4101 29.1528 24.8672 29.2077C25.3242 29.2626 25.7877 29.1953 26.2104 29.0128C27.0916 28.519 27.877 27.8669 28.5229 27.0899C29.0824 26.4092 29.8833 25.9711 30.7583 25.8669C31.5375 25.9086 32.2708 26.2419 32.8125 26.8044C33.5125 27.4003 34.1104 28.1024 34.7604 28.7524C35.4104 29.4024 35.9312 29.8711 36.477 30.4669C37.1312 31.0447 37.7458 31.66 38.3208 32.3128C38.7666 32.8899 38.9812 33.6149 38.9187 34.3399C38.6865 35.208 38.1864 35.9808 37.4895 36.5482C36.5082 37.5686 35.316 38.3625 33.9961 38.8745C32.6763 39.3865 31.2606 39.6044 29.8479 39.5128C26.9875 39.3541 24.1848 38.6297 21.6062 37.3815Z"
                        stroke="#00269B"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Clarify your queries call us now
                  </h3>

                  <motion.a
                    href="tel:07397 029 192"
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
