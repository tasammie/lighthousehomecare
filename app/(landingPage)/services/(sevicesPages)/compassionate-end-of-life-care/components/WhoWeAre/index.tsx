"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface ServiceSection {
  id: number;
  title: string;
  content: string[];
  featuresButtomText?: string;
  features?: string[];
  image: string;
  imageAlt: string;
}

const serviceSections: ServiceSection[] = [
  {
    id: 1,
    title: "Comfort at Home in Life’s Final Chapter",
    content: [
      "Many individuals express a deep desire to spend their final moments in the familiarity of their own home, surrounded by cherished faces and treasured memories. At Lighthouse Homecare, we specialise in providing compassionate end-of-life care in the comfort of home. Our approach prioritises dignity, emotional wellbeing, and a gentle transition through this profound stage of life.",
      "Our dedicated care professionals work collaboratively with GPs, district nurses, palliative specialists, and other community healthcare providers to deliver tailored support in a home setting. Whether offering help with daily tasks, managing symptoms, or simply being a comforting presence, we’re here to make each day meaningful.",
      "By reducing the need for hospital admissions, we help maintain a sense of peace and normality while ensuring high standards of care. At Lighthouse Homecare, we strive to be a source of calm and comfort—for both our clients and their families.",
    ],
    image: "/images/end-of-life-1.webp",
    imageAlt: "Comfortable home environment for end-of-life care",
  },
  {
    id: 2,
    title: "Who We Support with End-of-Life Care",
    content: [
      "• Serious, life-limiting illnesses such as cancer, advanced heart or lung disease, or degenerative neurological conditions",
      "• A terminal diagnosis where curative treatments are no longer appropriate",
      "• Complex symptoms such as unmanaged pain, breathlessness, or severe fatigue",
      "• Emotional or psychological distress during advanced illness",
      "• Multiple chronic conditions that require ongoing, coordinated palliative care",
      "If your loved one is entering their final year, months, or days of life, our team can help develop a sensitive and respectful care plan tailored to their unique needs. At Lighthouse Homecare, we honour every individual’s values and wishes—ensuring their final chapter is as comforting and dignified as possible.",
    ],
    image: "/images/end-of-life-2.webp",
    imageAlt: "Caregiver providing compassionate support",
  },
  {
    id: 3,
    title: "Your Palliative Care Team",
    content: [
      "At Lighthouse Homecare, we work closely with a diverse team of end-of-life care professionals to ensure every individual receives comprehensive, coordinated support. By uniting expertise from various fields, we provide care that honours the physical, emotional, and spiritual needs of our clients.",
      "Our team may include:",
    ],
    features: [
      "Palliative care nurses",
      "Occupational therapists",
      "Social workers and coordinators",
      "Bereavement support professionals",
      "Healthcare assistants",
      "Palliative care doctors and consultants",
      "Community and hospice care partners",
      "Hospital discharge planners and outpatient liaisons",
    ],
    image: "/images/end-of-life-3.webp",
    imageAlt: "Professional palliative care team",
  },
  {
    id: 4,
    title: "Comfort Through Symptom Relief",
    content: [
      "At Lighthouse Homecare, we work closely with a diverse team of end-of-life care professionals to ensure every individual receives comprehensive, coordinated support. By uniting expertise from various fields, we provide care that honours the physical, emotional, and spiritual needs of our clients.",
      "Our team may include:",
    ],
    features: [
      "Palliative care nurses",
      "Occupational therapists",
      "Social workers and coordinators",
      "Bereavement support professionals",
      "Healthcare assistants",
      "Palliative care doctors and consultants",
      "Community and hospice care partners",
      "Hospital discharge planners and outpatient liaisons",
    ],
    featuresButtomText:
      "This integrated model ensures every aspect of care is considered and thoughtfully delivered. By working as one, our team brings compassion, clarity, and continuity to individuals and families during one of life’s most delicate chapters.",
    image: "/images/end-of-life-4.webp",
    imageAlt: "Comfortable care environment",
  },
];

const initialContent = {
  title: "What Is Friendly Companion Care?",
  description:
    "At Lighthouse Homecare, our Friendly Companion care goes beyond medical support — it’s all about emotional warmth, meaningful connection, and social wellbeing. We match each client with compassionate companions who offer kind conversation, light activities, and a comforting presence. Every visit is a chance to reconnect. Whether it’s a chat over tea, looking through old photo albums, or simply sharing stories, our service helps clients build confidence, reduce loneliness, and feel part of the world again. This support is flexible and can be tailored to suit individual preferences — from occasional companionship to more regular visits or integrated live-in care.",
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
              {/*> */}
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
              {section.featuresButtomText && (
                <h2 className="text-gray-700 text-sm leading-relaxed md:text-[18px]">
                  {section.featuresButtomText}
                </h2>
              )}
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
          <p className="text-gray-700 leading-relaxed text-base md:text-lg ">
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
