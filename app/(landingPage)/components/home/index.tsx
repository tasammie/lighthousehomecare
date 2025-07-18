"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start ">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-[400] text-white mb-6 leading-tight text-left">
            Compassionate Care in{" "}
            <span className="block">the Comfort of Your</span>
            <span className="block text-blue-400">Home</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-[20px] text-gray-200 mb-8 max-w-3xl leading-relaxed text-left">
            Personalized support tailored to your needs, delivered with dignity,
            respect, and warmth right where you feel safest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
            <Link
              href="/contact"
              className="group bg-[#00269B] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 border"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
