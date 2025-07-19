import HeroSection from "@/app/(landingPage)/shared/components/HeroSection";

const Hero = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services" }];
  return (
    <HeroSection
      title="Services Grid"
      breadcrumbs={breadcrumbs}
      imageSrc="/images/caregiver-service.png"
      imageAlt="Caregiver providing service"
    />
  );
};

export default Hero;
