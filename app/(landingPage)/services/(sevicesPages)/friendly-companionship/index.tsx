import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import FAQ from "./components/FAQ";
import FriendlyCompanionshipCareDetails from "./components/FriendlyCompanionshipCareDetails";
import Hero from "./components/Hero";
import WhatHappenVisit from "./components/WhatHappenVisit";
import WhoWeAre from "./components/WhoWeAre";

const FriendlyCompanionship = () => {
  return (
    <div>
      <Hero />
      <FriendlyCompanionshipCareDetails />
      <WhoWeAre />
      <WhatHappenVisit />

      <CareBannerComponent
        text="Let Lighthouse Homecare help your loved one come home safely—and recover with strength, compassion, and trusted care."
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Elderly care background"
      />
      <FAQ />
    </div>
  );
};

export default FriendlyCompanionship;
