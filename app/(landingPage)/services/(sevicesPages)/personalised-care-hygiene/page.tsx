import { Metadata } from "next";
import PersonalisedCareHygiene from ".";

export const metadata: Metadata = {
  title:
    "Personal Care & Hygiene Support in Hertfordshire – Lighthouse Homecare",
  description:
    "Dignified personal care at home, including bathing, dressing, and toileting. Trusted carers serving Hertfordshire with respectful, routine assistance.",
  openGraph: {
    title:
      "Hygiene & Personal Care Services – Lighthouse Homecare Hertfordshire",
    description:
      "Reliable support with daily personal care routines. Helping clients in Hertfordshire stay clean, safe, and independent at home.",
    url: "https://www.lighthousehomecare.co.uk/services/personalised-care-hygiene",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dignified Personal Care at Home – Lighthouse Homecare",
    description:
      "Compassionate personal care including washing, dressing and more — all delivered in the comfort of your home across Hertfordshire.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/personalised-care-hygiene",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <div>
      <PersonalisedCareHygiene />
    </div>
  );
};

export default page;
