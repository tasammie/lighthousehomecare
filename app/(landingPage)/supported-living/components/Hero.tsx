import React from "react";
import Link from "next/link";
import { ImgComp } from "@/components/ImgComp";

const Hero: React.FC = () => {
  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <p className="text-primaryColor font-semibold text-sm mb-3 tracking-wider uppercase">
            SUPPORTED LIVING SERVICES
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Supported Living that feels like home
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            At Lighthouse Homecare Ltd, we support adults to live with greater
            independence, confidence, and choice—within a safe, supportive home
            environment. Our approach is person-centred, compassionate, and
            outcomes-focused, helping individuals build life skills, feel secure,
            and stay connected to their community.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <Link
              href="/contact#book-a-call"
              className="inline-flex items-center justify-center bg-primaryColor text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
            >
              Book a Call
            </Link>

            <Link
              href="/contact#book-a-call"
              className="inline-flex items-center justify-center border-2 border-primaryColor text-primaryColor px-6 py-3 rounded-full font-semibold hover:bg-primaryColor/5 transition"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
            <ImgComp
              src="/images/friendly-companion-service.webp"
              alt="Support worker helping an adult build independent living skills."
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
