import React from "react";
import Link from "next/link";
import { ImgComp } from "@/components/ImgComp";
import { Check } from "lucide-react";
import Hero from "./components/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SupportedLivingPage = () => {
  const features = [
    {
      title: "Independence and Choice",
      content:
        "We encourage independence by supporting people in developing practical life skills and making everyday decisions—always at a pace that feels comfortable and empowering.",
    },
    {
      title: "Safe and Secure Environment",
      content:
        "We support individuals to feel safe in their home through clear risk management, consistent routines, responsive staff support, and respectful guidance when it’s needed.",
    },
    {
      title: "Community and Belonging",
      content:
        "A fulfilled life includes connection. We support people in participating in community activities, building positive relationships, and feeling included—socially and emotionally.",
    },
    {
      title: "Personalised Support Plans",
      content:
        "Each person receives an individualised support plan based on their needs, strengths, preferences, and outcomes. Plans are reviewed regularly to ensure progress and quality.",
    },
    {
      title: "Emotional Wellbeing and Confidence",
      content:
        "Our support is rooted in empathy and kindness—helping people feel heard, valued, and motivated as they work towards their goals.",
    },
  ];

  const services = [
    "Support with daily routines and personal care (where required)",
    "Meal preparation, nutrition support, and healthy routines",
    "Medication prompts and support (where assessed and agreed)",
    "Shopping support and budgeting guidance",
    "Support to attend appointments and access local services",
    "Support with maintaining a tenancy and a safe home environment",
    "Emotional support, confidence-building, and motivation",
    "Accessing education, volunteering, employment, and training opportunities",
    "Community participation, hobbies, and meaningful activities",
    "Positive Behaviour Support (PBS) approaches where needed",
    "Multi-agency working and family liaison (as appropriate)",
  ];

  const inclusions = [
    {
      title: "Accommodation",
      icon: "🏠",
      items: [
        "The person lives in their own home (a flat, shared house, or supported housing)",
        "They have a tenancy or ownership, not a placement",
        "They choose who they live with (if shared)",
      ],
    },
    {
      title: "Personalised Support",
      icon: "🤝",
      items: [
        "Personal care (washing, dressing, grooming)",
        "Medication support",
        "Help with meals and nutrition",
        "Daily routines and structure",
        "Emotional support and reassurance",
      ],
    },
    {
      title: "Life Skills & Independence",
      icon: "🧠",
      items: [
        "Cooking and shopping",
        "Budgeting and paying bills",
        "Cleaning and laundry",
        "Using public transport",
        "Managing appointments",
      ],
    },
    {
      title: "Community & Social Inclusion",
      icon: "👥",
      items: [
        "Support to access education, training, or work",
        "Encouragement to build friendships",
        "Attending social groups, clubs, or faith activities",
        "Reducing isolation and promoting confidence",
      ],
    },
    {
      title: "Health & Wellbeing Support",
      icon: "🩺",
      items: [
        "Attending GP, hospital, and therapy appointments",
        "Managing long-term conditions",
        "Mental health support",
        "Positive Behaviour Support (PBS) where required",
      ],
    },
    {
      title: "Flexible Support Levels",
      icon: "🕒",
      items: [
        "A few hours a week",
        "Daily visits",
        "24-hour or waking-night support",
        "And it changes as the person’s needs change",
      ],
    },
  ];

  const targetGroups = [
    "Adults with learning disabilities",
    "People with autism",
    "Individuals with mental health needs",
    "People with physical disabilities",
    "Young people transitioning from care (18+)",
  ];

  const benefits = [
    "Person-centred support focused on outcomes and quality of life",
    "Compassionate staff trained to support complex and diverse needs",
    "Consistent, respectful support rooted in dignity and kindness",
    "Clear communication with families and professionals",
    "Flexible support that adapts as needs and goals evolve",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-primaryColor font-semibold text-lg mb-4 tracking-wide uppercase">
            A service built around the person
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Your goals. Your routine. Your choices.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Supported Living is more than just a support, it’s about building a
            meaningful life. We work alongside each person to understand what
            matters to them, create a personalised support plan, and deliver
            flexible care that adapts as needs and goals change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative h-[600px] rounded-2xl overflow-hidden group">
            <ImgComp
              src="/images/image-banner.webp"
              alt="Supported living resident enjoying daily activities"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-100 rounded-xl px-6 data-[state=open]:bg-blue-50/50 data-[state=open]:border-blue-100 transition-all duration-300"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                    {feature.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Services Provided Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Services Provided
            </h2>
            <p className="text-xl text-gray-600">
              Flexible support that fits around the person—not the other way
              round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-[#EBF1FF] p-2 rounded-full shrink-0">
                  <Check className="w-5 h-5 text-primaryColor" />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Inclusions Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
          What supported living includes
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((section, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-primaryColor">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#527AF2] rounded-full shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Target Group Section */}
  <section className="py-20 bg-primaryColor text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-bottom-left"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#527AF2] font-semibold tracking-wide uppercase mb-4">
                Target Audience
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Whom we support
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                We provide Supported Living for 18+ and above who may need assistance
                to live more independently, including individuals with learning
                disabilities, autism, mental health needs, and other support
                requirements. Our services are available across St Albans,
                Hertfordshire, Watford, Borehamwood, and Leeds, with flexible
                support tailored to local needs.
              </p>
              
              <div className="space-y-4">
                {targetGroups.map((group, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                    <div className="w-2 h-2 bg-[#527AF2] rounded-full" />
                    <span className="font-medium text-lg">{group}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[#527AF2] rounded-2xl transform rotate-6 scale-95 opacity-50"></div>
              <div className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                <ImgComp
                  src="/lighthouse-staff/wheelchail-nurses.webp"
                  alt="Care team supporting a client"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-sky-50 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-gray-900">By Choosing Lighthouse Homecare?</h2>
            <div className="grid gap-6 text-left">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-primaryColor p-2 rounded-full text-white shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to talk?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you’re exploring support for yourself, a family member, or a
            referral, we’re here to help. Speak with our team to discuss
            needs, availability, and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/contact#book-a-call"
              className="bg-primaryColor text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:shadow-lg active:scale-95"
            >
              Book a Call
            </Link>
            <Link
              href="/contact#book-a-call"
              className="bg-white text-primaryColor border-2 border-primaryColor px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-lg active:scale-95"
            >
              Make an Enquiry
            </Link>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Contact Us</h4>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-primaryColor">Phone:</span> 
                    <a href="tel:01727324619" className="hover:text-primaryColor">01727 324619</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-primaryColor">Email:</span>
                    <a href="mailto:info@lighthousehomecare.co.uk" className="hover:text-primaryColor">info@lighthousehomecare.co.uk</a>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Location</h4>
                <p className="text-gray-600 leading-relaxed">
                  2 Fountain Court, Victoria Square,
                  <br />
                  Victoria Street, St Albans, Hertfordshire
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        {/* <p className="text-primaryColor font-medium">
                Proudly serving: St Albans • Hertfordshire • Watford • Borehamwood • Leeds
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer Text */}
      {/* <div className="bg-primaryColor py-4 text-center">
        <p className="text-blue-200 text-sm max-w-5xl mx-auto px-4">
          Supported Living | St Albans • Hertfordshire • Watford • Borehamwood • Leeds
        </p>
      </div> */}
    </div>
  );
};

export default SupportedLivingPage;
