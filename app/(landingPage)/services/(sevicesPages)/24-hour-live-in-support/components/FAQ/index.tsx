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
    question: "What Is 24-Hour Live-In Support?",
    answer:
      "24-hour live-in care offers one-to-one, continuous support for individuals who need regular assistance but prefer to remain in their own home. A dedicated carer lives alongside the client, providing help with personal care, mobility, medication, and companionship — day and night. It’s a compassionate, dignified alternative to residential care.",
  },
  {
    id: "item-2",
    question: "How Quickly Can Live-In Support Begin?",
    answer:
      "We understand that care needs can arise unexpectedly, and timely support is essential. That’s why we begin with an initial assessment to understand individual needs, preferences, and circumstances. Following this, we aim to arrange live-in support within 24 to 48 hours. Whether due to hospital discharge, a sudden illness, or a family emergency, our team responds quickly to ensure care begins when it’s needed most.",
  },
  {
    id: "item-3",
    question: "What Kind of Training Do Your Carers Receive?",
    answer:
      "Your loved one’s safety and comfort are our top priority. That’s why every carer completes mandatory training in safeguarding, first aid, health and safety, and infection control. We also provide essential training in personal care, medication safety, dementia awareness, and moving and handling, so our carers are fully prepared for day-to-day support. Where needed, carers receive specialised training for more complex needs, such as end-of-life care, advanced dementia, or specific medical conditions. All training is reinforced through regular mentoring and professional development with our Care Managers — giving you confidence that your loved one is in capable, caring hands.",
  },
  {
    id: "item-4",
    question: "How Do You Monitor the Quality of Care?",
    answer:
      "Your loved one’s wellbeing is always our top priority. That’s why we have a complete care monitoring system in place. Families and Care Managers can see daily updates, health notes, and progress in real time, so you always know how your loved one is doing. We also carry out regular reviews, welcome feedback, and make unannounced visits to ensure everything stays on track. Our Care Managers stay closely connected with both carers and families, and our 24/7 support line means we’re here whenever you need us. This way, you can feel confident knowing the care provided is safe, consistent, and transparent.",
  },
  {
    id: "item-5",
    question: "What Kind of Meals Will Carers Prepare?",
    answer:
      "Our carers are trained to cook nutritious, well-balanced meals based on your tastes and dietary needs. From traditional home-cooked favourites to culturally or medically aligned dishes, they ensure mealtimes are both enjoyable and nourishing. Regular hydration and light snacks are also included throughout the day.",
  },
  {
    id: "item-6",
    question: "What Is Your Approach to Dementia Care?",
    answer:
      "We specialise in dementia-inclusive care that is calm, structured, and reassuring. Our carers are trained to support those experiencing memory loss, confusion, or emotional changes — always promoting safety and familiarity. We work closely with families to create consistent, respectful routines.",
  },
  {
    id: "item-7",
    question: "Where Do Your Carers Come From?",
    answer:
      "Our carers are recruited from across the UK and Europe and are carefully vetted for empathy, English fluency, and interpersonal skills. We pair carers based on personality, experience, and cultural compatibility — making sure every relationship feels natural, secure, and well-matched.",
  },
  {
    id: "item-8",
    question: "How Long Will the Carer Stay?",
    answer:
      "We’re flexible. Many families prefer the continuity of one carer who builds trust and routine. Depending on your care plan, a carer may stay for several weeks or alternate with another. We always aim for consistency unless a break or rotation is needed.",
  },
  {
    id: "item-9",
    question: "How Does Live-In Support Compare to a Care Home?",
    answer:
      "Live-in care allows you to remain at home, in control of your day-to-day life. There are no institutional rules or schedules — just personalised routines that match your preferences. From meals to bedtime, everything is shaped around your lifestyle in the comfort of your own home.",
  },
  {
    id: "item-10",
    question: "Why Choose Managed Live-In Support?",
    answer:
      "With our fully managed service, we take care of everything — from recruitment to training, supervision, and 24/7 support. You’ll have a dedicated Care Manager and regular quality checks, ensuring a dependable, professional service without the burden of organising care yourself.",
  },
  {
    id: "item-11",
    question: "How Much Does It Cost?",
    answer:
      "Costs vary based on the level and type of care needed. We provide tailored quotes following a no-obligation consultation. Live-in care is often more cost-effective than residential care, and we’ll help you find the best fit for your budget and needs.",
  },
  {
    id: "item-12",
    question: "Are There Any Upfront Fees?",
    answer:
      "No. We don’t charge registration or assessment fees. All pricing is agreed in advance, so you’ll always know exactly what to expect with no hidden charges or surprises.",
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
