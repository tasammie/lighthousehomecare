import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import CareAtHome from "./components/CareAtHome";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import { PersonalisedCareDetails } from "./components/PersonalisedCareDetails";
import WhoWeAre from "./components/WhoWeAre";

const PersonalisedCareHygiene = () => {
  return (
    <div>
      <Hero />
      <PersonalisedCareDetails />
      <WhoWeAre />

      <CareBannerComponent
        text="Lighthouse’s Promise of Respectful, Inclusive Care"
        description="We are dedicated to providing compassionate, culturally sensitive care that embraces people of all backgrounds. Our goal is to ensure that everyone—regardless of beliefs, identity, or circumstance—has access to respectful, dignified care when it matters most."
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Elderly care background"
      />
      <CareAtHome />
      <FAQ />
    </div>
  );
};

export default PersonalisedCareHygiene;
