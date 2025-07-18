import CareBanner from "./components/CareBanner";
import ElderCare from "./components/ElderCare";
import Hero from "./components/home";
import LighthouseHome from "./components/LighthouseHome";
import NursingStaff from "./components/NursingStaff";
import Services from "./components/Services";
import TestimonialSection from "./components/TestimonialSection";

const LandingPage = () => {
  return (
    <div className="">
      <Hero />

      <ElderCare />
      <Services />
      <CareBanner />
      <NursingStaff />
      <LighthouseHome />
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
