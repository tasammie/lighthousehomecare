"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface RecoveryItem {
  id: number;
  title: string;
  description: string;
}

const recoveryItems: RecoveryItem[] = [
  {
    id: 1,
    title: "Personalised Recovery Plans",
    description:
      "We create tailored plans in collaboration with medical professionals and family, based on your loved one’s medical needs, preferences, and recovery goals.",
  },
  {
    id: 2,
    title: "Skilled Caregiving Team",
    description:
      "Our carers are trained in medication prompts, mobility support, gentle rehab, and wound care — maintaining close coordination with hospital staff and GPs",
  },
  {
    id: 3,
    title: "Support for Independence",
    description:
      " Recovery isn’t just about getting better — it’s about regaining confidence and control. We help your loved one return to their routine, one step at a time",
  },
  {
    id: 4,
    title: "Emotional & Companionship Support",
    description:
      " Being discharged can feel overwhelming. We offer not just physical help, but calming companionship — a reassuring presence through recovery.",
  },
];

interface RecoveryCardProps {
  item: RecoveryItem;
  index: number;
}

const RecoveryCard: React.FC<RecoveryCardProps> = ({ item, index }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-3">
        <div className="font-bold text-gray-900">{item.id}.</div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-base">
            {item.title}
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Support() {
  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0]:">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-3 leading-tight">
                Post-Hospital Recovery Support at Lighthouse Homecare
              </h2>
              <p className="text-base text-gray-700 mb-6 font-medium">
                Helping Your Loved One Heal at Home, With Confidence and Dignity{" "}
              </p>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p className="text-[18px]">
                  Returning home after a hospital stay can feel daunting — but
                  with Lighthouse Homecare, it doesn’t have to be. Our
                  Post-Hospital Recovery Support is designed to make that
                  transition safe, smooth, and supportive.
                </p>
                <p className="text-[18px]">
                  Whether your loved one is recovering from surgery, illness, or
                  a fall, our compassionate carers provide round-the-clock or
                  part-time care to help rebuild strength and restore
                  independence in the comfort of home.
                </p>
                <p>
                  This service is especially beneficial for older adults or
                  those with complex care needs, ensuring no one faces recovery
                  alone.
                </p>
              </div>
            </div>

            {/* What Our Recovery Support Includes */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What Our Recovery Support Includes:
              </h3>
              <div className="space-y-4">
                {recoveryItems.map((item, index) => (
                  <RecoveryCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <ImgComp
                src="/images/post-hospital-care.webp"
                alt="Caregiver providing post-hospital recovery support to elderly person"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Support with Funding */}
        <motion.div
          className="mt-12 space-y-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="border-t-2 border-gray-200 pt-6 grid lg:grid-cols-2 gap-8">
            <h3 className="text-xl md:text-[36px] font-bold text-gray-900 mb-4">
              Support with Funding
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              If your loved one qualifies, NHS Continuing Healthcare may help
              cover in-home recovery services. We’ll assist you in navigating
              eligibility, funding options, and care planning.
            </p>
          </div>

          <div className="border-t-2 border-gray-200 pt-6 grid lg:grid-cols-2 gap-8">
            <h3 className="text-xl md:text-[36px] font-bold text-gray-900 mb-4">
              Simple to Arrange{" "}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We work closely with hospitals, GPs, and discharge teams to ensure
              a smooth return home. Our priority is to ease stress, promote
              healing, and give families peace of mind knowing their loved one
              is in caring, capable hands.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
