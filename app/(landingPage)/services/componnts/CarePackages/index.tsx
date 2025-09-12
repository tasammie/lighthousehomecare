"use client";
import CustomButton from "@/components/CustomButton";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface CarePackage {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
  buttonLink: string;
}

const carePackages: CarePackage[] = [
  {
    id: 1,
    title: "24/7 Live-In Support",
    description:
      "Round-the-clock care in your own home for complete peace of mind.",
    image: "/images/live-in-support.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "24-hour-live-in-support",
  },
  {
    id: 2,
    title: "Daily Home Assistance",
    description:
      "Flexible help with everyday tasks, routines, and personal needs.",
    image: "/images/daily-assistance.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "daily-home-assistance",
  },
  {
    id: 3,
    title: "Overnight Care Services",
    description:
      "Support through the night for comfort, safety, and reassurance.",
    image: "/images/overnight-care.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "overnight-care-services",
  },
  {
    id: 4,
    title: "Friendly Companionship",
    description: "A listening ear and friendly face to brighten your day.",
    image: "/images/companionship.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "friendly-companionship",
  },
  {
    id: 5,
    title: "Post-Hospital Recovery Support",
    description:
      "Short-term care to help you regain independence after discharge.",
    image: "/images/recovery-support.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "post-hospital-recovery-support",
  },
  {
    id: 6,
    title: "Compassionate End-of-Life Care",
    description:
      "Comfort-focused care for individuals and their families at life’s final stage.",
    image: "/images/end-of-life-care.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "compassionate-end-of-life-care",
  },
  {
    id: 7,
    title: "Specialist Dementia Support",
    description:
      "Understanding care tailored for individuals living with memory loss.",
    image: "/images/dementia-support.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "specialist-dementia-support",
  },
  {
    id: 8,
    title: "Personalised Care & Hygiene",
    description:
      "Discreet, respectful help with washing, dressing, and personal care.",
    image: "/images/monitoring.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "personalised-care-hygiene",
  },
  {
    id: 9,
    title: "Learning Difficulties & Autism Support",
    description: "Specialist Care Rooted in Emotion & Kindness.",
    image: "/images/monitoring.webp",
    logo: "/images/lighthouse-logo-white.png",
    buttonLink: "specialist-dementia-support",
  },
];

interface PackageCardProps {
  package: CarePackage;
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, index }) => {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer md:w-[472px] h-[360px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pkg.image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 p-8 h-80 flex flex-col justify-between text-white">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <ImgComp
            src={pkg.logo}
            alt="Lighthouse Logo"
            className="h-12 w-auto opacity-90"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-[24px] font-bold mb-4 leading-tight">
            {pkg.title}
          </h3>
          <p className="text-[#D6D4D4] text-[16px] font-[400] leading-relaxed mb-6">
            {pkg.description}
          </p>

          {/* CTA Button */}
          {/* <motion.button
            className="bg-[#00269B] hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button> */}
          <CustomButton
            text="Explore Now"
            className="bg-[#00269B] hover:bg-blue-700 border text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            link={`/services/${pkg.buttonLink}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function CarePackages() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
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
            Care Packages
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our individually designed and delivered care packages are specific
            to the needs of those we assist, allowing your loved ones to retain
            their independence in their own home.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="flex flex-wrap justify-center gap-[56px] max-w-5xl mx-auto">
          {carePackages.map((pkg, index) => (
            <PackageCard key={pkg.id} package={pkg} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
