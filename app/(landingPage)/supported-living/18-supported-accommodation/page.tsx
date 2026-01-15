import React from "react";
import Link from "next/link";
import { ImgComp } from "@/components/ImgComp";
import { Check, Home, Users, Heart, Sparkles, Shield, ArrowRight } from "lucide-react";

const SupportedAccommodation18Page = () => {
  const keyFeatures = [
    {
      icon: Home,
      title: "Your Own Space",
      description: "Live in your own tenancy with the freedom to make it your home—your way.",
    },
    {
      icon: Users,
      title: "Tailored Support",
      description: "Receive personalised assistance designed around your goals and daily routines.",
    },
    {
      icon: Heart,
      title: "Independence & Confidence",
      description: "Build essential life skills while maintaining your autonomy and choice.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Feel supported 24/7 with responsive staff and clear safety protocols.",
    },
  ];

  const supportAreas = [
    "Personal care assistance (washing, dressing, grooming)",
    "Meal planning, cooking, and nutrition guidance",
    "Medication management and health monitoring",
    "Budgeting, shopping, and financial skills",
    "Cleaning, laundry, and home maintenance support",
    "Accessing education, training, and employment opportunities",
    "Building friendships and community connections",
    "Developing independent living skills at your own pace",
    "Emotional support and confidence building",
    "Support attending appointments and accessing services",
  ];

  const whoWeSupport = [
    "Young adults (18+) transitioning from care",
    "Individuals with learning disabilities",
    "People with autism spectrum conditions",
    "Those with mental health support needs",
    "Individuals seeking greater independence",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative bg-linear-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primaryColor/5 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-primaryColor/10 text-primaryColor px-4 py-2 rounded-full text-sm font-semibold mb-6">
                18+ SUPPORTED ACCOMMODATION
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                Your home. Your independence. Your future.
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Supported Living for adults aged 18 and above is designed to help 
                young adults live independently in their own homes, while receiving 
                personalised support to manage daily life safely and confidently.
              </p>
              {/* <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Supported Living for adults aged 18+ and above is designed to help
                young adults live independently in their own home, while receiving
                personalised support to manage daily life safely and confidently.
              </p> */}

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                This service supports individuals as they transition into adulthood,
                promoting independence, choice, and control, while ensuring the right
                level of care and guidance is available when needed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact#book-a-call"
                  className="inline-flex items-center justify-center gap-2 bg-primaryColor text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/contact#book-a-call"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-primaryColor hover:text-primaryColor transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-2 border-white ring-1 ring-gray-200">
                <ImgComp
                  src="/images/ladyandboy-smile.jpeg"
                  alt="Young adult in supported accommodation living independently"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Empowering independence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 18+ Supported Accommodation service is built around helping you
              thrive in your own home with the right level of support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-primaryColor/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primaryColor/10 text-primaryColor mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Areas Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-block text-primaryColor font-semibold text-sm tracking-wider uppercase mb-4">
                How we support you
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                Comprehensive support for daily living
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team provides flexible, person-centred support across all areas
                of daily life, helping you build skills, confidence, and independence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Support is tailored to your unique needs and can be adjusted as you
                grow and your goals change.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4">
                {supportAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primaryColor/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primaryColor" />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden border border-gray-200">
                <ImgComp
                  src="/images/team2.webp"
                  alt="Support staff helping young adults in accommodation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-primaryColor font-semibold text-sm tracking-wider uppercase mb-4">
                Who we support
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                Supporting diverse needs with compassion
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our 18+ Supported Accommodation is designed for young adults and
                individuals who are ready to take the next step towards independent
                living with the right support in place.
              </p>

              <div className="space-y-4">
                {whoWeSupport.map((group, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 border-l-4 border-primaryColor bg-blue-50/50 rounded-r-xl"
                  >
                    <Sparkles className="w-6 h-6 text-primaryColor shrink-0" />
                    <span className="text-gray-800 font-semibold text-lg">
                      {group}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-linear-to-br from-primaryColor/5 to-purple-50 rounded-2xl border border-primaryColor/10">
                <p className="text-gray-700 font-medium leading-relaxed">
                  We work collaboratively with each person to develop personalised
                  support plans that are tailored to their unique needs and
                  preferences, ensuring they receive the right level of assistance to
                  promote autonomy, inclusion, and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Why choose Lighthouse Homecare?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Person-Centred Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your goals, preferences, and choices guide everything we do.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Experienced Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compassionate, trained staff who understand complex needs.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Flexible Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Support that adapts as your skills and confidence grow.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We believe everyone deserves the opportunity to live a life filled with
            purpose and meaning. Our 18+ Supported Accommodation service is designed
            to be your trusted partner on that journey.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-linear-to-br from-primaryColor to-blue-700 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to start your journey?
              </h2>
              <p className="text-xl mb-10 leading-relaxed text-blue-100 max-w-2xl mx-auto">
                Whether you're exploring accommodation options for yourself, a family
                member, or a referral, we're here to help. Let's discuss your needs
                and how we can support you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#book-a-call"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primaryColor px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="tel:01727324619"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  Call 01727 324619
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-primaryColor font-bold text-lg mb-2">Email</div>
              <a
                href="mailto:info@lighthousehomecare.co.uk"
                className="text-gray-600 hover:text-primaryColor transition-colors"
              >
                info@lighthousehomecare.co.uk
              </a>
            </div>

            <div className="p-6">
              <div className="text-primaryColor font-bold text-lg mb-2">Phone</div>
              <a
                href="tel:01727324619"
                className="text-gray-600 hover:text-primaryColor transition-colors"
              >
                01727 324619
              </a>
            </div>

            <div className="p-6">
              <div className="text-primaryColor font-bold text-lg mb-2">Location</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                2 Fountain Court, Victoria Square,
                <br />
                St Albans, Hertfordshire
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-medium">
              Serving: St Albans • Hertfordshire • Watford • Borehamwood • Leeds
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportedAccommodation18Page;
