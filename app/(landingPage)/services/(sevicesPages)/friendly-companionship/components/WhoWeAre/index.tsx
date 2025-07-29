"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

interface CompanionItem {
  id: number;
  description: string;
}

const companionItems: CompanionItem[] = [
  {
    id: 1,
    description:
      "At Lighthouse Homecare, our Friendly Companion care goes beyond medical support — it’s all about emotional warmth, meaningful connection, and social wellbeing. We match each client with compassionate companions who offer kind conversation, light activities, and a comforting presence.",
  },
  {
    id: 2,
    description:
      "Every visit is a chance to reconnect. Whether it’s a chat over tea, looking through old photo albums, or simply sharing stories, our service helps clients build confidence, reduce loneliness, and feel part of the world again.",
  },
  {
    id: 3,
    description:
      "This support is flexible and can be tailored to suit individual preferences — from occasional companionship to more regular visits or integrated live-in care.",
  },
];

const idealFor = [
  "Older adults living alone or feeling isolated",
  "Those coping with grief or the loss of a partner",
  "Individuals recovering after a hospital discharge",
  "People managing anxiety, depression, or cognitive decline",
  "Carers needing a break, knowing their loved one is in kind, capable hands",
  "Couples wishing to remain together at home while receiving compassionate support",
  "Anyone who could benefit from a regular friendly voice and a caring face",
];

interface CompanionCardProps {
  item: CompanionItem;
  index: number;
}

export const CompanionCard: React.FC<CompanionCardProps> = ({
  item,
  index,
}) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-3">
        <div className="font-bold text-gray-900">{item.id}.</div>
        <div>
          <p className="text-gray-700 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhoWeAre() {
  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="">
          {/* Left Column - Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {/* What Is Friendly Companion Care? */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6 leading-tight">
                What Is Friendly Companion Care?
              </h2>
              <div className="space-y-4">
                {companionItems.map((item, index) => (
                  <CompanionCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl md:text-[44px] font-bold text-[#001967] mb-4">
                  Who Is Friendly Companion Care For?
                </h3>
                <p className="text-sm text-gray-700 mb-4 md:text-[18px]">
                  Lighthouse’s Friendly Companion service is ideal for:{" "}
                </p>
                <div className="space-y-2">
                  {idealFor.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-800 rounded-full mt-2"></div>
                      <p className="text-gray-700 text-sm leading-relaxed md:text-[20px]">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mt-4 text-[20px]">
                  We also support younger adults with long-term health needs or
                  those facing major life changes.
                </p>
              </div>

              {/* Right Column - Image */}
              <motion.div
                className="relative lg:pl-8"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <ImgComp
                    src="/images/friendly-companion.webp"
                    alt="Friendly companion spending time with elderly person"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
            {/* Who Is Friendly Companion Care For? */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
