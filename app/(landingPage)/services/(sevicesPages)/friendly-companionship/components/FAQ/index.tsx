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
    question: "What Kind of Support Will You Receive?",
    answer:
      "At Lighthouse Homecare, we take the pressure off families by liaising with your local authority to arrange a needs assessment on your behalf. This process ensures your loved one receives a fully personalised care package tailored to their current situation—whether it includes physiotherapy, professional care assistance, or other support services. Every care plan is built around the unique needs, preferences, and abilities of your loved one—while also considering your own input and emotional well-being. Our goal is to help them regain mobility, independence, and confidence as they return to daily life. Support staff typically visit each day to assist with essential routines like washing, dressing, and meal preparation—gently guiding your loved one toward rebuilding strength and restoring their sense of normalcy. Alongside carers, health professionals and social workers may provide targeted exercises and recommend home adaptations or mobility aids to enhance safety and comfort at home. With Lighthouse, you're not just getting care—you're getting a caring team dedicated to a smooth and supported recovery journey.",
  },
  {
    id: "item-2",
    question: "Avoiding Unnecessary Hospital Trips",
    answer:
      "Sometimes, a hospital stay isn't the best—or even the safest—option. Healthcare professionals may determine that your loved one's needs can be managed effectively at home with the right short-term care. This approach, often referred to as crisis-response, helps prevent unnecessary admissions and supports recovery in a more comforting environment. At Lighthouse Homecare, we work alongside local healthcare teams to provide rapid, tailored care at home or, if needed, in a temporary care setting. The goal is simple: stabilise your loved one's condition, reduce stress, and promote recovery where they feel most at ease. Studies consistently show that people heal more quickly and regain independence faster when supported in the comfort of their own home. Our compassionate team ensures your loved one receives the right care, at the right time, in the right place—without the disruption of a hospital ward.",
  },
  {
    id: "item-3",
    question: "What Happens After Six Weeks?",
    answer:
      "At the end of the initial six-week support period, your loved one's care needs will be reassessed to determine what happens next. If continued support is needed, a new care plan will be arranged—this may involve transitioning to long-term services. Depending on personal circumstances, there may be a cost for ongoing care. However, Lighthouse Homecare can support you in requesting a full care needs assessment through your local authority. This will help determine eligibility for continued funding or council-supported care. If your loved one qualifies for long-term support, we can continue to provide consistent, compassionate care under a revised plan. Our goal is to ensure continuity, comfort, and peace of mind for you and your family—every step of the way.",
  },
  {
    id: "item-4",
    question: "Support for People with Complex Needs",
    answer:
      "If your loved one has more advanced or long-term care requirements after leaving the hospital, they may be eligible for NHS Continuing Healthcare—a fully funded package of care delivered in the comfort of their own home. At Lighthouse Homecare, we proudly work alongside both local authorities and the NHS, offering personalised care plans for individuals with complex needs. Our experienced team ensures seamless coordination between hospital discharge and at-home support, providing high-quality care that prioritises safety, dignity, and independence. Let us help you navigate the next steps with the right support in place.",
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
