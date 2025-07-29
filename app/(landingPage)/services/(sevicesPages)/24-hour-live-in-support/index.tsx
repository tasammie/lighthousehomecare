import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import LiveCareDetails from "./components/LiveCareDetails";
import TwentyFourHourCarerServices from "./components/TwentyFourHourCarerServices";
import WhyChooseLiveSupport from "./components/WhyChooseLiveSupport";

const TwentyFourHourLiveInSupport = () => {
  return (
    <div>
      <Hero />
      <LiveCareDetails />

      <TwentyFourHourCarerServices />
      <WhyChooseLiveSupport />

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

export default TwentyFourHourLiveInSupport;
