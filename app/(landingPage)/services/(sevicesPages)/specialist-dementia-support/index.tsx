import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import Hero from "./components/Hero";
import SpecialistDementiaSupportDetails from "./components/SpecialistDementiaSupportDetails";
import TypesofDementia from "./components/TypesofDementia";

const SpecialistDementiaSupport = () => {
  return (
    <div>
      <Hero />
      <SpecialistDementiaSupportDetails />
      <TypesofDementia />
      <CareBannerComponent
        text="Lighthouse’s Promise of Respectful, Inclusive Care"
        description="We are dedicated to providing compassionate, culturally sensitive care that embraces people of all backgrounds. Our goal is to ensure that everyone—regardless of beliefs, identity, or circumstance—has access to respectful, dignified care when it matters most."
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Carer supporting an elderly man with dementia at home"
      />
    </div>
  );
};

export default SpecialistDementiaSupport;
