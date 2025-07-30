import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import CompassionateEndOfLifeCareDetails from "./components/CompassionateEndOfLifeCareDetails";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";

const CompassionateEndOfLifeCare = () => {
  return (
    <div>
      <Hero />
      <CompassionateEndOfLifeCareDetails />
      <WhoWeAre />

      <CareBannerComponent
        text="Lighthouse’s Promise of Respectful, Inclusive Care"
        description="We are dedicated to providing compassionate, culturally sensitive care that embraces people from all backgrounds. Our goal is to ensure that everyone—regardless of beliefs, identity, or circumstances—has access to respectful, dignified care when it matters most."
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Carer gently supporting elderly client with end of life care at home"
      />
      <FAQ />
    </div>
  );
};

export default CompassionateEndOfLifeCare;
