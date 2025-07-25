import { Metadata } from "next";
import TwentyFourHourLiveInSupport from ".";

export const metadata: Metadata = {
  title: "24-Hour Live-In Home Care in Hertfordshire – Lighthouse Homecare",
  description:
    "Round-the-clock live-in care in Hertfordshire. Compassionate, professional carers supporting clients with safety, dignity, and comfort at home.",
  openGraph: {
    title: "Live-In Care Services in Hertfordshire – Lighthouse Homecare",
    description:
      "Dependable 24-hour care tailored to your needs. Our live-in carers offer personal care, supervision, and peace of mind across Hertfordshire.",
    url: "https://www.lighthousehomecare.co.uk/services/24-hour-live-in-support",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "24-Hour Home Care – Lighthouse Homecare Hertfordshire",
    description:
      "Reliable 24-hour support at home from trained live-in carers serving Hertfordshire and surrounding areas.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/24-hour-live-in-support",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <div>
      <TwentyFourHourLiveInSupport />
    </div>
  );
};

export default page;
