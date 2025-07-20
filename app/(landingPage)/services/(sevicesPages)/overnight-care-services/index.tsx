"use client";

import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import OvernightCareDetails from "./components/OvernightCareDetails";
import OvernightCarerServices from "./components/OvernightCarerServices";
import WhyChooseOvernight from "./components/WhyChooseOvernight";

export default function OvernightCareServices() {
  return (
    <div>
      <Hero />
      <OvernightCareDetails />
      <OvernightCarerServices />
      <WhyChooseOvernight />
      <CareBannerComponent
        text="You're not just choosing a care service — you're choosing a team that truly cares"
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.png"
        imageAlt="Elderly care background"
      />
      <FAQ />
    </div>
  );
}
