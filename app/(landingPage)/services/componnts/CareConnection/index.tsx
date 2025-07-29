"use client";
import { motion } from "framer-motion";

interface CareFeature {
  id: number;
  title: string;
  description: string;
}

const careFeatures: CareFeature[] = [
  {
    id: 1,
    title: "Relationship-Based Care Tailored to Your Needs",
    description:
      "At Lighthouse Homecare, we focus on trust and connection — forming meaningful relationships with every individual we care for. We go beyond practical support by engaging on a personal level, ensuring each person feels acknowledged, understood, and truly valued. Every care plan is shaped around the individual — never the system.",
  },
  {
    id: 2,
    title: "Our Philosophy",
    description:
      "We believe meaningful care begins with genuine connection. That’s why we take time to understand every person — their preferences, habits, and emotional needs. This approach allows us to provide care that feels natural, comfortable, and enriching right from the start.",
  },
  {
    id: 3,
    title: "Bespoke Support Plans",
    description:
      "Everyone is unique — and so are our care plans. We create tailored packages to suit individual lifestyles, health needs, and goals. Whether offering assistance at home or delivering focused personal care, our aim is to promote independence and preserve dignity.",
  },
  {
    id: 4,
    title: "Genuine Connection",
    description:
      "We match each client with warm, compassionate carers who not only assist with daily activities but also build lasting bonds through empathy and conversation. Our carers don’t just support — they uplift.",
  },
  {
    id: 5,
    title: "Ongoing Communication",
    description:
      "We stay connected with you and your loved ones, adjusting support as needs evolve. Your feedback shapes our care decisions, and we remain open, responsive, and transparent every step of the way.",
  },
  {
    id: 6,
    title: "Emotional Presence",
    description:
      "Real care extends beyond physical needs. Our team offers emotional companionship — providing comfort, understanding, and judgement-free support through every season of life.",
  },
  {
    id: 7,
    title: "What Makes Us Different",
    description:
      "Our care stands out because of the values and devotion we bring to each person and family we serve.",
  },
  {
    id: 8,
    title: "Relationship-First Culture",
    description:
      "We focus on long-term relationships, not just care tasks. We’re committed to fostering trust and emotional security that enriches the lives of both clients and families.",
  },
  {
    id: 9,
    title: "Empowered, Caring Professionals",
    description:
      "Our carers are dedicated professionals who bring warmth, skill, and integrity to every visit. Each interaction reflects their passion for promoting dignity and wellbeing.",
  },
  {
    id: 10,
    title: "Tailored with Purpose",
    description:
      "Everything we do is shaped around people — never checklists. From schedules to support styles, your preferences lead the way.",
  },
  {
    id: 11,
    title: "Up-to-Date, Always",
    description:
      "We invest consistently in training and development, ensuring our staff have the latest knowledge and techniques to deliver top-quality care.",
  },
  {
    id: 12,
    title: "Safety & Excellence Assured",
    description:
      "We hold ourselves to the highest standards, using regular audits and client feedback to ensure our care remains safe, respectful, and highly responsive.",
  },
];

interface FeatureCardProps {
  feature: CareFeature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3 className="text-lg font-bold text-[#001967] mb-3 leading-tight">
        {feature.title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default function CareConnection() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001967] mb-6">
            Care That Begins with Connection and Grows with You{" "}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We believe exceptional care is built on trust, deepens through
            understanding, and flourishes through genuine relationships that
            honour your unique needs and journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
