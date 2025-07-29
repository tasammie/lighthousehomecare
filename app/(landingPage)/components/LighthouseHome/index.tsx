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
    description: `We understand that every person has their own story, habits, and preferences. That’s why we don’t offer “one-size-fits-all” solutions. From the very first meeting, we listen carefully to understand your individual needs and work alongside you to create a bespoke care plan — whether it’s support with daily routines, companionship, or something more complex.`,
  },
  {
    id: 2,
    icon: "💙",
    iconColor: "text-blue-600",
    title: "Care with Heart",
    description: `At the heart of what we do is compassion. Our carers are chosen not only for their expertise but for their kindness and humanity. We form genuine bonds with those we support — offering care filled with the dignity, attention, and warmth every person deserves. It’s this emotional connection that makes our care truly meaningful.`,
  },
  {
    id: 3,
    icon: "🧑‍⚕️",
    iconColor: "text-yellow-600",
    title: "Skilled & Reliable Team",
    description: `All of our carers are highly trained, experienced, and continually supported through ongoing professional development. We carry out detailed background checks and hold every team member to the highest standards of professionalism and dependability. You can count on us to arrive on time — and to deliver with excellence.`,
  },
  {
    id: 4,
    icon: "🏡",
    iconColor: "text-green-600",
    title: "Comfort of Home",
    description: `There’s simply no place like home — especially when recovering or coping with ageing. We help individuals stay in familiar surroundings, stick to their daily routines, and preserve a strong sense of independence. Our aim isn’t just care; it’s to uphold dignity and enhance quality of life.`,
  },
  {
    id: 5,
    icon: "🌟",
    iconColor: "text-yellow-600",
    title: "Excellence You Can Trust",
    description: `Our reputation stands on integrity, consistency, and positive results. We adhere to the highest quality standards and carefully monitor every stage of care. Families across the community choose Lighthouse Homecare because they know we’ll go further — always.`,
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
        <p className="text-[Black] text-[18px]font-[400] mb-6">
          Support details to capture customers that might be on the fence.{" "}
        </p>
        <CustomButton
          text="Contact Us"
          className="bg-[#00269B] w-[199px] text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors"
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
