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
    question:
      "What is Overnight Care Services and how can it help individuals with dementia or Alzheimer’s?",
    answer: `
      <p>At Lighthouse Homecare, our Overnight Care Services provide dedicated, compassionate support throughout the night — specially tailored for individuals living with dementia or Alzheimer’s.</p>
      <p>Our trained carers remain present and attentive to manage restlessness, confusion, and night-time wandering — all common during dementia-related sleep disruption. Their presence helps reduce risk, restore calm, and reinforce a structured bedtime routine.</p>
      <p>For families, this offers valuable peace of mind — knowing your loved one is safe, never alone, and fully supported in the comfort of home.</p>
    `,
  },
  {
    id: "item-2",
    question:
      "What services are included in Overnight Care Services for seniors?",
    answer: `
      <p>Our overnight care is thoughtfully designed to support older adults through the night with empathy and attentiveness. Services include:</p>
      <ul class="list-disc ml-6">
        <li>Timed medication reminders</li>
        <li>Toileting support and safe mobility assistance</li>
        <li>Gentle night-time monitoring for wellbeing and safety</li>
        <li>Emotional reassurance and companionship to ease anxiety or confusion</li>
      </ul>
      <p>Whether your loved one lives with Alzheimer’s, dementia, or simply needs support during the night, our carers deliver care that’s consistent, respectful, and tailored to their needs.</p>
    `,
  },
  {
    id: "item-3",
    question: "Who can benefit from Overnight Care Services for seniors?",
    answer: `
      <p>These services are ideal for older adults who need supervision or reassurance during night-time hours — including those who experience:</p>
      <ul class="list-disc ml-6">
        <li>Difficulty sleeping or night-time disorientation</li>
        <li>Memory loss or confusion caused by Alzheimer’s or dementia</li>
        <li>Restlessness, wandering, or increased vulnerability at night</li>
        <li>Anxiety or feelings of isolation after dark</li>
      </ul>
      <p>Our carers are specially trained to offer gentle, attentive care — creating a peaceful night-time environment for clients and comfort for families.</p>
    `,
  },
  {
    id: "item-4",
    question:
      "How can I determine if Overnight Care Services are right for my loved one?",
    answer: `
      <p>If your loved one shows signs of confusion, increased night-time agitation, or safety concerns — especially linked to dementia — overnight support could make a significant difference.</p>
      <p>We recommend speaking with your GP or healthcare professional for a needs assessment. Our team at Lighthouse Homecare is also here to guide you through options and help you make an informed choice based on your loved one’s unique situation.</p>
    `,
  },
  {
    id: "item-5",
    question:
      "How can I arrange Overnight Care Services for my loved one with dementia?",
    answer: `
      <p>Getting started is simple. Contact our team by phone or through our website to tell us about your loved one’s situation.</p>
      <p>We’ll listen carefully to understand their needs and design a personalised night care plan that ensures safety, comfort, and peace of mind. Our carers are experienced in dementia care and offer gentle, compassionate support where it matters most — at home.</p>
    `,
  },
  {
    id: "item-6",
    question: "Hear from One of Our Families",
    answer: `
      <p>“I was deeply concerned when a neighbour told me my mum had gone out at 11 p.m., thinking she needed to get ‘home’. Over the next few weeks, it happened again. A social worker explained it might be early dementia.</p>
      <p>We didn’t feel a care home was right — Mum was still fairly independent. Then we found Overnight Care Services from Lighthouse Homecare. We arranged for a carer to be there each night.</p>
      <p>The relief was immense. I could finally sleep, knowing someone was watching over her with care, kindness, and professionalism.”</p>
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
