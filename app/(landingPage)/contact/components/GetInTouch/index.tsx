"use client";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";

const GetInTouch = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We will get back to you soon.",
      });

      // Reset form
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="rounded-lg">
            <h2 className="font-bold text-[#142349] text-[44px] mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Our consulting professional will contact you directly, please
              complete the form below or submit an email.
            </p>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="user_phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00269B] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className=" font-bold text-[#142349] text-[44px] mb-4">
                Reach Us
              </h2>
              <p className="text-gray-600 mb-8">
                Let us Care for you and your Loved Ones.
              </p>
            </div>

            {/* Email and Phone */}
            <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Mail className="w-6 h-6 text-[#001967] mt-1" />
               
                <div className="flex items-baseline space-x-2">
                  <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                  <a
                    href="mailto:info@Lighthousehomecare.co.uk"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    info@Lighthousehomecare.co.uk
                  </a>
                </div>
              </div>

   

              {/* <div className="space-y-4">
                <Phone className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">07397 029 192</p>
                    <p className="text-gray-700">01727 324 619</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Office Location */}
            {/* <div className="space-y-6 flex items-start">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-700">
                    2 Fountain Court, Victoria Square,
                    <br />
                    Victoria Street, St. Albans,
                    <br />
                    AL1 3TF
                  </p>
                   <div className="space-y-4">
                <Phone className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">07397 029 192</p>
                    <p className="text-gray-700">01727 324 619</p>
                  </div>
                </div>
              </div>
                </div>
                
                
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Leeds Office Address
                  </h3>
                  <p className="text-gray-700">
                    2 Infirmary Street,
                   
                    <br />
                    Leeds, LS1 2JP <br />
                  </p>
                   <div className="space-y-4">
                <Phone className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">07397 029 192</p>
                    <p className="text-gray-700">01727 324 619</p>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div> */}


<div className="grid grid-cols-2 gap-8">
  {/* First Column - St. Albans Office */}
  <div className="space-y-6">
    <div className="flex items-start space-x-4">
      <MapPin className="w-6 h-6 text-[#001967] mt-1 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-2">
          Office Address
        </h3>
        <div className="min-h-[72px]">
          <p className="text-gray-700">
            2 Fountain Court, Victoria Square,
            <br />
            Victoria Street, St. Albans,
            <br />
            AL1 3TF
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <Phone className="w-6 h-6 text-[#001967] mt-1 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
        <div className="space-y-1">
          <p className="text-gray-700">07397 029 192</p>
          <p className="text-gray-700">01727 324 619</p>
        </div>
      </div>
    </div>
  </div>

  {/* Second Column - Leeds Office */}
  <div className="space-y-6">
    <div className="flex items-start space-x-4">
      <MapPin className="w-6 h-6 text-[#001967] mt-1 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-2">
          Leeds Office Address
        </h3>
        <div className="min-h-[72px]">
          <p className="text-gray-700">
            2 Infirmary Street,
            <br />
            Leeds, LS1 2JP
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <Phone className="w-6 h-6 text-[#001967] mt-1 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
        <div className="space-y-1">
          <p className="text-gray-700">0113 547 0544</p>
          <p className="text-gray-700">0739 702 9192</p>
        </div>
      </div>
    </div>
  </div>
</div>


     




          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
