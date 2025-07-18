type NavLink = {
  title: string;
  url: string;
  items?: { title: string; url: string }[];
};

export const navLinks: NavLink[] = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about-us" },
  { title: "Our Services", url: "/services" },
  { title: "Why Choose Us", url: "/why-choose-us" },
  { title: "Join Our Team", url: "/join-team" },
  { title: "Franchise With Us", url: "/franchise" },
];
