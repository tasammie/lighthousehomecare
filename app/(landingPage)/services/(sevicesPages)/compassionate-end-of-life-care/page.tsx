import { Metadata } from "next";
import CompassionateEndOfLifeCare from ".";
export const metadata: Metadata = {
  title: "End of Life Care at Home in Hertfordshire – Lighthouse Homecare",
  description:
    "Compassionate palliative care at home for those nearing the end of life. We support comfort, dignity, and emotional wellbeing in Hertfordshire.",
  openGraph: {
    title: "Palliative Home Care in Hertfordshire – Lighthouse Homecare",
    description:
      "End-of-life care delivered with empathy and respect. Our carers support families and clients during life’s final stages with grace and dignity.",
    url: "https://www.lighthousehomecare.co.uk/services/compassionate-end-of-life-care",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compassionate End-of-Life Support – Lighthouse Homecare",
    description:
      "Specialist palliative carers providing gentle, respectful end-of-life care in the comfort of your home across Hertfordshire.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/compassionate-end-of-life-care",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <main>
      <CompassionateEndOfLifeCare />
    </main>
  );
};

export default page;
