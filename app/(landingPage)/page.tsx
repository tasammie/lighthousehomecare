import { Metadata } from "next";
import LandingPage from ".";

export const metadata: Metadata = {
  title: "Home Care Services in Hertfordshire – Lighthouse Homecare",
  description:
    "Professional, compassionate home care services in Hertfordshire. Supporting independence, dignity, and wellbeing with tailored care at home.",
  openGraph: {
    title: "Trusted Home Care in Hertfordshire – Lighthouse Homecare",
    description:
      "Explore our full range of live-in care, dementia support, and personal care services delivered across Hertfordshire by trained professionals.",
    url: "https://www.lighthousehomecare.co.uk",
    siteName: "Lighthouse Homecare",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lighthouse Homecare",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care in Hertfordshire – Lighthouse Homecare",
    description:
      "Dignified, friendly home care delivered by trusted carers across Hertfordshire. From live-in to companionship care, we’re here to support you.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://www.lighthousehomecare.co.uk",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default page;
