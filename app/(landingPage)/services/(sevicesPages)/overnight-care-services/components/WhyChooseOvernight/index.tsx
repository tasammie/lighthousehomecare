"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Skilled and Compassionate Carers",
    description:
      "Our overnight team is made up of experienced, highly trained professionals who care deeply. With expertise in supporting older adults and complex needs, they bring empathy and confidence to every visit.",
  },
  {
    id: 2,
    title: "Tailored Night Plans",
    description:
      "We work closely with you to create a personalised night care plan. Whether occasional reassurance or full hands-on assistance is required, we adapt our support to match your loved one’s preferences and routine.",
  },
  {
    id: 3,
    title: "Health & Wellbeing Monitoring",
    description:
      "From administering medication to checking vital signs or offering gentle reassurance, our carers ensure your loved one’s health and safety are supported throughout the night.",
  },
  {
    id: 4,
    title: "Emotional Comfort & Companionship",
    description:
      "Nights can sometimes feel isolating. Our carers offer a warm, calming presence — not just physical support, but meaningful connection and reassurance.",
  },
  {
    id: 5,
    title: "Flexible Support Options",
    description:
      " We offer both occasional and ongoing overnight care. Whether you need cover every night or just a few evenings a week, we’ll tailor our support to suit your family’s needs and lifestyle",
  },
];

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-3">
        <div>{index + 1}.</div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1 text-base">
            {service.title}
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyChooseOvernight() {
  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-[44px] font-[700] text-[#001967] mb-3 leading-tight">
                Why Choose Lighthouse for Overnight Support?
              </h2>
              <p className="text-base text-[18px] font-[400] text-gray-700 mb-4">
                Support with Everyday Routines, Right at Home{" "}
              </p>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  At Lighthouse Homecare, we understand that true peace of mind
                  means knowing your loved one is cared for — even during the
                  quietest hours of the night. Our Overnight Support services
                  are designed to offer more than just supervision. We provide
                  thoughtful, attentive care tailored to each individual’s
                  nighttime needs.
                </p>
                <p>
                  Whether it’s settling into bed, providing emotional
                  reassurance, or responding to unexpected events, our
                  compassionate team is here to make sure every moment is met
                  with dignity, warmth, and professionalism.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative lg:pl-8"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <ImgComp
                src="/images/overnightcare-2.webp"
                alt="Caregiver providing overnight support to elderly person"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
        {/* What We Offer */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            What We Offer
          </h3>
          <div className="space-y-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
