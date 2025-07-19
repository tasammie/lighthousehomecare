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
      "At Lighthouse Homecare Ltd, our approach is founded on building trust and forming meaningful relationships with those we care for. We don't just offer support — we connect on a personal level ensuring each person feels seen, heard, and genuinely valued. Every care plan is crafted to reflect the individual, not the system.",
  },
  {
    id: 2,
    title: "Our Philosophy",
    description:
      "We believe that meaningful care starts with a real relationship — one built on trust. That's why we take the time to understand every person — their preferences, routines, and emotional needs. This approach allows us to deliver care that feels natural, comfortable, and enriching from day one.",
  },
  {
    id: 3,
    title: "Bespoke Support Plans",
    description:
      "No two people are the same — and neither are our care plans. We design every support package to fit the unique lifestyle, health needs, and aspirations of the individual. Our aim is to deliver more focused personal care. Our goal is to empower independence while preserving dignity.",
  },
  {
    id: 4,
    title: "Genuine Connection",
    description:
      "We match clients with compassionate caregivers who not only assist with daily tasks but build friendships through empathy, conversation, and consistency. Our carers aren't just there to help — they're there to uplift!",
  },
  {
    id: 5,
    title: "Ongoing Communication",
    description:
      "We stay in constant touch with you and your loved ones, adapting to circumstances and remaining open, responsive and transparent every step of the way.",
  },
  {
    id: 6,
    title: "Emotional Presence",
    description:
      "True care goes beyond physical needs. Our team is trained to offer emotional reassurance — providing reassurance, listening without judgment, and offering a comforting presence through all seasons of life.",
  },
  {
    id: 7,
    title: "What Makes Us Different",
    description:
      "Our care stands out because of the values and dedication we bring to each individual and family we serve.",
  },
  {
    id: 8,
    title: "Relationship-First Culture",
    description:
      "We focus on long-term connection, not just tasks. It's about creating safe, trusting relationships that enrich the lives of our clients and their families.",
  },
  {
    id: 9,
    title: "Empowered, Caring Professionals",
    description:
      "Our carers are passionate individuals who bring heart, skill, and integrity to their work. Every visit is a reflection of their commitment to wellbeing and dignity.",
  },
  {
    id: 10,
    title: "Tailored with Purpose",
    description:
      "Everything we do is designed around the person — not a checklist. From ongoing care support style, your preferences guide the journey.",
  },
  {
    id: 11,
    title: "Up-to-Date, Always",
    description:
      "We continually invest in training and skill-building so that our staff are always equipped with the best knowledge and techniques to deliver care of the highest standard.",
  },
  {
    id: 12,
    title: "Safety & Excellence Assured",
    description:
      "Every aspect of our service is held to the highest quality benchmarks. From regular audits to client feedback, we are proactive in maintaining care that is safe, respectful, and responsive.",
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
            Care That Begins with Connection and Grows with You
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We believe the best care starts with trust, grows through
            understanding, and thrives on genuine relationships that honour your
            unique needs and journey.
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
