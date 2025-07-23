"use client";
import { motion } from "framer-motion";

interface Benefit {
  id: number;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    description:
      "Consistent Care & Reassurance Around the Clock A professional carer is always present to provide help with personal care, movement, or emergencies — supporting safety and reducing anxiety for clients and families alike.",
  },
  {
    id: 2,
    description:
      "Completely Tailored to You Whether it’s help with washing, dressing, medication reminders, mobility, or companionship, each care plan is fully personalised to support daily routines and wellbeing.",
  },
  {
    id: 3,
    description:
      "Ideal for Long-Term Health Conditions For individuals living with dementia, Parkinson’s, stroke recovery, or chronic illness, continuous live-in support ensures stability, reduces confusion, and promotes overall comfort.",
  },
  {
    id: 4,
    description:
      "Continuity & Comfort at Home Staying at home means remaining close to family, pets, and familiar surroundings. With live-in support, there’s no need to uproot your life or adjust to institutional care settings.",
  },
];

const approach = {
  title: "A Compassionate, Person-Centred Approach",
  points: [
    "At Lighthouse Homecare Ltd., we know that dependable care should extend beyond a few visits. Our live-in carers are compassionate, trained, and fully committed to protecting the dignity, independence, and lifestyle of the person they support.",
    "Whether for ongoing complex needs or simply reassurance through the day and night, our 24-hour live-in support adapts to each individual’s routines, preferences, and pace of life — making it a truly personal alternative to residential care.",
  ],
};

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
        <div>
          {/* <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3> */}
          <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyChooseLiveSupport() {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#001967] mb-6">
            Why Choose 24-Hour Live-In Support Over Other Options?{" "}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            24-hour live-in care provides continuous, reassuring support for
            individuals who need round-the-clock help — day and night — in the
            comfort of their own home. Whether support is needed due to age,
            illness, or disability, our live-in service ensures safety,
            companionship, and peace of mind without the need to move into a
            residential care facility.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="mb-12"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">⭐</span>
            <h3 className="text-2xl font-bold text-gray-900">
              Key Benefits of 24-Hour Live-In Support{" "}
            </h3>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.id} benefit={benefit} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Thoughtful Approach */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">⭐</span>
            <h3 className="text-2xl font-bold text-gray-900">
              {approach.title}
            </h3>
          </div>

          <div className="space-y-6">
            {approach.points.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
