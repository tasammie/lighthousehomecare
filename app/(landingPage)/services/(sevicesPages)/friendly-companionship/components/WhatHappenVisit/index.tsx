"use client";
import CustomButton from "@/components/CustomButton";
import { motion } from "framer-motion";

interface VisitActivity {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const visitActivities: VisitActivity[] = [
  {
    id: 1,
    title: "Emotional Support & Gentle Conversation",
    description:
      "A friendly face and a listening ear can make all the difference. Whether it's sharing stories, flipping through photo albums, or chatting over a cuppa, our companions are here to uplift and connect — one moment at a time.",
    bgColor: "bg-teal-200",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "Everyday Help & Confidence at Home",
    description:
      "From preparing meals together to helping with light chores or video calls to loved ones, our companions offer the right mix of encouragement and practical support to keep your loved one feeling independent and at ease.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
  {
    id: 3,
    title: "Activities That Spark Joy",
    description:
      "We bring meaningful moments back into the day — walks in the park, music, hobbies, or community outings. These simple joys build confidence, restore connection, and brighten every visit with purpose.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ActivityCardProps {
  activity: VisitActivity;
  index: number;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  index,
}) => {
  return (
    <motion.div
      className={`
        ${activity.bgColor}
        rounded-2xl p-8 shadow-lg relative overflow-hidden
        transition-all duration-500 ease-in-out transform
        hover:bg-gradient-to-br hover:from-[#96ECE9] hover:to-teal-300
        hover:scale-105 hover:shadow-xl
        md:h-[400px] flex flex-col justify-between
        cursor-pointer group
      `}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* decorative circles */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F3F0F0] rounded-full transform translate-x-8 translate-y-8" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#E4DFDF] rounded-full transform translate-x-4 translate-y-4" />

      <div className="relative z-10 h-full flex flex-col  justify-center items-center">
        {/* Title */}
        <motion.h3
          className={`text-xl font-bold ${activity.textColor} mb-4 leading-tight
                     group-hover:text-gray-900 transition-colors duration-300 text-[27.34px]`}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {activity.title}
        </motion.h3>

        {/* Description */}
        <p
          className={`${activity.textColor} leading-relaxed text-sm opacity-90
                     group-hover:text-gray-700 transition-colors duration-300 flex-grow text-[18px]`}
        >
          {activity.description}
        </p>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        >
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function WhatHappenVisit() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Header */}
        <motion.div
          className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-[44px] font-bold text-[#1a365d] mb-6">
            What Happens During a Friendly Companion Visit?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl text-[18px]">
            Each visit is thoughtfully shaped around your loved one&apos;s
            personality and preferences. Our dedicated companions bring warmth,
            conversation, and uplifting support to brighten days and foster
            lasting emotional connections.
          </p>
        </motion.div>

        {/* Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visitActivities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* Contact Button */}
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <CustomButton
            text="Contact Us Now"
            className="bg-[#001967] hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
