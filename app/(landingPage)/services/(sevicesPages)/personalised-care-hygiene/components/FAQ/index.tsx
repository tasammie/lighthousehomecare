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
    question: "What does Personalised Care & Hygiene include?",
    answer:
      "Our service includes support with daily personal tasks such as bathing, dressing, toileting, grooming, oral hygiene, and mobility. It may also involve meal preparation, light domestic duties, medication reminders, and continence care — all tailored to individual preferences and routines.",
  },
  {
    id: "item-2",
    question: "Who provides the care, and are they trained?",
    answer:
      "All care is delivered by fully trained, DBS-checked carers with experience in personal and hygiene care. They are not only skilled but also chosen for their empathy, professionalism, and ability to make clients feel respected and comfortabl",
  },
  {
    id: "item-3",
    question: "Can care be scheduled around my routine?",
    answer:
      "Yes. We create flexible care plans based on your needs and daily rhythms. Whether you need short visits in the morning or evening, or ongoing support throughout the day, we’ll tailor a plan that fits seamlessly into your lifestyle.",
  },
  {
    id: "item-4",
    question: "Will I have the same carer each time?",
    answer:
      "Continuity is important to us. We assign a regular carer whenever possible, ensuring familiarity and trust. If a cover is ever needed, we’ll always try to ensure it’s someone known to you.",
  },
  {
    id: "item-5",
    question:
      "Is this service suitable for people with medical conditions or mobility issues?",
    answer:
      "Absolutely. We support individuals with a wide range of health conditions, including limited mobility, dementia, and recovery from surgery. Our carers are trained to assist safely and sensitively, always prioritising comfort and dignity.",
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
                link="contact"
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
