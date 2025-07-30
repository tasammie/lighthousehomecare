"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface ServiceSection {
  id: number;
  title: string;
  content?: string[];
  features?: string[];
  image: string;
  imageAlt: string;
}

const serviceSections: ServiceSection[] = [
  {
    id: 1,
    title: "Personalised Care Plans",
    features: [
      "At Lighthouse Homecare, we understand that no two individuals are the same. That's why we build fully personalised care plans that reflect each person's unique needs, routines, and preferences.",
      "Following an in-depth assessment, we collaborate with families to create a plan that adapts to real-life situations — from health conditions to lifestyle rhythms. Visits are scheduled strategically around peak need times, ensuring support is delivered exactly when it matters most.",
    ],
    image: "/images/personal-care-1.webp",
    imageAlt: "Personalised care planning session",
  },
  {
    id: 2,
    title: "Companionship Care",
    features: [
      "Beyond the essentials of personal care, emotional wellbeing plays a vital role in a person's quality of life. Our carers form genuine, trusting relationships with the people they support — often becoming a familiar, friendly presence in their day.",
      "Whether it's a warm conversation, a shared game, or simply a walk around the garden, our companionship care reduces feelings of loneliness, encourages engagement, and helps nurture mental and emotional health.",
    ],
    image: "/images/personal-care-2.webp",
    imageAlt: "Caregiver providing companionship support",
  },
  {
    id: 3,
    title: "Flexibility",
    features: [
      "Life changes — and so should care. Lighthouse Homecare offers flexible services that adjust alongside your loved one's evolving needs. Whether care is needed for just a few hours a week or on a 24/7 basis, we're equipped to scale our support accordingly.",
      "This flexible approach allows individuals to remain in the comfort of their own home for longer, while still receiving the high-quality assistance they deserve. Independence is preserved, peace of mind is assured.",
    ],
    image: "/images/personal-care-3.webp",
    imageAlt: "Flexible home care services",
  },
];

const personalCentredCareItems = [
  {
    id: 1,
    description: "A care plan tailored around the person’s needs and wishes",
    details:
      "Each plan reflects the individual’s routines, preferences, and what truly matters to them.",
  },
  {
    id: 2,
    description: "Respect for cultural background, beliefs, and values",
    details:
      "We deliver care with sensitivity and inclusivity — always mindful of what’s meaningful to the person and their family.",
  },
  {
    id: 3,
    description: "Flexible care that adapts to changing needs",
    details:
      "Our approach is dynamic, evolving as health, comfort, or lifestyle needs change over time.",
  },
  {
    id: 4,
    description: "Regular reviews involving the client and family",
    details:
      "Collaboration is key — we invite ongoing input to keep care personal, responsive, and empowering.",
  },
  {
    id: 5,
    description: "Emotional support, dignity, and independence",
    details:
      "Because care should uplift, not replace — preserving confidence and a sense of self is just as important as meeting physical needs.",
  },
];

interface ServiceSectionProps {
  section: ServiceSection;
  index: number;
}

const ServiceSectionComponent: React.FC<ServiceSectionProps> = ({
  section,
  index,
}) => {
  const isImageLeft = index % 2 === 1;

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className={`grid lg:grid-cols-2 gap-8 items-center ${
          isImageLeft ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Content */}
        <motion.div
          className={isImageLeft ? "lg:col-start-2" : ""}
          variants={{
            hidden: { opacity: 0, x: isImageLeft ? 30 : -30 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-[37.95px] font-bold text-[#1a365d] mb-6 leading-tight">
            {section.title}
          </h3>

          <div className="space-y-4 mb-6">
            {section?.content?.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-gray-700 leading-relaxed text-sm md:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {section.features && (
            <div className="space-y-2">
              {section.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-3 "
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-800 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm leading-relaxed md:text-[18px]">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Image */}
        <motion.div
          className={`relative ${
            isImageLeft ? "lg:col-start-1 lg:pr-8" : "lg:pl-8"
          }`}
          variants={{
            hidden: { opacity: 0, x: isImageLeft ? -30 : 30 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-lg overflow-hidden">
            <ImgComp
              src={section.image}
              alt={section.imageAlt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function WhoWeAre() {
  return (
    <motion.section
      className="py-16 bg-white "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Our Personal Centred Care */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#001967] mb-6">
            Our Personal Centred Care includes:
          </h3>
          <p className="text-gray-700 mb-4">
            We believe that truly personalised care honours the whole person —
            their identity, choices, and way of life. That’s why our support
            isn’t just built around needs, but around people.
          </p>
          <ul className="list-disc ml-6 space-y-4">
            {personalCentredCareItems.map((item) => (
              <li key={item.id}>
                <span className="font-semibold">{item.description}</span>
                <br />
                <span className="text-gray-700">{item.details}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Sections */}
        {serviceSections.map((section, index) => (
          <ServiceSectionComponent
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}
