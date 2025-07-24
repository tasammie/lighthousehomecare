/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CustomButton from "@/components/CustomButton";
import { motion } from "framer-motion";
import { ActivityCard } from "../../../friendly-companionship/components/WhatHappenVisit";

interface VisitActivity {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const companionItems = [
  {
    id: 1,
    description:
      "All Lighthouse Homecare services are regulated by the Care Quality Commission (CQC) and delivered by carers who undergo specialist dementia training and thorough background checks. We also collaborate with community mental health teams to ensure coordinated care when multiple professionals are involved.",
  },
  {
    id: 2,
    description: "Our support planning includes:",
    list: [
      "Risk assessments and home safety checklists",
      "Mobility aids and fall-prevention strategies",
      "Visual aids like LCD displays, labels, signs, and reminder clocks",
      "Safe kitchen tools such as kettle tippers",
      "Encouraging outdoor access with secure walking areas and fresh air",
    ],
  },
];
const visitActivities: VisitActivity[] = [
  {
    id: 1,
    title: "Personalised Daily Home Care",
    description:
      "We provide hourly dementia care to assist with daily tasks like bathing, dressing, nutrition, and hydration. Our support also includes communication, routine reinforcement, and safe home navigation using tools such as hearing aids and light sensors.",
    bgColor: "bg-teal-200",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "Specialist Live-In Dementia Care",
    description:
      "Our live-in care services provide round-the-clock support for those who require a higher level of assistance. A dedicated personal assistant lives with your loved one, offering companionship, safety, and skilled care tailored to complex needs – all while avoiding hospital admissions.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
  {
    id: 3,
    title: "Night-Time and Respite Care",
    description:
      "Night-time confusion and restlessness are common challenges for people with dementia. Our night-time care ensures safety and comfort overnight. Families can also benefit from flexible respite care, giving unpaid carers time to rest and recover.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  },
];

// Create a custom component to handle list items
const CustomCompanionCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-3">
        <div className="font-bold text-gray-900">{item.id}.</div>
        <div>
          <p className="text-gray-700 leading-relaxed text-sm mb-2">
            {item.description}
          </p>
          {item.list && (
            <div className="ml-4 space-y-2">
              {item.list.map((listItem: string, idx: number) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-800 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {listItem}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function TypesofDementia() {
  return (
    <motion.section
      className="py-16 bg-gray-50 mt-5"
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
            Types of Dementia Care Services from Lighthouse Homecare{" "}
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl text-[18px]">
            Each visit is thoughtfully tailored to your loved one’s unique needs
            and routines. From gentle support with daily tasks to nurturing
            communication and safe, familiar surroundings, our carers bring
            reassurance, dignity, and heartfelt connection to every moment.
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
            link="contact"
          />
        </motion.div>

        <div className="my-8 ">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6 leading-tight">
            How Lighthouse Homecare Ensures Quality and Safety{" "}
          </h2>
          <div className="space-y-4">
            {companionItems.map((item, index) => (
              <CustomCompanionCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
