"use client";
import CustomButton from "@/components/CustomButton";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const LighthouseFooter = () => {
  const [email, setEmail] = useState("");

  //   const handleSubscribe = (e) => {
  //     e.preventDefault();
  //     // Handle subscription logic here
  //     console.log('Subscribing email:', email);
  //   };

  return (
    <footer className="bg-[#000D34] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Lighthouse Icon */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-slate-900"
                  fill="currentColor"
                >
                  <path d="M12 2L8 6v2h8V6l-4-4zM8 8v8h8V8H8zm2 2h4v4h-4v-4zm-2 8v4h8v-4H8z" />
                  <circle cx="12" cy="4" r="1" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">LIGHTHOUSE</div>
                <div className="text-xs text-gray-400">HOMECARE LTD</div>
              </div>
            </div>
          </div>

          {/* Column One */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Column One</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link One
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Two
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Three
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Four
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Fiv
                </a>
              </li>
            </ul>
          </div>

          {/* Column Two */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Column Two</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Six
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Seven
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Eight
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Nine
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Link Ten
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <CustomButton
                text="Subscribe"
                className="w-full px-4 py-3 bg-transparent text-white border border-gray-400 rounded-md hover:bg-gray-800 transition-colors font-medium"
              />
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              By subscribing you agree to with our{" "}
              <a
                href="#"
                className="underline hover:text-white transition-colors"
              >
                Privacy Policy
              </a>{" "}
              and provide consent to receive updates from our company.
            </p>
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
                <a
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Cookies Settings
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LighthouseFooter;
