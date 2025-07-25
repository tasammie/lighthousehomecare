import { Metadata } from "next";
import PostHospitalRecoverySupport from ".";

export const metadata: Metadata = {
  title:
    "Post-Hospital Recovery Support in Hertfordshire – Lighthouse Homecare",
  description:
    "Personalised care at home after hospital discharge. Supporting recovery, mobility, and daily tasks across Hertfordshire with trusted carers.",
  openGraph: {
    title: "Home Recovery Care After Hospital Discharge – Lighthouse Homecare",
    description:
      "Recover safely at home after surgery or illness. Our carers assist with mobility, medication, and routines for a smooth recovery across Hertfordshire.",
    url: "https://www.lighthousehomecare.co.uk/services/post-hospital-recovery-support",
    images: ["/images/image-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Hospital Care at Home – Lighthouse Homecare Hertfordshire",
    description:
      "Professional after-hospital care at home. Helping Hertfordshire residents regain independence following surgery or illness.",
    images: ["/images/image-banner.webp"],
  },
  alternates: {
    canonical:
      "https://www.lighthousehomecare.co.uk/services/post-hospital-recovery-support",
  },
  metadataBase: new URL("https://www.lighthousehomecare.co.uk"),
};

const page = () => {
  return (
    <div>
      <PostHospitalRecoverySupport />
    </div>
  );
};

export default page;
