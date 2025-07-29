import CareBannerComponent from "@/app/(landingPage)/shared/components/CareBannerComponent";

const CareBanner = () => {
  return (
    <div>
      <CareBannerComponent
        text="You’re not simply choosing a care service, you’re choosing a team that genuinely cares."
        buttonText="Get Started Today"
        buttonLink="/contact"
        imageSrc="/images/image-banner.webp"
        imageAlt="Elderly care background"
      />
    </div>
  );
};

export default CareBanner;
