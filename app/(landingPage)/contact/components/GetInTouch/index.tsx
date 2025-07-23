"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="  rounded-lg">
            <h2 className=" font-bold text-[#142349] text-[44px] mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Our consulting professional will contact you directly, please
              complete the form below or submit an email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
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
                />
              </div>

              <button
                type="submit"
                className="bg-[#00269B] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200"
              >
                Submit
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
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:nfo@maxicareplus.com.au"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    nfo@maxicareplus.com.au
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <Phone className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">1300 648 114</p>
                    <p className="text-gray-700">(+61) 434 539 838</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Head Office
                  </h3>
                  <p className="text-gray-700">
                    Level 2, 11-17 Swanson
                    <br />
                    Court, Belconnen ACT 2617,
                    <br />
                    Australia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Melbourne Office
                  </h3>
                  <p className="text-gray-700">
                    Suit 95, 139 Cardigan Street
                    <br />
                    Carlton 3053 VIC
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#001967] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Sydney Office
                  </h3>
                  <p className="text-gray-700">
                    Suit 37, Level 1, 93 George
                    <br />
                    Street Parramatta 2150
                    <br />
                    NSW
                  </p>
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
