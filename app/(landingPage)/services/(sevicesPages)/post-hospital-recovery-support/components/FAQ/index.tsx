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
    answer: `
      <p>At Lighthouse Homecare, we ease the burden on families by coordinating with your local authority to arrange a care needs assessment. This ensures your loved one receives a personalised support plan — tailored to their condition, preferences, and goals. Services may include physiotherapy, personal care, mobility support, or other professional assistance.</p>
      <p>Each plan is designed with your loved one’s well-being, independence, and daily comfort in mind — and with your family’s input every step of the way.</p>
      <p>Our carers assist with essential tasks such as:</p>
      <ul class="list-disc ml-6">
        <li>Washing, dressing, and personal care</li>
        <li>Meal preparation</li>
        <li>Encouraging safe movement and routine restoration</li>
      </ul>
      <p>We work closely with health professionals to provide additional therapies and may recommend adaptations (like mobility aids) to make the home safer and more accessible.</p>
      <p>With Lighthouse, your loved one gets more than care — they get a supportive team committed to recovery and dignity.</p>
    `,
  },
  {
    id: "item-2",
    question: "Avoiding Unnecessary Hospital Trips",
    answer: `
      <p>Not every situation requires a hospital visit. Often, short-term home care is the safest and most comfortable option, particularly when recovery can be managed effectively at home.</p>
      <p>This prevents avoidable readmissions and reduces stress, allowing healing in the comfort of familiar surroundings.</p>
      <p>We partner with local NHS teams and social workers to:</p>
      <ul class="list-disc ml-6">
        <li>Deliver prompt in-home care</li>
        <li>Stabilise your loved one’s condition</li>
        <li>Help them feel supported where they feel safest — at home</li>
      </ul>
      <p>People tend to recover faster at home, and our team ensures they receive the right care, in the right place, at the right time.</p>
    `,
  },
  {
    id: "item-3",
    question: "What Happens After Six Weeks?",
    answer: `
      <p>At the end of the initial six-week recovery period:</p>
      <ul class="list-disc ml-6">
        <li>A reassessment will determine if further care is needed.</li>
        <li>If so, a new care plan will be arranged — possibly including long-term home care services.</li>
        <li>Lighthouse can support you in arranging a full reassessment through your local authority, which helps determine if your loved one qualifies for ongoing funding or council-supported services.</li>
      </ul>
      <p>Should long-term care be necessary, we’ll ensure a smooth transition with continuity and compassion at its core — keeping your loved one’s comfort and peace of mind our top priority.</p>
    `,
  },
  {
    id: "item-4",
    question: "Support for People with Complex Needs",
    answer: `
      <p>If your loved one has more advanced care needs, they may qualify for NHS Continuing Healthcare — a fully funded care package delivered at home.</p>
      <p>Lighthouse Homecare works with both the NHS and local councils to create comprehensive, high-quality care plans for individuals with complex conditions. From mobility and medication to personalised routines and emotional reassurance, our team ensures a seamless and dignified recovery process.</p>
      <p>Let us help you navigate the next steps — with expert guidance and support every step of the way.</p>
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
