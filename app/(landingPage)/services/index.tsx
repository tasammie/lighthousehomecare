import CareBanner from "./componnts/CareBanner";
import CareConnection from "./componnts/CareConnection";
import CarePackages from "./componnts/CarePackages";
import Hero from "./componnts/Hero";

const Services = () => {
  return (
    <div>
      <Hero />
      <CarePackages />
      <CareConnection />
      <CareBanner />
    </div>
  );
};

export default Services;
