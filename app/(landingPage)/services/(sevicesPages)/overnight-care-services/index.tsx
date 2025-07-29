"use client";

import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import OvernightCareDetails from "./components/OvernightCareDetails";
import OvernightCareOptions from "./components/OvernightCareOptions";
import WhyChooseOvernight from "./components/WhyChooseOvernight";

export default function OvernightCareServices() {
  return (
    <div>
      <Hero />
      <OvernightCareDetails />
      <OvernightCareOptions />
      <WhyChooseOvernight />
      {/* <OvernightCarerServices /> */}

      <CareBannerComponent
        text="You’re not simply choosing a care service, you’re choosing a team that genuinely cares."
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Elderly care background"
      />
      <FAQ />
    </div>
  );
}
