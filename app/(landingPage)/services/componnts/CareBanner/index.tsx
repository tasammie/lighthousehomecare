import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";

const CareBanner = () => {
  return (
    <div>
      <CareBannerComponent
        text="You’re not just choosing a care service — you’re choosing a team that truly cares"
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.png"
        imageAlt="Elderly care background"
      />
    </div>
  );
};

export default CareBanner;
