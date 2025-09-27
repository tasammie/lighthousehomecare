"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const staff = [
  {
    name: "Paul Matney",
    role: "Team Member",
    image: "/lighthouse-staff/team1.webp",
    className: "text-black md:text-white",
    imageStyle: "object-top",
  },
  {
    name: "Paul Matney",
    role: "Team Member",
    image: "/lighthouse-staff/team2.webp",
    className: "text-white",
    imageStyle: "object-top",
  },
  {
    name: "Paul Matney",
    role: "Team Member",
    image: "/lighthouse-staff/team3.webp",
    className: "text-white",
    imageStyle: "object-top",
  },
  // Add more staff objects here as needed
];

export default function NursingStaff() {
  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background halves behind all content */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-white z-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0">
        <Image
          src="/images/blue-bg.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <motion.div
        className="relative z-10"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <div className="text-center pt-16 pb-8">
          <p className="text-blue-600 text-lg font-medium mb-4">
            Meet The Team
          </p>
          <h1 className="text-[44px] font-[700] text-[#001967] mb-12">Team</h1>
        </div>

        {/* Team Cards Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-0 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {staff.map((member, idx) => (
              <div key={idx} className="bg-transparent rounded-lg p-4 ">
                <div className="w-full aspect-square bg-[#C6C6C6]  rounded-lg overflow-hidden relative ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover p-5 border ${member.imageStyle}`}
                  />
                </div>
                <div className="flex items-center justify-center flex-col">
                  {/* <h3
                    className={`text-xl font-bold  mt-4 ${
                      member.className || ""
                    }`}
                  >
                    {member.name}
                  </h3> */}
                  <p
                    className={`text-[#FFFFFF] text-sm mt-5 ${
                      member.className || ""
                    }`}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Hiring Section */}
        <div className="text-center pt-2 pb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            We&apos;re hiring!
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Unemployed looking for a caregiver job, feel free to reach out, we
            have amazing jobs waiting for you.
          </p>
          <Link href={"#"}>
            <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition-colors duration-200">
              Apply Now
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
