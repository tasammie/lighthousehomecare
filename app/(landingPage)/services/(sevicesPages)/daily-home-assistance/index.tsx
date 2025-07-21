import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import DailyHome from "./components/DailyHome";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowToHelp from "./components/HowToHelp";

const DailyHomeAssistance = () => {
  return (
    <div>
      <Hero />
      <HowToHelp />
      <DailyHome />
      <CareBannerComponent
        text="You’re not just choosing a care service — you’re choosing a team that truly cares"
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Elderly care background"
      />
      <FAQ />
    </div>
  );
};

export default DailyHomeAssistance;
