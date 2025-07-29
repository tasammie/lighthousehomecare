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
      "Consistent Care & Reassurance, Day and Night A dedicated carer is always available to assist with personal care, movement, or emergency needs — helping reduce anxiety and ensuring safety for both clients and families.",
  },
  {
    id: 2,
    description:
      "Entirely Tailored to You Whether it’s assistance with dressing, bathing, medication, or companionship, every care plan is designed to meet individual needs and promote daily wellbeing.",
  },
  {
    id: 3,
    description:
      "Perfect for Long-Term Health Conditions For people living with dementia, Parkinson’s, recovering from a stroke, or managing chronic illness, live-in care provides ongoing stability, reduces confusion, and brings added comfort.",
  },
  {
    id: 4,
    description:
      "Continuity & Familiarity at Home Staying at home allows you to remain close to loved ones, pets, and familiar routines. Live-in care means no upheaval or adjustment to institutional care environments.",
  },
];

const approach = {
  title: "A Compassionate, Person-Centred Approach",
  points: [
    "At Lighthouse Homecare, we believe care should go beyond brief visits. Our live-in carers are trained, empathetic, and fully dedicated to safeguarding each person’s dignity, independence, and quality of life.",
    "Whether your needs are complex or you simply want consistent reassurance, our 24-hour live-in care adapts to your daily preferences, pace, and lifestyle — making it a truly personal alternative to residential care.",
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
