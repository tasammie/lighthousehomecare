import { Metadata } from "next";
import SpecialistDementiaSupport from ".";

export const metadata: Metadata = {
  title: "Dementia Home Care in Hertfordshire – Lighthouse Homecare",
  description:
    "Specialist home-based dementia care across Hertfordshire. Experienced carers supporting memory, routine, safety, and emotional wellbeing.",
  openGraph: {
    title:
      "Specialist Dementia Care at Home – Lighthouse Homecare Hertfordshire",
    description:
      "Personalised dementia support at home. Trusted carers helping clients across Hertfordshire live with dignity and independence.",
    url: "https://www.lighthousehomecare.co.uk/services/specialist-dementia-support",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dementia Care at Home in Hertfordshire – Lighthouse Homecare",
    description:
      "Compassionate dementia care tailored to your loved one’s needs. Serving Hertfordshire homes with professionalism and heart.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/specialist-dementia-support",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <main>
      <SpecialistDementiaSupport />
    </main>
  );
};

export default page;
