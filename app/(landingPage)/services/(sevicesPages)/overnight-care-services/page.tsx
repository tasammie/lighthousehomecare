import { Metadata } from "next";
import OvernightCareServices from ".";

export const metadata: Metadata = {
  title: "Overnight Home Care in Hertfordshire – Lighthouse Homecare",
  description:
    "Professional night-time care services for safety, comfort, and rest. Our overnight carers in Hertfordshire offer sleep-in and waking night support.",
  openGraph: {
    title: "Night Carers & Sleep-In Support – Lighthouse Homecare",
    description:
      "Trained carers available for overnight support. Providing peace of mind with waking or sleeping night services across Hertfordshire.",
    url: "https://www.lighthousehomecare.co.uk/services/overnight-care-services",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overnight Carers in Hertfordshire – Lighthouse Homecare",
    description:
      "Reliable overnight care to ensure comfort and safety. Waking and sleeping night support for clients throughout Hertfordshire.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/overnight-care-services",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <main>
      <OvernightCareServices />
    </main>
  );
};

export default page;
