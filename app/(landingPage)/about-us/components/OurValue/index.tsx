"use client";
import { motion } from "framer-motion";

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: Value[] = [
  {
    id: 1,
    title: "Guidance with Compassion",
    description:
      "We are a steady light in times of need leading with empathy, listening deeply, and acting with kindness in all we do.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Safety & Trust",
    description:
      "Like the lighthouse standing strong against every storm, we are committed to creating a secure, dependable environment where our clients and their families feel peace of mind.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5C16.4,11 17,11.4 17,12V16C17,16.6 16.6,17 16,17H8C7.4,17 7,16.6 7,16V12C7,11.4 7.4,11 8,11H8.5V10C8.5,8.6 9.6,7 12,7M12,8.2C10.2,8.2 9.2,9 9.2,10V11H14.8V10C14.8,9 13.8,8.2 12,8.2Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Dignity & Respect",
    description:
      "Every person is unique and valued. We honour each individual's story, culture, and choices with unwavering respect.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Excellence with Heart",
    description:
      "We deliver high-quality care with dedication and warmth—going beyond the standard to make a real difference in our clients' lives.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Integrity & Transparency",
    description:
      "We uphold honesty, accountability, and openness in every interaction—building trust that shines through our care.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Empowerment & Independence",
    description:
      "We support individuals to live life on their own terms—encouraging confidence, autonomy, and joy in daily living.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9,12L11,14L15,10L13.59,8.59L11,11.17L9.41,9.59L9,12M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
      </svg>
    ),
  },
];

interface ValueCardProps {
  value: Value;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  return (
    <motion.div
      className="text-center space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-center text-white/80 mb-6">{value.icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
      <p className="text-white/90 leading-relaxed text-base">
        {value.description}
      </p>
    </motion.div>
  );
};

export default function OurValues() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-[#2B4CB8] to-[#1E3A8A] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our Values
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
