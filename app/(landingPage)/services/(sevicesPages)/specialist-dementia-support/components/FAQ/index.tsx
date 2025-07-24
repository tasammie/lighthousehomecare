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
    question: "Familiar Faces, Reassuring Routines",
    answer:
      "At Lighthouse Homecare, consistency is at the heart of what we do. Unlike many providers who rotate 3–4 carers, we assign one dedicated carer to visit daily—only replaced on their day off by a familiar cover carer. This continuity is especially vital for those living with dementia. Adapting to new routines is challenging enough without the added stress of unfamiliar faces. A consistent carer who understands your loved one's habits and home environment makes all the difference in delivering truly personalised, reassuring care.",
  },
  {
    id: "item-2",
    question: "Planning Ahead with Confidence",
    answer:
      "It's important to begin planning early, so you and your loved one feel informed, prepared, and in control of the journey ahead. Many older adults wish to remain in the comfort of their own homes — and with the rise of personalised care options and assistive technologies, high-quality home care is now a real and reassuring alternative to residential care.",
  },
  {
    id: "item-3",
    question: "Understanding Power of Attorney",
    answer:
      "Appointing Power of Attorney is an important step in safeguarding your loved one's finances and wellbeing as their condition progresses. Memory loss or confusion around money can appear early, so ensuring someone trusted can manage accounts and make decisions is essential to protecting them from financial harm. There are two main types of Power of Attorney: Ordinary Power of Attorney - This covers financial decisions and is only valid while the person still has mental capacity. It's often used for short-term needs, such as during a hospital stay. Lasting Power of Attorney (LPA) - An LPA remains valid if a person loses mental capacity. It allows a nominated person to make decisions about finances or health and care. For those with a dementia diagnosis, setting up an LPA early provides reassurance and legal clarity for the future.",
  },
  {
    id: "item-4",
    question: "Creating a Safer Home Environment",
    answer:
      "Simple home adaptations can make a big difference in supporting your loved one's safety and independence. Installing grab rails in bathrooms, updating smoke detectors, and reducing slip and trip hazards all help create a secure living space. For individuals prone to wandering, families may consider GPS tracking devices and enhanced home security measures for added peace of mind.",
  },
  {
    id: "item-5",
    question: "Why Choose Lighthouse?",
    answer:
      "Whether your loved one needs full support or just a helping hand, we offer flexible, cost-effective hourly care tailored to their unique needs — even at short notice. When care is needed urgently, we can introduce a trained carer within 24 hours.",
  },
  {
    id: "item-6",
    question: "Invest in Peace of Mind",
    answer:
      "Peace of mind doesn't have to come at a high cost. Our hourly rates start from just £26, with visits beginning at a minimum of 30 minutes. We're also here to guide you through payment options and offer support in making care more manageable — so you have one less thing to worry about.",
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
