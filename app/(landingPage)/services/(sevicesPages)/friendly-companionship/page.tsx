import { Metadata } from "next";
import FriendlyCompanionship from ".";

export const metadata: Metadata = {
  title: "Friendly Companionship Care in Hertfordshire – Lighthouse Homecare",
  description:
    "One-to-one companionship visits to reduce loneliness and support independence at home. Caring professionals serving Hertfordshire residents.",
  openGraph: {
    title: "Companionship Care Services – Lighthouse Homecare Hertfordshire",
    description:
      "Warm, reliable companionship for the elderly and isolated. Serving clients across Hertfordshire with connection and kindness.",
    url: "https://www.lighthousehomecare.co.uk/services/friendly-companionship",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Companionship Care in Hertfordshire – Lighthouse Homecare",
    description:
      "Professional carers offering friendly home visits to support wellbeing, routine, and social connection across Hertfordshire.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/friendly-companionship",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <main>
      <FriendlyCompanionship />
    </main>
  );
};

export default page;
