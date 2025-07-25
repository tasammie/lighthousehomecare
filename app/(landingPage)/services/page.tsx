import type { Metadata } from "next";
import Services from ".";

export const metadata: Metadata = {
  title: "Our Home Care Services in Hertfordshire – Lighthouse Homecare",
  description:
    "Explore our full range of professional home care services in Hertfordshire, including dementia support, companionship, and 24-hour live-in care.",
  openGraph: {
    title: "Care Services We Offer – Lighthouse Homecare Hertfordshire",
    description:
      "From personal care to palliative support, discover our trusted home care services for families across Hertfordshire.",
    url: "https://www.lighthousehomecare.co.uk/services",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care Services in Hertfordshire – Lighthouse Homecare",
    description:
      "Browse our full range of care services provided across Hertfordshire by trusted, compassionate carers.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical: "https://www.lighthousehomecare.co.uk/services",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default page;
