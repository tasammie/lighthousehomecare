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
    question: "What is included in Personal Care?",
    answer:
      "Personal care includes assistance with washing, bathing, dressing, toileting, and maintaining personal hygiene — all provided with complete dignity and respect. Our carers are trained to help individuals maintain their independence while ensuring their comfort and wellbeing. We understand these are sensitive tasks, which is why we prioritise building trust and ensuring every client feels safe and respected during personal care assistance.",
  },
  {
    id: "item-2",
    question: "How long can a carer stay during the day?",
    answer:
      "We're completely flexible with daily assistance — whether you need a carer for just an hour or throughout the entire day. Some clients prefer shorter visits for specific tasks, while others benefit from longer support sessions. We'll work with you to create a schedule that fits your lifestyle and needs perfectly.",
  },
  {
    id: "item-3",
    question: "Can Daily Home Assistance help with medication?",
    answer:
      "Yes, our carers can provide medication reminders and support with medication management as part of our daily assistance service. They can help ensure medications are taken at the right times and in the correct doses, supporting your health and wellbeing routine. For more complex medical needs, we work closely with healthcare professionals to ensure safe and appropriate care.",
  },
  {
    id: "item-4",
    question: "What does Practical Home Help include?",
    answer:
      "Our practical home help covers light housekeeping tasks like cleaning, laundry, dish washing, and general tidying. We can also assist with shopping, meal preparation, and other household tasks that help maintain a comfortable living environment. The goal is to reduce stress and ensure your home remains a pleasant, safe space.",
  },
  {
    id: "item-5",
    question: "Do I have to commit to multiple days a week?",
    answer:
      "Not at all — our Daily Home Assistance is designed to be completely flexible. You might need support just once or twice a week, or you may prefer daily visits. We can adjust the frequency and timing of visits based on your changing needs, ensuring you receive exactly the right level of support when you need it.",
  },
  {
    id: "item-6",
    question: "Can the same carer visit each time?",
    answer:
      "Absolutely. We understand the importance of consistency and building trust, so we do our best to arrange for the same carer to visit regularly. This helps create a comfortable routine and allows for a stronger, more supportive relationship to develop over time.",
  },
  {
    id: "item-7",
    question: "Is Daily Home Assistance available at weekends?",
    answer:
      "Yes, our Daily Home Assistance is available seven days a week, including weekends and bank holidays. We understand that care needs don't follow a typical work schedule, so we're here to provide support whenever you need it most.",
  },
  {
    id: "item-8",
    question: "How quickly can Daily Home Assistance start?",
    answer:
      "We can often arrange Daily Home Assistance within 24-48 hours, depending on your specific requirements and carer availability in your area. For urgent needs, we'll do everything possible to arrange support even sooner. Our goal is to respond quickly while ensuring we match you with the right carer for your needs.",
  },
  {
    id: "item-9",
    question: "Will the carer help with outings and appointments?",
    answer:
      "Yes, our carers can provide companionship and support for medical appointments, shopping trips, social outings, or simply a walk in the park. This helps maintain social connections and independence while ensuring you have trusted support when out and about.",
  },
  {
    id: "item-10",
    question: "How much does Daily Home Assistance cost?",
    answer:
      "Costs vary depending on the type and frequency of support you need. Since every care plan is personalised, we recommend contacting us for a free, no-obligation assessment and quote that reflects your specific requirements.",
  },
  {
    id: "item-11",
    question: "Are there any setup or registration fees?",
    answer:
      "No — we don't charge any registration, assessment, or setup fees. All costs are transparent and agreed upfront, so you know exactly what to expect with no hidden charges or surprise fees.",
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
