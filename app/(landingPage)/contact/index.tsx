import HeroSection from "../shared/components/HeroSection";
import GetInTouch from "./components/GetInTouch";
import Location from "./components/location";

const Contact = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact Us" }];

  return (
    <div>
      <HeroSection
        title="Contact Us"
        breadcrumbs={breadcrumbs}
        imageSrc="/images/lady-and-granma.webp"
        imageAlt="Team smiling"
      />
      <GetInTouch />
      <Location />
    </div>
  );
};

export default Contact;
