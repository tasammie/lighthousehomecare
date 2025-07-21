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
    question: "How Quickly Can Overnight Care Begin?",
    answer:
      "We know that care needs can arise unexpectedly. That's why we're prepared to respond fast — often arranging overnight care within 24 hours. Whether it's an emergency or a sudden change in circumstances, we have trusted carers ready to step in and provide support when you need it most.",
  },
  {
    id: "item-2",
    question: "What Kind of Training Do Your Carers Receive?",
    answer:
      "All our carers join us with prior care experience and strong practical skills. Once part of the Lighthouse team, they undergo comprehensive in-house training to align with our high standards of care. This includes specialised on-the-job training tailored to meet the unique needs of every client, supported by regular supervision. We're committed to continuous professional development, ensuring our carers stay current with best practices through ongoing updates and guidance from our experienced Care Managers.",
  },
  {
    id: "item-3",
    question: "How Do You Monitor the Quality of Care?",
    answer:
      "We take quality seriously and have robust systems in place to ensure every client receives the highest standard of care. Our experienced Care Managers monitor all of our services, especially for overnight and live-in services. We maintain regular contact with both carers and clients, and conduct scheduled and unannounced home visits to observe care firsthand. We also encourage open, confidential conversations with clients to address any concerns quickly and respectfully — always maintaining the utmost discretion and respect.",
  },
  {
    id: "item-4",
    question: "What Kind of Meals Will Carers Prepare?",
    answer:
      "We know that meals are a vital part of daily comfort and wellbeing. That's why all of our carers are trained to prepare fresh, nutritious, and varied meals — tailored to suit personal preferences and dietary requirements. Every carer receives specialist training in Diet and Nutrition, ensuring they understand how to support wellbeing through food. From traditional home-cooked favourites to more adventurous dishes, carers are happy to accommodate individual tastes and cultural preferences. In addition to main meals, carers also ensure regular refreshments and drinks are provided throughout the day to support proper hydration and overall health.",
  },
  {
    id: "item-5",
    question: "What Is Your Approach to Dementia Care?",
    answer:
      "At Lighthouse Homecare, we understand that dementia affects not only the individual, but also their loved ones. Our carers are trained to provide specialist dementia support with a focus on safety, dignity, and emotional reassurance. We prioritise creating a calm, familiar environment that helps reduce confusion and anxiety. Every interaction is delivered with compassion, patience, and sensitivity to the unique challenges presented at every stage. Our team also works closely with families to provide guidance, build trust, and offer peace of mind — ensuring care is person-centred and emotionally supportive at all times.",
  },
  {
    id: "item-6",
    question: "Where Do Your Carers Come From?",
    answer:
      "Our carers come from a wide range of backgrounds, primarily across Europe, and are carefully selected through a rigorous recruitment and vetting process. We understand that clear communication is essential to delivering exceptional care, so every one of our carers speaks English and can demonstrate strong interpersonal skills. Beyond communication, we ensure all carers are trained to the highest standards and engage in ongoing professional development to maintain excellence in care delivery. When matching carers with clients, we also consider personal compatibility, including personality, interests, and cultural preferences — so that each client receives care that is not only skilled, but genuinely comfortable and familiar.",
  },
  {
    id: "item-7",
    question: "How Long Will the Carer Stay?",
    answer:
      "We're flexible. Many clients prefer a consistent carer to build trust and routine — and we fully support that. As long as it works for both the client and carer, we aim to keep the same person in place. If a break is needed, we'll arrange a suitable temporary replacement.",
  },
  {
    id: "item-8",
    question: "How Does Live-In Care Compare to a Care Home?",
    answer:
      "Live-in care allows you to stay in your own home, surrounded by familiar routines, personal belongings, and loved ones — including pets. You keep control over your daily life while receiving the support you need. Unlike care homes, there's no need to adjust to strict routines, or limited visiting hours. With live-in care, everything is tailored to your preferences — from mealtimes to how your home is run.",
  },
  {
    id: "item-9",
    question: "Why Does Managed Live-In Care Matter?",
    answer:
      "With managed live-in care, everything is handled for you — from recruiting and vetting carers to overseeing quality and replacing carers when needed. Unlike agencies that only introduce carers, we fully manage the service. As a CQC-registered provider, we ensure all care meets strict safety and quality standards. You'll also have a dedicated Care Manager to support you, monitor care, and resolve any issues that reflects your specific requirements every step of the way.",
  },
  {
    id: "item-10",
    question: "How Much Does Live-In Care Cost?",
    answer:
      "Costs vary based on the level of support you need. Since every care plan is tailored, we recommend getting in touch for a free, no-obligation quote that reflects your specific requirements.",
  },
  {
    id: "item-11",
    question: "Are There Any Upfront Fees?",
    answer:
      "No — we don't charge any registration or assessment fees. All care costs are agreed upfront, so you'll know exactly what to expect with no hidden charges.",
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
