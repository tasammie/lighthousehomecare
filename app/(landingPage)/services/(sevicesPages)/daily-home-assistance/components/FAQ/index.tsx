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
    answer: `
      <p>Personal care involves sensitive, hands-on assistance with day-to-day tasks that may be difficult to manage alone. Our respectful carers support clients with:</p>
      <ul class="list-disc ml-6">
        <li>Getting in and out of bed</li>
        <li>Washing, bathing, or showering</li>
        <li>Dressing and grooming</li>
        <li>Personal hygiene and appearance</li>
        <li>Toileting and continence care</li>
        <li>Bedtime routines and settling for the night</li>
      </ul>
      <p>We tailor our support to your preferences and routines, whether full assistance is needed or just the reassuring presence of someone nearby.</p>
      <p><strong>Please note:</strong> We do not offer nail or toenail cutting due to insurance limits. We’re happy to refer you to trusted providers who offer this service safely using personal nail care kits.</p>
    `,
  },
  {
    id: "item-2",
    question: "What does Practical Home Help include?",
    answer: `
      <p>A little help around the house can make a big difference. Our carers assist with:</p>
      <ul class="list-disc ml-6">
        <li>Light housekeeping (e.g. cleaning, laundry, tidying)</li>
        <li>Meal preparation and serving</li>
        <li>Grocery shopping (with or on behalf of the client)</li>
        <li>Running errands and household chores</li>
      </ul>
      <p>We also offer friendly companionship, helping clients stay connected — from social outings and local events to special occasions like weddings or birthdays. We encourage independence wherever possible, building confidence through personalised, respectful support tailored to each individual’s lifestyle, culture, and routine.</p>
    `,
  },
  {
    id: "item-3",
    question: "Do You Help with Medication?",
    answer: `
      <p>Yes — many clients need help managing medication safely. Our trained carers can assist with:</p>
      <ul class="list-disc ml-6">
        <li>Prompting and reminders to take medicine</li>
        <li>Help with packaging or opening bottles</li>
        <li>Full administration of prescribed medication (where appropriate)</li>
      </ul>
      <p>Every medication visit is recorded, ensuring safe, accurate care. Carers can only administer medication as prescribed — we do not follow informal instructions unless authorised by a health professional. If a client manages their own medicine, we won’t interfere unless requested.</p>
    `,
  },
  {
    id: "item-4",
    question: "Is There Anything Else I Should Know?",
    answer: `
      <p>Small home changes can boost independence. You may benefit from:</p>
      <ul class="list-disc ml-6">
        <li>Grab rails or stair lifts</li>
        <li>Kitchen tools to improve food safety</li>
        <li>Bedroom or bathroom modifications</li>
        <li>Adjusting furniture for easier access</li>
      </ul>
      <p>An Occupational Therapist (OT) can assess your home and suggest adjustments. We can help coordinate this through your GP or local authority — or refer directly with your consent.</p>
      <p>At Lighthouse Homecare, all carers are trained in safe Moving and Positioning techniques to ensure comfort and safety during transfers like bed-to-chair.</p>
    `,
  },
  {
    id: "item-5",
    question: "What Is Assistive Technology and How Can It Help?",
    answer: `
      <p>Devices like personal alarms or telecare systems provide 24/7 peace of mind — especially helpful between visits. These can alert carers, loved ones, or emergency services if a client:</p>
      <ul class="list-disc ml-6">
        <li>Falls or feels unwell</li>
        <li>Needs urgent help</li>
        <li>Requires non-urgent attention when services are unavailable</li>
      </ul>
      <p>Devices like wristbands or pendants are simple, reliable, and available on a subscription basis. We’re happy to help you explore the right option.</p>
    `,
  },
  {
    id: "item-6",
    question: "What Are the Pros and Cons of Home Care?",
    answer: `
      <p><span class="inline-block mr-2">✅</span><strong>Advantages:</strong></p>
      <ul class="list-disc ml-6">
        <li>Familiarity: Stay in your own home, near cherished routines and surroundings</li>
        <li>Peace of Mind: Families know care is always in place — even if just occasional reassurance</li>
        <li>Independence: Support fits your lifestyle and schedule</li>
        <li>Flexibility: Choose hourly visits or full-time live-in care, short- or long-term</li>
        <li>Social Connection: Stay close to friends, neighbours, and your local community</li>
        <li>Quality-Assured Carers: With Lighthouse Homecare, you’re supported by trained, vetted professionals</li>
        <li>Cost-Effective: Home care can be more affordable than residential alternatives, depending on need</li>
      </ul>
      <p class="mt-4"><span class="inline-block mr-2">⚠️</span><strong>Things to Consider:</strong></p>
      <ul class="list-disc ml-6">
        <li>Not Always 24/7<br/>
          <span class="text-sm">Unless using live-in care, support is limited to scheduled visits. For round-the-clock care, live-in care or telecare devices may help.</span>
        </li>
        <li>Staff Variation<br/>
          <span class="text-sm">Although we prioritise consistency, occasional changes may occur due to illness, leave, or scheduling needs. We minimise disruptions and communicate clearly.</span>
        </li>
        <li>Timing Delays<br/>
          <span class="text-sm">Rare delays may happen due to emergencies or earlier appointments. We always keep you informed and maintain strong lines of communication.</span>
        </li>
      </ul>
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
