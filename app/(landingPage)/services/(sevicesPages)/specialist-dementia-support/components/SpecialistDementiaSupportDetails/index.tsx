"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

const serviceItems = [
  { id: 1, text: "Consistent, one-to-one support" },
  { id: 2, text: "Personal care: washing, dressing, and appearance" },
  { id: 3, text: "Medication reminders and assistive aids" },
  { id: 4, text: "Mobility support to reduce fall risks" },
  { id: 5, text: "Emotional companionship and respite care" },
  { id: 6, text: "Help managing sleep, mood, and incontinence" },
];
const SpecialistDementiaSupportDetails = () => {
  return (
    <div
      className=" bg-gradient-to-br from-[#00269B] to-[#000D35] py-20 relative overflow-hidden"
      style={{ backgroundImage: "url('/images/blue-bg.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* What Is Overnight Care? */}
          <div className="space-y-6">
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                What Is Dementia Care?{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Dementia care refers to a personalised, skilled care approach
                  designed to support people who have been given a dementia
                  diagnosis. With over 200 subtypes of dementia including
                  Alzheimer’s disease, vascular dementia, frontotemporal
                  dementia, Lewy Body dementia, and mixed dementia, the effects
                  can vary significantly between individuals.
                </p>
                <p>
                  This type of care addresses common challenges such as symptoms
                  of memory loss, sleep disturbance, confusion, changes in
                  behaviour, and reduced mobility. Our trained team provides
                  condition-led care and tailored assistance to meet the
                  evolving physical, emotional, and psychological needs of each
                  client.
                </p>
                <p>
                  At Lighthouse Homecare, we don&apos;t believe in
                  one-size-fits-all solutions. Our approach is rooted in
                  personalised care plans developed through a comprehensive care
                  needs assessment, taking into account medical history,
                  preferences, personality, and the family’s input.
                </p>
              </div>
            </div>
          </div>

          {/* Tailored for Individual Needs */}
          <div className="space-y-6">
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                Why Choose Dementia Care at Home?{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  For those living with dementia, unfamiliar environments can
                  cause confusion and anxiety. Receiving care at home helps
                  preserve independence and supports cognitive wellbeing.
                </p>
                <p> In-home dementia care offers:</p>
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
                <p>
                  We also collaborate with trusted organisations like the
                  Alzheimer’s Society and Skills for Care to ensure our support
                  remains compassionate and informed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <ImgComp
          src="/images/blue-bg.webp"
          alt="Background"
          className="opacity-100"
        />
      </div>
    </div>
  );
};

export default SpecialistDementiaSupportDetails;
