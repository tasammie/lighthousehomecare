import CustomButton from "@/components/CustomButton";
import React from "react";

type Feature = {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: "📋",
    iconColor: "text-gray-600",
    title: "Tailored for You",
    description: `We know every individual has their own story, routine, and preferences. That's why we don't believe in "one-size-fits-all" care. From the first consultation, we listen closely to understand your unique needs and work with you to build a personalised care plan — whether it's help with daily tasks, companionship, or more complex care.`,
  },
  {
    id: 2,
    icon: "💙",
    iconColor: "text-blue-600",
    title: "Care with Heart",
    description: `At the core of our service is compassion. Our caregivers are handpicked not just for their skills, but for their empathy and humanity. We build genuine relationships with those we care for — treating each person with the respect, kindness, and attention they deserve. This emotional connection is what transforms our care into something truly meaningful.`,
  },
  {
    id: 3,
    icon: "🏆",
    iconColor: "text-yellow-600",
    title: "Skilled & Reliable Team",
    description: `All of our caregivers are fully trained, experienced, and supported through continuous learning. We conduct thorough background checks and ensure each team member meets our high standards of professionalism and reliability. You can trust us to show up — and to show up with excellence.`,
  },
  {
    id: 4,
    icon: "🏠",
    iconColor: "text-green-600",
    title: "Comfort of Home",
    description: `There's no place like home — especially when facing the challenges of aging or recovery. We help people remain in familiar surroundings, maintain their routines, and retain their sense of independence. It's not just about care; it's about preserving dignity and quality of life.`,
  },
  {
    id: 5,
    icon: "⭐",
    iconColor: "text-yellow-600",
    title: "Excellence You Can Trust",
    description: `Our reputation is built on consistency, integrity, and positive outcomes. We hold ourselves to the highest standards of care, monitoring quality every step of the way. Families across the community choose Lighthouse Homecare because they know we'll go above and beyond — always.`,
  },
];

const LighthouseHome = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 md:p-0 bg-white my-20">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[#00269B] text-sm mb-2">
          Consider lighthouse as the best carehome
        </p>
        <h1 className="text-[44px] font-bold text-[#001967] mb-4">
          Why Choose Lighthouse
          <br />
          Homecare?
        </h1>
        <div className="border-b border-gray-300 w-full"></div>
      </div>

      {/* Features */}
      <div className="space-y-8">
        {features.map((f) => (
          <FeatureItem key={f.id} {...f} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Still have a question?
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Support details to capture customers that might be on the fence.
        </p>
        <CustomButton
          text="Contact Us"
          className="bg-blue-700 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors"
          link="contact"
        />
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  iconColor,
  title,
  description,
}) => (
  <div className="border-b border-gray-300 pb-8">
    <div className="flex flex-col md:flex-row items-start gap-4">
      <div className="flex-shrink-0">
        <span className={iconColor}>{icon}</span>
      </div>
      <div className="md:flex-1">
        <h3 className="font-semibold text-lg md:text-[18px] text-[#000000] mb-3">
          {title}
        </h3>
      </div>
      <div className="mt-2 md:mt-0 md:flex-1">
        <p className="text-[#3B3B3B] text-base md:text-[18px] font-[400] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default LighthouseHome;
