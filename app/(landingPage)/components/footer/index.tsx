"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LighthouseFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Mailchimp integration - replace with your actual values
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Successfully subscribed to our newsletter!",
        });
        setEmail("");
      } else {
        console.log(data.error || "Failed to subscribe");
        // throw new Error(data.error || "Failed to subscribe");
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to subscribe",
        });
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Join our newsletter to stay up to date on features and releases.
            </p>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-4 p-3 rounded-md text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primaryColor hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                whileHover={
                  !isSubmitting
                    ? {
                        scale: 1.05,
                        boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
                      }
                    : {}
                }
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </form>

            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              By subscribing you agree to with our{" "}
              <Link
                href="#"
                className="underline hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>{" "}
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
