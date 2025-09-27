import React from "react";
import Image from "next/image";

const AutismSupport = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 p-3 md:p-0  my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Text */}
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#001967] mb-6">
            Learning Difficulties & Autism 
          </h1>
          <p className="text-gray-800 text-lg mb-4">
            When everyday life feels challenging, Lighthouse Homecare is here to
            provide calm, reliable support that respects independence and
            choice.
            <br />
            Our friendly team creates a safe, structured environment so
            individuals with learning difficulties and autism can enjoy daily
            routines with confidence.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4  text-[24px]">
            What We Can Help With:
          </h2>
          <div className="space-y-6">
            {/* 1. Supportive Routines */}
            <div>
              <div className="font-bold text-base mb-1">
                1. Supportive Routines
              </div>
              <div className="text-gray-800 text-base ml-2">
                Gentle help with morning activities, dressing, and preparing for
                the day — encouraging independence step by step.
                <br />
                We work with you to build habits that make each day feel
                smoother and less stressful.
              </div>
            </div>
            {/* 2. Meaningful Activities */}
            <div>
              <div className="font-bold text-base mb-1">
                2. Meaningful Activities
              </div>
              <div className="text-gray-800 text-base ml-2">
                Engaging tasks, hobbies, and community involvement designed to
                build confidence, social skills, and self-expression.
                <br />
                Whether it’s joining local events, enjoying creative play, or
                learning new skills, we make every activity purposeful.
              </div>
            </div>
            {/* 3. Safe, Consistent Care */}
            <div>
              <div className="font-bold text-base mb-1">
                3. Safe, Consistent Care
              </div>
              <div className="text-gray-800 text-base ml-2">
                A trusted presence offering reassurance, emotional support, and
                structure throughout the day.
                <br />
                Families gain peace of mind knowing their loved one is cared for
                with dignity and respect.
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-lg">
            <Image
              src="/lighthouse-staff/team3.png"
              alt="Lighthouse Homecare staff member"
              width={350}
              height={350}
              className="rounded w-full h-full"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutismSupport;
