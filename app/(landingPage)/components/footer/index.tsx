"use client";
import { ImgComp } from "@/components/ImgComp";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";

const LighthouseFooter = () => {
  return (
    <footer className="bg-[#000D34] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Lighthouse Icon */}
              <ImgComp
                src={"/images/footer-logo.png"}
                alt="Logo"
                width={400}
                height={400}
                className="w-[160px]"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/24-hour-live-in-support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  24-Hour Live-In Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/daily-home-assistance"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Daily Home Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/overnight-care-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Overnight Care Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/friendly-companionship"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Friendly Companionship
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialist-dementia-support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Specialist Dementia Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="md:col-span-1">
            <SubscribeForm
              title="Subscribe"
              description="Join our newsletter to stay up to date on features and releases."
              variant="footer"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© 2025 Lighthouse home care LTD All rights reserved.</span>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Cookies Settings
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/share/p/19pgSjFr8Y/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/lighthousehomecareltd?igsh=MWc4NmlmZG41ODc2OQ=="
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-whites transition-colors cursor-not-allowed "
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/lighthousehomecare/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LighthouseFooter;
