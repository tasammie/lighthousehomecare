import React from "react";
import { motion } from "framer-motion";
import { useSubscribe } from "@/hooks/useSubscribe";

interface SubscribeFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholder?: string;
  showTerms?: boolean;
  className?: string;
  variant?: "footer" | "sidebar";
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({
  title = "Subscribe",
  description = "Join our newsletter to stay up to date on features and releases.",
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  showTerms = false,
  className = "",
  variant = "footer",
}) => {
  const { email, isSubmitting, submitStatus, setEmail, handleSubscribe } =
    useSubscribe();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubscribe(e);
  };

  const isSidebar = variant === "sidebar";

  return (
    <div className={className}>
      <h3
        className={`font-bold mb-3 ${
          isSidebar 
            ? "text-2xl text-gray-900" 
            : "text-lg text-white"
        }`}
      >
        {title}
      </h3>

      {description && (
        <p
          className={`mb-6 leading-relaxed ${
            isSidebar 
              ? "text-sm text-gray-900" 
              : "text-gray-300"
          }`}
        >
          {description}
        </p>
      )}

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

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 ${
            isSidebar ? "border-gray-300" : "border-gray-300"
          }`}
          required
          disabled={isSubmitting}
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white font-semibold py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
            isSidebar
              ? "bg-[#00269B] hover:bg-blue-800 active:scale-98"
              : "bg-primaryColor hover:bg-blue-900"
          }`}
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
          {isSubmitting ? "Subscribing..." : buttonText}
        </motion.button>
      </form>

      {showTerms && (
        <div className={`mt-4 ${isSidebar ? "flex items-start gap-2" : ""}`}>
          {isSidebar && (
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
          )}
          <label
            htmlFor={isSidebar ? "terms" : undefined}
            className={`text-gray-600 leading-relaxed ${
              isSidebar ? "text-xs" : ""
            }`}
          >
            {isSidebar ? (
              "By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of data submitted through this form."
            ) : (
              <>
                By subscribing you agree to with our{" "}
                <a
                  href="#"
                  className="underline hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                and provide consent to receive updates from our company.
              </>
            )}
          </label>
        </div>
      )}
    </div>
  );
};

export default SubscribeForm;
