"use client";
import CustomButton from "@/components/CustomButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "What Is End-of-Life Care?",
    answer:
      "End-of-life care is support provided to individuals nearing the final stages of life. It focuses on comfort, dignity, and quality of life rather than cure. This includes: Managing symptoms like pain or breathlessness, Emotional and psychological support, Helping with advance care plans and preferences, Supporting loved ones, Ensuring dignity and comfort in the final days. Care may also involve practical guidance around financial or legal matters, ensuring individuals feel supported every step of the way.",
  },
  {
    id: "item-2",
    question: "Can End-of-Life Care Be Provided at Home?",
    answer:
      "Yes. End-of-life care can be delivered at home, in a care home, hospice, or hospital — depending on your needs and wishes. While many people prefer to pass away at home, this isn't always possible due to medical complexities or limited support. Lighthouse Care works to honour your preferences whenever it's safe and suitable to do so.",
  },
  {
    id: "item-3",
    question: "What's the difference between palliative and end-of-life care?",
    answer:
      "Palliative care supports individuals with serious illnesses at any stage, helping to ease pain and improve comfort. End-of-life care, on the other hand, focuses specifically on the final phase of life—typically the last year—providing compassionate support tailored to physical, emotional, and spiritual needs.",
  },
  {
    id: "item-4",
    question: "Can end-of-life care be provided at home?",
    answer:
      "Absolutely. Many individuals find the most peace and comfort when receiving care in the familiar surroundings of their own home. At Lighthouse Homecare, we provide compassionate, home-based end-of-life care as a meaningful alternative to hospitals or hospices—allowing you or your loved one to maintain dignity, choice, and a sense of control during life's final chapter.",
  },
  {
    id: "item-5",
    question: "Who delivers the care?",
    answer:
      "At Lighthouse Homecare, your care is provided by a dedicated team tailored to your needs. This may include skilled carers, palliative care nurses, healthcare assistants, and support staff—working together to ensure compassionate, dignified care at every step of your journey.",
  },
  {
    id: "item-6",
    question: "What illnesses qualify for palliative care?",
    answer:
      "Palliative care at Lighthouse Homecare supports individuals living with serious or long-term conditions such as cancer, advanced heart or lung disease, dementia, and neurological disorders. Our goal is to ease symptoms and enhance comfort—no matter the diagnosis.",
  },
  {
    id: "item-7",
    question: "Is palliative care covered by the NHS?",
    answer:
      "Yes, NHS services often provide core support for individuals needing palliative care. At Lighthouse Care, we build on that foundation with personalised, flexible care packages designed to meet each person's unique medical and emotional needs in the comfort of their own home.",
  },
];

export default function FAQ() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Header and CTA */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#001967] mb-6">
                FAQs
              </h2>
            </div>

            <div className="pt-8">
              <CustomButton
                text="Contact Us Today"
                className="bg-[#00269B] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              />
            </div>
          </motion.div>

          {/* Right side - FAQ Accordion */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={item.id}
                    className="border-b border-gray-400 px-6 py-2"
                  >
                    <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
