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
    question: "What does Personal Centred Care & Hygiene include?",
    answer: `
      <p>Our service includes support with daily personal tasks such as bathing, dressing, toileting, grooming, oral hygiene, and mobility. It may also involve meal preparation, light domestic duties, medication reminders, and continence care — all tailored to individual preferences, routines, and wellbeing goals.</p>
    `,
  },
  {
    id: "item-2",
    question: "Who provides the care, and are they trained?",
    answer: `
      <p>All care is delivered by fully trained, DBS-checked carers with experience in personal and hygiene care. They are not only skilled but also carefully chosen for their empathy, professionalism, and ability to make individuals feel respected, safe, and at ease.</p>
    `,
  },
  {
    id: "item-3",
    question: "Can care be scheduled around my routine?",
    answer: `
      <p>Yes. We design flexible care plans around your personal schedule, preferences, and natural daily rhythms. Whether support is needed in the morning, evening, or throughout the day, we ensure visits align with what works best for you or your loved one.</p>
    `,
  },
  {
    id: "item-4",
    question: "Will I have the same carer each time?",
    answer: `
      <p>Continuity is a cornerstone of person-centred care. We assign a regular carer whenever possible to build familiarity and trust. If a cover is needed, we always try to ensure it's someone you already know and feel comfortable with.</p>
    `,
  },
  {
    id: "item-5",
    question:
      "Is this service suitable for people with medical conditions or mobility issues?",
    answer: `
      <p>Absolutely. We support individuals with a wide range of health conditions — including reduced mobility, dementia, and recovery following surgery. Our carers are trained to deliver care safely, sensitively, and in a way that upholds dignity and comfort at every step.</p>
    `,
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
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
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
