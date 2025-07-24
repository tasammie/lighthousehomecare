type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: { label: string; href: string }[];
};

export const navigationItems: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    items: [
      {
        label: "24-Hour Live-In Support",
        href: "/services/24-hour-live-in-support",
      },
      {
        label: "Daily Home Assistance",
        href: "/services/daily-home-assistance",
      },
      {
        label: "Overnight Care Services",
        href: "/services/overnight-care-services",
      },
      {
        label: "Friendly Companionship",
        href: "/services/friendly-companionship",
      },
      {
        label: "Post-Hospital Recovery Support",
        href: "/services/post-hospital-recovery-support",
      },
      {
        label: "Compassionate End-of-Life Care",
        href: "/services/compassionate-end-of-life-care",
      },
      {
        label: "Specialist Dementia Support",
        href: "/services/specialist-dementia-support",
      },
      {
        label: "Personalised Care & Hygiene",
        href: "/services/personalised-care-hygiene",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
  { label: "Find Job", href: "#" },
  { label: "Blog", href: "/blog" },
];
