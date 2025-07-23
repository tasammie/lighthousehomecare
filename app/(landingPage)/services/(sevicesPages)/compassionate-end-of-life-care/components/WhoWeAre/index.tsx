"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface ServiceSection {
  id: number;
  title: string;
  content: string[];
  features?: string[];
  image: string;
  imageAlt: string;
}

const serviceSections: ServiceSection[] = [
  {
    id: 1,
    title: "Comfort at Home at Life's Final Chapter",
    content: [
      "At Lighthouse Homecare, we understand that facing the end of life can feel overwhelming for both individuals and their families. That's why we're here to provide compassionate, dignified care that allows your loved one to remain in the comfort and familiarity of their own home during this deeply personal time.",
      "Our end-of-life care is about more than medical support—it's about preserving dignity, maintaining comfort, and ensuring that every moment is filled with love, respect, and peace. We work closely with families, GPs, and specialist teams to create a care plan that reflects your loved one's wishes while providing you with the support you need during this difficult journey.",
    ],
    image: "/images/end-of-life-1.webp",
    imageAlt: "Comfortable home environment for end-of-life care",
  },
  {
    id: 2,
    title: "Who We Support with End-of-Life Care",
    content: [
      "Our compassionate end-of-life care is designed for individuals facing:",
      "At Lighthouse Homecare, we tailor our approach to meet each person's unique needs, ensuring they receive the right level of support while maintaining their independence and dignity for as long as possible.",
    ],
    features: [
      "Terminal illness diagnosis",
      "Progressive health conditions",
      "Advanced age with declining health",
      "Recovery from serious medical treatment that requires ongoing support",
      "Palliative care needs",
      "Anyone wishing to spend their final days surrounded by family in familiar surroundings",
    ],
    image: "/images/end-of-life-2.webp",
    imageAlt: "Caregiver providing compassionate support",
  },
  {
    id: 3,
    title: "Your Palliative Care Team",
    content: [
      "At Lighthouse Homecare, we work as part of a broader palliative care team that may include:",
      "Our role is to complement the medical expertise of these professionals by providing consistent, hands-on care that focuses on comfort, companionship, and practical daily support. We maintain close communication with all team members to ensure coordinated, seamless care.",
    ],
    features: [
      "Your family GP",
      "District nurses",
      "Macmillan nurses",
      "Occupational therapists",
      "Social workers",
      "Chaplains or spiritual carers",
      "Community and hospice teams",
    ],
    image: "/images/end-of-life-3.webp",
    imageAlt: "Professional palliative care team",
  },
  {
    id: 4,
    title: "Comfort Through Symptom Relief",
    content: [
      "End-of-life care isn't just about medical intervention—it's about ensuring your loved one feels as comfortable and pain-free as possible. Our carers work closely with healthcare professionals to:",
      "We understand that comfort means different things to different people, which is why we take time to understand what brings peace and relief to your loved one, ensuring their care is as individual as they are.",
    ],
    features: [
      "Monitor comfort and report changes to medical teams",
      "Assist with medication management and pain relief routines",
      "Provide gentle personal care with dignity and respect",
      "Support with mobility and positioning to enhance comfort",
      "Encourage gentle activities that bring joy and connection",
      "Offer emotional support and a calming presence during difficult moments",
    ],
    image: "/images/end-of-life-4.webp",
    imageAlt: "Comfortable care environment",
  },
];

const initialContent = {
  title: "Compassionate End-of-Life Care at Home",
  description:
    "At Lighthouse Homecare, we understand that facing the end of life is one of the most challenging times for individuals and their families. Our compassionate end-of-life care services are designed to provide comfort, dignity, and peace during this deeply personal journey. We believe everyone deserves to spend their final days surrounded by love in the familiar comfort of their own home, supported by caring professionals who understand the importance of preserving dignity and maintaining quality of life.",
};

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
        className={`grid lg:grid-cols-2 gap-8 items-start ${
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
            {section.content.map((paragraph, idx) => (
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
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Initial Content */}
        <motion.div
          className="mb-12"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-6 leading-tight">
            {initialContent.title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl">
            {initialContent.description}
          </p>
        </motion.div>

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
