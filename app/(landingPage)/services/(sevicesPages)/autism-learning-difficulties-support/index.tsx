import React from "react";
import Hero from "./components/Hero";
import AutismSupportDetails from "./components/AutismSupportDetails";
import AutismSupport from "./components/AutismSupport";
import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import FAQ from "./components/FAQ";

const AutismLearningDifficultiesSupport = () => {
  return (
    <div>
      <Hero />
      <AutismSupportDetails />
      <AutismSupport />
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
};

export default AutismLearningDifficultiesSupport;
