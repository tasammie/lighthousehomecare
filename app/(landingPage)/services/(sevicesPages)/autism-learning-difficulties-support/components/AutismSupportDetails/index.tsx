import { ImgComp } from "@/components/ImgComp";
import React from "react";

const AutismSupportDetails = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#00269B] to-[#000D35] py-20 relative overflow-hidden"
      style={{ backgroundImage: "url('/images/blue-bg.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0 relative z-10">
        {/* Why Family Choose Us */}
        <div className="border-t border-white/70 pt-8 mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <h2 className="md:col-span-4 text-2xl md:text-2xl font-bold text-white mb-4 md:mb-0">
            Why Family Choose Us
          </h2>
          <ul className="md:col-span-8 text-white/90 text-base space-y-3 list-disc pl-5">
            <li>
              Compassionate, skilled team trained in autism awareness, Positive
              Behaviour Support (PBS), and safeguarding.
            </li>
            <li>
              Tailored support plans built around personal strengths and life
              goals.
            </li>
            <li>
              Autism-friendly practices including communication passports,
              visual aids, and sensory-friendly environments.
            </li>
            <li>
              Family and professional partnerships – we work closely with
              parents, schools, NHS, and social care teams.
            </li>
            <li>
              CQC-aligned quality standards with safeguarding at the heart of
              everything we do.
            </li>
          </ul>
        </div>
        {/* Who We Support */}
        <div className="border-t border-white/70 pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <h2 className="md:col-span-4 text-2xl md:text-2xl font-bold text-white mb-4 md:mb-0">
            Who We Support
          </h2>
          <div className="md:col-span-8 text-white/90 text-base">
            <div className="mb-2">
              We work with young people (13+) and adults who have:
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Learning difficulties</li>
              <li>Autism spectrum conditions</li>
              <li>
                ADHD, sensory processing differences, or communication needs
              </li>
              <li>Mental health or complex behavioural needs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <ImgComp
          src="/images/blue-bg.webp"
          alt="Background"
          className="opacity-100"
        />
      </div>
    </div>
  );
};

export default AutismSupportDetails;
