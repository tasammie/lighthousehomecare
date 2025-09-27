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
    question: "Who is eligible to receive your support?",
    answer: `
      <p>We work with young people aged 13 and above, as well as adults with learning difficulties, autism spectrum conditions, ADHD, sensory differences, and complex behavioural or communication needs.</p>
    `,
  },
  {
    id: "item-2",
    question: "Can the support be tailored to our daily routine?",
    answer: `
      <p>Yes – every care plan is personalised. We work closely with you and your family to create a schedule that fits your lifestyle, promotes independence, and reduces stress.</p>
    `,
  },
  {
    id: "item-3",
    question: "Do you provide support outside the home?",
    answer: `
      <p>Absolutely. We can accompany individuals to community activities, social groups, medical appointments, or leisure outings to build confidence and encourage participation.</p>
    `,
  },
  {
    id: "item-4",
    question: "Are your staff trained in specialist care?",
    answer: `
      <p>Yes – our carers receive training in autism awareness, Positive Behaviour Support (PBS), safeguarding, and communication strategies to ensure safe, compassionate care.</p>
    `,
  },
  {
    id: "item-5",
    question: "How do we arrange support?",
    answer: `
      <p>Simply get in touch with our team for an initial conversation. We will assess your needs, discuss the best options, and create a plan that suits you and your loved one.</p>
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
                      <div
                        className="faq-answer"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
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
