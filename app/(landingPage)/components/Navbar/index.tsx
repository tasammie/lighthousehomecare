"use client";

import { ImgComp } from "@/components/ImgComp";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Mail, MapPin, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationItems } from "./navLink";

export default function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Helper function to check if a navigation item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="mb-[60px]"></div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-linear ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Contact Bar */}
        <div className="bg-white border-b border-gray-100 py-3 hidden lg:block">
          <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <ImgComp
                src={"/images/logo.png"}
                alt="Logo"
                className="w-[120px]"
              />
              <div className="flex items-start gap-10 text-gray-700">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-black" />
                    <span className="font-semibold text-sm">
                      info@yourdomain.com
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Email Us</span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-black" />
                    <span className="font-semibold text-sm">
                      121 King Street, United Kingdom
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    Visit Our Office
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <header className="shadow-lg  bg-[#2A2625B2] max-w-7xl mx-auto ">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
                {navigationItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out ${
                        isActive(item.href)
                          ? "text-white font-semibold"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"></div>
                    )}

                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white/60 rounded-full transition-all duration-300 group-hover:w-8"></div>
                  </div>
                ))}
              </nav>

              {/* Contact Us Button */}
              <div className="hidden lg:flex items-center flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-primaryColor hover:bg-blue-700 text-white px-8 py-3 rounded-md text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
                >
                  Contact US
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <button className="text-white hover:text-blue-200 p-2 rounded-lg transition-colors duration-200">
                      <Menu className="w-6 h-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80 bg-white">
                    <SheetHeader className="border-b border-gray-100 pb-4 mb-6">
                      <SheetTitle>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primaryColor rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                              <div className="w-2 h-2 bg-primaryColor rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-xl font-bold text-gray-900">
                            LIGHTHOUSE
                          </span>
                        </div>
                      </SheetTitle>
                    </SheetHeader>

                    <div className="space-y-2">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsSheetOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                            isActive(item.href)
                              ? "text-primaryColor bg-blue-50 font-semibold"
                              : "text-gray-700 hover:text-primaryColor hover:bg-gray-50"
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.hasDropdown && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Link>
                      ))}

                      {/* Mobile Contact Button */}
                      <div className="pt-6 mt-6 border-t border-gray-100">
                        <Link
                          href="/contact"
                          onClick={() => setIsSheetOpen(false)}
                          className="block bg-primaryColor hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200 text-center"
                        >
                          Contact US
                        </Link>
                      </div>

                      {/* Mobile Contact Info */}
                      <div className="pt-6 space-y-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>info@yourdomain.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>121 King Street, United Kingdom</span>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
