import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";
import Hero from "./components/Hero";
import PostHospitalCareDetails from "./components/PostHospitalCareDetails";
import Support from "./components/Support";

const PostHospitalRecoverySupport = () => {
  return (
    <div>
      <Hero />
      <PostHospitalCareDetails />
      <Support />

      <CareBannerComponent
        text="Let Lighthouse Homecare help your loved one come home safely—and recover with strength, compassion, and trusted care."
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Carer supporting elderly man recovering after hospital discharge"
      />
    </div>
  );
};

export default PostHospitalRecoverySupport;
