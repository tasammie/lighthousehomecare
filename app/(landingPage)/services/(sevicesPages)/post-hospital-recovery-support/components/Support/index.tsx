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
      "We create tailored care plans based on your loved one's medical condition, preferences, and recovery goals. Each plan is developed in collaboration with medical professionals and family members to ensure consistency, comfort, and confidence.",
  },
  {
    id: 2,
    title: "Skilled Caregiving Team",
    description:
      "Our carers are trained in a wide range of clinical and recovery-based support, including medication prompts, mobility assistance, wound care routines, and gentle rehabilitation. We maintain close communication with hospital teams and GPs to ensure continuity of care.",
  },
  {
    id: 3,
    title: "Focus on Restoring Independence",
    description:
      "Recovery isn't just about getting back to the life your loved one enjoys. We help them rebuild their daily routines, offering practical support that empowers them to gradually regain confidence and self-sufficiency.",
  },
  {
    id: 4,
    title: "Emotional & Companionship Support",
    description:
      "Being discharged can feel isolating and overwhelming. Our carers provide not just physical help, but emotional reassurance—whether through gentle conversation, a calming presence, or simply being there through the night.",
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
                Helping Your Loved One Heal at Home, With Confidence and Dignity
              </p>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p className="text-[18px]">
                  When someone you care about is preparing to return home after
                  a hospital stay, the days that follow can be just as critical
                  as the treatment they received. At Lighthouse Homecare, our
                  Post-Hospital Recovery Support service is designed to ensure
                  that transition is safe, smooth, and supportive. Whether
                  recovering from surgery, illness, or an unexpected fall, our
                  carers help individuals rebuild strength and regain
                  independence in the comfort of their own home.
                </p>
                <p className="text-[18px]">
                  This service is particularly beneficial for elderly
                  individuals or those with more complex care needs. Instead of
                  facing the challenges of recovery alone, your loved one
                  receives compassionate, round-the-clock or part-time support
                  from a professional care team that truly understands their
                  needs.
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
              Navigating finances can feel daunting during times of illness. If
              your loved one qualifies, NHS Continuing Healthcare may help fund
              in-home recovery support. We can assist in understanding the
              process and coordinating care options that align with what&apos;s
              available.
            </p>
          </div>

          <div className="border-t-2 border-gray-200 pt-6 grid lg:grid-cols-2 gap-8">
            <h3 className="text-xl md:text-[36px] font-bold text-gray-900 mb-4">
              Arranging Recovery Care Is Simple
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Lighthouse, we work directly with hospitals, discharge
              planners, GPs, and families to ensure every transition from
              hospital to home is carefully managed. Our goal is to reduce
              stress, support healing, and provide families with the peace of
              mind that comes from knowing someone is there—every step of the
              way.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
