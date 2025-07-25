import { Metadata } from "next";
import DailyHomeAssistance from ".";

export const metadata: Metadata = {
  title: "Daily Home Assistance in Hertfordshire – Lighthouse Homecare",
  description:
    "Reliable help with everyday tasks at home. Our carers support personal care, meal prep, routines, and independence across Hertfordshire.",
  openGraph: {
    title: "Daily Living Support at Home – Lighthouse Homecare Hertfordshire",
    description:
      "Friendly, professional carers assisting with daily tasks like washing, dressing, and meals. Serving clients throughout Hertfordshire.",
    url: "https://www.lighthousehomecare.co.uk/services/daily-home-assistance",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Home Care Support – Lighthouse Homecare",
    description:
      "Help with daily routines for the elderly or those with limited mobility. Local carers offering dependable home assistance across Hertfordshire.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/daily-home-assistance",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <main>
      <DailyHomeAssistance />
    </main>
  );
};

export default page;
