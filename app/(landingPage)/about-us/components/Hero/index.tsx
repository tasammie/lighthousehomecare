import HeroSection from "@/app/(landingPage)/shared/components/HeroSection";

const Hero = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us" }];
  return (
    <HeroSection
      title="About Us"
      breadcrumbs={breadcrumbs}
      imageSrc="/images/man-woman-smile.webp"
      imageAlt="Team smiling"
    />
  );
};

export default Hero;
