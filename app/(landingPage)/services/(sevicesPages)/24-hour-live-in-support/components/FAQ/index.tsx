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
      "24-hour live-in support offers continuous, one-to-one care for individuals who need consistent assistance but prefer to stay in their own home. A dedicated carer lives with the client, delivering support day and night—helping with personal care, mobility, medication, and companionship. It's a compassionate and dignified alternative to moving into a residential care home.",
  },
  {
    id: "item-2",
    question: "How Quickly Can Live-In Support Begin?",
    answer:
      "We understand care needs can arise suddenly. That's why we aim to arrange live-in support within 24 to 48 hours whenever possible. Whether due to a medical discharge, unexpected illness, or family emergency, our responsive team ensures support starts when it's needed most.",
  },
  {
    id: "item-3",
    question: "What Kind of Training Do Your Carers Receive?",
    answer:
      "All our carers come with relevant experience and undergo comprehensive in-house training to align with our standards. Training includes personal care, medication safety, dementia awareness, moving and handling, and more—supported by ongoing professional development, supervision, and mentoring from our Care Managers.",
  },
  {
    id: "item-4",
    question: "How Do You Monitor the Quality of Care?",
    answer:
      "We maintain high standards through regular supervision, feedback loops, and unannounced visits. Our Care Managers conduct frequent reviews and keep in close touch with both carers and families. We also offer a 24/7 support line to handle any queries or issues swiftly, ensuring consistency, safety, and transparency in every home.",
  },
  {
    id: "item-5",
    question: "What Kind of Meals Will Carers Prepare?",
    answer:
      "Our carers are trained to prepare nutritious, balanced meals tailored to your preferences and dietary needs. From simple home-cooked dishes to meals aligned with medical or cultural requirements, our carers make mealtimes enjoyable and nourishing. They also ensure regular hydration and provide light snacks throughout the day.",
  },
  {
    id: "item-6",
    question: "What Is Your Approach to Dementia Care?",
    answer:
      "We specialise in dementia-inclusive care, delivering patient, calm, and structured support. Our carers are trained in managing memory loss, confusion, and mood changes—promoting emotional reassurance and familiarity. We also work closely with families to create a consistent and respectful environment for your loved one.",
  },
  {
    id: "item-7",
    question: "Where Do Your Carers Come From?",
    answer:
      "Our carers are experienced professionals from across the UK and Europe, carefully recruited and vetted to ensure fluency in English, empathy, and strong interpersonal skills. We match carers based on personality, experience, and cultural fit—so the relationship feels natural, safe, and comfortable for everyone involved.",
  },
  {
    id: "item-8",
    question: "How Long Will the Carer Stay?",
    answer:
      "We're flexible. Most families prefer the consistency of one live-in carer who builds rapport and routine. Depending on the care plan, a carer may stay for weeks or rotate with a second carer. We'll always aim for continuity unless a change is needed for rest or scheduling reasons.",
  },
  {
    id: "item-9",
    question: "How Does Live-In Support Compare to a Care Home?",
    answer:
      "Live-in care enables you to stay at home with full control of your day-to-day life. There are no rigid schedules, shared spaces, or institutional rules. Instead, everything—from mealtimes to bedtime routines—is built around your preferences, allowing for a more comfortable, familiar lifestyle.",
  },
  {
    id: "item-10",
    question: "Why Choose Managed Live-In Support?",
    answer:
      "With our fully managed service, we handle everything—from recruiting carers to ongoing oversight and training. You'll have a dedicated Care Manager, quality checks, and 24/7 support. This ensures a safe, professional, and reliable service with none of the stress of arranging care yourself.",
  },
  {
    id: "item-11",
    question: "How Much Does It Cost?",
    answer:
      "Costs depend on the level and complexity of support you need. We offer bespoke quotes following a care consultation, with no obligation. Since live-in care can sometimes be more affordable than residential options, we're happy to explore what fits your needs and budget.",
  },
  {
    id: "item-12",
    question: "Are There Any Upfront Fees?",
    answer:
      "No. We do not charge any assessment or registration fees. All costs are agreed in advance, so you'll always know exactly what to expect—no surprises, no hidden charges.",
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
