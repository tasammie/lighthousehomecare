type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: { label: string; href: string }[];
};

export const navigationItems: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Find Care", href: "/find-care" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];
