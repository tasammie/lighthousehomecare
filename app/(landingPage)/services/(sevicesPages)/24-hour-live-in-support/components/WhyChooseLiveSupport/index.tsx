"use client";
import { motion } from "framer-motion";

interface Benefit {
  id: number;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Safe Rest & Support at Night",
    description:
      "A trained carer is always nearby to provide reassurance, assist with movement, or respond to emergencies — reducing risks and promoting restful sleep.",
  },
  {
    id: 2,
    title: "Tailored to Individual Needs",
    description:
      "Whether it's hourly check-ins, toileting support, or regular repositioning, care plans are personalised for maximum comfort and well-being.",
  },
  {
    id: 3,
    title: "Ideal for Dementia or Post-Hospital Clients",
    description:
      "Many individuals feel disoriented or anxious at night — especially those living with dementia or recovering from hospital discharge. Overnight carers provide steady emotional and physical support.",
  },
  {
    id: 4,
    title: "Flexible & Cost-Efficient",
    description:
      "Compared to full-time live-in care, overnight services offer targeted support only when needed, making them an affordable and practical choice.",
  },
];

const approach = {
  title: "A Thoughtful, Client-First Approach",
  points: [
    "At Lighthouse Homecare Ltd., we believe that quality care shouldn't stop when the sun goes down. Our night carers are compassionate, professional, and specially trained to deliver care that's calm, attentive, and focused on preserving your loved one's dignity and independence.",
    "Whether it's short-term support following surgery or long-term night monitoring for peace of mind, our overnight care is built around you and your family's unique rhythms.",
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
          <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
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
            Why Choose Overnight Care Over Other Options?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Overnight care offers essential peace of mind and uninterrupted
            support when your loved one needs it most — through the night.
            Whether it&apos;s for a few nights a week or consistent overnight
            supervision, our care ensures safety, comfort, and dignity after
            hours.
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
              Key Benefits of Overnight Care
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
